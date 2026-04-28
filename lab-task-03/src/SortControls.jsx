import './SortControls.css';
import PropTypes from 'prop-types';
import { useStudents } from './StudentContext.jsx';

function SortControls() {
  const { sortBy, setSortBy } = useStudents();

  return (
    <div className="sortControls">
      <label>Sort By:</label>
      <button
        className={`sortButton ${sortBy === 'default' ? 'active' : ''}`}
        onClick={() => setSortBy('default')}
      >
        Default Order
      </button>
      <button
        className={`sortButton ${sortBy === 'name' ? 'active' : ''}`}
        onClick={() => setSortBy('name')}
      >
        Name (A–Z)
      </button>
      <button
        className={`sortButton ${sortBy === 'gpa' ? 'active' : ''}`}
        onClick={() => setSortBy('gpa')}
      >
        GPA (High to Low)
      </button>
    </div>
  );
}

SortControls.propTypes = {
  sortBy: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired
};

export default SortControls;
