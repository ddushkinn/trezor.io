$(document).ready(function(){$.fn.shuffle=function(){var a=this.get(),b=$.map(a,function(){var b=Math.floor(Math.random()*a.length),c=$(a[b]).clone(!0)[0];a.splice(b,1);return c});this.each(function(a){$(this).replaceWith($(b[a]))});return $(b)};(function(a){"undefined"!==typeof a&&a.shuffle()})($(".shuffle"))});var pepitacounter=0;$($(".team-section .person .header")[0]).click(function(){pepitacounter++;5===pepitacounter&&laundromat();6===pepitacounter&&(laundromatOff(),pepitacounter=0)});
function laundromat(){$(".team-section .person .header, .team-section .person .header2").each(function(){var a=$(this),b=2*Math.random();.5>Math.random()?a.css("animation","laundromat-right "+b+"s linear infinite"):a.css("animation","laundromat-left "+b+"s linear infinite")})}function laundromatOff(){$(".team-section .person .header, .team-section .person .header2").each(function(){$(this).css("animation","")})};
