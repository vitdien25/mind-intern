import React from "react";
import AppLayout from "../../components/layout/AppLayout";
import styles from "./HomePage.module.scss";
import { Col, Grid, Row, Space } from "antd";
import {
  columns,
  columns2,
  dataSource,
  dataSource2,
} from "../../components/tables/mock";
import BaseTable from "../../components/tables/BaseTable";
import DoughnutChart from "../../components/charts/DoughnutChart";
import BarChart from "../../components/charts/BarChart";
import FactoryCard from "../../components/tables/FactoryCard";

const { useBreakpoint } = Grid;

const HomePage: React.FC = () => {
  const screens = useBreakpoint();
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
                  marginBottom: 14,
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
            {/* if desktop render table, if tablet render cards */}
            {screens.lg ? (
              <div className={styles.container}>
                <BaseTable columns={columns} dataSource={dataSource} />
              </div>
            ) : (
              <div
                className={styles.container}
                style={{
                  minWidth: 336,
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {Array.from({ length: 4 }).map((_, index) => (
                  <FactoryCard key={index} />
                ))}
              </div>
            )}
          </Col>
        </Row>

        <div className={styles.container}>
          <p
            style={{
              padding: 12,
              margin: 0,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Biểu đồ tiêu thụ năm
          </p>
          <BarChart />
        </div>
        <div className={styles.container}>
          <BaseTable columns={columns2} dataSource={dataSource2} />
        </div>
      </Space>
    </AppLayout>
  );
};

export default HomePage;
