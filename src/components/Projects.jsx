import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      img: "./assets/project-1.png",
      link: "https://michaelsamy10.github.io/Project_1_HTML_CSS",
      description: "HTML & CSS project",
    },
    {
      img: "./assets/project-2.png",
      link: "https://michaelsamy10.github.io/Project_2_HTML5_CSS3",
      description: "HTML5 & CSS3 project",
    },
    {
      img: "./assets/project-3.png",
      link: "https://michaelsamy10.github.io/Project-3-bootstrap",
      description: "Bootstrap project",
    },
    {
      img: "./assets/project-4.png",
      link: "https://michaelsamy10.github.io/Project-4-js",
      description: "Javascript project",
    },
    {
      link: "https://michaelsamy10.github.io/react-todo-app",
      img: "./assets/project-5.png",
      description: "Todo app React",
    },
  ];
  return (
    <div>
      <h2
        className="text-center mb-5 fw-bolder text-white bg-gradient p-3"
        style={{
          width: "max-content",
          margin: "auto",
          backgroundColor: "rgb(57, 57, 57)",
          border: "1px solid white",
          borderRadius: 10,
        }}
      >
        My Projects
      </h2>
      <div style={{ width: "90%", margin: "auto" }}>
        <div className="row row-gap-5">
          {projects.map((project, index) => (
            <div key={index} className={`col-lg-4 col-md-6 col-sm-12`}>
              <a key={index} href={project.link} target="_blank">
                <div className={`${styles.projectSection} h-100`}>
                  <img
                    src={project.img}
                    className="img-fluid h-100 "
                    style={{ borderRadius: 20 }}
                  />
                  <div
                    className={`${styles.projectContainer} d-flex justify-content-center align-items-center`}
                  >
                    <h2
                      className="text-black fw-bolder text-capitalize"
                      style={{ fontSize: 35 }}
                    >
                      {project.description}
                    </h2>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
