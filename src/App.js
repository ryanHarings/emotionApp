import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Emotion from './components/Emotion'
import Header from './components/Header'
import emotionData from './jsonDataTemp/emotionData'

function App() {
  const emotionComps = emotionData.map(emotion => {
    return (
      <Emotion key={emotion.id} style={{color: emotion.color}} emotion={emotion.value} />
    )
  })
  return (
    <div className="App">
      <Header />
      {emotionComps}
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hi Gesa!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          How are you feeling right now?
        </p>
      </header>*/}
      <Footer />
    </div>
  );
}

export default App;
