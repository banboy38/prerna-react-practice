import { IoMdClose } from "react-icons/io";
import "./popup.css"

export default function Popup({doToggle}){
    
    return(
        // Main div
        <div className="parent">

            {/* Background div */}
            <div className="background" onClick={doToggle}/>

            {/* Main Popup */}
            <form className="popup">
                
                <div className="closeContainer"><IoMdClose className="close" onClick={doToggle}/></div>
                
                <div className="header">Welcome to the Popup</div>

                <div className="form">
                    
                    <div className="placeholder">Name</div>
                    <input type="text" className="question" />

                    
                    <div className="placeholder">WhatsApp</div>
                    <input type="text" className="question" />

                    
                    <div className="placeholder">E-mail</div>
                    <input type="text" className="question" />

                </div>

                <button className="submit">Submit</button>

            </form>
            
        </div>
    )
}