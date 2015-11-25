/*--------------------------------------------------------------------------*
 * 
 * Copyright (C) 2008 Brand Labs LLC
 * 
 * Shopping Cart Summary
 * 
 * Version 1.2.1
 * 
 *--------------------------------------------------------------------------*/

function getShoppingCartSummary(){var aa;var ba;aa=document.getElementById('display_cart_summary');if(aa==null){return null;}
return aa.innerHTML;}
function isShoppingCartEmpty(){var ca;ca=getShoppingCartSummary();if(ca==null){return null;}
if(ca.search('(Your shopping cart is empty)')!=-1){return true;}
return false;}
function getShoppingCartItems(){var da;var ea;da=getShoppingCartSummary();if(da==null){return null;}
ea=da.match(/\d+/);if(ea==null){return null;}
return ea[0];}
function getShoppingCartTotal(){var fa;var ga;var ha;var ia;fa=getShoppingCartSummary();if(fa==null){return null;}
ga=fa.match(/total\scost\sof\s.*\)/);ha=fa.match(/priced\sat\s.*\)/);if(ga==null&&ha==null){return null;}
if(ga!=null){if(ga[0]==null||ga[0].length<=15){return null;}
ia=ga[0].substr(14,ga[0].length-15);}
else{if(ha[0]==null||ha[0].length<=11){return null;}
ia=ha[0].substr(10,ha[0].length-11);}
return ia;}