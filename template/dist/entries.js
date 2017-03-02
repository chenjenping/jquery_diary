function pug_escape(e){
  var a=""+e,t=pug_match_html.exec(a);
  if(!t)return e;
  var r,c,n,s="";
  for(r=t.index,c=0;r<a.length;r++)
    {switch(a.charCodeAt(r))
      {case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}
      c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}

  var pug_match_html=/["&<>]/;

  function entries_template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});
    (function (Date, entries, formatTime) {// iterate entries
    ;(function(){
  var $$obj = entries;var $$l = 0;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0; pug_index0 < $$obj.length; pug_index0++) {
        var entry = $$obj[pug_index0];
        pug_html = pug_html + "\u003Cdiv class=\"entry\"\u003E\u003Cdiv class=\"time\"\u003E" + (pug_escape(null == (pug_interp = formatTime(new Date(entry.created_at))) ? "" : pug_interp)) + "\u003Cbutton class=\"btn_del\" id=\"btn" + $$l + "\"\u003EX\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003Cpre class=\"content\"\u003E" + 
        (pug_escape(null == (pug_interp = entry.content) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E\u003C\u002Fdiv\u003E";
        $$l++;
      }
  } else {
    
    for (var pug_index0 in $$obj) {
      $$l++;
      var entry = $$obj[pug_index0];
      pug_html = pug_html + "\u003Cdiv class=\"entry\"\u003E\u003Cdiv class=\"time\"\u003E" + (pug_escape(null == (pug_interp = formatTime(new Date(entry.created_at))) ? "" : pug_interp)) + "id=\"divvv" + $$l + "\"\u003C\u002Fdiv\u003E\u003Cpre class=\"content\"\u003E" + 
      (pug_escape(null == (pug_interp = entry.content) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);
}.call(this,"Date" in locals_for_with?locals_for_with.Date:typeof Date!=="undefined"?Date:undefined,"entries" in locals_for_with?locals_for_with.entries:typeof entries!=="undefined"?entries:undefined,"formatTime" in locals_for_with?locals_for_with.formatTime:typeof formatTime!=="undefined"?formatTime:undefined));;return pug_html;}

    //\u003Cbutton class=\"btn_del\" id=\"btn" + $$l + "\"\u003EX\u003C\u002Fbutton\u003E