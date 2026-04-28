import { useState } from 'react';
import './SearchBar.css'; // Assuming we'll add styles

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search by name or major"
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;