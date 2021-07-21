import { Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WriterPage from './pages/WriterPage';

function App() {
  return (
    <div className="App">
      <Route component={PostListPage} path={['/@:username','/']} exact/>
      <Route component={LoginPage} path={"/login"}/>
      <Route component={RegisterPage} path={"/register"}/>
      <Route component={WriterPage} path={"/write"}/>
      <Route component={PostPage} path={"/@:username/:postId"}/>
    </div>
  );
}

export default App;
