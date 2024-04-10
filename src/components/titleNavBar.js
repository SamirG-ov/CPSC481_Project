import BackButton from "./backButton";

// NavBar component with title
const TitleNavBar = ({ title }) => {
  return (
    <header style={{ display: "flex", justifyContent: "center" }}>
      <BackButton />
      <div className="logo">
        <h1 style={{ fontSize: "40px", margin: "20px 0px 5px 0px" }}>
          <span style={{ color: "red" }}>X</span>
          <span style={{ color: "blue" }}>Y</span>
          <span style={{ color: "green" }}>Z</span> Bistro
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            margin: "2px 0px 5px 0px",
            fontWeight: "bold",
          }}
        >
          Since 2015
        </p>
      </div>

      <h1 className="title">{title}</h1>
    </header>
  );
};

export default TitleNavBar;
