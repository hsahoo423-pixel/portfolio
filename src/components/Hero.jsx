import profile from "../assets/profile_pic.jpeg";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="intro">Hi, I'm</p>

        <h1>
          Harapriya <span>Sahoo</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p className="description">
           
            Passionate and detail-oriented Software Developer with hands-on experience in Java, HTML, CSS, Java Script, React.js.
           
           
        </p>

        
      </div>

      <div className="hero-right">
        
         <img
  src={profile}
  alt="profile"
  style={{
    position: "absolute",
    top: "100px",
    right: "200px",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #8b5cf6",
    boxShadow: "0 0 20px #8b5cf6"
  }}
/>

        
      </div>
    </section>
  );
}

export default Hero;