import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const StudentContext = createContext();

export const useStudents = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudents must be used within a StudentProvider');
  }
  return context;
};

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(new Set());
  const [sortBy, setSortBy] = useState('default');

  const addStudent = (newStudent) => {
    setStudents(prev => [...prev, newStudent]);
  };

  const removeStudent = (studentId) => {
    setStudents(prev => prev.filter(student => student.id !== studentId));
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      newFavorites.delete(studentId);
      return newFavorites;
    });
  };

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

  const filteredStudents = useMemo(() => {
    return students.filter(student =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.major.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [students, searchQuery]);

  const sortedStudents = useMemo(() => {
    const sorted = [...filteredStudents];

    if (sortBy === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'gpa') {
      sorted.sort((a, b) => parseFloat(b.gpa) - parseFloat(a.gpa));
    }

    return sorted;
  }, [filteredStudents, sortBy]);

  useEffect(() => {
    const storedStudents = localStorage.getItem('students');
    if (storedStudents) {
      try {
        const parsed = JSON.parse(storedStudents);
        if (Array.isArray(parsed)) {
          setStudents(parsed);
          setLoading(false);
          return;
        }
      } catch (error) {
        console.warn('Failed to parse stored students:', error);
      }
    }

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

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    document.title = `Dashboard — ${sortedStudents.length} Students`;
  }, [sortedStudents.length]);

  return (
    <StudentContext.Provider value={{
      students,
      loading,
      searchQuery,
      setSearchQuery,
      favorites,
      sortBy,
      setSortBy,
      toggleFavorite,
      removeStudent,
      sortedStudents,
      addStudent
    }}>
      {children}
    </StudentContext.Provider>
  );
};