function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website developed using React.js to showcase my skills, projects, education, certifications, and contact information. It provides a professional online presence and highlights my technical expertise through a responsive and user-friendly interface.",
    },
    {
      title: "Student Management System",
      description:
        "A Java-based application used to manage student information efficiently. It allows users to add, update, delete, and view student records such as names, roll numbers, courses, and grades.",
    },
    {
      title: "Face Emotion Detection",
      description:
        "An AI and Machine Learning project that identifies human emotions from facial expressions in real time using computer vision and deep learning techniques.",
    },
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#0f172a",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "40px",
        }}
      >
        My Projects
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              width: "320px",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(37,99,235,0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.3)";
            }}
          >
            <h3
              style={{
                color: "#60a5fa",
                marginBottom: "15px",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                lineHeight: "1.6",
                color: "#d1d5db",
              }}
            >
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;