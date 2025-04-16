function html_decode(str) {
  if (str['\u006C\u0065\u006E\u0067\u0074\u0068'] > (648658 ^ 648643)) {
    str = str['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](637069 ^ 637069, 719244 ^ 719261) + '\u002E\u002E\u002E';
  }
  var _0x44edff;
  var _0x88bd = {
    '\u006C\u0074': '\u003C',
    '\u0067\u0074': '\u003E',
    nbsp: '\u0020',
    '\u0061\u006D\u0070': '\u0026',
    '\u0071\u0075\u006F\u0074': '\u0022',
  };
  _0x44edff = (367506 ^ 367515) + (428447 ^ 428438);
  return str['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](
    new RegExp(
      '\u0026\u0028\u006C\u0074\u007C\u0067\u0074\u007C\u006E\u0062\u0073\u0070\u007C\u0061\u006D\u0070\u007C\u0071\u0075\u006F\u0074\u0029\u003B',
      '\u0067\u0069',
    ),
    function (all, t) {
      return _0x88bd[t];
    },
  );
}
document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072'](
  '\u0044\u004F\u004D\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u004C\u006F\u0061\u0064\u0065\u0064',
  function () {
    const _0x144c = {
      '\u006D\u0065\u0073\u0073\u0061\u0067\u0065\u004E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E': false,
      '\u0067\u0072\u006F\u0075\u0070\u004E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E': false,
      task: false,
      calendar: false,
      '\u0073\u0079\u0073\u0074\u0065\u006D': false,
      '\u006B\u006E\u006F\u0077\u006C\u0065\u0064\u0067\u0065': false,
      '\u0068\u0072': false,
      '\u0077\u006F\u0072\u006B\u0073\u0068\u0065\u0065\u0074': false,
      workflow: false,
    };
    var _0xe96b;
    let _0x2_0x41d =
      JSON['\u0070\u0061\u0072\u0073\u0065'](
        localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']('sgnitteSppa'.split('').reverse().join('')),
      ) || _0x144c;
    _0xe96b = 816467 ^ 816466;
    var _0xe3a1gc;
    const _0xb8954e = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']('\u0064\u0069\u0076');
    _0xe3a1gc = '\u006E\u0061\u006D\u006E\u0070\u0069';
    _0xb8954e['\u0069\u0064'] = 'ladoMsgnitteSmotsuc'.split('').reverse().join('');
    _0xb8954e['\u0073\u0074\u0079\u006C\u0065']['\u0063\u0073\u0073\u0054\u0065\u0078\u0074'] = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      z-index: 9999;
      display: none;
  `;
    var _0x62424e;
    const _0xd9ea = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074'](
      'vid'.split('').reverse().join(''),
    );
    _0x62424e = (450251 ^ 450254) + (869398 ^ 869395);
    _0xd9ea['\u0073\u0074\u0079\u006C\u0065']['\u0063\u0073\u0073\u0054\u0065\u0078\u0074'] = `
      background: white;
      margin: 15% auto;
      padding: 20px;
      width: 80%;
      max-width: 500px;
      border-radius: 5px;
      position: relative;
  `;
    _0xd9ea['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = `
  <span id="closeSettings" style="float: right; cursor: pointer; font-size: 24px;">×</span>
  <h2>设置管理</h2>
  <form id="settingsForm">
      <div class="switch-container">
          <label for="messageNotification">成员消息通知：</label>
          <label class="settings-switch">
              <input type="checkbox" id="messageNotification" name="messageNotification">
              <span class="settings-slider"></span>
          </label>
      </div>

      <div class="switch-container">
          <label for="groupNotification">群聊消息通知：</label>
          <label class="settings-switch">
              <input type="checkbox" id="groupNotification" name="groupNotification">
              <span class="settings-slider"></span>
          </label>
      </div>

      <div class="switch-container-group">
          <label for="systemNotification">系统消息设置：</label>
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
      <div class="submit-container">
        <button id='submit-btn' type="submit">保存</button>
      </div>
  </form>
`;
    _0xb8954e['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xd9ea);
    document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xb8954e);
    function _0x8da9b() {
      _0xb8954e['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = '\u0062\u006C\u006F\u0063\u006B';
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](
        '\u006D\u0065\u0073\u0073\u0061\u0067\u0065\u004E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E',
      )['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] =
        _0x2_0x41d['\u006D\u0065\u0073\u0073\u0061\u0067\u0065\u004E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E'];
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](
        '\u0067\u0072\u006F\u0075\u0070\u004E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E',
      )['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] =
        _0x2_0x41d['\u0067\u0072\u006F\u0075\u0070\u004E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E'];
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('\u0074\u0061\u0073\u006B')[
        '\u0063\u0068\u0065\u0063\u006B\u0065\u0064'
      ] = _0x2_0x41d['\u0074\u0061\u0073\u006B'];
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](
        '\u0063\u0061\u006C\u0065\u006E\u0064\u0061\u0072',
      )['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] = _0x2_0x41d['\u0063\u0061\u006C\u0065\u006E\u0064\u0061\u0072'];
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](
        'metsys'.split('').reverse().join(''),
      )['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] = _0x2_0x41d['\u0073\u0079\u0073\u0074\u0065\u006D'];
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](
        'egdelwonk'.split('').reverse().join(''),
      )['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] = _0x2_0x41d['\u006B\u006E\u006F\u0077\u006C\u0065\u0064\u0067\u0065'];
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('\u0068\u0072')[
        '\u0063\u0068\u0065\u0063\u006B\u0065\u0064'
      ] = _0x2_0x41d['\u0068\u0072'];
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](
        '\u0077\u006F\u0072\u006B\u0073\u0068\u0065\u0065\u0074',
      )['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] = _0x2_0x41d['\u0077\u006F\u0072\u006B\u0073\u0068\u0065\u0065\u0074'];
      document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](
        '\u0077\u006F\u0072\u006B\u0066\u006C\u006F\u0077',
      )['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] = _0x2_0x41d['\u0077\u006F\u0072\u006B\u0066\u006C\u006F\u0077'];
    }
    const { '\u006C\u0069\u0073\u0074\u0065\u006E': listen } =
      window['\u005F\u005F\u0054\u0041\u0055\u0052\u0049\u005F\u005F']['\u0065\u0076\u0065\u006E\u0074'];
    listen(
      '\u006E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E\u002D\u0073\u0065\u0074\u0074\u0069\u006E\u0067\u0073\u002D\u0065\u0076\u0065\u006E\u0074',
      event => {
        _0x8da9b();
      },
    );
    listen('\u0068\u006F\u006D\u0065\u002D\u0065\u0076\u0065\u006E\u0074', event => {
      window['\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u0068\u0072\u0065\u0066'] =
        '\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0077\u0077\u0077\u002E\u006D\u0069\u006E\u0067\u0064\u0061\u006F\u002E\u0063\u006F\u006D\u002F\u0064\u0061\u0073\u0068\u0062\u006F\u0061\u0072\u0064';
    });
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](
      '\u0063\u006C\u006F\u0073\u0065\u0053\u0065\u0074\u0074\u0069\u006E\u0067\u0073',
    )['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072'](
      '\u0063\u006C\u0069\u0063\u006B',
      () => {
        _0xb8954e['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = '\u006E\u006F\u006E\u0065';
      },
    );
    document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](
      'mroFsgnittes'.split('').reverse().join(''),
    )['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072'](
      '\u0073\u0075\u0062\u006D\u0069\u0074',
      e => {
        e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
        var _0xgb45c = (246812 ^ 246811) + (151644 ^ 151647);
        const _0x5ac = {
          messageNotification: document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](
            '\u006D\u0065\u0073\u0073\u0061\u0067\u0065\u004E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E',
          )['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'],
          '\u0067\u0072\u006F\u0075\u0070\u004E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E': document[
            '\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'
          ]('noitacifitoNpuorg'.split('').reverse().join(''))['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'],
          task: document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](
            '\u0074\u0061\u0073\u006B',
          )['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'],
          calendar: document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](
            '\u0063\u0061\u006C\u0065\u006E\u0064\u0061\u0072',
          )['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'],
          '\u0073\u0079\u0073\u0074\u0065\u006D': document[
            '\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'
          ]('\u0073\u0079\u0073\u0074\u0065\u006D')['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'],
          knowledge: document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](
            'egdelwonk'.split('').reverse().join(''),
          )['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'],
          hr: document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']('\u0068\u0072')[
            '\u0063\u0068\u0065\u0063\u006B\u0065\u0064'
          ],
          '\u0077\u006F\u0072\u006B\u0073\u0068\u0065\u0065\u0074': document[
            '\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'
          ]('\u0077\u006F\u0072\u006B\u0073\u0068\u0065\u0065\u0074')['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'],
          '\u0077\u006F\u0072\u006B\u0066\u006C\u006F\u0077': document[
            '\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'
          ]('\u0077\u006F\u0072\u006B\u0066\u006C\u006F\u0077')['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'],
        };
        _0xgb45c = 762620 ^ 762622;
        var _0x8c_0xg04;
        let _0x4_0xeb9 = false;
        _0x8c_0xg04 = (981264 ^ 981266) + (128490 ^ 128490);
        for (let _0xdbf2dg in _0x144c) {
          if (_0x5ac[_0xdbf2dg] !== _0x2_0x41d[_0xdbf2dg]) {
            _0x4_0xeb9 = !![];
            break;
          }
        }
        if (!_0x4_0xeb9) {
          alert('\uFF01\u7F6E\u8BBE\u6539\u66F4\u6709\u6CA1'.split('').reverse().join(''));
          _0xb8954e['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = '\u006E\u006F\u006E\u0065';
          return;
        }
        localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D'](
          'sgnitteSppa'.split('').reverse().join(''),
          JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](_0x5ac),
        );
        _0x2_0x41d = _0x5ac;
        console['\u006C\u006F\u0067']('\uFF1A\u5B58\u4FDD\u5DF2\u7F6E\u8BBE'.split('').reverse().join(''), _0x5ac);
        alert('\uFF01\u5B58\u4FDD\u529F\u6210\u5DF2\u7F6E\u8BBE'.split('').reverse().join(''));
        _0xb8954e['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079'] = 'enon'.split('').reverse().join('');
      },
    );
    setTimeout(() => {
      if (typeof _0xf63e == '\u0075\u006E\u0064\u0065\u0066\u0069\u006E\u0065\u0064') {
        var _0xb1aa = (743423 ^ 743416) + (429821 ^ 429812);
        var _0xf63e = null;
        _0xb1aa = (600975 ^ 600966) + (653348 ^ 653349);
        if (typeof window['\u0069\u006D'] != 'denifednu'.split('').reverse().join('')) {
          _0xf63e = window['\u0069\u006D'];
        } else if (typeof window['\u0049\u004D'] != '\u0075\u006E\u0064\u0065\u0066\u0069\u006E\u0065\u0064') {
          _0xf63e = window['\u0049\u004D']['\u0073\u006F\u0063\u006B\u0065\u0074'];
        }
        console['\u006C\u006F\u0067'](
          '\u003E\u003E\u003E\u003E\u003E\u003E\u52A0\u8F7D\u4E86\u5417',
          window['\u0049\u004D']['\u0073\u006F\u0063\u006B\u0065\u0074'],
        );
        function _0x7ba1f(data) {
          try {
            const { invoke: invoke } = window['\u005F\u005F\u0054\u0041\u0055\u0052\u0049\u005F\u005F']['\u0063\u006F\u0072\u0065'];
            invoke('\u0073\u0065\u006E\u0064\u005F\u006E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E', {
              '\u0070\u0061\u0072\u0061\u006D\u0073': data,
            });
          } catch (e) {
            console['\u0065\u0072\u0072\u006F\u0072']('\u539F\u751F\u901A\u77E5\u8C03\u7528\u5931\u8D25\uFF1A', e);
          }
        }
        if (_0xf63e) {
          console['\u006C\u006F\u0067']('\u5165\u8F7D'.split('').reverse().join(''));
          _0xf63e['\u006F\u006E']('\u006E\u0065\u0077\u0020\u006E\u006F\u0074\u0069\u0066\u0079', function (msg) {
            var _0xd8d6a;
            var _0x8c19b = '\u6001\u52A8'.split('').reverse().join('');
            _0xd8d6a = 405707 ^ 405706;
            var _0x6d60a = '\u0070\u006F\u0073\u0074';
            if (msg['\u0064\u0074\u0079\u0070\u0065'] == (112635 ^ 112632)) {
              _0x6d60a = '\u0074\u0061\u0073\u006B';
              _0x8c19b = '\u52A1\u4EFB'.split('').reverse().join('');
            } else if (msg['\u0064\u0074\u0079\u0070\u0065'] == (193728 ^ 193730)) {
              _0x6d60a = 'radnelac'.split('').reverse().join('');
              _0x8c19b = '\u65E5\u7A0B';
            } else if (msg['\u0064\u0074\u0079\u0070\u0065'] == (126383 ^ 126382)) {
              _0x6d60a = '\u0073\u0079\u0073\u0074\u0065\u006D';
              _0x8c19b = '\u7EDF\u7CFB'.split('').reverse().join('');
            } else if (msg['\u0064\u0074\u0079\u0070\u0065'] == (807142 ^ 807138)) {
              _0x6d60a = 'egdelwonk'.split('').reverse().join('');
              _0x8c19b = '\u8BC6\u77E5'.split('').reverse().join('');
            } else if (msg['\u0064\u0074\u0079\u0070\u0065'] == (111100 ^ 111097)) {
              _0x6d60a = '\u0068\u0072';
              _0x8c19b = '\u4E8B\u4EBA'.split('').reverse().join('');
            } else if (msg['\u0064\u0074\u0079\u0070\u0065'] == (584302 ^ 584296)) {
              _0x6d60a = 'teehskrow'.split('').reverse().join('');
              _0x8c19b = '\u8868\u4F5C\u5DE5'.split('').reverse().join('');
            } else if (msg['\u0064\u0074\u0079\u0070\u0065'] == (463499 ^ 463500)) {
              _0x6d60a = '\u0077\u006F\u0072\u006B\u0066\u006C\u006F\u0077';
              _0x8c19b = '\u5DE5\u4F5C\u6D41';
            }
            if (!_0x2_0x41d[_0x6d60a]) return;
            msg['\u0075\u0072\u006C'] =
              window['\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u006F\u0072\u0069\u0067\u0069\u006E'] +
              '=epyt?tahc/'.split('').reverse().join('') +
              _0x6d60a +
              '=di&'.split('').reverse().join('') +
              _0x6d60a;
            console['\u006C\u006F\u0067']('\u003E\u003E\u003E\u003E\u003E\u003E\u7CFB\u7EDF\u6D88\u606F\u63D0\u9192', {
              '\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0049\u0064':
                md['\u0067\u006C\u006F\u0062\u0061\u006C']['\u0041\u0063\u0063\u006F\u0075\u006E\u0074'][
                  '\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0049\u0064'
                ],
              '\u0074\u0069\u0074\u006C\u0065': _0x8c19b,
              body: html_decode(msg['\u006D\u0073\u0067']),
              '\u006D\u0073\u0067': msg,
            });
            if (
              msg['\u0066\u0072\u006F\u006D'] !=
              md['\u0067\u006C\u006F\u0062\u0061\u006C']['\u0041\u0063\u0063\u006F\u0075\u006E\u0074'][
                '\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0049\u0064'
              ]
            ) {
              _0x7ba1f({
                title: _0x8c19b,
                body: html_decode(msg['\u006D\u0073\u0067']),
                '\u0069\u0063\u006F\u006E':
                  '_tahc/segami/moc.oadgnim.www//:sptth'.split('').reverse().join('') + _0x6d60a + 'gnp.'.split('').reverse().join(''),
              });
            }
          });
          _0xf63e['\u006F\u006E']('\u006E\u0065\u0077\u0020\u006D\u0065\u0073\u0073\u0061\u0067\u0065', function (msg) {
            if (
              !_0x2_0x41d[
                '\u006D\u0065\u0073\u0073\u0061\u0067\u0065\u004E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E'
              ]
            )
              return;
            console['\u006C\u006F\u0067'](msg);
            if (
              msg['\u0066\u0072\u006F\u006D'] !=
              md['\u0067\u006C\u006F\u0062\u0061\u006C']['\u0041\u0063\u0063\u006F\u0075\u006E\u0074'][
                '\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0049\u0064'
              ]
            ) {
              msg['\u0075\u0072\u006C'] =
                window['\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u006F\u0072\u0069\u0067\u0069\u006E'] +
                '=di&resu=epyt?tahc/'.split('').reverse().join('') +
                msg['\u0066\u0072\u006F\u006D'];
              var _0x638b = msg['\u0075\u006E\u0061\u006D\u0065'];
              var _0x88b18b;
              if (msg['\u0074\u0079\u0070\u0065'] == (912814 ^ 912815)) {
                _0x88b18b = msg['\u006D\u0073\u0067']['\u0063\u006F\u006E'];
              } else if (msg['\u0074\u0079\u0070\u0065'] == (723668 ^ 723670)) {
                _0x88b18b = '\u7247\u56FE\u5F20\u4E00\u4E86\u6765\u53D1'.split('').reverse().join('');
              } else {
                _0x88b18b = '\u606F\u6D88\u6761\u4E00\u4E86\u6765\u53D1'.split('').reverse().join('');
              }
              _0x7ba1f({
                '\u0074\u0069\u0074\u006C\u0065': html_decode(_0x638b),
                '\u0062\u006F\u0064\u0079': html_decode(_0x88b18b),
                '\u0069\u0063\u006F\u006E': msg['\u006C\u006F\u0067\u006F'],
              });
            }
          });
          _0xf63e['\u006F\u006E'](
            '\u006E\u0065\u0077\u0020\u0067\u0072\u006F\u0075\u0070\u0020\u006D\u0065\u0073\u0073\u0061\u0067\u0065',
            function (msg) {
              if (!_0x2_0x41d['\u0067\u0072\u006F\u0075\u0070\u004E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E'])
                return;
              if (
                msg['\u0066\u0072\u006F\u006D'] !=
                  md['\u0067\u006C\u006F\u0062\u0061\u006C']['\u0041\u0063\u0063\u006F\u0075\u006E\u0074'][
                    '\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0049\u0064'
                  ] &&
                msg['\u0069\u0073\u0050\u0075\u0073\u0068'] === !![] &&
                msg['\u0073\u0079\u0073\u0054\u0079\u0070\u0065'] != (466945 ^ 466944)
              ) {
                msg['\u0075\u0072\u006C'] =
                  window['\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u006F\u0072\u0069\u0067\u0069\u006E'] +
                  '\u002F\u0063\u0068\u0061\u0074\u003F\u0026\u0074\u0079\u0070\u0065\u003D\u0067\u0072\u006F\u0075\u0070\u0026\u0069\u0064\u003D' +
                  msg['\u0074\u006F'];
                var _0x1b_0xf9c;
                var _0x62e6g;
                _0x1b_0xf9c = (239860 ^ 239869) + (695038 ^ 695036);
                var _0x6436d = msg['\u0067\u0072\u006F\u0075\u0070\u006E\u0061\u006D\u0065'];
                if (msg['\u0074\u0079\u0070\u0065'] == (397860 ^ 397861)) {
                  _0x62e6g = msg['\u0075\u006E\u0061\u006D\u0065'] + '\u003A' + msg['\u006D\u0073\u0067']['\u0063\u006F\u006E'];
                } else if (msg['\u0074\u0079\u0070\u0065'] == (923513 ^ 923515)) {
                  _0x62e6g = msg['\u0075\u006E\u0061\u006D\u0065'] + '\u53D1\u6765\u4E86\u4E00\u5F20\u56FE\u7247';
                } else {
                  _0x62e6g = msg['\u0075\u006E\u0061\u006D\u0065'] + '\u53D1\u6765\u4E86\u4E00\u6761\u6D88\u606F';
                }
                _0x7ba1f({
                  '\u0074\u0069\u0074\u006C\u0065': html_decode(_0x6436d),
                  '\u0062\u006F\u0064\u0079': html_decode(_0x62e6g),
                  '\u0069\u0063\u006F\u006E': msg['\u0061\u0076\u0061\u0074\u0061\u0072'],
                });
              }
            },
          );
        }
      }
    }, 993171 ^ 992379);
  },
);
