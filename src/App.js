import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {languages:['Javascript','Java','Python','Ruby','PHP','C++','CSS','C#','C','Go','Shell','Objective C','Scala','Swift','Typescript']}

  render() {
    const lanEles = this.state.languages.map((lan,index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{lan}</td>
        <td><button onClick = {()=>{
          let lans = [...this.state.languages];
          lans.splice(index,1);
          this.setState({languages:lans});
        }}>Remove</button></td>
      </tr>
    ));

    return (
      <div className="App">
        <table>
          <tr>
            <th>Name</th>
            <th>Rank</th>
          </tr>
          {lanEles}
        </table>
      </div>
    );
  }
}

export default App;
