const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
'pk_test_51IH3IlKQoK10TBfxLL8c6xGgT38YZqOSPHDRngQBVIL1iEQKNkYpSDLhMrUqKykJvs4pRzRA502ovqwuYzoOZX0u00LH90DigD');


// API

// APP Config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/paymets/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
});
response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
// exports.api = functions.https.onRequest(app);
exports.api = functions.https.onRequest(app);

// exapmle end point
// http://localhost:5001/clone-34ee7/us-central1/api