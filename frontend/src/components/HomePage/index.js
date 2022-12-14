import PinIndex from "../Pins/PinIndex/PinIndex";
import { useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

function HomePage() {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) {
    return (
      <div>
        <PinIndex />
      </div>
    );
  }
}

export default HomePage;
