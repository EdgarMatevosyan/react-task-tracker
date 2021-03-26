import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      {/* Use Link instead of ahref to avoid a refresh when switching pages */}
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
