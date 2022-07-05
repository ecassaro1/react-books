import React from 'react';

class View1 extends React.Component {
    render() {
      return (
        <div>
          <p>Response from backend: {this.props.response}</p>
        </div>
      );
    }
}

export default View1;