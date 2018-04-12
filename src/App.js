import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import List from './components/List'

// stateful component
class App extends Component {

  componentDidMount() {
    console.log('I am working on ');
    // to make an ajax request
    // why?

    // well when our app loads we might want to get data from an API without the user having something
  }

  // this is used in react to setup our state
  constructor() {
    super()

    this.state = {
      todos: [],
    }

  }

  // custom function
  addTodo(text) {
    this.setState({
      todos: [...this.state.todos, text]
    })
  }

  // this is used to render JSX / HTML looking code to the UI. This is what the component actually puts on the UI
  render() {
    return (
      <div className="App">
        <Form />
        <List items={this.state.todos}/>
      </div>
    );
  }
}

export default App;
