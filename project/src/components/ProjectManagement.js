import React, { Component } from 'react'
import Project from './Project';
import AddProject from './AddProject';
import { v1 as uuidv1 } from 'uuid';

class ProjectManagement extends Component {

  constructor() => {

    super();
    this.state = {
  
      projects: []
    }
  }

  componentDidMount = () => {

    this.setState({

    //this can be where you make the API fetch call or a fetch to a database
    projects: [
      {
        id: uuid1(),
        title: "Javascript",
        category: "Front-End"
      },
      {
        id: uuid1(),
        title: "Node",
        category: "Back-End"
      },
      {
        id: uuid1(),
        title: "React",
        category: "Front-End"
      }
    ]
    })
  }


  render() {
    return (
      <>
        <Project />
        <AddProject />
      </>
    )
  }
}

export default ProjectManagement
