import CourseTag from "./courseTag";
import Badge from "./badge";
import './studentCard.css'
import PropTypes from 'prop-types';
import { useStudents } from './StudentContext.jsx';

function StudentCard(props){
    const { favorites, toggleFavorite, removeStudent } = useStudents();
    const isFavorite = favorites.has(props.id);

    const handleFavoriteToggle = () => {
        toggleFavorite(props.id);
    };

    const handleRemove = () => {
        removeStudent(props.id);
    };

    return(
            <div className={props.className}>
                <div>
                    <p>Name:{props.name}</p>
                    <p>Id:{props.id}</p>    
                    <p>Major:{props.major}</p>
                    <Badge
                        gpa={props.gpa}
                        credits={props.credits}
                    />
                    <div>
                        <CourseTag 
                            courseName={props.courseName}
                            color={props.color}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', marginTop: '10px' }}>
                        <button 
                            onClick={handleFavoriteToggle}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                color: isFavorite ? '#ff6b6b' : '#ccc',
                                padding: 0
                            }}
                        >
                            {isFavorite ? '❤️' : '🤍'}
                        </button>
                        <button
                            onClick={handleRemove}
                            style={{
                                padding: '6px 12px',
                                backgroundColor: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Remove
                        </button>
                    </div>
                </div>
                <div>
                    <img src={props.avatar} alt="Avatar" className="avatar"/>
                </div>        
            </div>      
    );
}

StudentCard.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    gpa: PropTypes.string.isRequired,
    credits: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    courseName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default StudentCard;