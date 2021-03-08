import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Menu from './Menu';
 import Footer from './Footer';
 

const App = () => {
  return(
    <>
      <Menu />
        <menu>
        <Switch>
          <Route exact path='/'  component = {About} />
          <Route exact path='/skills'  component = {Skills} />
          <Route exact path='/projects'  component = {Projects} />
          <Route exact path='/contact'  component = {Contact} />
        </Switch>
        </menu>
        <Footer />  
    </>
  );
};

export default App;