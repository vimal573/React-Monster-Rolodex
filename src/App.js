import axios from "axios";
import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const fetchMonters = async function () {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setMonsters(data);
  };

  useEffect(() => {
    fetchMonters();
  }, []);

  const onSearchChange = (event) => {
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
}

export default App;
