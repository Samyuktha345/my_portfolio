function Skills({ setSelectedSkill }) {
  const skills = ["Java", "HTML", "CSS", "JavaScript", "React"];

  return (
    <div id="skills" className="section">
      <h2 className="title">Skills</h2>

      <div className="skills-container">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="skill"
            onClick={() => setSelectedSkill(skill)}
          >
            <div className="circle">
              {skill}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;