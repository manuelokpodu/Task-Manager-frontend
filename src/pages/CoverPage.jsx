import React, { useEffect, useState } from "react";
import help from "../assets/man&womanhelp.png";
import man from "../assets/justman1.png";
import woman from "../assets/justwoman.png";
import { Link } from "react-router-dom";

const CoverPage = () => {
  const homeImages = [help, man, woman];

  // State to track the index of the current Image being displayed
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //State to control wheather the transition effect is active
  const [isTransitioning, setIsTransitioning] = useState(false);

  //useEffect hook to handle the Image Transition logic
  useEffect(() => {
    //Set up an Interval to change the Images every 2.5sec
    const animation = setInterval(() => {
      setIsTransitioning(true); // Start the transition effect

      //After 0.5sec, update the current Image index and stop the transitioning effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => {
          //Calculate the next image index (loop back to the first image if at the end)
          return (prevIndex + 1) % homeImages.length;
        });
        setIsTransitioning(false); // End the transition effect
      }, 500);
    }, 2500);

    // cleanup function of setInterval when the component unmount
    return () => {
      clearInterval(animation);
    };
  }, [homeImages.length]); // Dependency array to re-run the effect if the length of homeImages changes

  return (
    <main className="homepage-con">
      <div className="home-content ">
        <div className="text-start home-text">
          <h1 className="m-0">
            Manage your Tasks on <span>TaskDuty</span>
          </h1>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>
          <Link className="home-a" to="/tasks">
            Go to My Task
          </Link>
        </div>

        {/* ==================== */}

        <div className="home-img">
          <img
            // Applying the "change" className if transitioning is true and removing "change when" it's false
            className={`illu ${isTransitioning ? "change" : ""}`}
            src={homeImages[currentImageIndex]}
            alt=""
            style={{
              opacity: isTransitioning ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default CoverPage;
