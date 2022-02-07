const stripe = require('stripe')('sk_test_yxiuucUrItDJVzS55ZstBK9l');
exports.handler = async (event) => {
  // TODO implement
  const {typeName, arguments} = event;
  if (typeName !== 'Mutation') {
    throw new Error('Request is not Mutation');
  }
  if (!arguments?.amount) {
    throw new Error('Amount argument is required!');
  }

  //create payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: arguments.amount,
    currency: 'usd',
  });

  return {clientSecret: paymentIntent.client_secret};
};
