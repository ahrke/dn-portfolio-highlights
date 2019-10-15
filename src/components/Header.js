import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faReact, faCss3Alt, faJsSquare, faHtml5, faNodeJs  } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <section id="header">
      <header className="major">
        <h1>{config.heading}</h1>
        <p>{config.subHeading}</p>
        <FontAwesomeIcon icon={faJsSquare} size='2x' style={{ margin: 10 }} />
        <FontAwesomeIcon icon={faReact} size='2x' style={{ margin: 10 }} />
        <FontAwesomeIcon icon={faNodeJs} size='2x' style={{ margin: 10 }} />
        <FontAwesomeIcon icon={faHtml5} size='2x' style={{ margin: 10 }} />
        <FontAwesomeIcon icon={faCss3Alt} size='2x' style={{ margin: 10 }} />
      </header>
      <div className="container">
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button primary">
                Begin
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>
  );
}
