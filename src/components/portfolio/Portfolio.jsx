import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Personal Portfolio",
    img: "/portfoliowebsite.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    github: "https://github.com/DevTheKar/devthekar.github.io",
    demo: "https://devthekar.github.io",
    date: "May 2024",
  },
  {
    id: 2,
    title: "Auto Enroll",
    img: "/autoenroll.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    github: "https://github.com/DevTheKar/AutoEnroll",
    demo: "/autoenroll.zip",
    date: "- May 2024",
  },
  {
    id: 3,
    title: "Chronobot",
    img: "/Ed+Jan.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    github: "https://github.com/DevTheKar/Chronobot",
    demo: "/Chronobot.exe",
    date: "- April 2024",
  },
  {
    id: 4,
    title: "Amazon Product Watcher",
    img: "/amazon.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    github: "https://github.com/DevTheKar/AmazonProductWatcher",
    demo: "",
    date: "- April 2024",
  },
  {
    id: 5,
    title: "MindfulMe",
    img: "/mindful-me.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    github: "https://github.com/DevTheKar/MindfulMe",
    demo: "",
    date: "- March 2024",
  },
  {
    id: 6,
    title: "RANCS Research Lab",
    img: "/Mach_E_Wallpaper_16-9.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    github: "https://rancs-lab.com",
    demo: "https://www.youtube.com/watch?v=6l2A1gOhfC0&feature=youtu.be",
    date: "- January 2024",
  },
  {
    id: 7,
    title: "Flappy Bird AI",
    img: "/flappybird.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    github: "https://github.com/DevTheKar/FlappyBird",
    demo: "https://www.youtube.com/watch?v=X0PMk7BYuLE",
    date: "- December 2023",
  },
  {
    id: 8,
    title: "Art Insight",
    img: "/artinsight_website.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    github: "https://github.com/DevTheKar/ArtInsight",
    demo: "https://artinsight.streamlit.app",
    date: "- October 2023",
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
