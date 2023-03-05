export interface UserProfile {
  username?: string;
  authToken?: string;
  userType?: string;
}

export interface UserState {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  profile: UserProfile;
}
