export interface Guest {
  access_token: string;
  _id: string;
  fullName: string;
  email: string;
  nationalID?: string;
  nationality?: string;
  countryFlag?: string;
}

export interface AuthState {
  user: Guest | null;
  isAuthenticated: boolean;
}
