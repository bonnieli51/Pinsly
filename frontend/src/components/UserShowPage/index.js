import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./UserShowPage.css";;

function UserShowPage (){

    const sessionUser = useSelector((state) => state.session.user)
    console.log(sessionUser)
    if (!sessionUser) {return <Redirect to='/'></Redirect> }
    return (
        <div id="usershowpage-personalinfo">
            <div id="usershowpage-initial">{sessionUser.username[0].toUpperCase()}</div>
            <div id="usershowpage-username">{sessionUser.username}</div>
            <div id="usershowpage-email">{sessionUser.email}</div>
            <button>Edit Profile</button>
        </div>
    )
    
}

export default UserShowPage;