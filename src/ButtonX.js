import React from 'react';

class ButtonX extends React.Component {
    render() {
      return (
        <button 
            onClick={this.props.onClick}>
            I´m a button
        </button>
      );
    }
}

export default ButtonX;