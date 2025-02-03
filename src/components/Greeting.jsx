import Navbar from './Navbar'
function Greeting(props){
    // props is always an object
    // console.log(props.studentName)
    let {studentName} = props
    return(
        <>
        <h1>Good Morning {studentName} in Manama has grade of {props.grade}</h1>
        </>
    )
}

export default Greeting