import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

// eslint-disable-next-line react/prop-types
const Typewriter = ({ text }) => {
  const roleRef = useRef(null);
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Engineer",
  ];

  // const tl = gsap.timeline();

  // useEffect(() => {
  //   roles.forEach((role) => {
  //     tl.to(roleRef.current, {
  //       opacity: 0,
  //       duration: 0.3,
  //       onComplete: () => {
  //         roleRef.current.textContent = role;
  //       },
  //     })
  //       .to(roleRef.current, {
  //         opacity: 1,
  //         duration: 0.5,
  //       })
  //       .to({ opacity: 0, duration: 0.5 });
  //   });
  // });
  useEffect(() => {
    gsap.to("#typewriter", {
      text: text,
      duration: 3, // Typing speed in seconds
      ease: "power1.inOut",
      repeat: -1, // Change to -1 for infinite loop
      repeatDelay: 1, // Delay before restarting
    });
  }, [text]);
  return <h2 id="typewriter" ref={roleRef}></h2>;
};

export default Typewriter;
