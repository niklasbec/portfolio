import React from "react";
import { motion } from "framer-motion";
import Technology from "./Technology";
import Arrow from "./../png/down-arrow.svg";

const scroll = () => {
  document.getElementById("home-lower").scrollIntoView({
    behavior: 'smooth'
  })
}

export default function Home() {
  return (
    <div className="home">
      <div className="home-upper">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Hey, I'm <span>Nick!</span>
      </motion.h1>
      <motion.h5
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        I'm a full stack software developer with a passion for clean designs. I
        love all things TypeScript, React {"&"} Node with Express.
      </motion.h5>
      <motion.p
        className="location"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        I am currenty located in <span>Cologne, Germany</span>
      </motion.p>
      <motion.div
        className="heading-button-div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <a
          className="heading-button"
          href="https://github.com/niklasbec"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="heading-button"
          href="https://www.linkedin.com/in/niklas-becker-dev/"
          target="_blank"
        >
          LinkedIn
        </a>
      </motion.div>
      {/* <div className="technologies">
        <h1 className="technology-heading">Technologies I use</h1>
        <div className="frontend-backend-misc">
          <div className="technology-list">
            <h2>Frontend</h2>

            <Technology title={"React"} />
            <Technology title={"Typescript"} />
            <Technology title={"Node"} />
            <Technology title={"Less"} />
            <Technology title={"JavaScript"} />
          </div>

          <div className="technology-list">
            <h2>Backend</h2>

            <Technology title={"React"} />
            <Technology title={"Typescript"} />
            <Technology title={"Node"} />
            <Technology title={"Less"} />
            <Technology title={"JavaScript"} />
          </div>

          <div className="technology-list">
            <h2>Misc</h2>

            <Technology title={"React"} />
            <Technology title={"Typescript"} />
            <Technology title={"Node"} />
            <Technology title={"Less"} />
            <Technology title={"JavaScript"} />
          </div>
        </div>
      </div> */}
      <a onClick={scroll}>
      <motion.img
        src={Arrow}
        width="64px"
        className="arrow-down"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1}}
        transition={{ delay: 5, duration: 1 }}
      />
      </a>
    </div>
    <div id="home-lower" className="home-lower">

    </div>
    </div>
  );
}
