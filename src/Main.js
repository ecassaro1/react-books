import React from 'react';
import ButtonX from './ButtonX';
import Client from './Client';
import View1 from './View1';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: "nada ainda..."
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
                <View1 response={this.state.response}/>
            </div>
        );
    }
}

export default Main; 