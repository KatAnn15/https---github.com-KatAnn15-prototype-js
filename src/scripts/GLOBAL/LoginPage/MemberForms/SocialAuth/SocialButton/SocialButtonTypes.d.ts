import { UserCredential } from "@firebase/auth";

export interface SocialButtonTypes {
  button: {
    id: string;
    className: string;
    textContent: string;
    color: string;
    backgroundColor: string;
    callback: () => Promise<UserCredential>;
  };
}
