import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {languages:[
    {id:1,val:'Javascript'},
    {id:2,val:'Java'},
    {id:3,val:'Python'},
    {id:4,val:'Ruby'},
    {id:5,val:'PHP'},
    {id:6,val:'C++'},
    {id:7,val:'CSS'},
    {id:8,val:'C#'},
    {id:9,val:'C'},
    {id:10,val:'Go'},
    {id:11,val:'Shell'},
    {id:12,val:'Objective C'},
    {id:13,val:'Scala'},
    {id:14,val:'Swift'},
    {id:15,val:'Typescript'}
  ]
}

  render() {
    const lanEles = this.state.languages.map((lan,index) => (
      <tr key={lan.id}>
        <td>{lan.id}</td>
        <td>{lan.val}</td>
        <td>{index + 1}</td>
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
            <th>id</th>
            <th>Name</th>
            <th>Index</th>
          </tr>
          {lanEles}
        </table>
      </div>
    );
  }
}

export default App;
