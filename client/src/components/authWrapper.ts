import React, { useState, useEffect } from "react";
import { API } from "../lib/api";
import { useNavigate } from "react-router-dom";

const authWrapper = ({ children }: { children: JSX.Element }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const nav = useNavigate();
  useEffect(() => {
    fetchUser();
  });

  const fetchUser = async () => {
    try {
      const { data } = await API.get("/auth");

      if (data.res && !children.key) {
        setUserAuthenticated(true);
        return;
      } else if (!data.res && children.key) {
        setUserAuthenticated(true);
        return;
      }
      nav("/");
    } catch (err) {
      console.log(err);
      nav("/");
    }
  };

  if (userAuthenticated) {
    return children as JSX.Element;
  }
  return null;
};

export default authWrapper;
