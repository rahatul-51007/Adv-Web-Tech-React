import './SortControls.css';
import PropTypes from 'prop-types';

function SortControls({ sortBy, onSortChange }) {
  return (
    <div className="sortControls">
      <label>Sort By:</label>
      <button
        className={`sortButton ${sortBy === 'default' ? 'active' : ''}`}
        onClick={() => onSortChange('default')}
      >
        Default Order
      </button>
      <button
        className={`sortButton ${sortBy === 'name' ? 'active' : ''}`}
        onClick={() => onSortChange('name')}
      >
        Name (A–Z)
      </button>
      <button
        className={`sortButton ${sortBy === 'gpa' ? 'active' : ''}`}
        onClick={() => onSortChange('gpa')}
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
