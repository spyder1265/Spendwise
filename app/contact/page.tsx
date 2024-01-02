"use client";

import React from 'react';
import { BasicNavbar } from "../components/Navbar/navbar";

const Contact: React.FC = () => {
  return (
    <>
      <div>
        <BasicNavbar />
      </div>
      <div className="mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                We'd love to hear from you. Please fill out the form below or
                reach out to us using the contact information provided.
              </p>
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div className="sm:col-span-2">
                  <div className=" shadow overflow-hidden sm:rounded-lg dark:shadow-gray-500">
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg leading-6 font-medium">
                        Contact Information
                      </h3>
                      <div className="mt-2 max-w-xl text-sm text-gray-500">
                        <p>
                          123 Main Street
                          <br />
                          Accra, Ghana
                        </p>
                        <p className="mt-1">
                          Phone: (123) 456-7890
                          <br />
                          Email: info@spendwise.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="shadow overflow-hidden sm:rounded-lg dark:shadow-gray-500">
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg leading-6 font-medium">
                        Leave a Message
                      </h3>
                      <div className="mt-2">
                        <form>
                          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 text-gray-700 dark:text-gray-400">
                            <div className="sm:col-span-2">
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium "
                              >
                                Name
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  autoComplete="name"
                                  className="py-2 px-3 border border-gray-100 dark:border-gray-500 focus:ring-primary-600 focus:border-primary-600 block w-full shadow-sm sm:text-sm rounded-md dark:shadow-inner dark:bg-transparent"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-2">
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium "
                              >
                                Email
                              </label>
                              <div className="mt-1">
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  className="py-2 px-3 border border-gray-100 dark:border-gray-500 focus:ring-primary-600 focus:border-primary-600 block w-full shadow-sm sm:text-sm rounded-md dark:bg-transparent"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-2">
                              <label
                                htmlFor="message"
                                className="block text-sm font-medium "
                              >
                                Message
                              </label>
                              <div className="mt-1">
                                <textarea
                                  id="message"
                                  name="message"
                                  rows={4}
                                  className="py-2 px-3 border border-gray-100 dark:border-gray-500 focus:ring-primary-600 focus:border-primary-600 block w-full shadow-sm sm:text-sm rounded-md dark:bg-transparent"
                                ></textarea>
                              </div>
                            </div>
                            <div className="sm:col-span-2">
                              <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-200 dark:focus:ring-gray-300 "
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
