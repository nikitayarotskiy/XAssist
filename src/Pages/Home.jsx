import React, { useEffect, useState } from "react";
import CourseInfo from '../Components/Course';
import Header from "../Components/Header.jsx";
import { useNavigate } from 'react-router-dom';
import { Backend } from "../backend.js";

function Home() {
  const navigate = useNavigate();
  const backend = new Backend();
  const [courses, setCourses] = useState([]);
  const [average, setAverage] = useState("0"); // Ensure average is a string to handle rendering
  const [currentDate, setCurrentDate] = useState(""); // State for the current date

  useEffect(() => {
    // Fetch data (token and courses) when component mounts
    const fetchData = async () => {
      const token = localStorage.getItem('TOKEN');
      
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const fetchedCourses = await backend.getMarks(token);
        
        if (Array.isArray(fetchedCourses) && fetchedCourses.length > 0) {
          setCourses(fetchedCourses);

          // Check if all marks are numbers
          const allMarksValid = fetchedCourses.every(course => typeof course.mark === 'number' && !isNaN(course.mark));
          if (allMarksValid) {
            const totalMarks = fetchedCourses.reduce((acc, course) => acc + course.mark, 0);
            const calculatedAverage = (totalMarks / fetchedCourses.length).toFixed(2);
            setAverage(calculatedAverage); // Set the average state
          } else {
            console.error('Invalid marks data:', fetchedCourses);
            setAverage("0"); // Set to 0 if data is invalid
          }
        } else {
          setCourses([]);
          setAverage("0"); // Set to 0 if no courses are available
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
        setAverage("0"); // Set to 0 if there was an error
      }
    };

    fetchData(); // Call the async function to fetch token and courses

    // Set current date
    const today = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    setCurrentDate(formattedDate);
  }, [navigate]);

  return (
    <div className="App flex flex-col h-full bg-base-100 w-full overflow-x-hidden text-center">
      <Header />

      {/* Main layout with left sidebar and right content area */}
      <div className="flex flex-row h-screen">
        
        {/* Left sidebar: fixed, non-scrollable */}
        <div className="w-1/4 pl-5 h-full bg-base-100 shadow-md flex flex-col items-center fixed left-0 top-0 space-y-6">
          {/* Student Average Box */}
          <div className="w-full p-6 bg-white rounded-lg shadow-lg mt-24 flex flex-col justify-start items-center">
            <h2 className="text-4xl font-bold text-secondary">Average</h2>
            <p className="text-8xl mt-4 text-secondary font-semibold">{average}%</p>
          </div>

          {/* Block 1: Date */}
          <div className="w-full p-6 bg-white rounded-lg shadow-lg flex flex-col justify-start items-center">
            <h2 className="text-xl font-semibold text-secondary">Date</h2>
            <p className="text-lg mt-2 text-gray-700">{currentDate}</p>
          </div>

          {/* Block 2: Link to Teacher Assist */}
          <div className="w-full p-6 bg-white rounded-lg shadow-lg flex flex-col justify-start items-center">
            <h2 className="text-xl font-semibold text-secondary">Teach Assist</h2>
            <a 
              href="https://ta.yrdsb.ca/yrdsb/index.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2"
            >
              Go to Teach Assist
            </a>
          </div>
        </div>

        {/* Right content: scrollable, courses list */}
        <div className="w-3/4 ml-auto overflow-y-auto mt-20 space-y-8">
  <div className="container mx-auto p-4">
    {!courses ? (
      <div className="text-center text-lg text-gray-700">Getting most recent marks...</div>
    ) : (
      courses.length > 0 ? (
        courses.map((course, index) => (
          <CourseInfo
            key={index}
            courseName={course.courseName}
            mark={course.mark}
            roomNumber={course.roomNumber}
            period={course.period}
          />
        ))
      ) : (
        <div className="text-center text-4xl mt-60 text-white">Getting most recent marks...</div>
      )
    )}
  </div>
</div>

      </div>
    </div>
  );
}

export default Home;
