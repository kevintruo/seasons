import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
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

    renderContent(){
        if(this.state.errMsg && !this.state.lat){
            return <div>Error: {this.state.errMsg}</div>;
        } 

        if(!this.state.errMsg && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please accept location request"/>;
    }

    render() {
        return (
            <div className="sample">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);