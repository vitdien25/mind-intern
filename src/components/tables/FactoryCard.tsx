import { Col, Row } from "antd";
import { FaCircle } from "react-icons/fa6";
import styles from "./table.module.scss";
const FactoryCard = () => {
  return (
    <div className={styles["factory-card"]}>
      <p className={styles["factory-card-title"]}>
        <FaCircle style={{ color: "#3e9b53" }} /> XuongSon-MSB3
      </p>
      <Row
        gutter={[4, 4]}
        className={styles["factory-card-info"]}
        style={{ margin: 6 }}
      >
        <Col span={6} className={styles["factory-card-label"]}>
          <span>Điện tiêu thụ:</span>
          <span>Nhiệt độ:</span>
          <span>Độ ẩm:</span>
        </Col>
        <Col span={6} className={styles["factory-card-value"]}>
          <span>400 kWh</span>
          <span>37</span>
          <span>30%</span>
        </Col>
        <Col span={6} className={styles["factory-card-label"]}>
          <span>Dòng trung bình:</span>
          <span>Áp trung bình:</span>
          <span>Số cảnh báo:</span>
        </Col>
        <Col span={6} className={styles["factory-card-value"]}>
          <span>12A</span>
          <span>360V</span>
          <span>5</span>
        </Col>
      </Row>
    </div>
  );
};

export default FactoryCard;
