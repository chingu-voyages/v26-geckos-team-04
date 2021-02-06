const dotenv = require("dotenv");
dotenv.config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

// 1. App config
const app = express();

// 2. Middleware
app.use(cors({origin: true}));
app.use(express.json());

// 3. API routes
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received BOOM!!! for this amount  >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    console.log("Payment Intent >>>", paymentIntent);

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// 4. Listen command
exports.api = functions.https.onRequest(app);
