import PinIndex from "../Pins/PinIndex/PinIndex";
import { useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import "./HomePage.css";
function HomePage() {
  const sessionUser = useSelector((state) => state.session.user);

  const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };

  if (sessionUser) {
    return (
      <div>
        <PinIndex />
      </div>
    );
  } else {
    return (
      <>
        <div id="splash-images">
          <img src="https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+splash+images/splash_2.png"></img>
          <img src="https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+splash+images/splash_3.png"></img>
          <img src="https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+splash+images/splash_4.png"></img>
          <img src="https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+splash+images/splash_5.png"></img>
        </div>
        <button class="back-to-top" onClick={goToTop}>
          <i class="fa-solid fa-angle-up"></i>
        </button>
      </>
    );
  }
}

export default HomePage;
