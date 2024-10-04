import React, { useState } from "react";
import { BasicNavbar } from "../Navbar/navbar";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCardNumberChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setExpiryDate(e.target.value);
  };

  const handleCvcChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCvc(e.target.value);
  };

  const validateCreditCard = () => {
    // Implement the Luhn algorithm for credit card number validation
    const sanitizedCardNumber = cardNumber.replace(/\s/g, ""); // Remove spaces
    const reversedCardNumber = sanitizedCardNumber.split("").reverse().join("");
    const sum = reversedCardNumber
      .split("")
      .map((digit, index) => {
        let num = parseInt(digit, 10);
        if (index % 2 !== 0) {
          num *= 2;
          if (num > 9) {
            num -= 9;
          }
        }
        return num;
      })
      .reduce((acc, curr) => acc + curr, 0);

    return sum % 10 === 0;
  };

  const handlePayment = () => {
    if (cardNumber && expiryDate && cvc) {
      if (validateCreditCard()) {
        // Implement your payment processing logic here (e.g., integrate with a payment gateway)
        console.log("Payment submitted!");
        setErrorMessage("");
      } else {
        setErrorMessage(
          "Invalid credit card number. Please check and try again.",
        );
      }
    } else {
      setErrorMessage("Please fill in all the required fields.");
    }
  };

  return (
    <>
      <section className="pt-10">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:pt-16">
          <div className="mx-auto max-w-screen-md text-center">
            <div className="max-w-xl mx-auto rounded-lg border border-gray-200 p-6 shadow dark:border-gray-700">
              <h5 className="mb-2 text-center text-2xl font-bold text-gray-900 dark:text-white">
                Payment Information
              </h5>
              <hr className="mx-auto my-6 max-w-screen-xl border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

              <form className="mx-auto max-w-md text-left">
                <div className="flex flex-col gap-2">
                  <div>
                    <label
                      htmlFor="cardholderName"
                      className="my-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Cardholder Name
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="38"
                          height="38"
                          viewBox="0 0 26 26"
                          fill="#2256ee"
                          aria-hidden="true"
                          className="h-4 w-4 text-gray-500 dark:fill-gray-100"
                        >
                          <path d="M16.563 15.9c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07c0-4.107-2.731-6.26-5.905-6.26c-3.176 0-5.892 2.152-5.892 6.26c0 2.682 1.244 5.406 2.891 7.088c.642 1.684-.506 2.309-.746 2.397c-3.324 1.202-7.224 3.393-7.224 5.556v.811c0 2.947 5.714 3.617 11.002 3.617c5.296 0 10.938-.67 10.938-3.617v-.811c0-2.228-3.919-4.402-7.407-5.557" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="cardholderName"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="my-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Card Number
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="38"
                          height="38"
                          viewBox="0 0 512 512"
                          fill="#2256ee"
                          aria-hidden="true"
                          className="h-4 w-4 text-gray-500 dark:fill-gray-100"
                        >
                          <path d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32Zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30ZM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="cardNumber"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="0123 4567 8901 2345"
                        required
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                      />
                    </div>
                  </div>
                  <div className=" flex w-full gap-10 max-md:gap-5">
                    <div>
                      <label
                        htmlFor="expiryDate"
                        className="my-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Expiry Date
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="38"
                            height="38"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-4 w-4 text-gray-500 dark:fill-gray-100"
                          >
                            <g fill="none">
                              <rect
                                width="18"
                                height="15"
                                x="3"
                                y="6"
                                stroke="#2256ee"
                                strokeWidth="2"
                                className="dark:stroke-gray-100"
                                rx="2"
                              />
                              <path
                                fill="#2256ee"
                                className="dark:fill-gray-100"
                                d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z"
                              />
                              <path
                                stroke="#2256ee"
                                strokeLinecap="round"
                                strokeWidth="2"
                                className="dark:stroke-gray-100"
                                d="M7 3v3m10-3v3"
                              />
                            </g>
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="expiryDate"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="mm-yy"
                          required
                          value={expiryDate}
                          onChange={handleExpiryDateChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="cvv"
                        className="my-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        CVV
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="38"
                            height="38"
                            viewBox="0 0 1024 1024"
                            fill="#2256ee"
                            aria-hidden="true"
                            className="h-4 w-4 text-gray-500 dark:fill-gray-100"
                          >
                            <path d="M872 394c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H400V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v236H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h228v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h164c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V394zM628 630H400V394h228z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="cvv"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="123"
                          maxLength={4}
                          required
                          value={cvc}
                          onChange={handleCvcChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="billingAddress"
                      className="my-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Billing Address
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="38"
                          height="38"
                          viewBox="0 0 20 20"
                          fill="#2256ee"
                          aria-hidden="true"
                          className="h-4 w-4 text-gray-500 dark:fill-gray-100"
                        >
                          <path d="m19.799 5.165l-2.375-1.83a1.997 1.997 0 0 0-.521-.237A2.035 2.035 0 0 0 16.336 3H9.5l.801 5h6.035c.164 0 .369-.037.566-.098s.387-.145.521-.236l2.375-1.832c.135-.091.202-.212.202-.334s-.067-.243-.201-.335M8.5 1h-1a.5.5 0 0 0-.5.5V5H3.664c-.166 0-.37.037-.567.099c-.198.06-.387.143-.521.236L.201 7.165C.066 7.256 0 7.378 0 7.5c0 .121.066.242.201.335l2.375 1.832c.134.091.323.175.521.235c.197.061.401.098.567.098H7v8.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="billingAddress"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="123 Main St"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="my-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="38"
                          height="38"
                          viewBox="0 0 24 24"
                          fill="#2256ee"
                          aria-hidden="true"
                          className="h-4 w-4 text-gray-500 dark:fill-gray-100"
                        >
                          <path d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        id="email"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-transparent dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="name@spendwise.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex max-md:flex-col">
                  <div className="mb-4 flex items-center">
                    <input
                      id="option-1"
                      type="radio"
                      name="pricing-plan"
                      value="Invoicing Plan"
                      className="ml-[5px] h-4 w-4 border-gray-300 focus:ring-2 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-primary-600 dark:focus:ring-primary-600"
                      required
                    />
                    <label
                      htmlFor="country-option-1"
                      className="ms-2 block  text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Invoicing Plan
                    </label>
                  </div>

                  <div className="mb-4 flex items-center">
                    <input
                      id="option-2"
                      type="radio"
                      name="pricing-plan"
                      value="Company Plan"
                      className="ml-[5px] h-4 w-4 border-gray-300 focus:ring-2 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-primary-600 dark:focus:ring-primary-600"
                      required
                    />
                    <label
                      htmlFor="country-option-2"
                      className="ms-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Company Plan
                    </label>
                  </div>

                  <div className="mb-4 flex items-center">
                    <input
                      id="option-3"
                      type="radio"
                      name="pricing-plan"
                      value="Enterprise Plan"
                      className="ml-[5px] h-4 w-4 border-gray-300 focus:ring-2 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-primary-600"
                      required
                    />
                    <label
                      htmlFor="country-option-3"
                      className="ms-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Enterprise Plan
                    </label>
                  </div>
                </div>
                <div>
                  <div className="mb-5 ml-[5px] flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="terms"
                        type="checkbox"
                        value=""
                        className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="terms"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I agree with the{" "}
                      <a
                        href="#"
                        className="text-primary-600 hover:underline dark:text-primary-500"
                      >
                        terms and conditions
                      </a>
                    </label>
                  </div>

                  {errorMessage && (
                    <p className="mb-4 text-sm italic text-red-500">{errorMessage}</p>
                  )}

                  <div>
                    <input
                      type="submit"
                      value="Submit"
                      className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                      onClick={handlePayment}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div >
        </div >
      </section >
    </>
  );
};

export default Payment;