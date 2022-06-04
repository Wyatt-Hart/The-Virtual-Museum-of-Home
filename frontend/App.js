import { Routes, Route } from 'react-router-dom'
import Error404 from './components/error404';
import User from './components/Users';
import Topic from './components/Topics';
import EditForm from './components/Topics/edit';
import Exhibits from './components/Exhibits';
import NewForm from './components/Exhibits/new';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='*' element={<Error404 />}/>
          <Route path='/exhibits' element={<Exhibits />} />
          <Route path='/exhibits/new' element={<NewForm />} />
          <Route path='/topics' element={<Topic />} />
          <Route path='/topics/:id/edit' element={<EditForm />} />
          <Route path='/users/:id' element={<User />} />
          
        </Routes>
      </header>
    </div>
  );
}

export default App;