export interface AuthResponse {
  token: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
}

export interface Link {
  id: string;
  url: string;
  title: string;
}
