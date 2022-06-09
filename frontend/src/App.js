import { Routes, Route } from 'react-router-dom'
import Error404 from './components/error404';
import NewForm from './components/Topics-new';
import Home from './components/Home';
import Topics from './components/Topics-show';
import UserLogin from './components/UserLogin';
import SignUp from './components/SignUp'
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
          <Route path='/Topics/new' element={<NewForm />} />
          <Route path='/SignUp' element={<SignUp />} />
          {/* <Route path='/Topics/:id/edit' element={<EditForm />} /> */}
          {/* <Route path='/Users/:id' element={<Users />} /> */}
          
        </Routes>
        </UserProvider>
      </header>
    </div>
  );
}

export default App;