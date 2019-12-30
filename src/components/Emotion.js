import React from 'react'


// fetch('https://localhost:5000/emotions', {
//     method: "GET",
//     headers: {"Content-Type": }
// }).then(results => {
//     console.log(results)
// }).then(data=> {
//     console.log(data)
// })

function Emotion(props) {
    return (
        <div>Im feeling: {props.emotion}</div>
    )
}

export default Emotion