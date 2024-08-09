import { useState } from "react";
import "../ui/Magazine.css";
import ButtonMag from "../ui/ButtonMag";
import "../ui/content.css";
import { motion } from "framer-motion";
import { articles } from "../Constants/Magazine";

const Magazine = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const showFullArticle = (index) => {
    setSelectedArticle(index);
    setTimeout(() => {
      setIsVisible(true);
    }, 0);
  };

  const hideFullArticle = () => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedArticle(null);
    }, 400);
  };

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div>
        <div className="pb-20 text-center">
          <h1 className="lg:text-3xl xs:text-xl font-bold">
            Welcome to Our Magazine
          </h1>
        </div>

        <div className="flex flex-wrap gap-10 lg:gap-20 justify-center">
          {articles.map((article, index) => (
            <div
              className="cards flex flex-wrap"
              key={index}
              onClick={() => showFullArticle(index)}
            >
              <div
                className="relative mx-4 -mt-7 overflow-hidden rounded-xl shadow-lg 
              shadow-blue-gray-500/40 bg-center"
              >
                <img src={article.image} alt={article.title} />
              </div>
              <div className="p-6 text-white">
                <h5
                  className="mb-2 block font-sans text-xl font-semibold leading-snug 
              tracking-normal text-blue-gray-900 antialiased"
                >
                  {article.title}
                </h5>
                <p
                  className="block font-sans text-base font-semibold leading-relaxed 
              text-inherit antialiased italic"
                >
                  {article.author}
                </p>
                <p
                  className="block font-sans text-base font-light leading-relaxed text-inherit 
              antialiased"
                >
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedArticle !== null && (
          <div id="arti" className={`work ${isVisible ? "show" : ""}`}>
            <div className="bg-white/[0.5] rounded-xl text-black lg:w-[85vw] overflow-auto">
              <div onClick={hideFullArticle}>
                <ButtonMag />{" "}
              </div>
              <div
                className={`article-title ${
                  articles[selectedArticle].header === "poem"
                    ? "centered-content"
                    : ""
                }`}
              >
                {articles[selectedArticle].title}
              </div>
              <br />
              <div
                className={`article-author ${
                  articles[selectedArticle].header === "poem"
                    ? "centered-content"
                    : ""
                }`}
              >
                {articles[selectedArticle].author}
              </div>
              <br />
              <div
                className={`article-content ${
                  articles[selectedArticle].header === "poem"
                    ? "centered-content"
                    : ""
                }`}
                dangerouslySetInnerHTML={{
                  __html: articles[selectedArticle].content,
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Magazine;
