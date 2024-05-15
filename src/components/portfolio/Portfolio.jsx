import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Personal Portfolio",
    img: "/portfoliowebsite.png",
    desc: "Welcome to my personal website hosted on GitHub Pages! This is where I showcase my projects, share my thoughts, and connect with fellow developers and enthusiasts.",
    github: "https://github.com/DevTheKar/devthekar.github.io",
    demo: "https://devthekar.github.io",
    date: "May 2024",
  },
  {
    id: 2,
    title: "Auto Enroll",
    img: "/AutoEnroll.png",
    desc: "AutoEnroll is a Python script that automates the process of signing up for courses at your university.",
    github: "https://github.com/DevTheKar/AutoEnroll",
    demo: "/main.exe",
    date: "- May 2024",
  },
  {
    id: 3,
    title: "Chronobot",
    img: "/Ed+Jan.png",
    desc: "Chronobot is a platformer shooting game where players control a robotic character navigating through levels filled with enemies and obstacles.",
    github: "https://github.com/DevTheKar/Chronobot",
    demo: "/Chronobot.exe",
    date: "- April 2024",
  },
  {
    id: 4,
    title: "Amazon Product Watcher",
    img: "/amazon.jpeg",
    desc: "This Python script monitors the price of a product on Amazon and sends an email notification if the price drops below a certain threshold.",
    github: "https://github.com/DevTheKar/AmazonProductWatcher",
    demo: "",
    date: "- April 2024",
  },
  {
    id: 5,
    title: "RANCS Research Lab",
    img: "/Mach_E_Wallpaper_16-9.png",
    desc: "Enhancing the quality of life for people, with assuring security and privacy concerns through extensive collaboration among multi-disciplinary fields for better understanding, advanced prevention, control, and solutions.",
    github: "https://rancs-lab.com",
    demo: "https://www.youtube.com/watch?v=6l2A1gOhfC0&feature=youtu.be",
    date: "- January 2024",
  },
  {
    id: 6,
    title: "Flappy Bird AI",
    img: "/flappybird.png",
    desc: "I created an AI-powered Flappy Bird using NEAT and Pygame, demonstrating its impressive skill with an infinite run showcased on YouTube.",
    github: "https://github.com/DevTheKar/FlappyBird",
    demo: "https://www.youtube.com/watch?v=X0PMk7BYuLE",
    date: "- December 2023",
  },
  {
    id: 7,
    title: "Art Insight",
    img: "/artinsight_website.png",
    desc: "Meet ArtInsight In response to these problems, we bring you ArtInsight, a web app that's going to change how you experience art. It's simple: just scan any artwork, and ArtInsight will recognize it and give you all the juicy details you crave.",
    github: "https://github.com/DevTheKar/ArtInsight",
    demo: "https://artinsight.streamlit.app",
    date: "- October 2023",
  },
  {
    id: 8,
    title: "MindfulMe",
    img: "/mindful-me.png",
    desc: "Your go-to web app for mental wellness. Featuring journaling, a quotes generator, and a curated Spotify playlist to uplift your spirits.",
    github: "https://github.com/DevTheKar/MindfulMe",
    demo: "",
    date: "- March 2023",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="button-container">
              <a href={item.demo}><button>See Demo</button></a>
              <a href={item.github}><button>See Code</button></a>
            </div>
            <div className="date">{item.date}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
