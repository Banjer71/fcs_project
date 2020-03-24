import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { Content, Container } from './PagesStyles';

const FormContent = styled.div`
	@media screen and (min-width: 780px) {
		display: flex;
		margin-left: 5rem;
	}
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;

	> input {
		height: 35px;
		border-radius: 4px;
		border: 1px solid #efece1;
	}

	.submit-button {
		background-color: #efece1;
	}

	> textarea {
		height: 150px;
		border-radius: 4px;
		border: 1px solid #efece1;
		margin-bottom: 0.5rem;
	}

	@media screen and (min-width: 780px) {
		max-width: 400px;
		margin: 0 2rem;
	}
`;

const Info = styled.div`
	font-size: 14px;
	padding: 10px;
	color: #747679;

	.address {
		padding: 10px 0;

		> p {
			padding: 4px 0;
		}
	}
`;

const ContactUs = () => {
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('default_service', 'contatc_form', e.target, 'user_9M071Z9YysFIbLj7JLEaI').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
	};

	return (
		<Content>
			<Container>
				<FormContent>
					<Form className="contact-form" onSubmit={sendEmail}>
						<input type="hidden" name="contact_number" />
						<label>Name</label>
						<input type="text" name="user_name" />
						<label>Email</label>
						<input type="email" name="user_email" />
						<label>Message</label>
						<textarea name="message" />
						<input type="submit" value="Send" className="submit-button" />
					</Form>
					<Info>
						<div className="address">
							<p>Fabric Consulting Services</p>
							<p>Tel: +39 338 2718022</p>
							<p>info@fabricservices.it</p>
						</div>
						<div className="address">
							<p>Via Montecavallo, 15</p>
							<p>02039 Toffi - Rieti, Italy</p>
							<p>P.I. 028999850735</p>
						</div>
					</Info>
				</FormContent>
			</Container>
		</Content>
	);
};

export default ContactUs;
