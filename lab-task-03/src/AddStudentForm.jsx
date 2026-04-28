import { useState, useEffect } from 'react';
import { useStudents } from './StudentContext.jsx';

function AddStudentForm() {
  const { addStudent, students } = useStudents();

  const [formData, setFormData] = useState({
    name: '',
    id: '',
    major: '',
    gpa: '',
    courses: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.id.trim()) {
      newErrors.id = 'ID is required';
    } else if (isNaN(formData.id)) {
      newErrors.id = 'ID must be numeric';
    } else if (students.some(s => s.id === formData.id)) {
      newErrors.id = 'ID must be unique';
    }

    if (!formData.major.trim()) newErrors.major = 'Major is required';

    if (!formData.gpa.trim()) {
      newErrors.gpa = 'GPA is required';
    } else {
      const gpaNum = parseFloat(formData.gpa);
      if (isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4.0) {
        newErrors.gpa = 'GPA must be between 0 and 4.0';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newStudent = {
        id: formData.id,
        name: formData.name,
        major: formData.major,
        gpa: parseFloat(formData.gpa),
        credits: '120', 
        courseName: formData.courses.split(',').map(c => c.trim()).join(', '),
        color: '#4CAF50' 
      };
      addStudent(newStudent);
      setFormData({ name: '', id: '', major: '', gpa: '', courses: '' });
      setErrors({});
      setSuccessMessage('Student added successfully!');
    }
  };

  useEffect(() => {
    if (!successMessage) return;
    const timer = setTimeout(() => setSuccessMessage(''), 3000);
    return () => clearTimeout(timer);
  }, [successMessage]);

  const fieldStyle = { marginBottom: '16px', textAlign: 'left' };
  const labelStyle = { display: 'block', textAlign: 'left', marginBottom: '6px', fontWeight: 500 };
  const inputStyle = {
    display: 'block',
    width: '50%',
    minWidth: '240px',
    padding: '8px',
    marginTop: '5px',
    background: 'none',
    border: '1px solid #007bff',
    borderRadius: '4px',
    color: '#111'
  };
  const errorStyle = { color: 'red', fontSize: '12px', display: 'block', marginTop: '4px' };
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h3>Add New Student</h3>
      {successMessage && (
        <div style={{ marginBottom: '16px', padding: '10px 14px', backgroundColor: '#e6f4ff', border: '1px solid #007bff', borderRadius: '6px', color: '#003a75' }}>
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div style={fieldStyle}>
          <label style={labelStyle}>Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.name && <span style={errorStyle}>{errors.name}</span>}
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Student ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.id && <span style={errorStyle}>{errors.id}</span>}
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Major:</label>
          <input
            type="text"
            name="major"
            value={formData.major}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.major && <span style={errorStyle}>{errors.major}</span>}
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>GPA:</label>
          <input
            type="text"
            name="gpa"
            value={formData.gpa}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.gpa && <span style={errorStyle}>{errors.gpa}</span>}
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Courses (comma-separated):</label>
          <input
            type="text"
            name="courses"
            value={formData.courses}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudentForm;