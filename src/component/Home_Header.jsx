var HomeHeader = () => {
  return <Header />;
};

var Header = () => {
  return (
    <div className="home-header">
      <div className="header-left">
        <p> {`<ƙꪖꪹꪖꪀ𝒿𝒾𝓉 క𝒾𝓃ℊ𝒽/>`}</p>
      </div>
      <div className="header-right">
        <a>Home</a>
        <a>About</a>
        <a>Experience</a>
        <a>Contact</a>
      </div>
    </div>
  );
};

export default HomeHeader;
