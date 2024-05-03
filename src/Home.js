import { useState } from "react";
import Popup from "./Popup/Popup";

export default function Home(){

    const [toggle, setToggle] = useState('close')

    function doToggle(){
        if(toggle==='close'){
            setToggle('open')
        }
        else{
            setToggle('close')
        }
    }
    return(
        <div>
            {
                toggle==='open'&&
                <Popup doToggle={doToggle}/>
            }

            <div onClick={doToggle}>Hello</div>
        </div>
    )
}