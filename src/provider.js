import React,{useState} from 'react';
import PackageContext from "./context";

const Provider=props=>{
    const[mission,setMission]=useState({
        name:"XYZ",
        agent:"007",
        sal:"1000",
        accepted:"Not Accepted"
    })
    
    return(
        <PackageContext.Provider value={{
            data:mission,
            isMissionAccepted: ()=> {
                setMission({...mission,accepted:"Accepted"})
            }

        }}>
            {props.children}
        </PackageContext.Provider>
    )
}

export default Provider;