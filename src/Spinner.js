//Import statement
import React from 'react';

//Component
const Spinner = (props) => {
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

//Default props message in case the message was not intialized
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;