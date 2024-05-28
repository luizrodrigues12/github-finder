import { KeyboardEvent } from "react";
import classes from "./Search.module.css";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  //Manipular aperto da tecla enter
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (userName === "") {
        alert("Nenhum usuário digitado!");
      } else {
        loadUser(userName);
      }
    }
  };

  return (
    <div className={classes.search}>
      <h2>Busque por um usuário:</h2>
      <p className={classes.search__p}>Conheça seus melhores repositórios</p>
      <div className={classes.search__container}>
        <input
          name="input"
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          className={classes.search__container__input}
          onKeyDown={handleKeyDown}
          value={userName}
          autoComplete="off"
        />
        <button
          onClick={() => {
            if (userName === "") {
              alert("Nenhum usuário digitado!");
            } else {
              loadUser(userName);
              setUserName("");
            }
          }}
          className={classes.search__container__button}
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
