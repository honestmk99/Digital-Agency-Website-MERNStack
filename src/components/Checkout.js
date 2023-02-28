// import React, { useState } from 'react';
// import './Checkout.css';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useEffect } from "react";

export const Checkout = ({ price }) => {
    // const { totalPrice } = useContext(TotalPrice);

    // eslint-disable-next-line no-unused-vars
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    useEffect(() => {
        window.localStorage.setItem('ppp', price);
        // if (price) {
        //     setAmount(price)
        // }
    }, [price])

    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            // const name = details.payer.name.given_name;
            alert(`Transaction completed. `);
            window.localStorage.clear();
            window.location.href = '/'
        });
    }

    return (
        <div className="checkout">
            {isPending ? <p>LOADING...</p> : (
                <>
                    <PayPalButtons
                        fundingSource={'paypal'}
                        style={{ "color": "blue" }}
                        createOrder={(data, actions) => {
                            console.log("totalPrice--> here", window.localStorage.getItem('ppp'))
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: window.localStorage.getItem('ppp'),
                                        },
                                    },
                                ],
                            });
                        }}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
                </>
            )}
        </div>
    );
}