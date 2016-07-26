/**
 * Created by showzyl on 16/7/26.
 */

'use strict'

// 两位小数或者整数
var reg;

reg = /^\d+\.?\d{0,2}$/;
//console.log(reg.test('123312321.223'));

// 只能输入数字
reg = /\D+/g;
'1x21x'.replace(reg, '');

