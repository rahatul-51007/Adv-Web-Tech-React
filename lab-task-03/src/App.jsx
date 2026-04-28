import './App.css'
import StudentCard from './studentCard.jsx'
import NavigationBar from './nav.jsx'
import SearchBar from './SearchBar.jsx'
import SortControls from './SortControls.jsx'
import AddStudentForm from './AddStudentForm.jsx'
import avatarUrl from './assets/avatar.jpg';
import { useStudents } from './StudentContext.jsx';

function App() {
  const { loading, favorites, sortedStudents } = useStudents();

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
          <SearchBar />
          <SortControls />
          <AddStudentForm />
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
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default App