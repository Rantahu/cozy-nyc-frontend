import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Navbar from '../components/navbar';

const About = () => {
  return (
  <div>
    <header>
      <Navbar />
    </header>
    <div id="content" className="visible">
    <img id="headerMedia" className="headerimg" src="/munchies.gif" />
    <section className="message">
      <p>Laborum excepteur commodo proident nulla minim quis proident laboris
       commodo fugiat eiusmod. In adipisicing ad consequat adipisicing tempor non
       sit pariatur occaecat ex officia aliqua aliqua nisi consequat cupidatat
       cupidatat. Enim Lorem fugiat ea anim reprehenderit excepteur aute ut et
       nisi magna et tempor occaecat dolor ea laborum. Eiusmod magna aliqua id
       esse minim laborum aute ex eiusmod ad exercitation elit ut. Et laboris
       tempor aute ut sint do sit culpa sunt nisi proident pariatur id cupidatat
       laborum.</p>
      <br />
      <p>Commodo tempor elit eu ex exercitation occaecat ea. Sint sunt incididunt
      labore amet exercitation exercitation veniam qui laborum nulla fugiat amet
      aute. Excepteur id anim officia dolor duis aliquip Lorem cillum. Culpa eu
      exercitation reprehenderit ipsum veniam sit ad cupidatat minim occaecat
      sunt adipisicing dolor incididunt. Cupidatat excepteur reprehenderit veniam
      sunt amet labore aliqua mollit labore qui ea aute occaecat ipsum. Pariatur
      ex voluptate qui aute nostrud commodo deserunt velit aliquip tempor non
      fugiat aliqua non irure. Lorem aute minim reprehenderit ex ipsum adipisicing
      ullamco anim aliquip voluptate laborum exercitation pariatur aliquip ullamco.
      Enim non voluptate irure est esse nostrud magna deserunt commodo esse
      reprehenderit cillum ipsum.</p>
    </section>
    </div>
    </div>
  );
};

export default About;
