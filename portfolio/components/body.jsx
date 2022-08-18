import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import it from "../assets/images/IT_clip_art.png";
const Body = () => {
  return (
    <div className="text-dark bg-light body-container">
      <main>
        <div className="px-5 pt-2 col row">
          <h3 className="display-4 mt-3">John Victor Cesar</h3>
          <div className="content-body col-8">
            <p className="lead about-me">
              I&apos;m an aspiring software developer who&apos;s got experience
              in projects, of all scopes, as a freelancer.
              <br />
              The stacks I&apos;m more comfortable with are Next JS & Node JS
              but there are more frameworks I have practice with.{" "}
            </p>
          </div>
          {/* {<div className={styles.imageContainer}>
            <Image
              src={it}
              alt="image-here"
              layout="fill"
              className={styles.image}
            />
          </div>} */}
        </div>
      </main>
    </div>
  );
};

export default Body;
