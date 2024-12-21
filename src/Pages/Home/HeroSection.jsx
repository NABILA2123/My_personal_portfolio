export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Nabila DOUMA</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">DATA & MACHINE </span>{" "}
              <br />
              LEARNING ENGINEER
            </h1>
            <p className="hero--section-description">
            I’m a Data and Machine Learning Engineer with a passion for turning complex problems into elegant
              <br /> solutions. Whether it’s training cutting-edge models or uncovering hidden insights from data, I love
              <br /> using technology to make the world smarter, faster, and more efficient.
              <br /> Explore my projects, where data meets innovation, and see how I bring algorithms to life. Let's
              <br /> connect if you're ready to dive into the world of AI and data with me!
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.jpg" alt="Hero Section" />
        </div>
      </section>
    );
  }