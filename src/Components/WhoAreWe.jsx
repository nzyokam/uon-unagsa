import { useEffect, useState } from "react";
import "../ui/Card.css";
import { cardContents } from "../Constants/HomeCard";

const WhoAreWe = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1280);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <section
        className={`flex flex-${isMobile ? 'col' : 'row'} gap-5 lg:gap-20`}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {cardContents.map((content, index) => (
          <div className="card" key={index}>
            <div className="heading">
              <div>
                <div>{content.icon}</div>
                <br />
                <div>{content.title}</div>
                <br />
                <div className="text-white">{content.description}</div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WhoAreWe;
