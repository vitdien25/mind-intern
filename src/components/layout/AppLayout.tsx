import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Avatar, Button, Layout } from "antd";
import Sidebar from "./Sidebar";
import styles from "./layout.module.scss";
import { RxAvatar } from "react-icons/rx";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

const { Header, Content } = Layout;

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedLabel, setSelectedLabel] = useState("TRANG CHỦ");
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  return (
    <Layout>
      <Sidebar collapsed={collapsed} onSelectLabel={setSelectedLabel} />
      <Layout>
        {/* Header */}
        {isMobile ? null : (
          <Header className={styles.header}>
            <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "24px",
                  width: 29,
                  height: 29,
                  color: "#fff",
                  marginRight: 4,
                }}
              />
              <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                {selectedLabel}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                lineHeight: 1.2,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: 14,
                }}
              >
                <span style={{ fontWeight: "bold" }}>14:27:40</span>
                <span>11/24/2025</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  lineHeight: 1.6,
                }}
              >
                <Avatar icon={<RxAvatar size={32} />} size={32} />

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: 12 }}>Vịt Điên</span>
                  <span style={{ fontSize: 10 }}>Administrator</span>
                </div>
              </div>
            </div>
          </Header>
        )}
        <Content
          style={{
            minHeight: "100vh",
            background: "#102d5e",
            padding: "12px",
            overflow: "hidden",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
