import ProfileForm from "../profile-form";
import classes from "./styles.module.css";

function UserProfile() {
  // Redirect away if NOT auth

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
