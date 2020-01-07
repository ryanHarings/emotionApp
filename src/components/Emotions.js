import React from "react"
import Emotion from "./Emotion"
// import { useAuth0 } from "../react-auth0-spa"
const AUTH0_CLIENT_ID = "gLbuiq396FHA7I0UKRgSAJWSEmdVqQzY";
const AUTH0_DOMAIN = "emotion-app-auth.auth0.com";
//eslint-disable-line
const AUTH0_CALLBACK_URL = window.location.href;
const AUTH0_API_AUDIENCE = "https://emotion-app-auth/";

class Emotions extends React.Component {
    // constructor(props) {
        // super(props)
    // }

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
        // let request = newRequest(apiURL, {
            // method: "GET",
            // mode: "same-origin",
            // redirect: "follow",
            // headers: new Headers({
                // "Authorization": ,
                // "Content-Type": "application/x-www-form-urlencoded",
                // "Bearer " + localStorage.getItem("access_token")
            // })
        // })
        // let tempTest = new auth0.Webauth({
        //     domain: AUTH0_DOMAIN,
        //     clientID: AUTH0_CLIENT_ID
        // })
        fetch(apiURL, {
            method: "GET"
            // headers: {
            //     "authorization": "Bearer "
            // }
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            this.setState({emotions: data})
        })
        .catch(console.log)
    }
    render() {
        console.log(this.state.emotions)
        const emotionComps = this.state.emotions.map(emotion => {
            return (
                <Emotion key={emotion.id} style={{color: emotion.color}} emotion={emotion.value} />
            )
        })
        return (
            emotionComps

        )
    }
}

export default Emotions
