import React, { Component } from 'react'
import Course from './Course'
import CourseNewForm from './CourseNewForm'


class CoursesList extends Component {

    state = {
        courses: [],
        apiDataLoaded: false
    }

    async componentDidMount() {
        try {
            const response = await fetch('/course/list')
            const json = await response.json();
            this.setState({
              courses: json,
              apiDataLoaded: true
            })
        } catch (error) {
            console.log('Error retrieving ideas!', error)
        }
    }

    createCourse = async (course, index) => {
       try {
           const res = await fetch(/course, {
           method: "post",
           headers: {
             "Accept": "application/json, text/plain, /",
             "Content-type": "application/json"
           },
           body: JSON.stringify({
               name: course.name,
               code: course.code
             })
           })
           const jsonRes = await res.json()
           const updatedCoursesList = [...this.state.courses, jsonRes]
           //updatedCoursesList.push(newCourseResponse.data)
           this.setState({courses: updatedCoursesList})
       } catch(error) {
           console.log('Error creating new Course!')
           console.log(error)
       }
   }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <CourseNewForm createCourse={this.createCourse}/>
                {
                    this.state.apiDataLoaded && this.state.courses.map((course, index) => {
                        return (
                            <Course
                                {...course}
                                key={index} />
                        )                    })
                }
            </div>
        )
    }
}

export default CoursesList;
