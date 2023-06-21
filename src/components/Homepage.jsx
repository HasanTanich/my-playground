import styles from "../styles/Header.module.css";

function Homepage() {
  return (
    <div className="p-24">
      <StyledLink backgroundColor="brown" activeColor="blue">
        WOW
      </StyledLink>
      <br />
      <br />
      <br />
      <AblaNurdanCoolStyledLink
        backgroundColor="brown"
        activeColor="blue"
        className="text-white font-bold"
      >
        Very cool
      </AblaNurdanCoolStyledLink>
    </div>
  );
}

export default Homepage;

function StyledLink({
  children,
  className = "",
  backgroundColor,
  activeColor,
}) {
  const styling = {
    backgroundColor: backgroundColor,
    "--active-color": activeColor,
  };

  return (
    <a
      href="#"
      className={`font-bold ${className} ${styles.link} p-2 rounded`}
      style={styling}
    >
      {children}
    </a>
  );
}

function AblaNurdanCoolStyledLink({
  backgroundColor,
  activeColor,
  children,
  className = "",
}) {
  const styling = {
    backgroundColor: backgroundColor,
    "--active-color": activeColor,
  };

  return (
    <a
      href="#"
      className={`${className} ${styles.link} p-2 rounded`}
      style={styling}
    >
      {children}
    </a>
  );
}
