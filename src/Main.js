import React from 'react';
import ButtonX from './ButtonX';
import Client from './Client';
import View1 from './View1';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick() {
        Client.get().then((result)=>{
            console.log("result="+result);
            this.setState({response: result});
        });
    }

    render() {
        return (
            <div> 
                <ButtonX onClick={this.handleClick}/>
                {(this.state.response)?<View1 response={this.state.response}/>:<p>nada ainda...</p>}
            </div>
        );
    }
}

export default Main; 