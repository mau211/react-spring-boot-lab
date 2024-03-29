import React, { Component } from 'react'

class CourseNewForm extends Component {

    state = {
        newCourse: {}
    }

    handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const updatedNewCourse = { ...this.state.newCourse }
        updatedNewCourse[attributeToChange] = newValue
        this.setState({ newCourse: updatedNewCourse })
    }

    handleSubmit = (event) => {
    event.preventDefault()

    this.props.createCourse(this.state.newCourse)
}

    render() {
        return (
          <div>
          <h2>Create New Course</h2>

          <form onSubmit={this.handleSubmit}>
              <div>
                  <label htmlFor="name">Name</label>
                  <input
                      name="name"
                      type="text"
                      onChange={this.handleChange} />
              </div>

              <div>
                  <label htmlFor="description">Code</label>
                  <input
                      name="code"
                      type="text"
                      onChange={this.handleChange} />
              </div>

              <div>
                  <input type="submit" value="Create Course"/>
              </div>
          </form>

          <hr />
          <hr />
      </div>
        )
    }

}

export default CourseNewForm;
