const SearchInput = ({ value, handleChange }) => {
    return (
        <input
            className="search-input"
            value={value}
            placeholder="Search"
            onChange={handleChange}
        />
    );
};

export default SearchInput;
