import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Skills = () => {
  const skills = [
    {
      skill: "Frontend",
      percentage: 90,
    },
    {
      skill: "Backend",
      percentage: 80,
    },
    {
      skill: "Sitecore",
      percentage: 80,
    },
  ];

  return (
    <div>
      <h2 className="text-center mb-5" style={{ fontSize: 40 }}>
        Skills
      </h2>

      <div
        className="d-flex justify-content-center container"
        style={{ gap: 80 }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="d-flex flex-column gap-3"
            style={{ width: 150 }}
          >
            <CircularProgressbar
              key={index}
              value={skill.percentage}
              text={`${skill.percentage}%`}
              className="flex-start"
              styles={buildStyles({
                textColor: "black",
                pathColor: "#3b82f6",
                //   trailColor: "#d6d6d6",
                strokeLinecap: "round",
              })}
            />
            <h4 className="text-center">{skill.skill}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
