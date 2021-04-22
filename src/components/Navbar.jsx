import React from 'react'
import {connect} from 'react-redux'

const Navbar = (props) => {
    return (
        <div style={{backgroundColor:'green', color:'white'}}>
            <h1>Number of Items: {props.counter}</h1>
        </div>
    )
}

// mapStateToProps
// รับฟังก์ชันจาก store มาใช้งาน
const mapStateToProps = state => ({
    counter: state.counter.value
})

export default connect(mapStateToProps)(Navbar)
