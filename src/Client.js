const xhttp = new XMLHttpRequest();
//const url = "https://tox0fvc9e5.execute-api.us-east-1.amazonaws.com/test2/resource1";
const url = "https://46nyg947v6.execute-api.us-east-1.amazonaws.com/test/book";

let Client = {
    get: ()=> {
        return new Promise((resolve,reject)=>{
            xhttp.onload = function() {
                resolve(this.response);
            }

            xhttp.open("GET", url);
            xhttp.send();    
        })
    }
}

export default Client;
