import { useState } from "react";
import { Checkout } from "../components/Checkout";
// import { Countries } from "../components/Countries";
// import { Dropdown } from "../components/DropMenu"

export const Payment = () => {
    const [payment, setPayment] = useState("paypal");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="max-w-[160rem] m-auto text-third font-ft-secondary px-20">
            <div className="my-12 font-ft-primary text-center">
                <h1 className="text-7xl">Payment</h1>
            </div>
            <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5 w-[100rem]">
                        <input type='email' placeholder="Email" className="placeholder:text-third p-4 text-4xl bg-transparent border border-third" />
                        <input type='text' placeholder="Phone Number" className="placeholder:text-third p-4 text-4xl bg-transparent border border-third" />
                        <div className="grid grid-cols-2 gap-5">
                            <input type='text' placeholder="First Name" className="placeholder:text-third p-4 text-4xl bg-transparent border border-third" />
                            <input type='text' placeholder="Last Name" className="placeholder:text-third p-4 text-4xl bg-transparent border border-third" />
                        </div>
                        {/* <Countries /> */}
                        {/* <Dropdown type='engin' placeHolder='Country' specifications={[]} /> */}
                        <input type='text' placeholder="Address" className="placeholder:text-third p-4 text-4xl bg-transparent border border-third" />
                        <div className="grid grid-cols-4 gap-8" >
                            <label className="text-4xl">
                                <input type="radio" value="paypal" name="payment" checked={payment === "paypal"} onChange={() => setPayment('paypal')} /> Paypal
                            </label>
                            <label className="text-4xl">
                                <input type="radio" value="crypto" name="payment" checked={payment === "crypto"} onChange={() => setPayment('crypto')} /> Crypto
                            </label>
                            <label className="text-4xl">
                                <input type="radio" value="google" name="payment" checked={payment === "google"} onChange={() => setPayment('google')} /> Google
                            </label>
                            <label className="text-4xl">
                                <input type="radio" value="apple" name="payment" checked={payment === "apple"} onChange={() => setPayment('apple')} /> Apple
                            </label>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="rounded-md border-2 border-third text-5xl px-32 py-4 bg-secondary"
                            >
                                Save
                            </button>
                        </div>
                        {payment === 'paypal' ? <div className="text-center">
                            <Checkout />
                        </div> : (<></>)}
                    </div>
                </form>
            </div>
        </div>
    )
}