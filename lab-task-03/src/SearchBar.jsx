import './SearchBar.css';
import { useStudents } from './StudentContext.jsx';

function SearchBar() {
  const { searchQuery, setSearchQuery } = useStudents();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search by name or major"
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;