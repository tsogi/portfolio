import ProjectsPage from './components/ProjectsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>IT Academy Step Groups</h2>
      <a style={{marginRight: "30px"}} href='/sn124'>SN-124</a>
      <a href='/jptf03'>JP_TF_03</a>
      <ProjectsPage />
    </div>
  );
}

export default App;
