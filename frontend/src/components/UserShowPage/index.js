import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import BoardIndex from "../Boards/BoardIndex";
import CreateButton from "./CreateButton";
import * as UsersActions from "../../store/user";
import "./UserShowPage.css";

function UserShowPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const { userId } = useParams();
  const user = useSelector(({ users }) => (users[userId] ? users[userId] : {}));
 

  useEffect(() => {
    dispatch(UsersActions.fetchUser(userId));
  }, [dispatch,userId]);

  if (!sessionUser) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <>
      <div id="usershowpage-personalinfo">
        <div id="usershowpage-initial">{user.username ? user.username[0].toUpperCase(): ""}</div>
        <div id="usershowpage-username">{user.username}</div>
        <div id="usershowpage-email">{user.email}</div>
        {/* <button>Edit Profile</button> */}
        <div id="usershowpage-saved">Saved</div>
      </div>
      <div id="bottom">
        {parseInt(userId) === sessionUser.id ? <CreateButton /> : <></>}
        <BoardIndex />
      </div>
    </>
  );
}

export default UserShowPage;
