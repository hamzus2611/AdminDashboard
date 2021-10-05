import './App.scss';
import SolidBar from './components/solidbar/SolidBar';
import TopBar from './components/topbar/TopBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="Dashboard">
      <TopBar />
      <div className="container">
        <SolidBar />
          <Home />
      </div>
    </div>
  );
}

export default App;
