interface buttonsTypes {
  buttons: {
    defaultLabel: string;
    toggleLabel: string;
    class: string;
    id: string;
  }[];
}

export const MEMBERS_BAR_BUTTONS: buttonsTypes["buttons"] = [
  {
    defaultLabel: "Sign Up",
    toggleLabel: "Log Out",
    class: "member-btn sign-up-btn",
    id: "login",
  },
  {
    defaultLabel: "Subscribe",
    toggleLabel: "",
    class: "member-btn subscribe-btn",
    id: "subscribe",
  },
];
