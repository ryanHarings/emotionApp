import React from 'react'


// fetch('https://localhost:5000/emotions', {
//     method: "GET",
//     headers: {"Content-Type": }
// }).then(results => {
//     console.log(results)
// }).then(data=> {
//     console.log(data)
// })

class Emotion extends React.Component {
    render () {
        return (
            <div>Im feeling: {this.props.emotion}</div>
        )
    }
}

export default Emotion