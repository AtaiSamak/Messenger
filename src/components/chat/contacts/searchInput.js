const SearchInput = ({ value, handleChange }) => {
    return (
        <div className="contacts_container">
            <input
                className="search-input"
                value={value}
                placeholder="Search"
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchInput;
