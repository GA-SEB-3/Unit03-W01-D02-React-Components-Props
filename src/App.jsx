import './App.css'
import Greeting from './components/Greeting'

function App() {

  let allStudents = [
    {
      studentName: "Ali",
      grade: 100,
      city:"Manama"
    },
    {
      studentName: "Hasan",
      grade: 99,
      city:"Muharraq"
    },
    {
      studentName: "Loai",
      grade: 100,
      city:"Manama"
    },
  ]

  console.log(allStudents[0].studentName)
  return (
    <>
      <h1>Hello World</h1>
      {allStudents.map((oneStudent)=>
          <Greeting key={oneStudent.studentName} studentName = {oneStudent.studentName} grade = {oneStudent.grade}/>
      )}


{/* 
exercise 1:

1. for the Greeting component
2. make the city a prop
3. pass the prop down to the greeting component
4. display the value in the component
*/}
    </>
  )
}

export default App
