import PropType from "prop-types";

const SearchResultsPages = ({ searchResults }) => {
  if (!searchResults) {
    return null;
  }

  return (
    <>
      <head>
        <title>Search</title>
      </head>
      <div>
        {searchResults.map((movie) => (
          <div key={movie?.id}>
            <h3>{movie?.original_title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};
SearchResultsPages.propTypes = {
  searchResults: PropType.any,
};

export default SearchResultsPages;
