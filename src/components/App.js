import {useState} from 'react'
import '../App.css';
import Navbar from './Navbar';
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../redux/actions/counterActions'

function App(props) {
  
  // console.log(props)

  // เรียกใช้งานข้อมูลจาก store
  // Method 1 Use by props and dispatch
  // const { value, dispatch } = props

  // const [counter, setCounter] = useState(0)

  return (
    <div className="App">

      <Navbar />

      {/* <h1>Counter: {counter}</h1>
      <button onClick={()=>setCounter(counter+1)}> + Counter up</button> &nbsp;
      <button onClick={()=>setCounter(counter-1)}> - Counter down</button>
     */}


      {/* Method 1 Use by props and dispatch */}
      {/* <h1>Counter: {value}</h1>
      <button onClick={()=>dispatch({type:'INCREMENT_COUNTER'})}> + Counter up</button> &nbsp;
      <button onClick={()=>dispatch({type:'DECREMENT_COUNTER'})}> - Counter down</button> */}

      {/* ----------- Method 2 Use mapStateToProps and mapDispatchToProps ------------- */}
      <h1>Counter: {props.counter}</h1>
      <button onClick={props.incCounter}> + Counter up</button> &nbsp;
      <button onClick={props.decCounter}> - Counter down</button>

    </div>
  )
}

// Method 2 Use mapStateToProps and mapDispatchToProps 
// mapStateToProps
// รับฟังก์ชันจาก store มาใช้งาน
const mapStateToProps = state => ({
  counter: state.counter.value
})

// mapDispatchToProps
// ส่งค่าไปยัง store เป็น object
const mapDispatchToProps = {
  incCounter: incrementCounter,
  decCounter: decrementCounter,
}

//--------- Method 1 Use by props and dispatch -----------
// export default connect(state=>state.counter)(App)

//-------- Method 2 Use mapStateToProps and mapDispatchToProps ----------
export default connect(mapStateToProps, mapDispatchToProps)(App)
