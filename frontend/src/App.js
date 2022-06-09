import { Routes, Route } from 'react-router-dom'
import Error404 from './components/error404';
import EditForm from './components/Topics-edit';
import Home from './components/Home';
import Topics from './components/Topics-show';
import UserLogin from './components/UserLogin';
// import Users from './components/User'
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <UserProvider>
        <Routes>

          <Route path='*' element={<Error404 />}/>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<UserLogin />} />
          <Route path='/Topics' element={<Topics />} />
          <Route path='/Topics/:id/edit' element={<EditForm />} />
          {/* <Route path='/Users/:id' element={<Users />} /> */}
          
        </Routes>
        </UserProvider>
      </header>
    </div>
  );
}

export default App;