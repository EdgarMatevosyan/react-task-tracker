import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      {/* Use Link instead of ahref to avoid a refresh when switching pages */}
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
