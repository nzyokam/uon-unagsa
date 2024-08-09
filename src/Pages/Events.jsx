import { events } from "../Constants/Events";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div>
        <h1 className="uppercase mb-20 text-center sm:text-xl xs:text-xl lg:text-3xl">
          Curious what Our Events Look Like?
        </h1>

        <div className="flex flex-wrap justify-center md:gap-10 lg:gap-20">
          {events.map((event, index) => (
            <div
              className="relative flex w-[500px] flex-col rounded-xl bg-white bg-clip-border 
    text-gray-700 shadow-md mb-10"
              key={index}
            >
              <div
                className="relative mx-4 -mt-6 w-auto lg:h-[300px] overflow-hidden rounded-xl shadow-lg 
      shadow-blue-gray-500/40 bg-center xs:h-[150px] sm:h-[250px]"
                style={{
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="p-6">
                <h5
                  className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal 
    text-blue-gray-900 antialiased"
                >
                  {event.title}
                </h5>
                <p
                  className="block font-sans text-base font-light leading-relaxed text-inherit 
    antialiased"
                >
                  {event.description}
                </p>
              </div>
              <div className="p-6 pt-0 text-center">
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="select-none rounded-lg 
    bg-blue-500 py-3 px-6 text-center text-white transition-all hover:shadow-lg 
    hover:shadow-blue-500/40"
                >
                  See More Pictures
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Events;
