const NavBar = () => {
  return (
    <header
      style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}
    >
      <div>
        <h1>
          <span style={{ color: "red" }}>X</span>
          <span style={{ color: "blue" }}>Y</span>
          <span style={{ color: "green" }}>Z</span> Bistro
        </h1>
        <p style={{ textAlign: "center" }}>Since 2015</p>
      </div>
    </header>
  );
};

export default NavBar;
