import React from 'react'
import Provider from "./provider"
import Context from "./context"

const Agents=()=>{
  return(
    <Context.Consumer>
      {
        (context)=>(
          <div>
            <h3>Agent Informantion</h3>
            <p>Mission name:{context.data.name}</p>
          </div>
        )
      }
    </Context.Consumer>
  )
}

const App =()=>{
  return(
    <div>
      <h1> Context API </h1>
      <Provider>
        <Agents></Agents>
      </Provider>
    </div>
  )
}

export default App;
