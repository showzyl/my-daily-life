/**
 * Created by showzyl on 2017/5/5.
 */

'use strict';

/**
 *  `前端异常监控`
 *
 *  1. when use `window.onerror` err request can't be catched
 *  2. when get an err have to async report to `GA`
 *  3.
 *
 *
 */


;(function (w) {

	w.Monitor = w.Monitor || {};

	var Monitor = w.Monitor;

	/**
	 *
	 * @param cb
	 * @param ua
	 */
	Monitor.stats = function (cb, ua, time) {
		if(typeof ga === 'undefined'){
			(function (i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r;
				i[r] = i[r] || function () {
						(i[r].q = i[r].q || []).push(arguments)
					}, i[r].l = 1 * new Date();
				a = s.createElement(o),
					m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m)
			})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
			ga('create', ua || 'wqdwqdwq', 'auto');
			ga('set', 'checkProtocolTask', null); // Disable file protocol checking.
			ga('set', 'checkStorageTask', null); // Disable cookie storage checking.
			ga('set', 'historyImportTask', null); // Disable history checking (requires reading from cookies).
			ga('send', 'pageview'); // 统计`pv`
		}
		// 异步上报
		if(cb){
			setTimeout(function () {
				cb();
			}, time || 300);
		}
	};

	/**
	 *
	 * @param type `globe lost catch warning`
	 * @param obj
	 */
	Monitor.notify = function (type, msg) {
		console.log(type, msg);

		var dataType = {}.toString.call(msg);

		if (dataType === '[object Object]') {
			msg['type'] = type;
		} else if (dataType === '[object String]') {

		}

		Monitor.stats(function () {

		})

	};


	/**
	 * catch globle error
	 * @param msg
	 * @param url
	 * @param line
	 * @param col
	 * @param err
	 * @returns {boolean}
	 */
	w.onerror = function (msg, url, line, col, err) {
		var errStack = '';
		if (err && err.stack) {
			errStack = _handleErrMsg(err.stack);
		}
		var o = {
			msg: msg || '',
			url: url || '',
			line: line || 0,
			col: col || 0,
			err: errStack
		};
		var msg = JSON.stringify(o);
		Monitor.notify('globe', msg);
		return false; // still log in console
	};

	/**
	 *
	 * @param err
	 * @returns {string}
	 * @private
	 */
	function _handleErrMsg(err) {
		return err.replace(/\n/gi, '')            // 去掉换行
			.replace(/\bat\b/gi, '@')       // chrome中是at，ff中是@
			.split('@')                     // 以@分割信息
			.slice(0, 10)                    // 最大堆栈长度 Error.stackTraceLimit 10
			//.map(v => v.replace(/^\s*|\s*$/g, ''))  //取出多余空格
			.map(function (v) { return v.replace(/^\s*|\s*$/g, ''); })  //取出多余空格
			.join('~')                      // 手动添加分隔符 便于后期展示
			.replace(/\?[^:]+/gi, '');      // 去除js文件多余参数(?x=1之类)
	}


})(window);

/**
 *
 * useage:
 * 
 * <script src="tt.js" onerror="window.Monitor && Monitor.notify && Monitor.notify('lost', this.src)"></script>
 *
 */










