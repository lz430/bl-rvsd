/*--------------------------------------------------------------------------*
 * 
 * Copyright (C) 2008 Brand Labs LLC
 * 
 *--------------------------------------------------------------------------*/
/**
 * Update header with cart items
 */
function updateHeaderCartSummary() {
	var element;
	var items;
	var output;
	
	element = document.getElementById('view_cart_text_right');
	
	if(element == null) {
		return;
	}
	
	items = getShoppingCartItems();
	total = getShoppingCartTotal();
	
	//No items or null
	if(isShoppingCartEmpty()) {
		output = '0 Items: <span class="thepricecolor">$0.00</span>';
	}
	else if (items == null || total == null) {
		return;
	}
	else if(items == 0) {
		output = '0 Items: <span class="thepricecolor">$0.00</span>';
	}
	else {
		//Create string
		output = items + ' Item';
		if (items > 1) {
			output = output + 's';
		}
		output = output + ': <span class="thepricecolor">' + total + '</span>';
	}
	
	//Put data into field
	element.innerHTML = output;
}