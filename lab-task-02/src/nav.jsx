import './navigationBar.css'
function NavigationBar({ favoriteCount }){
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
            </div>
            
        </nav>
    );
}
export default NavigationBar;