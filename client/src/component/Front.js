import { Link } from "react-router-dom";
import "../App.css";
function Front(){
    return(
        <div className="MainDiv">
        <div className="Maindiv">
            <div className="Maindiv1">
            <img src="https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" className="image1"></img>
            </div>
            <div className="Maindiv2">
                <h2>Login/SignUp To See User Profile</h2>
                <div className="inner_button">
                <Link to='/login' ><button className="inner_button-1">Login</button></Link>
            <Link to='/signup' ><button className="inner_button-1">Sign Up</button></Link>

                </div>
            
            </div>
        

        </div>
        </div>
    )
}

export default Front;
