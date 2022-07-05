import React from 'react';

class ButtonX extends React.Component {
    render() {
      return (
        <button 
            onClick={this.props.onClick}>
            Click to retrieve the books from DynamoDB
        </button>
      );
    }
}

export default ButtonX;