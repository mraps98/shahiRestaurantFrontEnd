export const actionTypes = {
	ADD_TO_CART: "ADD_TO_CART",
	REMOVE_FROM_CART: "REMOVE_FROM_CART",
	CHECKOUT: "CHECKOUT",
};

export const getCartTotal = (cart) => (
	(cart?.reduce((amount, item)=>item.price+amount, 0)).toFixed(2)
)

export const getItemCount = (cartItems, keyItem) => {
	let count = 0;
	cartItems.forEach(item=>{
		if (item.id == keyItem.id){
			count++;
		}
	});
	return count;
}

export const getCartSummary = (cartItems) => {
	let summary = [];
	cartItems.forEach(cartItem => {
		let alreadyExists = false;
		let existsAtIndex = 0;
		summary.forEach(summaryItem=>{
			if(summaryItem.item === cartItem){
				alreadyExists = true;
				existsAtIndex = summary.indexOf(summaryItem);
			}
		});
		if(alreadyExists){
			summary[existsAtIndex].count++;
		}else{
			summary.push({
				item: cartItem,
				count: 1
			});
		}
	});
	return summary;
}

export const cartReducer = (initialState = [], action) => {
	switch(action.type){
		case actionTypes.ADD_TO_CART:
			return [...initialState, action.payload];
			break;
		case actionTypes.REMOVE_FROM_CART:
			let updatedState = [...initialState]; 
			const index = updatedState.findIndex(item => item.id == action.payload.id);
			if(index >= 0){
				updatedState.splice(index, 1);
			}
			return updatedState;
			break;
		case actionTypes.CHECKOUT:
			return [];
			break;
		default:
			return initialState;
	}
};
