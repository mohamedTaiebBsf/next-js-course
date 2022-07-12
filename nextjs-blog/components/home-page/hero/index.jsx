import Image from "next/image";
import classes from "./styles.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/john-doe.png"
          alt="An image showing John Doe"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am John Doe</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
