function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "30px 20px",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h3 style={{ color: "#60a5fa", marginBottom: "20px" }}>
        Contact Me
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
          marginBottom: "20px",
        }}
      >
        <a
          href="https://www.linkedin.com/in/harapriya-sahoo-4b6017294"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#cbd5e1",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          <strong>LinkedIn:</strong> harapriya-sahoo
        </a>

        <a
          href="https://github.com/hsahoo423-pixel"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#cbd5e1",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          <strong>GitHub:</strong> hsahoo423-pixel
        </a>

        <a
          href="mailto:hsahoo423@gmail.com"
          style={{
            color: "#cbd5e1",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          <strong>Email:</strong> hsahoo423@gmail.com
        </a>

        <a
          href="tel:+91 8260811475"
          style={{
            color: "#cbd5e1",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          <strong>Phone:</strong> +91 8260811475
        </a>
      </div>

      <hr
        style={{
          border: "0",
          borderTop: "1px solid #334155",
          margin: "20px auto",
          width: "80%",
        }}
      />

      <p style={{ color: "#94a3b8" }}>
        © 2026 Harapriya Sahoo | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;