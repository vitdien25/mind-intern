import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedLabel, setSelectedLabel] = useState("TRANG CHỦ");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sidebar collapsed={collapsed} onSelectLabel={setSelectedLabel} />
      <Layout>
        <Header
          style={{
            background: colorBgContainer,
            backgroundColor: "#0c1c34",
            color: "#fff",
            paddingLeft: 14,
          }}
        >
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
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
