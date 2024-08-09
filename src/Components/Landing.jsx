import { motion } from "framer-motion";
import gsap from "gsap";
import { LampContainer } from "./ui/lamp";
import { useGSAP } from "@gsap/react";

export const Landing = () => {
  useGSAP(() => {
    gsap.to("#landing-title", {
      opacity: 1,
      duration: 2,
      delay: 1,
      y: -15,
      ease: "circle.inOut",
    });
  }, []);

  return (
    <div>
      {/* Large devices */}
      <div className="hidden xl:block">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-0 mb-0 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Welcome to the <br />
            <span className="text-yellow">
              University of Nairobi Anthropology
              <br /> and Gender Students Association
            </span>
            <div className="mt-4 text-xl text-neutral-300 max-w-lg text-center mx-auto">
              <p className="mb-8 leading-loose">
                We are a dynamic student organisation dedicated to representing
                the academic, social, and developmental needs of students in the
                fields of Anthropology and Gender Studies.
              </p>
              <p className="mb-8">
                <span className="text-white">
                  <strong>Motto:</strong>
                </span>
                <br />
                <em>Exploration of Human Diversity.</em>
                <br />
                <br />
                <span className="text-white">
                  <strong>Mission:</strong>
                </span>
                <br />
                <em>
                  To advocate for greater appreciation of anthropology through
                  <br /> the further exploration of human diversity and gender.
                </em>
              </p>
            </div>
          </motion.h1>
        </LampContainer>
      </div>

      {/* Small devices */}
      <div
        id="landing-title"
        className="xl:hidden opacity-0 pl-8 pb-20 pr-8 m-5"
      >
        <h1
          className="lg:text-4xl sm:text-3xl xs:text-2xl xs:pb-10 md:text-4xl font-bold text-center bg-clip-text 
          text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 bg-opacity-50"
        >
          Welcome to the <br />
          <span className="text-yellow">
            University of Nairobi Anthropology
            <br /> and Gender Students Association
          </span>
        </h1>
        <div className="mt-4 font-normal xs:text-xs md:text-base text-neutral-300 max-w-lg text-center mx-auto">
          <p className="mb-8 leading-loose">
            We are a dynamic student organisation dedicated to representing the
            academic, social, and developmental needs of students in the fields
            of Anthropology and Gender Studies.
          </p>
          <p className="mb-8">
            <span className="text-white">
              <strong>Motto:</strong>
            </span>
            <br />
            <em>Exploration of Human Diversity.</em>
            <br />
            <br />
            <span className="text-white">
              <strong>Mission:</strong>
            </span>
            <br />
            <em>
              To advocate for greater appreciation of anthropology through
              <br /> the further exploration of human diversity and gender.
            </em>
          </p>
        </div>
      </div>

      <img
        src="/collage.svg"
        className="w-full h-auto lg:block xs:hidden sm:hidden"
      />
    </div>
  );
};
