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
                <h4>Web Developer & Learner</h4>
                <h5>Self-Taught / Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively learning full-stack development. Building personal projects using HTML, CSS, JavaScript, and React while exploring version control with Git and GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
