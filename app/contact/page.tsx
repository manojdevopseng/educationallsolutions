"use client";

import React, { useState } from "react";

export default function ContactUs() {
  // const [fullname, setFullname] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  // //   Form validation
  // const [errors, setErrors] = useState({});

  // //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [showFailureMessage, setShowFailureMessage] = useState(false);

  // const handleValidation = () => {
  //   let tempErrors: Errors = {};
  //   let isValid = true;

  //   if (!fullname.trim()) {
  //     tempErrors["fullname"] = true;
  //     isValid = false;
  //   }
  //   if (!email.trim()) {
  //     tempErrors["email"] = true;
  //     isValid = false;
  //   }
  //   if (!subject.trim()) {
  //     tempErrors["subject"] = true;
  //     isValid = false;
  //   }
  //   if (!message.trim()) {
  //     tempErrors["message"] = true;
  //     isValid = false;
  //   }

  //   setErrors({ ...tempErrors });
  //   console.log("errors", tempErrors);
  //   return isValid;
  // };

  // //   const [form, setForm] = useState(false);

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();

  //   let isValidForm = handleValidation();

  //   if (isValidForm) {
  //     setButtonText("Sending");
  //     const res = await fetch("/api/sendgrid", {
  //       body: JSON.stringify({
  //         email: email,
  //         fullname: fullname,
  //         subject: subject,
  //         message: message,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //     });

  //     const { error } = await res.json();
  //     if (error) {
  //       console.log(error);
  //       setShowSuccessMessage(false);
  //       setShowFailureMessage(true);
  //       setButtonText("Send");

  //       // Reset form fields
  //       setFullname("");
  //       setEmail("");
  //       setMessage("");
  //       setSubject("");
  //       return;
  //     }
  //     setShowSuccessMessage(true);
  //     setShowFailureMessage(false);
  //     setButtonText("Send");
  //     // Reset form fields
  //     setFullname("");
  //     setEmail("");
  //     setMessage("");
  //     setSubject("");
  //   }
  //   console.log(fullname, email, subject, message);
  // };
  return (
    <main>
      <header className="relative grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:px-40 bg-gray-100 ">
        <div className="mx-auto mb-10 md:mt-20">
          <div className=" py-2 bg-indigo-400 inline-block rounded-xl">
            <p className="text-base px-4 py-1 text-black">
              Contact Us
            </p>
          </div>
          <h1 className="text-4xl font-bold mt-4  text-black">
            Lets talk about your projects.
          </h1>
          <p className="text-sm text-black mt-4 font-light">
            Fill the form and send in your queries. I will respond as soon as I
            can. Alternatively, You can reach out to me at my email address.
          </p>
        </div>
        <form
          // onSubmit={handleSubmit}
          className=" rounded shadow-xl flex flex-col px-8 py-8 bg-white"
        >
          <h1 className="text-2xl font-bold dark:text-black">
            Send a message
          </h1>

          <label
            htmlFor="fullname"
            className=" font-light mt-8 dark:text-black"
          >
            Full name<span className=" dark:text-black">*</span>
          </label>
          <input
            type="text"
            // value={fullname}
            // onChange={(e) => {
            //   setFullname(e.target.value);
            // }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light dark:text-black"
          />
          {/* <p className="text-red-500">Fullname cannot be empty.</p> */}

          <label
            htmlFor="email"
            className="text-black font-light mt-4 dark:text-black"
          >
            E-mail<span className="text-black">*</span>
          </label>
          <input
            type="email"
            name="email"
            // value={email}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {/* {errors?.email && (
            <p className="text-red-500">Email cannot be empty.</p>
          )} */}

          <label
            htmlFor="subject"
            className=" font-light mt-4 dark:text-black"
          >
            Subject<span className="text-black">*</span>
          </label>
          <input
            type="text"
            name="subject"
            // value={subject}
            // onChange={(e) => {
            //   setSubject(e.target.value);
            // }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black"
          />
          {/* {errors?.subject && (
            <p className="text-black">Subject cannot be empty.</p>
          )} */}
          <label
            htmlFor="message"
            className="text-black font-light mt-4 dark:text-black"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            // value={message}
            // onChange={(e) => {
            //   setMessage(e.target.value);
            // }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></textarea>
          {/* {errors?.message && (
            <p className="text-red-500">Message body cannot be empty.</p>
          )} */}
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center hover:shadow-lg"
            >
              Send
              {/* {buttonText} */}
              {/* <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-cyan-500 ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg> */}
            </button>
          </div>
          <div className="text-left">
            {/* {showSuccessMessage && (
            <p className="text-green-500 font-semibold text-sm my-2">
              Thankyou! Your Message has been delivered.
            </p>
            )}
            {showFailureMessage && (
            <p className="text-red-500">
              Oops! Something went wrong, please try again.
            </p>
            )} */}
          </div>
        </form>
      </header>
      <section className="bg-white">
        <h1
          className="text-4xl font-bold text-center md:mt-10 gradient-text text-gray-700 mt-4"
        >
          Reach out
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 md:grid-cols-3 gap-6 text-black">
          <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:cursor-pointer hover:shadow-lg hover:bg-indigo-200 transition duration-200 ease-in-out">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-black h-4 w-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                fill="currentColor"
              />
              <path
                d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                fill="currentColor"
              />
              <path
                d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-black font-light">+91 9871023007</p>
          </div>
          <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer hover:bg-indigo-200 transition duration-200 ease-in-out">
            <svg
              width="24"
              height="24"
              className="text-black h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-black font-light">
              info@eduallsolutions.com
            </p>
          </div>
          <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg hover:bg-indigo-200 cursor-pointer transition duration-200 ease-in-out">
            <svg
              width="24"
              height="24"
              className="text-black h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-black font-light">
              eduallsolutions@gmail.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
