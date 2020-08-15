import React from 'react';
import './App.css';
import ManagerSignComponent from './component/manager.sign.component';
import ManagerLoginComponent from './component/manger.login.component';
import HomeComponent from './component/home.component';
import Main from './component/routing';

function App() {
  return (
    <div className="container">
      {/* <ManagerSignComponent />
      <hr />
      <ManagerLoginComponent />
      <hr />
      <HomeComponent /> */}

      <Main />
    </div>
  );
}

export default App;
