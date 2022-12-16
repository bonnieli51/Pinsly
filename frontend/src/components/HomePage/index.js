import PinIndex from "../Pins/PinIndex/PinIndex";
import { useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import SignupForm from "../SignupFormModal/SignupForm";
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
      <div>
        <div id="splash-images">
          <img src="https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+splash+images/splash_2.png"></img>
          <img src="https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+splash+images/splash_3.png"></img>
          <img src="https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+splash+images/splash_4.png"></img>
          <img
            id="splash_img_4"
            src="https://pinsly-seeds.s3.amazonaws.com/pinsly+images/pinsly+splash+images/splash_1.png"
          ></img>
          <div id="splash-sign-up">
            <SignupForm />
          </div>
          <div id="splash-links">
            <a href="https://github.com/bonnieli51/Pinsly/blob/main/README.md">
              About
            </a>
            <a href="https://www.linkedin.com/login">LinkedIn</a>
            <a href="https://github.com/bonnieli51/Pinsly">GitHub</a>
          </div>
        </div>
        <button class="back-to-top" onClick={goToTop}>
          <i class="fa-solid fa-angle-up"></i>
        </button>
      </div>
    );
  }
}

export default HomePage;
