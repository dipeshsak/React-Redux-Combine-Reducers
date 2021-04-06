import React from 'react'
import './App.css'
import {connect} from 'react-redux'


class App extends React.Component{

  state={
    a:0,
    b:0
  }
  
  render(){
    return(
      <div>
        <h1 style={{textAlign:'center'}}>Welcome</h1>
      
      <div className="App" style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
         
         <div>
           <h2>A : {this.props.a}</h2>
           <button onClick={this.props.updateA}>Update A</button>
         </div>
         <div>
           <h2>B : {this.props.b}</h2>
           <button onClick={this.props.updateB}>Update B</button>
         </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
  return{
    a:state.a,
    b:state.b
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    updateA:()=>dispatch({type:'UPDATE_A'}),
    updateB:()=>dispatch({type:'UPDATE_B'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)