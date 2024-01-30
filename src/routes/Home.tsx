import { UserProps } from "../types/user";
import Search from "../components/Search";
import { useState } from "react";
import User from "../components/User";
import Error from "../components/Error";
import classes from "../App.module.css";

function Home() {
  //STATES
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  //CARREGAR USUÁRIO
  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    //INFORMAÇÕES DO USUÁRIO
    const { avatar_url, login, location, followers, following } = data;
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div className={classes.center}>
      <h1 className={classes.app__h1}>GitHub Finder</h1>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
}

export default Home;
