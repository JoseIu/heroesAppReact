export type AuthReducerState = {
  logged: boolean;
  user: UserReducerYpe;
};
export type UserReducerYpe = {
  id: string;
  name: string | null;
};

export type AuthReducerAction = { type: 'signIn'; payload: UserReducerYpe } | { type: 'signOut' };

export const authReducer = (state: AuthReducerState, action: AuthReducerAction) => {
  switch (action.type) {
    case 'signIn':
      return { logged: true, user: action.payload } as AuthReducerState;
    case 'signOut':
      return { logged: false, user: { id: '', name: null } } as AuthReducerState;

    default:
      return state;
  }
};
