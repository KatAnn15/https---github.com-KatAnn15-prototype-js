import { SocialButtonTypes } from "./SocialButton/SocialButtonTypes";
import { googleSignIn, facebookSignIn } from "@fire/firebase_actions.ts";

export const Social_Buttons_List: SocialButtonTypes["button"][] = [
  {
    id: "googleButton",
    className: "google-button",
    textContent: "Join with Google",
    color: "white",
    backgroundColor: "orange",
    callback: googleSignIn,
  },
  {
    id: "fbButton",
    className: "facebook-button",
    textContent: "Join with Facebook",
    color: "white",
    backgroundColor: "blue",
    callback: facebookSignIn,
  },
];
