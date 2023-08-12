import React, { useEffect } from "react";
import { message } from "antd";
import { GetUserInfo } from "../apicalls/users";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
  const [userData, setUserData] = React.useState(null);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await GetUserInfo();
      if (response.success) {
        setUserData(response.data);
      } else {
        message.error(response.message);
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (!userData) {
        getData();
      }
    } else {
      navigate("/login");
    }
  }, []);

  return <div>{props.children}</div>;
}

export default ProtectedRoute;
