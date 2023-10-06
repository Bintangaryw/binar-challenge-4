import axios from "axios";
import { useState, useEffect } from "react";
import SearchResultsPages from "../pages/SearchResultsPages";
import { useNavigate } from "react-router-dom";
import PropType from "prop-types";

const SearchResultsComponent = ({ searchQuery, submitClicked }) => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (submitClicked) {
      const getSearchMovies = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_SEARCH_URL}`, {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
            params: {
              query: searchQuery,
            },
          });
          const { data } = response;

          setSearchResults(data?.results);
          navigate("/search-results");
        } catch (error) {
          if (axios.isAxiosError(error)) {
            alert(error?.response?.data?.status_message);
            return;
          }

          alert(error?.message);
        }
      };

      getSearchMovies();
    }
  }, [searchQuery, submitClicked, navigate]);

  return <SearchResultsPages searchResults={searchResults} />;
};

SearchResultsComponent.propTypes = {
  searchQuery: PropType.string,
  submitClicked: PropType.bool,
};

export default SearchResultsComponent;
