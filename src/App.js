import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Emotion from './components/Emotion'
import Header from './components/Header'
// import emotionData from './jsonDataTemp/emotionData'

class App extends React.Component {
  state = {
    emotions: []
  }

  componentDidMount() {
    const hostname = window.location.host
    var apiURL
    if (hostname === "localhost:3000") {
      apiURL = "http://localhost:5000/emotions"
    } else {
      apiURL = "https://emotion-app-be.herokuapp.com/emotions"
    }
    console.log(apiURL)
    console.log(hostname)
    fetch(apiURL
      // method: "GET"
      // headers: {  
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Headers": "access-control-allow-origin, access-control-allow-headers"
      // }
    )
    .then(res => {
      // console.log(res.clone().json())
      // res.json()
      return res.json()
    })
    .then(data => {
      this.setState({emotions: data})
    })
    .catch(console.log)
  }
  render () {
    console.log(this.state.emotions)
    const emotionComps = this.state.emotions.map(emotion => {
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
}

export default App;
