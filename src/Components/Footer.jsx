import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-center mt-4">
        <div className="flex lg:flex-row justify-around xs:flex-col md:flex-row sm:flex-col flex-wrap px-4">
          {/* About Section */}
          <div className="w-full lg:flex md:flex md:flex-col lg:flex-col xs:hidden lg:w-1/4 mb-8 px-4 sm:hidden">
            <h2 className="text-xl font-bold mb-4 text-maroon-500">UNAGSA</h2>
            <p>
              University of Nairobi Anthropology and Gender Students Association
            </p>
          </div>

          {/* Contact Section */}
          <div className="w-full lg:w-1/4 mb-8 px-4">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>
              Email:{" "}
              <a href="mailto:uonasa2023@gmail.com" className="text-blue-400">
                info@unagsa.com
              </a>
            </p>
            <p>Phone: +254 700 000 000</p>
            <p>Address: University of Nairobi, Nairobi, Kenya</p>
          </div>

          {/* Social Section */}
          <div className="w-full lg:w-1/4 mb-8 px-4">
            <h2 className="text-xl font-bold mb-4 pb-5">Follow Us</h2>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/unagsa_uon/"
                className="social-link gradient-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/unagsa"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl text-blue-700" />
              </a>
              <a
                href="https://x.com/UoNAnthroSA"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl text-blue-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/uon-anthropology-and-gender-students-association-a11796293/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-blue-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-slate-100/[0.1] text-center text-gray-400 py-4">
          &copy; 2024 UNAGSA | Designed by{" "}
          <a
            className="hover:text-black"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nzyoka M. Nguutu
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
