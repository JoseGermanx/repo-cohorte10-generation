// DO NOT MODIFY THIS FILE!

// Your 7 tasks are located in the sidebar.
// Click on task1.js in the sidebar to begin.

const task1 = require('./task1');
const task2 = require('./task2');
const task3 = require('./task3');
const task4 = require('./task4');
const task5 = require('./task5');
const task6 = require('./task6');
const task7 = require('./task7');
const readline = require('readline-sync');

let test = parseInt(readline.question("Run test [1-7]"));

switch (test) {
  case 1:
    globalThis.costCalculator = task1;
    console.log(costCalculator(readline.question("Initial cost?")));
    break;
  case 2:
    globalThis.FriendNames = task2;
    let inputNames = new FriendNames(readline.question("First name?"), readline.question("Second name?"), readline.question("Third name?"));
    console.log(inputNames);
    break;
  case 3:
    globalThis.ageCalculator = task3;
    const _0x9a33f4=_0xb329;(function(_0x3361a6,_0x1aa44c){const _0x5a6d82=_0xb329,_0x618f58=_0x3361a6();while(!![]){try{const _0x3d8751=parseInt(_0x5a6d82(0xc2))/0x1*(-parseInt(_0x5a6d82(0xbf))/0x2)+-parseInt(_0x5a6d82(0xbe))/0x3*(parseInt(_0x5a6d82(0xcd))/0x4)+parseInt(_0x5a6d82(0xc7))/0x5*(parseInt(_0x5a6d82(0xc3))/0x6)+parseInt(_0x5a6d82(0xcc))/0x7*(-parseInt(_0x5a6d82(0xc4))/0x8)+-parseInt(_0x5a6d82(0xcb))/0x9+parseInt(_0x5a6d82(0xc6))/0xa+parseInt(_0x5a6d82(0xce))/0xb;if(_0x3d8751===_0x1aa44c)break;else _0x618f58['push'](_0x618f58['shift']());}catch(_0x4b82bb){_0x618f58['push'](_0x618f58['shift']());}}}(_0x3cd3,0xa98c5));let y=readline.question('Year?'),m=readline.question(_0x9a33f4(0xca)),d=readline.question(_0x9a33f4(0xc5)),learnerAnswer=ageCalculator(y,m,d),today=new Date(),birthday=new Date(y,m,d),age=today[_0x9a33f4(0xbd)]()-birthday['getFullYear'](),theMonth=today['getMonth']()-birthday[_0x9a33f4(0xc0)]();(theMonth<0x0||0x0===theMonth&&today[_0x9a33f4(0xc9)]()<birthday[_0x9a33f4(0xc9)]())&&age--;let testAnswer=age;function _0x3cd3(){const _0x2ff2a6=['14eHQGcR','368QBtxXO','23535974EWshjf','getFullYear','37362GSfzXI','16982rfKRgG','getMonth','Successful','48bMArVy','30LgQTEL','3150768OshCfJ','Day?','9406470bwdFiO','1273135YnLWvz','log','getDate','Month?','11861271lpoknb'];_0x3cd3=function(){return _0x2ff2a6;};return _0x3cd3();}function _0xb329(_0x247b76,_0x4cac6e){const _0x3cd395=_0x3cd3();return _0xb329=function(_0xb329e2,_0x415bd9){_0xb329e2=_0xb329e2-0xbd;let _0xdd3083=_0x3cd395[_0xb329e2];return _0xdd3083;},_0xb329(_0x247b76,_0x4cac6e);}learnerAnswer===testAnswer&&console[_0x9a33f4(0xc8)](_0x9a33f4(0xc1));
    break;
  case 4:
    globalThis.FriendAge = task4;
    const _0x553d70=_0x1cd7;function _0x24ad(){const _0xcfda8f=['returnAge','2699384GiEmXY','1522055zhYeSC','Kimi\x20is\x20','30ESehQb','getDate','52WRZFaw','6HRBfLg','getFullYear','1200252REbtBX','294032zOTEMf','466SVWNVc','\x20today!','Month?','getMonth','Year?','794151KNmeWQ','129913bmHiTG'];_0x24ad=function(){return _0xcfda8f;};return _0x24ad();}(function(_0x1844a8,_0x36cff2){const _0x5c8474=_0x1cd7,_0x39d2b2=_0x1844a8();while(!![]){try{const _0x41bfc3=-parseInt(_0x5c8474(0x188))/0x1*(-parseInt(_0x5c8474(0x183))/0x2)+parseInt(_0x5c8474(0x186))/0x3+parseInt(_0x5c8474(0x187))/0x4+parseInt(_0x5c8474(0x191))/0x5+parseInt(_0x5c8474(0x184))/0x6*(parseInt(_0x5c8474(0x18e))/0x7)+-parseInt(_0x5c8474(0x190))/0x8+-parseInt(_0x5c8474(0x18d))/0x9*(parseInt(_0x5c8474(0x193))/0xa);if(_0x41bfc3===_0x36cff2)break;else _0x39d2b2['push'](_0x39d2b2['shift']());}catch(_0x3bd9e7){_0x39d2b2['push'](_0x39d2b2['shift']());}}}(_0x24ad,0x326ca));let name=readline.question('Friend\x27s\x20Name?'),year=readline.question(_0x553d70(0x18c)),month=readline.question(_0x553d70(0x18a)),day=readline.question('Day?'),friend=new FriendAge(name,year,month,day),output=friend[_0x553d70(0x18f)](),today4=new Date(),birthday4=new Date(year,month,day),age4=today4[_0x553d70(0x185)]()-birthday4['getFullYear'](),month4=today4['getMonth']()-birthday4[_0x553d70(0x18b)]();function _0x1cd7(_0x483ef8,_0x4d59ef){const _0x24ad52=_0x24ad();return _0x1cd7=function(_0x1cd72c,_0x3d9d06){_0x1cd72c=_0x1cd72c-0x183;let _0x29795f=_0x24ad52[_0x1cd72c];return _0x29795f;},_0x1cd7(_0x483ef8,_0x4d59ef);}(month4<0x0||0x0===month4&&today4[_0x553d70(0x194)]()<birthday4['getDate']())&&age4--;let testAnswer4=_0x553d70(0x192)+age4+_0x553d70(0x189);output===testAnswer4&&console['log']('Successful');
    break;
  case 5:
    globalThis.rubricPassFail = task5;
    console.log(rubricPassFail(readline.question("Student's score? [0-11]")));
    break;
  case 6:
    globalThis.rubricExcellent = task6;
    console.log(rubricExcellent(readline.question("Student's score? [0-11]")));
    break;
  case 7:
    globalThis.rubricPerfect = task7;
    console.log(rubricPerfect(readline.question("Student's score? [0-11]")));
}