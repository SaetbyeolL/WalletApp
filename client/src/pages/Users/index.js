import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetAllUsers } from "../../apicalls/users";
import { ShowLoading, HideLoading } from "../../redux/loadersSlice";
import { Table, message } from "antd";
import PageTitle from "../../components/PageTitle";

function Users() {
  const [users, setUsers] = React.useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllUsers();
      dispatch(HideLoading());
      if (response.success) {
        setUsers(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <PageTitle title="Users" />
      <Table dataSource={users} columns={columns} className="mt-2" />
    </div>
  );
}     

export default Users;
