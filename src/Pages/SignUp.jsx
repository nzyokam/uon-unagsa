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

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="relative h-full flex justify-center">
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
