import { Routes, Route } from 'react-router-dom'
import Error404 from './components/error404';
import Topics from './components/Topics';
import Home from './components/Home';
import Exhibit from './components/Exhibit';

// import Users from './components/User'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>

          <Route path='*' element={<Error404 />}/>
          <Route path='/' element={<Home />} />
          <Route path='/Topics' element={<Topics />} />
          <Route path='/Exhibit' element={<Exhibit />} />
          {/* <Route path='/Topics/:id/edit' element={<EditForm />} /> */}
          {/* <Route path='/Users/:id' element={<Users />} /> */}
          
        </Routes>
      </header>
    </div>
  );
}

export default App;