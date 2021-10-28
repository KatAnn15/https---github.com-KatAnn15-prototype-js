export interface reducerActionInt {
  action: { type: string; value: string };
}

export interface reducerActionMemberInt {
  action: {
    type: string;
    value: {
      loggedIn: Boolean;
      email: null | string;
    };
  };
}

export interface reducerActionArrInt {
  action: { type: string; value: any[] };
}

export interface reducerActionObjInt {
  action: { type: string; value: { title: string; value: number } };
}
