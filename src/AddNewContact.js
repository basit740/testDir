import React, { useReducer } from 'react';
import './styles/AddNewContact.css';

import contactReducer, {
	ACTIONS,
	newContact,
} from './reducers/contact-reducer';

export default function AddNewContact({ onNewContact }) {
	const [state, dispatch] = useReducer(contactReducer, newContact);

	const submitHandler = (event) => {
		event.preventDefault();

		const newContact = {
			firstName: state.firstName,
			lastName: state.lastName,
			email: state.email,
			number: state.number,
			city: state.city,
		};

		onNewContact(newContact);
	};

	return (
		<div className='new-contact'>
			<form onSubmit={submitHandler}>
				<div className='input-control'>
					<label>First Name</label>
					<input
						type='text'
						placeholder='first Name...'
						onChange={(event) => {
							dispatch({
								type: ACTIONS.SET_F_NAME,
								payload: { value: event.target.value },
							});
						}}
					/>
				</div>
				<div className='input-control'>
					<label>Last Name</label>
					<input
						type='text'
						placeholder='Last Name'
						onChange={(event) => {
							dispatch({
								type: ACTIONS.SET_L_NAME,
								payload: { value: event.target.value },
							});
						}}
					/>
				</div>

				<div className='input-control'>
					<label>Email</label>
					<input
						type='text'
						placeholder='Email'
						onChange={(event) => {
							dispatch({
								type: ACTIONS.SET_EMAIL,
								payload: { value: event.target.value },
							});
						}}
					/>
				</div>

				<div className='input-control'>
					<label>Phone</label>
					<input
						type='text'
						placeholder='Phone Number'
						onChange={(event) => {
							dispatch({
								type: ACTIONS.SET_NUMBER,
								payload: { value: event.target.value },
							});
						}}
					/>
				</div>

				<div className='input-control'>
					<label>City</label>
					<input
						type='text'
						placeholder='City'
						onChange={(event) => {
							dispatch({
								type: ACTIONS.SET_CITY,
								payload: { value: event.target.value },
							});
						}}
					/>
				</div>

				<div className='input-control'>
					<input type='submit' value='Submit' />
				</div>
			</form>
		</div>
	);
}
