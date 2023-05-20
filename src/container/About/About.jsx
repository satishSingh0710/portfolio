import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
function About() {
   const abouts = [
      {
         title: "Full-Stack Developer",
         description:
            "I'm a Full-Stack Developer with a passion for learning and building new things. My tech stack- MongoDB, ExpressJS, ReactJS, NodeJS, TailwindCss,Bootstrap,Material UI, Sass, Java, Python and more. 👩‍💻",
         imageUrl: images.about02,
      },
      {
         title: "3rd Yr. Undergrad",
         description:
            "Currently pursuing my Bachelors in Computer Science and Engineering from Graphic Era Hill University, Dehradun.\tMy Learnings- DSA, OOPS, DBMS, OS, Cyber Security, Computer Networks etc. 📑",
         imageUrl: images.about01,
      },
      {
         title: "Problem Solver",
         description:
            "An avid problem solver who is always keen for finding solutions and exploring new ideas. This keeps me motivated and I believe every problem comes up with an opportunity.🎯",
         imageUrl: images.about03,
      },
      {
         title: "Freelancer",
         description:
            "I'm a Freelancer and I'm always open to new opportunities. I'm available for freelance work. If you have a project that you want to get started with, get in touch and I'll be happy to help.😊",
         imageUrl: images.about04,
      }
   ];
   return (
      <>
         <h2 className="head-text">
            About
            <span> Me!</span>
         </h2>
         <div className="app__profiles">
            {abouts.map((about, index) => (
               <motion.div
                  className="app__profile-item"
                  key={about.title + index}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: "tween" }}
               >
                  <img src={about.imageUrl} alt={about.title}></img>
                  <h2 className="bold-text" style={{ marginTop: 20 }}>
                     {about.title}
                  </h2>
                  <p className="p-text" style={{ marginTop: 10 }}>
                     {about.description}
                  </p>
               </motion.div>
            ))}
         </div>
      </>
   );
}

export default AppWrap(
   MotionWrap(About, "app__about"),
   "about",
   "app__whitebg"
);
