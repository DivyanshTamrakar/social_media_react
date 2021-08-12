import debounce from "lodash.debounce";
import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import SearchInput from "./searchinput";
import { fetchSearchResults } from "../../FetchingApi/fetchApi";
import { SearchResult } from "../Header.style";

const fetchData = async (query, cb) => {
  const res = await fetchSearchResults(query);
  cb(res);
};
const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 500);

function SearchComponent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    debouncedFetchData(query, (res) => {
      setResults(res);
    });
  }, [query]);

  return (
    <div>
      <SearchInput
        value={query}
        onChangeText={(e) => {
          setQuery(e.target.value);
        }}
      />

      <SearchResult>
        {results.map((result, index) => (
          <div onClick={() => setQuery("")} key={index}>
            <ListItem
              id={result._id}
              name={result.name}
              photo={result.photo_url}
              username={result.username}
            />
          </div>
        ))}
      </SearchResult>
    </div>
  );
}

export default SearchComponent;
