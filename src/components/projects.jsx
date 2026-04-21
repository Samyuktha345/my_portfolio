function Projects({ selectedSkill }) {
  const projects = [
    {
      title: "Portfolio Website",
      skills: ["HTML", "CSS", "React"],
      desc: "Built using React to showcase my portfolio.",
      links:"https://github.com/"
    },
    {
      title: "Employee Payroll System",
      skills: ["Java"],
      desc: "Java application to manage employee payroll.",
      links:"https://github.com/Samyuktha345/Employee_Payroll_System/tree/master/Employee_payroll"
    },
    {
      title: "Landing Page",
      skills: ["HTML", "CSS"],
      desc: "Responsive landing page using HTML & CSS.",
      links:"https://github.com/Samyuktha345/codsoft"
    }
  ];

  return (
    <div id="projects" className="section">
      <h2 className="title">Projects</h2>

      <div className="projects-container">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`card ${
  (selectedSkill === "CSS" && (p.skill === "HTML" || p.skill === "React")) ||
  p.skills.includes(selectedSkill)
    ? "highlight"
    : ""
}`}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.links} target="_blank">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;