import { Route } from 'react-router-dom';
import './App.css';
import ChatPage from './Pages/ChatPage';
import HomePage from './Pages/HomePage';
import MeetPage from './Pages/MeetPage';

function App() {
  return (
    <div className="App">
      <Route path='/' component={HomePage} exact />
      <Route path='/chats' component={ChatPage}/>
      <Route path='/meet' component={MeetPage}/>
    </div>
  );
}

export default App;
