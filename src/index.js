import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errMsg: err.message})
        );
    }

    componentDidUpdate(){
        console.log("My component was rerendered to the screen");
    }
    // React says we have to define render
    render() {
        if(this.state.errMsg && !this.state.lat){
            return <div>Error: {this.state.errMsg}</div>;
        } 

        if(!this.state.errMsg && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);