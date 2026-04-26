import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentCard from './studentCard.jsx'
import CourseTag from './courseTag.jsx'
import NavigationBar from './nav.jsx'
import avatarUrl from './assets/avatar.jpg';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
      <NavigationBar />
    </div>
    <div className='appStudent'>
      <StudentCard
        className="studentCard"
        name="Rahatul"
        id="1"
        avatar={avatarUrl}
        gpa="3.99"
        credits="120"
        major="info"
        courseName="CSE 101"
        color="#4CAF50"
      />
      <StudentCard
        className="studentCard"
        name="Shifat"
        id="2"
        avatar={avatarUrl}
        gpa="3.98"
        credits="120"
        major="software"
        courseName="CSE 101"
        color="#4CAF50"
      />
      <StudentCard
        className="studentCard"
        name="john"
        id="3"
        avatar={avatarUrl}
        gpa="3.97"
        credits="120"
        major="software"
        courseName="CSE 101"
        color="#4CAF50"
      />
      <StudentCard
        className="studentCard"
        name="doe"
        id="4"
        avatar={avatarUrl}
        gpa="3.96"
        credits="120"
        major="software"
        courseName="CSE 101"
        color="#4CAF50"
      />
    </div>
      
    </>
  )
}

export default App
