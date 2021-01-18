export const actionTypes = {
	ADD_TO_CART: "ADD_TO_CART",
	REMOVE_FROM_CART: "REMOVE_FROM_CART",
};


export const cartReducer = (initialState = [], action) => {
	switch(action.type){
		case actionTypes.ADD_TO_CART:
			return [...initialState, action.payload];
			break;
		case actionTypes.REMOVE_FROM_CART:
			let updatedState = [...initialState]; 
			const index = updatedState.findIndex(item => item.id = action.payload.id);
			if(index >= 0){
				updatedState.splice(index, 1);
			}
			return updatedState;
			break;
		default:
			return initialState;
	}
};
