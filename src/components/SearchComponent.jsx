import { useState } from "react";
import styles from "../assets/css/SearchComponent.module.css";
import searchlogo from "../assets/img/search.png";
import SearchResultsComponent from "./SearchResultsComponent";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Ini buat nampung judul yang mau dicari, aku ga pakai useSearchParams
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmitClicked(true);
  };
  return (
    <>
      <div className={styles.search}>
        <form onSubmit={handleSearch} className={styles.searchbar}>
          <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="search your movies" />
          <button type="submit">
            <img src={searchlogo}></img>
          </button>
        </form>
        <SearchResultsComponent searchQuery={searchQuery} submitClicked={submitClicked} />
      </div>
    </>
  );
};

export default SearchComponent;
