import { Routes, Route } from 'react-router-dom'
import Error404 from './components/error404';
import EditForm from './components/Topics-edit';
import Home from './components/Home';
import Topics from './components/Topics-show';
// import Users from './components/User'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>

          <Route path='*' element={<Error404 />}/>
          <Route path='/' element={<Home />} />
          <Route path='/Topics' element={<Topics />} />
          <Route path='/Topics/:id/edit' element={<EditForm />} />
          {/* <Route path='/Users/:id' element={<Users />} /> */}
          
        </Routes>
      </header>
    </div>
  );
}

export default App;