import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Typewriter from "./Typewriter";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import Connect from "./Connect";
import Navbar from "./Navbar";

const Home = () => {
  const icons = [
    {
      name: "Facebook",
      icon: <FaFacebookF key="facebook" />,
      link: "https://www.facebook.com/Michael.samy196/",
    },
    {
      name: "Github",
      icon: <FaGithub key="github" />,
      link: "https://github.com/MichaelSamy10",
    },
    {
      name: "linkedin",
      icon: <FaLinkedinIn key="linkedin" />,
      link: "https://www.linkedin.com/in/michael-samy-28a4651bb/",
    },
  ];
  return (
    <div>
      <Navbar icons={icons} />

      <div
        className="hero"
        style={{
          fontSize: "2rem",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          paddingTop: "8rem",
        }}
      >
        <h1
          className="text-capitalize bg-gradient p-2"
          style={{
            backgroundColor: "rgb(57, 57, 57)",
            border: "1px solid white",
            borderRadius: 10,
          }}
        >
          Welcome all in my portfolio
        </h1>
        <h2 className="text-center" style={{ fontSize: "3rem" }}>
          Hi! I&apos;m Michael Samy <br />
          <span className="fs-2">Frontend Developer</span>
        </h2>

        {/* <Typewriter text="Frontend" /> */}

        {/* <div style={{ fontSize: 15, textAlign: "start" }}>
          <span className="me-2"> Let&apos;s Connect </span>
          <a className="text-white" href="#">
            <FaRegArrowAltCircleRight />
          </a>
        </div> */}
      </div>

      <div
        id="Skills"
        className="w-75 p-5"
        style={{
          backgroundColor: "#E5DDC5",
          borderRadius: 50,
          margin: "30px auto",
        }}
      >
        <Skills />
      </div>

      <div
        id="Projects"
        style={{
          padding: 50,
          paddingBottom: 200,
          backgroundColor: "#191919",
        }}
      >
        <Projects />
      </div>

      <Connect />

      <Footer icons={icons} />
    </div>
  );
};

export default Home;
