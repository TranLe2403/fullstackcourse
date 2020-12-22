import React from "react";

const Header = (props) => {
  return <h3>{props.course}</h3>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((item) => (
        <Part part={item.name} exercises={item.exercises} key={item.id} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  let total = parts.reduce((sum, item) => {
    return sum + item.exercises;
  }, 0);

  return <h4>Number of exercises {total}</h4>;
};

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <div>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
