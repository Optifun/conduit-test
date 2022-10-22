interface LoginCredentials {
  email: string,
  password: string,
}

interface RegisterCredentials extends LoginCredentials {
  username: string
}

interface AuthenticationResponse {
  image: string;
  bio: string | null;
  email: string;
  username: string;
  token: string
}
