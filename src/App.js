import { Route, BrowserRouter ,Routes} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css'; 
import HomePage from './page/home/HomePage';
import PlayerPage from './page/player/PlayerPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/web_music" element={<HomePage />}/>
          <Route path="/web_music/playing" element={<PlayerPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
