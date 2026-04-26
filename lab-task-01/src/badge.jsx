import PropTypes from 'prop-types';

function Badge(props){
    return(
        <div className="badge">
            <p className="gpa">GPA:{props.gpa}</p>
            <p className="credits">Credits:{props.credits}</p>
        </div>
    );
}

Badge.propTypes = {
    gpa: PropTypes.string.isRequired,
    credits: PropTypes.string.isRequired
};

export default Badge;