use std::str::FromStr;
use std::sync::{Arc, Mutex};
use std::time::{Duration, Instant};
use tauri::{
    menu::{MenuBuilder, MenuItemBuilder, SubmenuBuilder},
    tray::TrayIconBuilder,
    AppHandle, Manager, Result,
};
use tauri_plugin_global_shortcut::{GlobalShortcutExt, Shortcut};
use tauri_plugin_window_state::{AppHandleExt, StateFlags};

pub fn set_system_tray(app: &AppHandle, show_system_tray: bool) -> tauri::Result<()> {
    if !show_system_tray {
        app.remove_tray_by_id("pake-tray");
        return Ok(());
    }

    let hide_app = MenuItemBuilder::with_id("hide_app", "隐藏").build(app)?;
    let show_app = MenuItemBuilder::with_id("show_app", "显示").build(app)?;
    let quit = MenuItemBuilder::with_id("quit", "退出").build(app)?;

    let menu = MenuBuilder::new(app)
        .items(&[&hide_app, &show_app, &quit])
        .build()?;

    app.app_handle().remove_tray_by_id("pake-tray");

    let tray = TrayIconBuilder::new()
        .menu(&menu)
        .on_menu_event(move |app, event| match event.id().as_ref() {
            "hide_app" => {
                if let Some(window) = app.get_webview_window("pake") {
                    window.minimize().unwrap();
                }
            }
            "show_app" => {
                if let Some(window) = app.get_webview_window("pake") {
                    window.show().unwrap();
                }
            }

            "quit" => {
                app.save_window_state(StateFlags::all()).unwrap();
                std::process::exit(0);
            }
            _ => (),
        })
        .icon(app.default_window_icon().unwrap().clone())
        .build(app)?;

    tray.set_icon_as_template(false)?;
    Ok(())
}

pub fn set_global_shortcut(app: &AppHandle, shortcut: String) -> tauri::Result<()> {
    if shortcut.is_empty() {
        return Ok(());
    }

    let app_handle = app.clone();
    let shortcut_hotkey = Shortcut::from_str(&shortcut).unwrap();
    let last_triggered = Arc::new(Mutex::new(Instant::now()));

    app_handle
        .plugin(
            tauri_plugin_global_shortcut::Builder::new()
                .with_handler({
                    let last_triggered = Arc::clone(&last_triggered);
                    move |app, event, _shortcut| {
                        let mut last_triggered = last_triggered.lock().unwrap();
                        if Instant::now().duration_since(*last_triggered)
                            < Duration::from_millis(300)
                        {
                            return;
                        }
                        *last_triggered = Instant::now();

                        if shortcut_hotkey.eq(event) {
                            if let Some(window) = app.get_webview_window("pake") {
                                let is_visible = window.is_visible().unwrap();
                                if is_visible {
                                    window.hide().unwrap();
                                } else {
                                    window.show().unwrap();
                                    window.set_focus().unwrap();
                                }
                            }
                        }
                    }
                })
                .build(),
        )
        .expect("Failed to set global shortcut");

    app.global_shortcut().register(shortcut_hotkey).unwrap();

    Ok(())
}


#[cfg(target_os = "macos")]
pub fn set_mac_menu(app: &AppHandle) -> Result<()> {
    // macOS 特有的菜单项
    let setting_menu_item = MenuItemBuilder::new("通知设置")
        .id("notification_settings")
        .accelerator("CmdOrCtrl+S")
        .build(app)?;
    let home_menu_item = MenuItemBuilder::new("回到首页")
        .id("home")
        .accelerator("CmdOrCtrl+H")
        .build(app)?;

    let file_submenu = SubmenuBuilder::new(app, "File")
        .item(&setting_menu_item)
        .item(&home_menu_item)
        .build()?;

    let menu = MenuBuilder::new(app)
        .items(&[&file_submenu])
        .build()?;

    app.set_menu(menu)?;

    Ok(())
}

#[cfg(not(target_os = "macos"))]
pub fn set_mac_menu(app: &AppHandle) -> Result<()> {
    // 其他平台的菜单项
    let setting_menu_item = MenuItemBuilder::new("设置")
        .id("settings")
        .accelerator("Ctrl+S")
        .build(app)?;
    let home_menu_item = MenuItemBuilder::new("首页")
        .id("home")
        .accelerator("Ctrl+H")
        .build(app)?;

    let file_submenu = SubmenuBuilder::new(app, "File")
        .item(&setting_menu_item)
        .item(&home_menu_item)
        .build()?;

    let menu = MenuBuilder::new(app)
        .items(&[&file_submenu])
        .build()?;

    app.set_menu(menu)?;

    Ok(())
}
