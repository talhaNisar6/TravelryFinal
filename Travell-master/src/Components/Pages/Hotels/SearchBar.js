import { useState } from "react";
import "./SearchBar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const SearchBar = ({ placeholder, data }) => {
  const [filterData, setFilterData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <div className="searchIcon">
          <SearchOutlinedIcon />
        </div>
        {/* Comment// i have installed the Material UI icons and you can search about it
        on internet and then u can just npm them */}
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
      </div>
      {filterData.length != 0 && (
        <div className="dataResult">
          {filterData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
