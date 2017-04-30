/**
 * Created by showzyl on 2017/4/12.
 */

'use strict';

/**
 *  `前端异常监控`
 *  
 *  1. when use `window.onerror` err request can't be catched
 *  2. when get a err have to report to `GA` at the same time
 *  3. 
 *  
 *  
 */

;(function (win) {

	function Monitor() {
		this.isInit = false;
		
	}

	Monitor.prototype = {
		/**
		 *  捕捉报错
		 */
		getErr: function () {
			window.onerror = function (msg, url, line, col, err) {
				var o = {
					'msg: ': msg,
					'url: ': url,
					'line: ': line,
					'col: ': col,
					'err: ': err.stack
				};

				this.sendErr(o);
				return true;
			}
		},

		/**
		 *  异常上报
		 */
		sendErr: function (obj) {
			console.log(JSON.stringify(obj));
			
		}
		
	};

	var m = new Monitor();
	console.log(m);
	m.getErr();

	setTimeout(function(){
		wqddwq9();
	},1000);

	setTimeout(function(){
		throw Error('握草');
	},1200);

	aaa();



})(window);










