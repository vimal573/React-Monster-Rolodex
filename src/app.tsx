import { useState, useEffect, ChangeEvent, Key } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { getData } from "./utils/data.utils";
import "./App.css";

export type Monster = {
  id: Key;
  name: String;
  email: String;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const fetchMonters = async function () {
    const data = await getData<Monster[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    setMonsters(data);

    console.log(data);
  };

  useEffect(() => {
    fetchMonters();
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div>
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search monster"
        className="monster-search-box"
      />
      <CardList monster={filteredMonsters} />
    </div>
  );
};

export default App;
