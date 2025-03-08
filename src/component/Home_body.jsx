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
                    1000
                    ]}
                  loop={Infinity}
                  wrapper="p"
                />
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
