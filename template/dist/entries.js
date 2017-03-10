function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function entries_template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Date, entries, formatTime) {// iterate entries
;(function(){
  var $$obj = entries;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var entry = $$obj[index];
pug_html = pug_html + "\u003Cdiv class=\"entry\"\u003E\u003Cdiv class=\"time\"\u003E" + (pug_escape(null == (pug_interp = formatTime(new Date(entry.created_at))) ? "" : pug_interp)) + "\u003Cimg" + (" class=\"trash_can\""+pug_attr("value", index, true, false)+" src=\"https:\u002F\u002Fcdn3.iconfinder.com\u002Fdata\u002Ficons\u002Ftools-solid-icons-vol-2\u002F72\u002F59-512.png\" height=\"22\" width=\"22\"") + "\u002F\u003E\u003C\u002Fdiv\u003E\u003Cpre class=\"content\"\u003E" + (pug_escape(null == (pug_interp = entry.content) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var entry = $$obj[index];
pug_html = pug_html + "\u003Cdiv class=\"entry\"\u003E\u003Cdiv class=\"time\"\u003E" + (pug_escape(null == (pug_interp = formatTime(new Date(entry.created_at))) ? "" : pug_interp)) + "\u003Cimg" + (" class=\"trash_can\""+pug_attr("value", index, true, false)+" src=\"https:\u002F\u002Fcdn3.iconfinder.com\u002Fdata\u002Ficons\u002Ftools-solid-icons-vol-2\u002F72\u002F59-512.png\" height=\"22\" width=\"22\"") + "\u002F\u003E\u003C\u002Fdiv\u003E\u003Cpre class=\"content\"\u003E" + (pug_escape(null == (pug_interp = entry.content) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);
}.call(this,"Date" in locals_for_with?locals_for_with.Date:typeof Date!=="undefined"?Date:undefined,"entries" in locals_for_with?locals_for_with.entries:typeof entries!=="undefined"?entries:undefined,"formatTime" in locals_for_with?locals_for_with.formatTime:typeof formatTime!=="undefined"?formatTime:undefined));;return pug_html;}