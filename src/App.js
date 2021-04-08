import './App.css';
import Timeline from './components/TwitterTimeline';
import FollowButton from './components/TwitterFollow';
import Intro from './components/Intro'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <Intro />
        <Timeline />
        <FollowButton />
      </body>
    </div>
  );
}

export default App;
