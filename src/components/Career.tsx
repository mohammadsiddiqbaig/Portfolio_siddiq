import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Science</h4>
                <h5>Loyola Institute of Tech & Mgmt</h5>
              </div>
              <h3>2021 - 2025</h3>
            </div>
            <p>
              Completed Diploma in Computer Science with a CGPA of 7.6. Studied software design, object-oriented programming, data structures, and database principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>Techyfy</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed and maintained responsive user interfaces using HTML5, CSS3, JavaScript, and React.js. Engineered reusable React components, custom hooks, and integrated views with RESTful APIs using fetch and Axios.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Developer</h4>
                <h5>Self-Initiated Projects</h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Architecting and building full-featured web applications using MongoDB, Express.js, React.js, and Node.js. Implementing secure authentication (JWT/bcrypt), designing RESTful APIs, and writing clean, maintainable code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
