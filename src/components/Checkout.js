import React, { useState } from 'react';
// import './Checkout.css';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

export const Checkout = () => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const style = { "color": "blue" };
    const amount = "2";
    // const currency = "USD";

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    }

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "8.99",
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    }

    return (
        <div className="checkout">
            {isPending ? <p>LOADING...</p> : (
                <>
                    <select value={currency} onChange={onCurrencyChange}>
                        <option value="USD">💵 USD</option>
                        <option value="EUR">💶 Euro</option>
                    </select>
                    <PayPalButtons
                        fundingSource={'paypal'}
                        style={{ "color": "blue" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
                    {/* <PayPalButtons
                        fundingSource={'paypal'}
                        style={style}
                        forceReRender={['paypal', style, amount, currency]}
                        createOrder={(data, actions) => {
                            return actions.order
                                .create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                currency_code: currency, // Here change the currency if needed
                                                value: amount, // Here change the amount if needed
                                            },
                                        },
                                    ],
                                })
                                .then((orderId) => {
                                    // Your code here after create the order
                                    return orderId;
                                });
                        }}
                        onApprove={(data, actions) => {
                            return actions.order.capture().then(function (details) {
                                // Your code here after approve the transaction
                            });
                        }}
                    /> */}
                </>
            )}
        </div>
    );
}

// import { useState } from "react";
// import {
//     PayPalScriptProvider,
//     PayPalButtons,
//     PayPalMarks,
// } from "@paypal/react-paypal-js";

// // This values are the props in the UI
// const amount = "2";
// const currency = "USD";
// const style = { "color": "white" };

// export default function App() {
//     const fundingSources = ["paypal", "paylater"];
//     // Remember the amount props is received from the control panel
//     const [selectedFundingSource, setSelectedFundingSource] = useState(
//         fundingSources[0]
//     );

//     function onChange(event) {
//         setSelectedFundingSource(event.target.value);
//     }

//     return (
//         <PayPalScriptProvider
//             options={{
//                 "client-id": "test",
//                 components: "buttons,marks,funding-eligibility"
//             }}
//         >
//             <form style={{ minHeight: "200px" }}>
//                 {fundingSources.map((fundingSource) => (
//                     <label className="mark" key={fundingSource}>
//                         <input
//                             defaultChecked={
//                                 fundingSource === selectedFundingSource
//                             }
//                             onChange={onChange}
//                             type="radio"
//                             name="fundingSource"
//                             value={fundingSource}
//                         />
//                         <PayPalMarks fundingSource={fundingSource} />
//                     </label>
//                 ))}
//             </form>
//             <br />
//             <PayPalButtons
//                 fundingSource={selectedFundingSource}
//                 style={style}
//                 forceReRender={[selectedFundingSource, style, amount, currency]}
//                 createOrder={(data, actions) => {
//                     return actions.order
//                         .create({
//                             purchase_units: [
//                                 {
//                                     amount: {
//                                         currency_code: currency, // Here change the currency if needed
//                                         value: amount, // Here change the amount if needed
//                                     },
//                                 },
//                             ],
//                         })
//                         .then((orderId) => {
//                             // Your code here after create the order
//                             return orderId;
//                         });
//                 }}
//                 onApprove={(data, actions) => {
//                     return actions.order.capture().then(function (details) {
//                         // Your code here after approve the transaction
//                     });
//                 }}
//             />
//         </PayPalScriptProvider>
//     );
// }