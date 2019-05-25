import React from 'react';
import './styles/app.scss';
import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import Content from './containers/Content';
import Footer from './containers/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars, faPaperPlane, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faBars, faPaperPlane, faHeart,faTimes)

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Sidebar></Sidebar>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
