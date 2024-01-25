import React from "react";
import { Tabs } from "antd";
import PageTitle from "../../components/PageTitle";
const { TabPane } = Tabs;

function Requests() {
    const [data, setData] = React.useState([]);

  const columns = [
    {
      title: "Requests ID",
      dataIndex: "_id",
    },
    {
      title: "User",
      dataIndex: "user",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Requests" />
        <button className="primary-outlined-btn">Request Funds</button>
      </div>

      <Tabs defaultActiveKey="1">
        <TabPane tab="Sent" key="1">
          Sent
        </TabPane>
        <TabPane tab="Received" key="2">
          Received
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Requests;
