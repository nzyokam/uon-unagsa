import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [faculty] = useState("Faculty of Arts & Social Sciences");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  const handleSubmit = (e) => {
    e.preventDefault();

    const regNumberPattern = /^N\d{2}\/\d{4}\/\d{4}$/;
    if (!regNumberPattern.test(regNumber)) {
      alert("Please enter a valid registration number (e.g., N03/2343/2024).");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!name || !email || !regNumber || !course || !year) {
      alert("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    const serviceID = "service_viw4vab";
    const templateID = "template_r9iidzj";
    const publicKey = "Qjl8IWNP_SrONXWaS";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "UNAGSA",
      regNumber: regNumber,
      faculty: faculty,
      course: course,
      year: year,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setRegNumber("");
        setCourse("");
        setYear("");
        setMessage("");
        setLoading(false);
        setSuccessMessage(
          "Application submitted successfully. "
        ); // Set success message

     
       
      })
      .catch((error) => {
        console.error("Error sending email", error);
        setLoading(false);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const hideSuccessMessage = () => {
    const successMessage = document.querySelector("#successMessage");
    successMessage.style.opacity = "0";
  }

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="relative h-full flex justify-center">
      {successMessage && (
  <div id="successMessage" className="overlay opacity-1">
    <div className="cards sm:h-[200px] lg:flex-row sm:flex-col">
      
    
      <div className="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          strokeWidth="0"
          fill="currentColor"
          stroke="currentColor"
          className="icon"
        >
          <path 
            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
          ></path>
        </svg>
      </div>
      <div className="message-text-container">
        <p className="message-text">{successMessage}</p>
        <p className="sub-text">Our publicity secretary will contact you with more information soon.</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 15"
        strokeWidth="0"
        fill="none"
        stroke="currentColor"
        className="cross-icon"
     onClick={hideSuccessMessage}/* Add your close functionality here */
      >
        <path
          fill="currentColor"
          d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </div>
  </div>
)}


        <form
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
          className="md:w-[70vw] xs:w-[80vw] lg:w-[50vw] p-6 border border-gray-200 rounded-lg shadow-lg bg-white"
        >
          <h2 className="text-center text-2xl font-bold mb-6 text-black">
            Sign Up
          </h2>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="regNumber"
              className="block mb-2 font-bold text-black"
            >
              Registration Number
            </label>
            <input
              type="text"
              id="regNumber"
              placeholder="Your Registration Number"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fixedFaculty"
              className="block mb-2 font-bold text-black"
            >
              Faculty
            </label>
            <input
              type="text"
              id="fixedFaculty"
              value={faculty}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="dropdownCourse"
              className="block mb-2 font-bold text-black"
            >
              Course
            </label>
            <select
              id="dropdownCourse"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="B.A Gender Studies">B.A Gender Studies</option>
              <option value="B.A Anthropology">B.A Anthropology</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="dropdownYear"
              className="block mb-2 font-bold text-black"
            >
              Year
            </label>
            <select
              id="dropdownYear"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="First Year">First Year</option>
              <option value="Second Year">Second Year</option>
              <option value="Third Year">Third Year</option>
              <option value="Fourth Year">Fourth Year</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-black">
              Additional Info
            </label>
            <textarea
              cols="30"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded resize-none text-black"
            />
          </div>
          <button
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            type="submit"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 01.44-2.72l1.76.97A6 6 0 006 12H4zm10.12-4.86l1.76-.97A8 8 0 0120 12h-2a6 6 0 00-3.88-4.86zM12 4a8 8 0 01-6.72 3.12l-.97-1.76A6 6 0 0112 4zm-8 6a8 8 0 016.72-3.12l.97 1.76A6 6 0 004 12h2zm0 0a6 6 0 003.88 4.86l1.76.97A8 8 0 014 12h2zm8 8a8 8 0 01-6.72-3.12l-.97 1.76A6 6 0 0012 20zm6.72-3.12l.97-1.76A6 6 0 0012 20v2a8 8 0 016.72-3.12z"
                ></path>
              </svg>
            ) : (
              "Send Email"
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default SignUp;
