import classes from "./styles.module.css";
import { useRef } from "react";

function NewsletterRegistration() {
  const emailRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
