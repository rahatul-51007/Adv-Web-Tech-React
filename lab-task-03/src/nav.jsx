import './navigationBar.css'
import { useTheme } from './ThemeContext.jsx'

function NavigationBar({ favoriteCount }){
    const { theme, toggleTheme } = useTheme();

    return(
        <nav className="navigationBar">
            <div>
                <h1>Student Management System</h1>
                <p>Welcome to the Student Management System</p>
                {favoriteCount !== undefined && (
                    <p>Favorites: {favoriteCount}</p>
                )}
            </div>
            <div className="navButtons">
                <button className="navButton">Home</button>
                <button className="navButton">Students</button>
                <button className="navButton">Courses</button>
                <button className="navButton">About</button>
                <button className="navButton" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                </button>
            </div>
            
        </nav>
    );
}
export default NavigationBar;