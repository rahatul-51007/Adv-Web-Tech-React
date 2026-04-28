import CourseTag from "./courseTag";
import Badge from "./badge";
import './studentCard.css'
import PropTypes from 'prop-types';
import { useState } from 'react';

function StudentCard(props){
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite);
        props.onToggleFavorite(props.id);
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
                    <button 
                        onClick={handleFavoriteToggle}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '24px',
                            cursor: 'pointer',
                            color: isFavorite ? '#ff6b6b' : '#ccc'
                        }}
                    >
                        {isFavorite ? '❤️' : '🤍'}
                    </button>
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
    color: PropTypes.string.isRequired,
    onToggleFavorite: PropTypes.func.isRequired
};

export default StudentCard;