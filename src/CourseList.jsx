import { useEffect, useState } from 'react';
import Course from './Course';
import useFetch from './useFetch';

function CourseList() {
  const { data: fetchedCourses, error } = useFetch('http://localhost:3000/courses');
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    if (fetchedCourses) {
      setCourses(fetchedCourses);
    }
  }, [fetchedCourses]);

  function handleDelete(name) {
    const newCourses = courses.filter((course) => course.name !== name);
    setCourses(newCourses);
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error loading courses: {error.message}</p>;
  }

  if (!courses) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Loading...</h1>
        
      </div>
    );
  }

  // Optional: sort courses
  const sortedCourses = [...courses].sort((a, b) => a.sana - b.sana);

  const coursesList = sortedCourses.map((course, index) => (
    <Course
      key={index}
      name={course.name}
      sana={course.sana}
      img={course.img}
      rating={course.rating}
      deleteCourse={handleDelete}
    />
  ));

  return <div className="course-list">{coursesList}</div>;
}

export default CourseList;

