import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Emotions from './components/Emotions'
import Header from './components/Header'
import Home from './components/Home'
// import emotionData from './jsonDataTemp/emotionData'

class App extends React.Component {
  // parseHash() {
  //   this.auth0 = new this.auth0.WebAuth({
  //     domain: AUTH0_DOMAIN,
  //     clientID: AUTH0_CLIENT_ID
  //   })
  //   this.auth0.parseHash(window.location.hash, (err, authResult) => {
  //     if (err) {
  //       return console.log(err)
  //     }
  //     if (authResult !== null && authResult.accessToken !== null && authResult.idToken !== null) {
  //       localStorage.setItem("access_token", authResult.accessToken)
  //       localStorage.setItem("id_token", authResult.idToken)
  //       localStorage.setItem("profile", JSON.stringify(authResult.idTokenPayload))
  //       window.location = window.location.href.substr(0,window.location.href.indexOf("#"))
  //     } 
  //   })
  // }

  // setup() {
  //   $.ajaxSetup({
  //     beforeSend: (r) => {
  //       if (localStorage.getItem("access_token")) {
  //         r.setRequestHeader(
  //           "Authorization",
  //           "Bearer " + localStorage.getItem("access_token")
  //         )
  //       }
  //     }
  //   })
  // }

  // setState() {
  //   let idToken = localStorage.getItem("id_token")
  //   if (idToken) {
  //     this.loggedIn = true
  //   } else {
  //     this.loggedIn = false
  //   }
  // }

  // componentWillMount() {
  //   // this.setup()
  //   this.parseHash()
  //   this.setState()
  // }

  // constructor(props) {
  //   super(props)
  // }
  // state = {
  //   emotions: []
  // }

  // componentDidMount() {
  //   const hostname = window.location.host
  //   var apiURL
  //   if (hostname === "localhost:3000") {
  //     apiURL = "http://localhost:5000/emotions"
  //   } else {
  //     apiURL = "https://emotion-app-be.herokuapp.com/emotions"
  //   }
  //   console.log(apiURL)
  //   console.log(hostname)
  //   fetch(apiURL
  //     // method: "GET"
  //     // headers: {  
  //     //   "Access-Control-Allow-Origin": "*",
  //     //   "Access-Control-Allow-Headers": "access-control-allow-origin, access-control-allow-headers"
  //     // }
  //   )
  //   .then(res => {
  //     // console.log(res.clone().json())
  //     // res.json()
  //     return res.json()
  //   })
  //   .then(data => {
  //     this.setState({emotions: data})
  //   })
  //   .catch(console.log)
  // }

  render () {
    // console.log(this.state.emotions)
    // const emotionComps = this.state.emotions.map(emotion => {
    //   return (
    //     <Emotion key={emotion.id} style={{color: emotion.color}} emotion={emotion.value} />
    //   )
    // })
    return (
      <div className="App">
        <Header />
        {!this.loggedIn ?
          <Emotions /> :
          <Home />
        }
        
        {/* {emotionComps} */}
        <Footer />
      </div>
    );
  }
}

export default App;
