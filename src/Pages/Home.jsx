import { Landing } from "../Components/Landing";
import WhoAreWe from "../Components/WhoAreWe";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div>
        <Landing />
        <WhoAreWe />
      </div>
    </motion.div>
  );
};

export default Home;
