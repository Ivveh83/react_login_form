import { Link } from "react-router-dom";

const WhenLoggedIn = () => {
  return (
    <section>
      <h1>You are logged in!</h1>
      <br />
      <p>
        <Link to="/">Home</Link>
      </p>
    </section>
  );
};

export default WhenLoggedIn;
