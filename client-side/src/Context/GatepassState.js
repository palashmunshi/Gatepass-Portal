import React, {useState} from "react";
import GatePassContext from "./GatepassContext";

const GatepassState = (props) =>{
    const[state, setState] = useState({
        email:"nil",
        role:"nil"

    });

    const updateState = (email, roleNew) => {
        setState({
            email: email,
            role :roleNew,
        });

    };

    return(
        <GatePassContext.Provider value = {{state, updateState}}>
            {props.children}
        </GatePassContext.Provider>
    )

}
export default GatepassState;