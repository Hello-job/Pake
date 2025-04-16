function html_decode(str) {
  if (str.length > 17) {
    str = str.substring(0, 17) + '...';
  }
  var arrEntities = { lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"' };
  return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
    return arrEntities[t];
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // 默认设置（所有开关关闭，主题为浅色）
  const defaultSettings = {
    messageNotification: false,
    groupNotification: false,
    task: false,
    calendar: false,
    system: false,
    knowledge: false,
    hr: false,
    worksheet: false,
    workflow: false,
    // approval: false,
    // fill: false,
    // copy: false,
    // notice: false,
  };

  // 从 localStorage 加载设置
  let currentSettings = JSON.parse(localStorage.getItem('appSettings')) || defaultSettings;

  // 创建自定义 UI 元素
  const settingsModal = document.createElement('div');
  settingsModal.id = 'customSettingsModal';
  settingsModal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      z-index: 9999;
      display: none;
  `;

  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
      background: white;
      margin: 15% auto;
      padding: 20px;
      width: 80%;
      max-width: 500px;
      border-radius: 5px;
      position: relative;
  `;

  modalContent.innerHTML = `
  <span id="closeSettings" style="float: right; cursor: pointer; font-size: 24px;">×</span>
  <h2>消息通知设置</h2>
  <form id="settingsForm">
      <div class="switch-container">
          <label for="messageNotification">单聊消息：</label>
          <label class="settings-switch">
              <input type="checkbox" id="messageNotification" name="messageNotification">
              <span class="settings-slider"></span>
          </label>
      </div>

      <div class="switch-container">
          <label for="groupNotification">群聊消息：</label>
          <label class="settings-switch">
              <input type="checkbox" id="groupNotification" name="groupNotification">
              <span class="settings-slider"></span>
          </label>
      </div>

      <div class="switch-container-group">
          <label for="systemNotification">系统消息：</label>
          <div class="ml10">
                    <div class="switch-container">
          <label for="task">任务：</label>
          <label class="settings-switch">
              <input type="checkbox" id="task" name="task">
              <span class="settings-slider"></span>
          </label>
      </div>
            <div class="switch-container">
          <label for="calendar">日程：</label>
          <label class="settings-switch">
              <input type="checkbox" id="calendar" name="calendar">
              <span class="settings-slider"></span>
          </label>
      </div>
            <div class="switch-container">
          <label for="system">系统：</label>
          <label class="settings-switch">
              <input type="checkbox" id="system" name="system">
              <span class="settings-slider"></span>
          </label>
      </div>
      <div class="switch-container">
          <label for="knowledge">知识：</label>
          <label class="settings-switch">
              <input type="checkbox" id="knowledge" name="knowledge">
              <span class="settings-slider"></span>
          </label>
      </div>
            <div class="switch-container">
          <label for="hr">人事 （人员变动等）：</label>
          <label class="settings-switch">
              <input type="checkbox" id="hr" name="hr">
              <span class="settings-slider"></span>
          </label>
      </div>
            <div class="switch-container">
          <label for="worksheet">工作表 （@成员、工作表删除等）：</label>
          <label class="settings-switch">
              <input type="checkbox" id="worksheet" name="worksheet">
              <span class="settings-slider"></span>
          </label>
      </div>
            <div class="switch-container">
          <label for="workflow">工作流 (审批、填写、抄送、站内通知等)：</label>
          <label class="settings-switch">
              <input type="checkbox" id="workflow" name="workflow">
              <span class="settings-slider"></span>
          </label>
      </div>


          </div>
      </div>
      <div class="desc">
          <label for="messageNotification">实施请联系明道云顾问 罗军, 手机/微信：18917633966</label>
      </div>
      <div class="submit-container">
        <button id='submit-btn' type="submit">保存</button>
      </div>
  </form>
`;

  settingsModal.appendChild(modalContent);
  document.body.appendChild(settingsModal);

  function openSetting() {
    settingsModal.style.display = 'block';

    document.getElementById('messageNotification').checked = currentSettings.messageNotification;
    document.getElementById('groupNotification').checked = currentSettings.groupNotification;
    document.getElementById('task').checked = currentSettings.task;
    document.getElementById('calendar').checked = currentSettings.calendar;
    document.getElementById('system').checked = currentSettings.system;
    document.getElementById('knowledge').checked = currentSettings.knowledge;
    document.getElementById('hr').checked = currentSettings.hr;
    document.getElementById('worksheet').checked = currentSettings.worksheet;
    document.getElementById('workflow').checked = currentSettings.workflow;
    // document.getElementById('approval').checked = currentSettings.approval;
    // document.getElementById('fill').checked = currentSettings.fill;
    // document.getElementById('copy').checked = currentSettings.copy;
    // document.getElementById('notice').checked = currentSettings.notice;
  }

  const { listen } = window.__TAURI__.event;
  // 监听通知设置事件
  listen('notification-settings-event', event => {
    openSetting();
  });

  // 监听回到首页事件
  listen('home-event', event => {
    window.location.href = 'https://www.mingdao.com/dashboard';
  });

  document.getElementById('closeSettings').addEventListener('click', () => {
    settingsModal.style.display = 'none';
  });

  document.getElementById('settingsForm').addEventListener('submit', e => {
    e.preventDefault();

    // 收集新设置
    const newSettings = {
      messageNotification: document.getElementById('messageNotification').checked,
      groupNotification: document.getElementById('groupNotification').checked,
      task: document.getElementById('task').checked,
      calendar: document.getElementById('calendar').checked,
      system: document.getElementById('system').checked,
      knowledge: document.getElementById('knowledge').checked,
      hr: document.getElementById('hr').checked,
      worksheet: document.getElementById('worksheet').checked,
      workflow: document.getElementById('workflow').checked,
      // approval: document.getElementById('approval').checked,
      // fill: document.getElementById('fill').checked,
      // copy: document.getElementById('copy').checked,
      // notice: document.getElementById('notice').checked,
    };

    // 逻辑处理：检查是否与当前设置有变化
    let hasChanges = false;
    for (let key in defaultSettings) {
      if (newSettings[key] !== currentSettings[key]) {
        hasChanges = true;
        break;
      }
    }

    if (!hasChanges) {
      alert('没有更改设置！');
      settingsModal.style.display = 'none';
      return;
    }

    // 保存到 localStorage
    localStorage.setItem('appSettings', JSON.stringify(newSettings));

    // 更新当前设置
    currentSettings = newSettings;

    console.log('设置已保存：', newSettings);
    alert('设置已成功保存！');
    settingsModal.style.display = 'none';
  });

  // 延迟加载 socket 监听器
  setTimeout(() => {
    if (typeof socket == 'undefined') {
      var socket = null;

      if (typeof window.im != 'undefined') {
        socket = window.im;
      } else if (typeof window.IM != 'undefined') {
        socket = window.IM.socket;
      }
      //开了提醒才有
      console.log('>>>>>>加载了吗', window.IM.socket);
      // 定义调用原生通知的函数
      function sendNativeNotification(data) {
        try {
          const { invoke } = window.__TAURI__.core;
          invoke('send_notification', {
            params: data,
          });
        } catch (e) {
          console.error('原生通知调用失败：', e);
        }
      }

      if (socket) {
        console.log('载入');
        socket.on('new notify', function (msg) {
          var title = '动态';
          var inboxType = 'post';
          if (msg.dtype == 3) {
            inboxType = 'task';
            title = '任务';
          } else if (msg.dtype == 2) {
            inboxType = 'calendar';
            title = '日程';
          } else if (msg.dtype == 1) {
            inboxType = 'system';
            title = '系统';
          } else if (msg.dtype == 4) {
            inboxType = 'knowledge';
            title = '知识';
          } else if (msg.dtype == 5) {
            inboxType = 'hr';
            title = '人事';
          } else if (msg.dtype == 6) {
            inboxType = 'worksheet';
            title = '工作表';
          } else if (msg.dtype == 7) {
            inboxType = 'workflow';
            title = '工作流';
            // var body = msg.msg;
            // if (body.indexOf('【审批】')) {
            //   inboxType = 'approval';
            //   title = '审批';
            // } else if (body.indexOf('【填写】')) {
            //   inboxType = 'fill';
            //   title = '填写';
            // } else if (body.indexOf('【抄送】')) {
            //   inboxType = 'copy';
            //   title = '抄送';
            // } else if (body.indexOf('【通知】')) {
            //   inboxType = 'notice';
            //   title = '通知';
            // }
          }

          // 未开启不发送通知
          if (!currentSettings[inboxType]) return;

          msg.url = window.location.origin + '/chat?type=' + inboxType + '&id=' + inboxType;
          console.log('>>>>>>系统消息提醒', {
            accountId: md.global.Account.accountId,
            title: title,
            body: html_decode(msg.msg),
            msg: msg,
          });

          if (msg.from != md.global.Account.accountId) {
            sendNativeNotification({
              title: title,
              body: html_decode(msg.msg),
              icon: 'https://www.mingdao.com/images/chat_' + inboxType + '.png',
            });
          }
        });
        socket.on('new message', function (msg) {
          // 未开启不发送通知
          if (!currentSettings.messageNotification) return;
          console.log(msg);
          if (msg.from != md.global.Account.accountId) {
            msg.url = window.location.origin + '/chat?type=user&id=' + msg.from;
            var title = msg.uname;
            var content;
            if (msg.type == 1) {
              content = msg.msg.con;
            } else if (msg.type == 2) {
              content = '发来了一张图片';
            } else {
              content = '发来了一条消息';
            }

            sendNativeNotification({
              title: html_decode(title),
              body: html_decode(content),
              icon: msg.logo,
            });
          }
        });
        socket.on('new group message', function (msg) {
          // 未开启不发送通知
          if (!currentSettings.groupNotification) return;
          if (msg.from != md.global.Account.accountId && msg.isPush === true && msg.sysType != 1) {
            msg.url = window.location.origin + '/chat?&type=group&id=' + msg.to;
            var content;
            var title = msg.groupname;
            if (msg.type == 1) {
              content = msg.uname + ':' + msg.msg.con;
            } else if (msg.type == 2) {
              content = msg.uname + '发来了一张图片';
            } else {
              content = msg.uname + '发来了一条消息';
            }

            sendNativeNotification({
              title: html_decode(title),
              body: html_decode(content),
              icon: msg.avatar,
            });
          }
        });
      }
    }
  }, 1000);
});
