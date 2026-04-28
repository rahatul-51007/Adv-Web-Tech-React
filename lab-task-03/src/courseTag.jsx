import PropTypes from 'prop-types';

function CourseTag(props){
    return(
        <div className="courseTag" style={{border: `2px solid ${props.color}`}}>
            <p>{props.courseName}</p>
        </div>
    );
}

CourseTag.propTypes = {
    courseName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default CourseTag;