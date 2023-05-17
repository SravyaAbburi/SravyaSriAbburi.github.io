import React from 'react'
import './projects.css'
import projectsData from './ProjectsData' 

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';


const Projects = () => {
  return (
  <section className="projects section" id="projects">
  <h2 className='section__title'>Projects</h2>
  <span className='section__subtitle'>My Projects</span>

  <Container className='p-4'>
      <Row>
       {
        projectsData.map(project =>{
          return (
            <Col lg={4} md={4} sm={6} key={project.id}>
        <div className="projects__card">
        <Card>
         <Card.Body>
        <Card.Title className='projects__card-title'>{project.title}</Card.Title>
        <Card.Text className='projects__card-data'>
          {project.description}
        </Card.Text>
        <div className='projects__link'>
        <a href={project.sourcecode} className="projects__card-link" >Source Code</a>
        </div>
       
      </Card.Body>
    </Card>
        </div>
        </Col>
          )
        })
       }
      </Row>
    </Container>

  </section>
  )
}

export default Projects