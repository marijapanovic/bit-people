import React from 'react';
//import DataUsers from './services/fetchData';
import './App.css';
import UsersPage from './app/users/UsersPage';
import HeaderPost from './app/users/Header';
import FooterPost from './app/users/Footer';
import UsersPageCard from './app/users/UserPageCard'


const App = () => (
  <>
    <HeaderPost />
    {/* <UsersPage /> */}
    <UsersPageCard />
    <FooterPost />
  </>
)

export default App;
