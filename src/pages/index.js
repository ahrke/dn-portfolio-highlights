import React, { useEffect } from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';

import Work from '../components/Work/Work';

import dave from '../assets/images/dave.png';
import nain from '../assets/images/nain.png';

const sections = [
  { id: 'one', bg: require('../assets/images/pic01.jpg') },
  { id: 'two', bg: require('../assets/images/pic02.jpg') },
  { id: 'three', bg: require('../assets/images/pic03.jpg') },
];

const IndexPage = () =>{

  return (
      <Layout>
        <Header />
    
        <section id="one" className="main special">
          <div className="container">
            <span className="image fit primary">
              <img src={sections[0].bg} alt="" />
            </span>
            <div className="content">
              <header className="major">
                <h2>Who I am</h2>
              </header>
              <img src={dave} alt="" style={{ width: '95%', margin: 10, borderRadius: 10 }} />
              <p>
                I've been <b>teaching</b> in Thailand at a government high school for the 
                past few years. As the sole Computer Teacher, I was responsible
                for <b>designing</b> the curriculum for all 130+ students under my care.
                This experience helped develop my <b>leadership</b>, <b>project planning</b>, 
                negotiating, and most important, <b>team work</b> skills. On the development
                side, I was teaching students basic Java, <b>JavaScript</b>, HTML, CSS, MySQL,
                and Python. Creatively, I taught Photoshop, After Effects, and InDesign. 
                Students used Scratch to learn how to think critically, problem solve, 
                and improve logical reasoning by creating a soccer game in pairs.
                Throughout my time here, I used Udemy, Youtube, KhanAcademy, and several 
                other resources to grow my <b>software engineering</b> skills. However, I knew
                there were gaps in my knowledge.
              </p>
              <p>
                To fill in the gaps, I joined Lighthouse Labs. An awesome lab putting 
                participants through intensive coding practices. I was a part of their
                Web Development Bootcamp. From here, I gained a stronger grasp of JavaScript,
                NodeJS, PostgreSQL, and HTML/CSS. With others, I've become a more conscious 
                leader, team-member, and contributor through <b>pair programming</b>, and developing
                entire apps in the span of a week or two. In the end, I learned how to take
                advantage of new tech, like Ruby on Rails. My final project was a Native app
                helping users explore and share hidden art gems around the city. Our stack
                consisted of <b>React Native, Redux, Rails, PostgreSQL, MongoDB</b>, and AWS Rekognition.
              </p>
            </div>
            <Scroll type="id" element="two">
              <a href="#two" className="goto-next ">
                Next
              </a>
            </Scroll>
          </div>
        </section>
    
        <section id="two" className="main special">
          <div className="container">
            <span className="image fit primary">
              <img src={sections[1].bg} alt="" />
            </span>
            <div className="content">
              <header className="major">
                <h2>Stuff I do</h2>
              </header>
              <img src={nain} style={{ width: '95%', margin: 10, borderRadius: 10 }} />
              <p>
                I am a world-traveling, game playing, fiction reading, web app 
                developing, resistance training individual.
              </p>
              <ul className="icons-grid">
                <li>
                  <span className="icon major fa-gamepad" />
                  <h3>Video Games</h3>
                </li>
                <li>
                  <span className="icon major fa-book" />
                  <h3>Mind Expansion</h3>
                </li>
                <li>
                  <span className="icon major fa-code" />
                  <h3>Web Development</h3>
                </li>
                <li>
                  <span className="icon major fa-coffee" />
                  <h3>Sipping Coffee</h3>
                </li>
              </ul>
            </div>
            <Scroll type="id" element="three">
              <a href="#three" className="goto-next ">
                Next
              </a>
            </Scroll>
          </div>
        </section>
    
        <section id="three" className="main special">
          <div className="container">
            <span className="image fit primary">
              <img src={sections[2].bg} alt="" />
            </span>
            <div className="content">
              <header className="major">
                <h2>My Projects</h2>
              </header>
              <div style={{ width: '100%' }}>
                <Work />
              </div>
            </div>
            <Scroll type="id" element="footer">
              <a href="#footer" className="goto-next ">
                Next
              </a>
            </Scroll>
          </div>
        </section>
    
        <section id="footer">
          <div className="container">
            <header className="major">
              <h2>Find me at</h2>
              
            </header>
          </div>
          <Footer />
        </section>
    
        <Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
          offset={50}
          componentTag={'div'}
        >
          {sections.map(s => {
            return (
              <div
                key={s.id}
                className="main-bg"
                id={`${s.id}-bg`}
                style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }}
              />
            );
          })}
        </Scrollspy>
      </Layout>
    );
} 

export default IndexPage;
