import * as counter from "./constants";

export const increment = (value) => {
	return {
		type: counter.Inc,
		value,
	};
};

export const decrement = (value) => {
	return {
		type: counter.Dec,
		value,
	};
};

export const decrementCheck = (value) => {
	return (dispatch, getState) => {
		if (getState().counter.count > 0) {
			dispatch(decrement(value));
		}
	};
};
