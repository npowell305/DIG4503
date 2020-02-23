import React from "react";

class IdSearch extends React.Component{
        readId(event){
        event.preventDefault();

        fetch("http://localhost:80/id/" + pid.value).then((res) =>{
            return res.json();
        }).then((processed) =>{
            let response = document.querySelector("#reportarea");
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
                <form onSubmit={this.readId}>
                <p>Enter Pokemon ID</p>
                <input id="pid" type="text" />
                <button>submit</button>
                </form>
            </div>
        )
    }

}
export default IdSearch;