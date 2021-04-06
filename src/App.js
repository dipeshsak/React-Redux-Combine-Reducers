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
           <button onClick={()=>this.props.updateA(this.props.b)}>Update A</button>
         </div>
         <div>
           <h2>B : {this.props.b}</h2>
           <button onClick={()=>this.props.updateB(this.props.a)}>Update B</button>
         </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
  return{
    a:state.rA.a,
    b:state.rB.b
    
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    updateA:(b)=>dispatch({type:'UPDATE_A',b:b}),
    updateB:(a)=>dispatch({type:'UPDATE_B',a:a})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)