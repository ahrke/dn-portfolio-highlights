import React from 'react';
import Card from './Card';

const Work = () => {
  return (
    <ul style={{ listStyleType: 'none' }}>
      <li>
        <Card 
          title="artsee" 
          description="A Native app to help users explore and share hidden art gems around their city"
          stack="React Native, Redux, Rails, PostgreSQL, MongoDB"
        />
      </li>
      <li>
        <Card 
          title="concertmap" 
          description="A Web Application helping users find local concerts, by exploring performing artists music playlist. Utilizes Songkick, and Spotify API"
          stack="JavaScript, jQuery, Bootstrap, HTML, CSS, PostgreSQL"
        />
      </li>
      <li>
        <Card 
          title="Lighthouse Scheduler" 
          description="A Web Application to browse, create, modify, and delete interview appointments"
          stack="React, NodeJS"
        />
      </li>
      <li>
        <Card 
          title="Tweeter" 
          description="A Web Application akin to Twitter"
          stack="HTML, CSS, NodeJS"
        />
      </li>
      <li>
        <Card 
          title="hua hin school portal" 
          description="A Web Application where Hua Hin School teachers and students can browse, create, modify, and delete courses, lessons, tests, and exams. Handles auto-grading, and authentication, separating teacher and student dashboards"
          stack="React, NodeJS, PostgreSQL"
        />
      </li>
    </ul>
  )
}

export default Work;