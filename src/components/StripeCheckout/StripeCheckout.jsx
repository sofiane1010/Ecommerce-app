import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price, emptyBasket }) => {
	const priceInCents = price * 100;
	const publishableKey =
		"pk_test_51Hr9PgJWAk5JRjGGoJwTwVEtLPd8vaOdHw0qyFJT0G0jXRBNlgRx6xQERdIeVnFPuzS48UAHL8ga82rVCRWm8uMo00X0nMkvOH";

	const onToken = (token) => {
		console.log(token);
		emptyBasket();
		alert("Payment successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Ecommerce Demo"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceInCents}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
