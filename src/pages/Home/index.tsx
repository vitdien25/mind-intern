import React from "react";
import AppLayout from "../../components/layout/AppLayout";
import styles from "./HomePage.module.scss";
import { Col, Row, Space } from "antd";
import DoughnutChart from "../../components/charts/DoughNutChart";
import { columns, dataSource } from "../../components/tables/mock";
import BaseTable from "../../components/tables/BaseTable";

const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <Space orientation="vertical" size={12} style={{ width: "100%" }}>
        <Row gutter={[12, 12]} wrap={false}>
          <Col flex="360px">
            <div className={styles.container}>
              <p
                style={{
                  padding: 12,
                  margin: 0,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Tình trạng chung
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DoughnutChart />
              </div>
            </div>
          </Col>
          <Col flex="auto">
            <div className={styles.container}>
              <BaseTable columns={columns} dataSource={dataSource} />
            </div>
          </Col>
        </Row>
        <div className={styles.container}>bar chart</div>
        <div className={styles.container}>table 2</div>
      </Space>
    </AppLayout>
  );
};

export default HomePage;
