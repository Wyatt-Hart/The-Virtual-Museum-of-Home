import { Routes, Route } from 'react-router-dom'
import Error404 from './components/error404';
import NewForm from './components/Exhibit-new';
import Home from './components/Home';
import Assignments from './components/Assignments';
import UserLogin from './components/UserLogin';
import SignUp from './components/SignUp'
import { UserProvider } from './contexts/UserContext';
import Exhibit from './components/Exhibit';
// import Edit from './components/Exhibit-edit'
import Admin from './components/Admin';
import User from './components/User'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <UserProvider>
        <Routes>

          <Route path='*' element={<Error404 />}/>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<UserLogin />} />
          <Route path='/Assignments' element={<Assignments />} />
          <Route path='/Topics/new' element={<NewForm />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Exhibit/:id' element={<Exhibit />} />
          {/* <Route path='/Exhibit/Edit/:id' element={<Edit />} /> */}
          <Route path='/Admin' element={<Admin />} />
          <Route path='/User' element={<User />} />
          {/* <Route path='/Topics/:id/edit' element={<EditForm />} /> */}
          {/* <Route path='/Users/:id' element={<Users />} /> */}
          
        </Routes>
      </UserProvider>
      </header>
    </div>
  );
}

export default App;
