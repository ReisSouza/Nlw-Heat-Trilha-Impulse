import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../services/Api";

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  };
};
type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
};
type AuthContexData = { user: User | null; signInUrl: string };
type AuthProvider = {
  children: ReactNode;
};
export const AuthContext = createContext({} as AuthContexData);

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=b7cff0370b76d26a306b&redirect_uri=http://localhost:3000`;
  async function signIn(gitHubCode: string) {
    const response = await api.post<AuthResponse>("authenticate", {
      code: gitHubCode,
    });
    const { token, user } = response.data;

    localStorage.setItem("@dowhile:token", token);
    setUser(user);
  }
  useEffect(() => {
    const url = window.location.href;
    const hasGitHubCode = url.includes("?code=");

    if (hasGitHubCode) {
      const [urlWithoutCode, gitHubCode] = url.split("?code=");
      window.history.pushState({}, "", urlWithoutCode);
      signIn(gitHubCode);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ signInUrl, user }}>
      {props.children}
    </AuthContext.Provider>
  );
}
