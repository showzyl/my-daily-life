/**
 * Created by showzyl on 16/9/7.
 */

'use strict';

var timing = window.performance.timing
timing.domLoading; //浏览器开始解析 HTML 文档第一批收到的字节
timing.domInteractive;  // 浏览器完成解析并且所有 HTML 和 DOM 构建完毕
timing.domContentLoadedEventStart; //DOM 解析完成后，网页内资源加载开始的时间
timing.domContentLoadedEventEnd; // DOM 解析完成后，网页内资源加载完成的时间（如 JS 脚本加载执行完毕）
timing.domComplete; //网页上所有资源（图片等）下载完成,且准备就绪的时间


