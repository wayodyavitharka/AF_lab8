function NavBar() {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          gap: "15px",
          listStyle: "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;