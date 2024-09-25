"use client";

import { createContext, useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils/util";

type UserContextProps = {
  user: null;
  fetchUserData: () => Promise<void>;
};
export const UserContext = createContext<UserContextProps | null>(null);

type UserProviderProps = {
  children: React.ReactNode;
};
export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data.user);
        console.log("USER", response.data.user);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};
