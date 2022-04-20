export const ACTIONS = {
	SET_F_NAME: 'set_f_name',
	SET_L_NAME: 'set_l_name',
	SET_EMAIL: 'set_email',
	SET_NUMBER: 'set_number',
	SET_CITY: 'set_city',
};
export const newContact = {
	firstName: '',
	lastName: '',
	email: '',
	number: '',
	city: '',
};
export default function contactReducer(state, action) {
	let value = action.payload.value;
	let type = action.type;

	if (type === ACTIONS.SET_F_NAME) {
		state.firstName = value;
		return state;
	} else if (type === ACTIONS.SET_L_NAME) {
		state.lastNmae = value;
	} else if (type === ACTIONS.SET_NUMBER) {
	}

	switch (type) {
		case ACTIONS.SET_F_NAME:
			state.fisrtName = value;
			break;
		case ACTIONS.SET_L_NAME:
			state.lastName = value;
			break;
		case ACTIONS.SET_EMAIL:
			state.email = value;
			break;
		case ACTIONS.SET_NUMBER:
			state.number = value;
			break;
		case ACTIONS.SET_CITY:
			state.city = value;
			break;
		default:
			return state;
	}

	return state;
}
