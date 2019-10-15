import React from 'react';
import Card from './Card';
import artsee from '../../assets/images/artseeSample.jpg';
import tweeter from '../../assets/images/tweeterSample.jpg';
import scheduler from '../../assets/images/schedulerSample.jpg';
import portal from '../../assets/images/portalSampleLessonCreation.jpg';

const Work = () => {
  return (
    <ul style={{ listStyleType: 'none' }}>
      <li>
        <Card 
          title="artsee" 
          description="A Native app to help users explore and share hidden art gems around their city"
          stack="React Native, Redux, Rails, PostgreSQL, MongoDB"
          imgFile={artsee}
          titleColor='#43ab92'
          link='https://github.com/ahrke/artsee'
        />
      </li>
      <li>
        <Card 
          title="concertmap" 
          description="A Web Application helping users find local concerts, by exploring performing artists music playlist. Utilizes Songkick, and Spotify API"
          stack="JavaScript, jQuery, Bootstrap, HTML, CSS, PostgreSQL"
          imgfile={artsee}
          titleColor='#8105d8'
          link='https://github.com/ahrke/ConcertMap'
        />
      </li>
      <li>
        <Card 
          title="Lighthouse Scheduler" 
          description="A Web Application to browse, create, modify, and delete interview appointments"
          stack="React, NodeJS"
          imgFile={scheduler}
          titleColor='#1089ff'
          link='https://github.com/ahrke/scheduler'
        />
      </li>
      <li>
        <Card 
          title="Tweeter" 
          description="A Web Application akin to Twitter"
          stack="HTML, CSS, NodeJS"
          imgFile={tweeter}
          titleColor='#f75f00'
          link='https://github.com/ahrke/tweeter'
        />
      </li>
      <li>
        <Card 
          title="hua hin school portal" 
          description="A Web Application where Hua Hin School teachers and students can browse, create, modify, and delete courses, lessons, tests, and exams. Handles auto-grading, and authentication, separating teacher and student dashboards"
          stack="React, NodeJS, PostgreSQL"
          imgFile={portal}
          titleColor='#a72693'
          link='https://github.com/ahrke/hh-portal-front'
        />
      </li>
    </ul>
  )
}

export default Work;