/*--------------------------------------------------------------------------*
 * 
 * Copyright (C) 2008 Brand Labs LLC
 * 
 * Continue shopping which uses the referrer to redirect to
 * 
 * Version 1.0.2
 * 
 *--------------------------------------------------------------------------*/

function continueShopping(){var aa=null;var ba=null;var ca='/';var da=window.location.pathname;var ea=window.location.host;var fa=null;var ga;if(document.referrer){aa=document.referrer;}
try{fa=getProductHistoryURL();}
catch(e){fa=null;}
ca=(fa==null?ca:fa);if(aa==null||aa==''){window.location.href=ca;return;}
try{ga=aa.indexOf(ea);if(ga==-1){window.location.href=ca;return;}
ba=aa.substring((ga+ea.length));if(ba.toLowerCase().indexOf(da.toLowerCase())==0){window.location.href=ca;return;}
window.location.href=ba;return;}
catch(e){window.location.href=ca;return;}}
function getProductHistoryURL(){var ha='%2FHistory';var ia=null;var ja=null;var ka=null;var la=null;if(!document.cookie||document.cookie==null){return null;}
ia=document.cookie.split(';');for(index=0;index<ia.length;index++){ja=ia[index];while(ja.charAt(0)==' '){ja=ja.substring(1,ja.length);}
if(ja.indexOf(ha+'=')==0){ka=ja.substring(ha.length+1);if(ka==null||ka==''){return null;}
la=ka.split('%2C');return '/ProductDetails.asp?ProductCode='+la[0];}}
return null;}