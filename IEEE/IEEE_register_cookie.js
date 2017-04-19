function tqGetCookie(name) {
     var nameEQ = name + "=";
     var ca = document.cookie.split(';');
     for(var i=0;i < ca.length;i++) {
       var c = ca[i];
       while (c.charAt(0)==' ') c = c.substring(1,c.length);
       if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
     }
     return null;
   }
//create anonymousID cookie
if((tqGetCookie('cp_anonymousID') == null) && (tqGetCookie('cp_unique_user_id') == null) && (tqGetCookie('cp_user_institution_id_unique') == null) && (typeof(utag.data.anonymousID) != "undefined")){
   document.cookie = "cp_anonymousID=" + utag.data.anonymousID + tqGetCookie('ipCheck').replace(/\./g,'') + ";path=/;domain=" + window.location.hostname + ";expires=" + (function() {var d = new Date();d.setTime(d.getTime() + (5475 * 86400000));return d.toGMTString()})()+"";
}
//create unique_user_id cookie
else if((tqGetCookie('cp_unique_user_id') == null) && (tqGetCookie('cp_user_institution_id_unique') == null) && (typeof(utag.data.unique_user_id) != "undefined")){
 document.cookie = "cp_unique_user_id=" + utag.data.unique_user_id + ";path=/;domain=" + window.location.hostname + ";expires=" + (function() {var d = new Date();d.setTime(d.getTime() + (5475 * 86400000));return d.toGMTString()})()+"";
}
//create cp_user_institution_id cookie
else if((tqGetCookie('cp_user_institution_id_unique') == null) && (typeof(utag.data.user_institution_id_unique) != "undefined")){
 document.cookie = "cp_user_institution_id_unique=" + utag.data.user_institution_id_unique + ";path=/;domain=" + window.location.hostname + ";expires=" + (function() {var d = new Date();d.setTime(d.getTime() + (5475 * 86400000));return d.toGMTString()})()+"";
}
