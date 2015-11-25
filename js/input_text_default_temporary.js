/*--------------------------------------------------------------------------*
 * 
 * Copyright (C) 2008 Brand Labs LLC
 * 
 * Default value temporary for user
 * 
 * Version 1.0.1
 * 
 *--------------------------------------------------------------------------*/

function inputTextClicked(aa,ba){if(aa.value==aa.defaultValue){aa.value='';aa.style.color=ba;}}
function inputTextBlurred(ca,da){if(ca.value!=''){return;}
ca.style.color=da;ca.value=ca.defaultValue;}