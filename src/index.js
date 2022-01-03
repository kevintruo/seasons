//Import statement
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    //Initialize state
    state = { lat: null, errorMessage: ''};

    //Loading data (get current position)
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errMsg: err.message})
        );
    }

    //Wait to get updated
    componentDidUpdate(){
        console.log("My component was rerendered to the screen");
    }

    //Helper method to do conditionals rendering
    //The reason we use this is because we want to avoid conditionals rendering in the render() method
    //For example, we had a new requirement is to add a border around our application, 
    //it is easier to use a helper function and then wrap it in a border instead of wrapping every return statements with a border
    renderContent(){
        //There is an error (user denied location request)
        if(this.state.errMsg && !this.state.lat){
            return <div>Error: {this.state.errMsg}</div>;
        } 

        //Display season display component
        if(!this.state.errMsg && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        //Render loading screen
        return <Spinner message="Please accept location request"/>;
    }

    render() {
        return (
            //Look at the comment for helper function renderContent()
            <div className="sample">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);