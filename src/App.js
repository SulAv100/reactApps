import './App.css';
// import Navbar from './component/Navbar';
// import Navigation from './component/Navigation';
// import Operation from './component/Operation';
// import Select from './component/Select';
// import Map from './component/Map';
// import Mapping from './component/Mapping';
// import Matching from './component/Matching';
// import {useState} from 'react';
// import Weather from './component/Weather';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// import Todo from './component/Todo';
// import Usecontext from './component/Usecontext';

// import NewsFetchAPi from './component/NewsFetchAPi'; 
import { getDatabase, ref, push, set } from "firebase/database";

import ChatReply from './component/ChatReply';






function App() {
  return (
    <>
    <ChatReply/>
    {/* <Navbar title="BeTo" about="About Us"/> */}
    {/* <Weather/> */}
    {/* <NewsFetchAPi/> */}
    {/* <Todo/> */}
    {/* <Usecontext/> */}
    {/* <Navigation/>
    <Operation/>
    <Select/>
    <Map/>
    <Mapping/>
    <Matching/> */}
    </>
  );
}

export default App;
