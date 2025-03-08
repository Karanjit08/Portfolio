import Typical from "react-typical";

var HomeBody = () => {
  return (
    <div className="home-body">
      <div className="home-body-container">
        <div className="home-body-bg-img">
          <img src="src/assets/cloudBg.png"></img>
        </div>
        <div className="home-body-view">
          <div className="home-body-view-info">
            <div className="home-body-view-info-container">
              <p className="home-body-view-info-container-title">
                Hi, I am Karanjit
              </p>
              <div className="home-body-view-info-container-skills">
                <Typical
                  steps={[
                    "Flutter Developer",
                    1000,
                    "Mobile Developer",
                    1000,
                    "Front End Developer",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </div>
              <p className="home-body-view-info-container-desc">
                I am a Flutter Developer with over 2 years of experience in building
                scalable B2B and B2C applications for Android, iOS, and Web
              </p>
              <div className="home-body-view-info-container-social-links">
              <a href="https://github.com/Karanjit08" target="_blank">
              <img src="https://img.icons8.com/doodle/40/000000/github--v1.png"></img>
              </a>
              <a href="https://www.linkedin.com/in/karanjit-singh-randhawa-55bb1b1b8/" target="_blank">
              <img src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png"></img>
              </a>
              <a href="https://www.instagram.com/karanjit_randhawa99/" target="_blank">
              <img src="https://img.icons8.com/doodle/40/000000/instagram-new--v2.png"></img>
              </a>
              </div>
            </div>
          </div>
          <div className="home-body-view-img">
            <img
              className="home-body-view-img-source"
              src="src/assets/webdev.svg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
