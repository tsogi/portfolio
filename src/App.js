import ProjectsPage from './components/ProjectsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="studentsLabel">My Students</div>
      <a className='groupA' href='/sn124'>Group SN-124</a>
      <br></br>
      <a className="groupA" href='/jptf03'>Group JP_TF_03</a>
      <ProjectsPage />
    </div>
  );
}

export default App;
