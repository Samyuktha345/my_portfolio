import profile from "../assets/myimg.jpeg";

function Hero() {
  return (
    <div className="hero-container">

      {/* LEFT IMAGE */}
      <div className="hero-left">
        <img src={profile} alt="profile" className="hero-img" />
      </div>

      {/* RIGHT TEXT */}
      <div className="hero-right">
        <div className="social-links">
        <a href="https://github.com/Samyuktha345" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/samyuktha-r-m-32267028a/" target="_blank">LinkedIn</a>
        <a href="https://leetcode.com/u/SamyukthaRM/" target="_blank">LeetCode</a>
      </div>
        <h1>
          Hi, I'm <span>Samyuktha</span>
        </h1>

        <p className="hero-sub">
          Aspiring Full Stack Developer passionate about building modern web applications.
        </p>

        <p className="hero-desc">
           Passionate about web development and creating user-friendly applications.
           I focus on improving my coding skills through hands-on projects and continuous learning.
        </p>
      </div>
      

    </div>
  );
}

export default Hero;