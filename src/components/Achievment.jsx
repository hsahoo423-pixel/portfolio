import nptel1 from "../assets/nptel1.jpeg";
import nptel2 from "../assets/nptel2.jpeg";
import nptel3 from "../assets/nptel3.jpeg";
import aiml from "../assets/aiml.jpeg";
import java from "../assets/java.jpeg";

function Achievement() {
  const certificates = [
    {
      image: nptel1,
      title: "Industry 4.0 and Industrial Internet of Things",
      description:
        "Successfully completed the NPTEL certification course on Industry 4.0 and Industrial Internet of Things, gaining knowledge of smart manufacturing, automation, cyber-physical systems, and digital transformation technologies.",
    },
    {
      image: nptel2,
      title: "Affective Computing",
      description:
        "Completed the NPTEL certification in Affective Computing, exploring emotion recognition, machine learning techniques, human-computer interaction, and AI-based emotion analysis systems.",
    },
    {
      image: nptel3,
      title: "Privacy and Security in Online Social Media",
      description:
        "Earned NPTEL certification in Privacy and Security in Online Social Media, learning about cyber security, privacy protection, online threats, social media risks, and secure digital communication.",
    },
    {
      image: aiml,
      title: "Artificial Intelligence & Machine Learning Internship",
      description:
        "Successfully completed an Artificial Intelligence and Machine Learning internship with hands-on experience in machine learning, deep learning, computer vision, and AI applications. Developed a real-time Face Emotion Detection project.",
    },
    {
      image: java,
      title: "Java Programming Certification",
      description:
        "Completed a Java Programming certification, gaining strong knowledge of object-oriented programming, exception handling, collections framework, JDBC, and Java application development.",
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
          color: "#60a5fa",
          marginBottom: "40px",
        }}
      >
        Achievements & Certifications
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        {certificates.map((certificate, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              width: "300px",
              padding: "18px",
              borderRadius: "15px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h3
              style={{
                marginTop: "15px",
                color: "#60a5fa",
                fontSize: "18px",
              }}
            >
              {certificate.title}
            </h3>

            <p
              style={{
                marginTop: "10px",
                color: "#cbd5e1",
                fontSize: "14px",
                lineHeight: "1.6",
                textAlign: "justify",
              }}
            >
              {certificate.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievement;