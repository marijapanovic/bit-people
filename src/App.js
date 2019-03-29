import React from 'react';
//import DataUsers from './services/fetchData';
import './App.css';
import UsersPage from './app/users/UsersPage';
import HeaderPost from './app/users/Header';
import FooterPost from './app/users/Footer';


const App = () => (
  <>
    <HeaderPost />
    <UsersPage />
    <FooterPost />
  </>
)

export default App;
