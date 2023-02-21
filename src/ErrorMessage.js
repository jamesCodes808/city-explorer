import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

class ErrorMessage extends React.Component {

    render() {
        return (
            <>
                <Spinner
                    animation="border"
                    role="status"
                    style={{ marginTop: 50 }}>

                </Spinner>
                <span>
                    {this.props.errorCode}<br></br>
                    {this.props.errorMessage}
                </span>
            </>
        )
    }

}

export default ErrorMessage;