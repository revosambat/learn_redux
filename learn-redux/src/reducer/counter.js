const counterReducer = (state = 0, aciton) => {
	switch (aciton.type) {
		case "INCREMENT":
			return state + 1
		case "DECREMENT":
			return state - 1
		default:
			return state
	}
}

export default counterReducer
