import { Link } from "@material-ui/core";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./reducer";
import { StateContext, useStateValue } from "./StateProvider";
import axios from "./axios";
import { useHistory } from "react-router-dom";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setclientSecret] = useState(true);

  useEffect(() => {
    //   special stripe secrets that allows us to charge a customer.

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripes expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setclientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);
  console.log("The Secret is >>>", clientSecret);

  const handleSubmit = async (event) => {
    //   All stripe methods
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment Confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
    // const payload = await stripe
  };
  const handleChange = (event) => {
    // listen and display any changes
    setDisabled(event.empty);
    setError(event.error ? event.error.message : " ");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} Items</Link>)
        </h1>

        <div className="box">
          <div className="box_one">
            <div className="payment_section">
              <div className="payment_title">
                <h3>Delivery Address</h3>
              </div>
              <div className="payment_address">
                <p>{user?.email}</p>
                <p>202/5 Clarence street, Burwood</p>
                <p> LA, 34366, California</p>
              </div>
            </div>
            <div className="payment_section">
              <div className="payment_title">
                <h3>Check your basket</h3>
              </div>
              <div className="payment_items">
                {basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="box_two">
            <div className="payment_section">
              <div className="payment_title">
                <h3>Payment Method</h3>
              </div>
              <div className="payment_details">
                {/* STRIPE PAYMENT METHODS HERE.. */}

                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange} />
                  <div className="payment_priceContainer">
                    <CurrencyFormat
                      renderText={(value) => (
                        <>
                          <h3>Order Total: {value}</h3>
                        </>
                      )}
                      decimalScale={2}
                      value={getBasketTotal(basket)}
                      displayType={"text"}
                      thousandSeperator={true}
                      prefix={"$"}
                    />
                    <button disabled={processing || disabled || succeeded}>
                      <span>{processing ? <p> Processing</p> : "Buy now"}</span>
                    </button>
                  </div>
                  {/* if there is an error */}
                  {error && <div>{error}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
