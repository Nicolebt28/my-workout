import React from 'react';
import './App.css';

class MyWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [], text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

render() {
  return (
    <div className="App">
        <input className="workout-name" type= "text" placeholder= "Name Today's Workout" />
        <ExerciseList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-exercise">
            What exercise are you doing today?
          </label>
          <input 
            id="new-exercise"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add Exercise #{this.state.items.length + 1}
          </button>
        </form>
    </div>
  );
}

handleChange(e) {
  this.setState({ text: e.target.value});
}
handleSubmit(e) {
  e.preventDefault();
  if (this.state.text.length === 0) {
    return;
  }
  const newExercise = {
    text: this.state.text,
    id: Date.now()
  };
  this.setState(state => ({
    items: state.items.concat(newExercise),
    text: ''
  }));
}
}

class ExerciseList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default MyWorkout;