import { useState, useEffect } from 'react'
import './App.css'
import StudentCard from './studentCard.jsx'
import NavigationBar from './nav.jsx'
import SearchBar from './SearchBar.jsx'
import SortControls from './SortControls.jsx'
import avatarUrl from './assets/avatar.jpg';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(new Set());
  const [sortBy, setSortBy] = useState('default');

  const toggleFavorite = (studentId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(studentId)) {
        newFavorites.delete(studentId);
      } else {
        newFavorites.add(studentId);
      }
      return newFavorites;
    });
  };

  const getSortedStudents = (studentsToSort) => {
    const sorted = [...studentsToSort];
    
    if (sortBy === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'gpa') {
      sorted.sort((a, b) => parseFloat(b.gpa) - parseFloat(a.gpa));
    }
    
    return sorted;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchedData = [
        { id: "1", name: "Rahatul", gpa: "3.99", credits: "120", major: "info", courseName: "CSE 101", color: "#4CAF50" },
        { id: "2", name: "Shifat", gpa: "3.98", credits: "120", major: "software", courseName: "CSE 101", color: "#4CAF50" },
        { id: "3", name: "Fahim", gpa: "3.97", credits: "120", major: "software", courseName: "CSE 101", color: "#4CAF50" },
        { id: "4", name: "Samir", gpa: "3.96", credits: "120", major: "software", courseName: "CSE 101", color: "#4CAF50" }
      ];

      setStudents(fetchedData);
      setLoading(false); 
    }, 1500);

    return () => clearTimeout(timer); 
  }, []);



  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.major.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedStudents = getSortedStudents(filteredStudents);

  useEffect(() => {
    document.title = `Dashboard — ${sortedStudents.length} Students`;
  }, [sortedStudents.length]);

  return (
    <>
      <div>
        <NavigationBar favoriteCount={favorites.size} />
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading Students...</p>
        </div>
      ) : (
        <>
          <SearchBar onSearch={setSearchQuery} />
          <SortControls sortBy={sortBy} onSortChange={setSortBy} />
          <div className='appStudent'>
            {sortedStudents.map((student) => (
              <StudentCard
                key={student.id}
                className="studentCard"
                name={student.name}
                id={student.id}
                avatar={avatarUrl}
                gpa={student.gpa}
                credits={student.credits}
                major={student.major}
                courseName={student.courseName}
                color={student.color}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default App