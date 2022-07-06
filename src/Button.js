import React from 'react';

/*
class ButtonOld extends React.Component {
    render() {
      return (
        <button 
            onClick={this.props.onClick}>
            Click to retrieve the books from DynamoDB
        </button>
      );
    }
}
*/

export const Button = (props)=> {
  return (
    <button 
        onClick={props.onClick}>
        Click to retrieve the books from DynamoDB
    </button>
  );
}

//export default Button;