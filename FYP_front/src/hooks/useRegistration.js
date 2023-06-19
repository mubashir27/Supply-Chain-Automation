import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRegistration = () => {
  const navigate = useNavigate();

  let isUser = localStorage.getItem("user");

  useEffect(() => {
    if (isUser) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);
};

export default useRegistration;
