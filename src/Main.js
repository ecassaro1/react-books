import React, { useState } from 'react';
import { Button }  from './Button';
import Client from './Client';
import View1 from './View1';

const Main = (props)=>{
    const [response,setResponse] = useState([]);

    const handleClick = ()=> {
        Client.get().then((result)=>{
            setResponse(result);
        });
    }

    return (
        <div> 
            <Button onClick={handleClick}/>
            {(response.length>0)?<View1 response={response}/>:<p>nada ainda...</p>}
        </div>
    );
}

export default Main; 