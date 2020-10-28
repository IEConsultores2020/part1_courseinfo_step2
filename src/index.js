import React from 'react';
import ReactDOM from 'react-dom';

const Content = (props) => {

  return ( 
    <div>
      <p>
         Bienvenido al curso patrocinado por IEC, a la parte {props.part} con ejercicios {props.exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of react'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return ( 
    <div>
      <h1>{course}</h1>

        <Content part={part1} exercises={exercises1} ></Content>
        <Content part={part2} exercises={exercises2} ></Content>
        <Content part={part3} exercises={exercises3} ></Content>
        <Content part="Additional Course Bonus Track" exercises="3" ></Content>
      <p>
         Number of exercises {exercises1 + exercises2 + exercises3 + 3}
      </p>
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))