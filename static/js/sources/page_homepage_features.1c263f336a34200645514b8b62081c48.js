var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,g){a!=Array.prototype&&a!=Object.prototype&&(a[b]=g.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var b=0;return $jscomp.iteratorPrototype(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.iteratorFromArray=function(a,b){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var g=0,c={next:function(){if(g<a.length){var e=g++;return{value:b(e,a[e]),done:!1}}c.next=function(){return{done:!0,value:void 0}};return c.next()}};c[Symbol.iterator]=function(){return c};return c};
$jscomp.polyfill=function(a,b,g,c){if(b){g=$jscomp.global;a=a.split(".");for(c=0;c<a.length-1;c++){var e=a[c];e in g||(g[e]={});g=g[e]}a=a[a.length-1];c=g[a];b=b(c);b!=c&&null!=b&&$jscomp.defineProperty(g,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6","es3");
$(document).ready(function(){var a,b;function g(a,b,c,k,g){a=a.split("\n");for(var h=0;h<a.length;h++){for(var f="",m=a[h].split(" "),e=0;e<m.length;e++){var u=f+m[e]+" ";d.measureText(u).width>k?(d.fillText(f,b,c),f=m[e]+" ",c+=g):f=u}d.fillText(f,b,c);c+=g}}function c(c){p=e.width=e.scrollWidth;q=e.height=e.scrollHeight;a=p/2;b=q/2;l={display:{coor_text:{x:20,y:80},coor_target:{x:a-12,y:b-60}},"case":{coor_text:{x:p-20,y:80},coor_target:{x:a+30,y:b-145}},buttons:{coor_text:{x:20,y:b-20},coor_target:{x:a-
10,y:b+33}},inside:{coor_text:{x:p-20,y:b+20},coor_target:{x:a+5,y:b+120}},usb:{coor_text:{x:20,y:q-200},coor_target:{x:a-10,y:b+205}}};d.beginPath();d.drawImage(r,a-182,(q-558)/2,364,568);null==c&&$("#g").hide();Object.keys(l).map(function(a){var b=c==a;d.beginPath();d.lineWidth=1;d.strokeStyle="#ddd";var k=l[a].coor_target.x,e=l[a].coor_target.y,h=l[a].coor_text.x,f=l[a].coor_text.y;a=document.getElementById(a);var m=a.getElementsByTagName("h3")[0].innerHTML;d.beginPath();d.arc(h<k?k+6:k-6,e,6,
0,2*Math.PI);var t=e-f;d.moveTo(k,e);if(h<k){var n=k-120;d.lineTo(n,e);d.lineTo(n-t,f)}else n=k+120,d.lineTo(n,e),d.lineTo(n+t,f);d.lineTo(h,f);d.stroke();d.fillStyle="#111111";h<k?d.fillRect(h,f-1,265,4):d.fillRect(h-250-15,f-1,265,4);b&&$("#g").css({top:e-3,left:h<k?k+18:k+6});d.fillStyle="#ddd";d.font="23px 'Open Sans', sans-serif";d.fillText(m,h<k?h:h-250,f-12);d.fillStyle="#99979c";d.font="400 15px/1.75 -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif";
b=$(a.getElementsByTagName("p")[0]).text().replace(/\s+/g," ");d.textAlign="left";h<k?g(b,h,f+10,250,17):g(b,h-250,f+10,250,17)});null!=c&&$("#g").show()}var e=document.getElementById("featureCanvas"),d=e.getContext("2d");document.getElementById("features-list").getElementsByClassName("entry");var p,q,l=0,r=new Image;r.onload=function(){c(null)};r.src=function(){var a=document.createElement("canvas");return a.getContext&&a.getContext("2d")?0===a.toDataURL("image/webp").indexOf("data:image/webp"):
!1}()?"./static/images/trezor-black-select.webp":"./static/images/trezor-black-select.png";$(window).resize(function(){c(null)});e.addEventListener("mousemove",function(a){var b=a.offsetX,d=a.offsetY,e=null;Object.keys(l).map(function(a){var c=l[a].coor_text.x,f=l[a].coor_text.y;c<l[a].coor_target.x?c<b&&b<c+250&&f-20<d&&d<f+70&&(e=a):c-250<b&&b<c&&f-20<d&&d<f+70&&(e=a)});c(e);e=null},!0)});