import React, { Component } from 'react'
import CoursesList from './components/CoursesList'
class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      courses: []
    }
  }


  async componentDidMount() {
    try {
        const response = await fetch('/course/list')
        const json = await response.json();
        this.setState({ courses: json })
    } catch (error) {
        console.log('Error retrieving courses!')
        console.log(error)
    }
}

  render() {
    return (
      <div>
        <CoursesList />
      </div>
    )
  }
}

export default App;
