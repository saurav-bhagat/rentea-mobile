// actions are normal function that gets dispatch inside the component
// action will return the payload and type

export const increment = () => {
	return {
		type: 'INCREMENT',
	};
};

export const decrement = () => {
	return {
		type: 'DECREMENT',
	};
};
