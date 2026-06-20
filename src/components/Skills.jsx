function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "SQL",
    "Java",
    "Bootstrap",
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "30px",
        }}
      >
        My Skills
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "15px 30px",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: "bold",
              minWidth: "120px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.background = "#2563eb";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "#1e293b";
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;