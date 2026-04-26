import CourseTag from "./courseTag";
import Badge from "./badge";
import './studentCard.css'
import PropTypes from 'prop-types';

function StudentCard(props){
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