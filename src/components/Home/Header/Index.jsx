import "./index.css";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <img className="header-logo" src={logo} alt="" />

          <ul className="header-navlist">
            <li>Home</li>
            <li>Discover</li>
            <li>Guide</li>
            <li>About Us</li>
          </ul>

          <button className="header-contact">Contact Us</button>
        </div>
      </header>
    </>
  );
};

export default Header;
