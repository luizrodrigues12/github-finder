import { MdLocationPin } from "react-icons/md";
import { UserProps } from "../types/user";
import classes from "./User.module.css";

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img className={classes.user__img} src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.user__location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.user__stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.user__followers}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.user__following}>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
