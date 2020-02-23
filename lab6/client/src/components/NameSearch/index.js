import React from "react";

class NameSearch extends React.Component{
    readName(event){
        event.preventDefault();
        let pname = document.querySelector("#pname");
        fetch("http://localhost:80/name/" + pname.value).then((res) =>{
            return res.json();
        }).then((processed) =>{
            let response = document.querySelector("#reportingArea");
            if((processed.error)){
                response.innerHTML = processed.error;
            }
            else{
                response.innerHTML = processed.name;
            }
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.readName}>
                <p>Enter Pokemon Name</p>
                <input id="pname" type="text" />
                <button>submit</button>
                </form>
            </div>
        )
    }

}

export default NameSearch;