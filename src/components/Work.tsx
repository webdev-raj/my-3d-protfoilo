import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);


  const projects = [
  {
    title: "AI Code Formatter",
    category: "Frontend",
    image: "/images/project1.png",
    link: "https://ai-code-formater.vercel.app",
    tools: "JavaScript, Html, CSS",
  },
  {
    title: "Dynamic Card",
    category: "Frontend",
    image: "/images/project2.png",
    link: "https://dynamic-card-with-react.vercel.app",
    tools: "React, CSS, Tailwind",
  },
  {
    title: "Bubble Game",
    category: "Frontend",
    image: "/images/project3.png",
    link: "https://bubble-game-opal-six.vercel.app",
    tools: "JavaScript, HTML5, tailwindcss",
  },
  {
    title: "AirPods Clone",
    category: "Frontend",
    image: "/images/project4.png",
    link: "https://airpods-clone.vercel.app",
    tools: "React, Tailwind CSS",
  },
  {
    title: "Mini Shop",
    category: "E-commerce",
    image: "/images/project5.png",
    link: "https://beta-version-mini-shop.netlify.app/",
    tools: "html, CSS, JavaScript, Node.js",
  },
  {
    title: "Creepy Mouse Animation",
    category: "Animation",
    image: "/images/project6.png",
    link: "https://creepy-mouse-animation.vercel.app",
    tools: "JavaScript, HTML, CSS",
  },
];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{projects[index].tools}</p>
              </div>
              <WorkImage image={project.image}
                alt={project.title}
                link={project.link}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
