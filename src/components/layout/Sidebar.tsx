import {
  MdOutlineDashboard,
  MdFactory,
  MdOutlineLan,
  MdOutlineMonitorHeart,
  MdSettings,
  MdDevicesOther,
  MdOutlineWarning,
} from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Avatar, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./layout.module.scss";

import { Grid } from "antd";
import { RxAvatar } from "react-icons/rx";
const { useBreakpoint } = Grid;

interface SidebarProps {
  collapsed: boolean;
  onSelectLabel?: (label: string) => void;
}

const menuItems = [
  {
    key: "1",
    icon: <MdOutlineDashboard size={24} />,
    label: "TRANG CHỦ",
    path: "/home",
  },
  {
    key: "2",
    icon: <MdFactory size={24} />,
    label: "nav 2",
  },
  {
    key: "3",
    icon: <MdOutlineLan size={24} />,
    label: "BIỂU ĐỒ NHÀ MÁY",
    path: "/factory-chart",
  },
  {
    key: "4",
    icon: <MdOutlineMonitorHeart size={24} />,
    label: "nav 4",
  },
  {
    key: "5",
    icon: <MdOutlineWarning size={24} />,
    label: "nav 5",
  },
  {
    key: "6",
    icon: <MdSettings size={24} />,
    label: "nav 6",
  },
  {
    key: "7",
    icon: <IoMdInformationCircleOutline size={24} />,
    label: "nav 7",
  },
  {
    key: "8",
    icon: <MdDevicesOther size={24} />,
    label: "nav 8",
  },
];

const Sidebar = ({ collapsed, onSelectLabel }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  if (isMobile) {
    return (
      <>
        <MobileHeader />
        <MobileNav items={menuItems.slice(0, 5)} />
      </>
    );
  }
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ padding: 14, backgroundColor: "#343A40" }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
          marginBottom: "56px",
        }}
      >
        <svg
          width="56"
          height="25"
          viewBox="0 0 56 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.8053 0.00565147C21.7899 0.007267 21.6271 0.0250263 21.4432 0.045208C17.4262 0.480345 13.6241 1.33851 10.3712 2.54462C7.50011 3.60864 5.07413 4.94715 3.33582 6.42612C3.04773 6.67155 2.86463 6.84027 2.56596 7.13655C2.18753 7.51195 1.99384 7.72427 1.70901 8.07786C0.741385 9.27913 0.175784 10.549 0.0325526 11.8472C0.00651051 12.0829 0 12.2113 0 12.5011C0 12.7909 0.00651051 12.9193 0.0325526 13.155C0.270186 15.3024 1.66913 17.3651 4.12522 19.1896C4.9309 19.7886 5.78622 20.323 6.7986 20.8599C7.06635 21.002 7.76623 21.3491 8.04374 21.4775C11.5057 23.0775 15.705 24.2158 20.3934 24.8237C20.9647 24.898 21.9233 25.0062 21.9559 24.9997C21.9868 24.9941 23.5941 23.7411 26.4237 21.5154C27.9903 20.2835 29.2778 19.2711 29.2851 19.2646C29.2965 19.255 29.6123 19.5117 31.9503 21.4274C33.4087 22.6238 34.9175 23.8614 35.3033 24.1795C35.6882 24.4976 36.0072 24.7591 36.0113 24.7624C36.0267 24.7713 36.9423 24.6364 37.5893 24.5291C41.2872 23.9179 44.689 22.9411 47.5381 21.6744C48.1867 21.3854 48.9265 21.0205 49.4954 20.7089C50.6144 20.0954 51.5665 19.4649 52.4267 18.7674C53.0078 18.2967 53.5986 17.73 54.0364 17.2238C54.8877 16.2405 55.459 15.2346 55.7601 14.1883C56.0767 13.0912 56.0799 11.9505 55.7699 10.8469C55.4761 9.80065 54.9007 8.7786 54.0503 7.79047C53.6719 7.35049 53.1705 6.85723 52.6733 6.43501C51.2239 5.20306 49.3399 4.08576 47.0946 3.12668C45.7624 2.55753 44.2813 2.04005 42.7285 1.59927C40.5792 0.990561 38.2712 0.519903 35.8526 0.19779L35.6947 0.1768L35.6613 0.208284C35.6426 0.225239 35.2821 0.519903 34.8589 0.861391C34.4357 1.20369 33.8205 1.70422 33.4917 1.97385C33.1629 2.24349 32.8773 2.47519 32.8569 2.48891C32.8366 2.50264 30.6027 4.31019 27.8927 6.50605C25.1827 8.70191 22.9268 10.5272 22.8796 10.5627C22.6908 10.704 22.5402 10.7823 22.3962 10.8138C22.1317 10.8719 21.9543 10.7016 21.8989 10.3375C21.8883 10.2665 21.8867 9.65291 21.8867 5.12798V0L21.8607 0.00161552C21.846 0.00161552 21.8208 0.00403786 21.8053 0.00565147ZM11.6961 16.716L11.6937 20.9253L11.4862 20.8332C10.7594 20.5135 10.0083 20.1373 9.37432 19.7749C6.63014 18.2079 4.82755 16.3382 4.1415 14.3458C3.98281 13.8832 3.8941 13.4723 3.84283 12.9612C3.82818 12.8175 3.82818 12.1927 3.84283 12.0409C3.89491 11.4952 4.01048 10.9946 4.20416 10.4828C4.68024 9.22504 5.61776 7.99794 6.95079 6.88871C8.16662 5.87635 9.67055 4.97379 11.4699 4.17698L11.6937 4.07768L11.6961 8.2918C11.6969 10.6096 11.6969 14.4007 11.6961 16.716ZM46.2849 5.03999C48.9485 6.49797 50.7812 8.22964 51.6316 10.0921C52.3673 11.7027 52.3502 13.4077 51.5828 15.015C51.2556 15.7004 50.8219 16.3309 50.2172 17.0018C50.0593 17.177 49.6565 17.5774 49.4693 17.7461C48.7418 18.4008 47.9231 18.9974 46.9799 19.5585C46.612 19.7773 46.1514 20.0332 46.1359 20.0267C46.1302 20.0243 44.1917 18.3395 41.8268 16.2825C37.7284 12.7166 37.5282 12.5414 37.5421 12.5285C37.5502 12.5204 39.483 10.8122 41.8374 8.73259L46.118 4.95038L46.1424 4.96249C46.1555 4.96975 46.2198 5.00447 46.2849 5.03999Z"
            fill="url(#paint0_linear_85_18)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_85_18"
              x1="28"
              y1="0"
              x2="28"
              y2="25"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDB8" />
              <stop offset="0.100962" stop-color="#F4CD2A" />
              <stop offset="0.197115" stop-color="#F1B63B" />
              <stop offset="0.403846" stop-color="#D28D0D" />
              <stop offset="0.625" stop-color="#EDA323" />
              <stop offset="1" stop-color="#FDF68C" />
            </linearGradient>
          </defs>
        </svg>
        <p
          style={{
            color: "#EDA323",
            fontWeight: "bold",
            marginTop: 0,
            fontSize: 12,
          }}
        >
          MOTOR
        </p>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        inlineCollapsed={collapsed}
        defaultSelectedKeys={["1"]}
        items={menuItems}
        selectedKeys={[
          menuItems.find((item) => item.path === location.pathname)?.key || "1",
        ]}
        onClick={(e) => {
          const selectedItem = menuItems.find((item) => item.key === e.key);
          if (selectedItem) {
            if (onSelectLabel) {
              onSelectLabel(selectedItem.label);
            }
            if (selectedItem.path) {
              navigate(selectedItem.path);
            }
          }
        }}
        style={{
          backgroundColor: "#3c4247",
          borderRadius: 8,
        }}
      />
    </Sider>
  );
};

export default Sidebar;

const MobileHeader = () => {
  return (
    <div className={styles["mobile-header"]}>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <svg
          width="45"
          height="20"
          viewBox="0 0 45 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2583 0.00452042C17.246 0.0058136 17.1172 0.0200195 16.9716 0.0361671C13.7923 0.384275 10.783 1.0708 8.20852 2.03569C5.93611 2.88691 4.01602 3.95772 2.6402 5.1409C2.41219 5.33724 2.26726 5.47222 2.03088 5.70924C1.73136 6.00956 1.57807 6.17941 1.35263 6.46229C0.586783 7.4233 0.139128 8.43921 0.0257644 9.47773C0.00515287 9.66631 0 9.769 0 10.0009C0 10.2327 0.00515287 10.3354 0.0257644 10.524C0.213844 12.2419 1.32107 13.8921 3.26499 15.3517C3.90266 15.8309 4.57961 16.2584 5.38089 16.6879C5.5928 16.8016 6.14673 17.0793 6.36637 17.182C9.10641 18.462 12.43 19.3727 16.1407 19.859C16.5929 19.9184 17.3517 20.0049 17.3774 19.9998C17.4019 19.9953 18.674 18.9929 20.9136 17.2123C22.1535 16.2268 23.1725 15.4169 23.1783 15.4117C23.1873 15.404 23.4372 15.6093 25.2877 17.1419C26.442 18.0991 27.6361 19.0891 27.9414 19.3436C28.2461 19.5981 28.4986 19.8073 28.5018 19.8099C28.5141 19.817 29.2387 19.7092 29.7507 19.6233C32.6776 19.1344 35.37 18.3529 37.625 17.3396C38.1383 17.1083 38.7238 16.8164 39.1741 16.5671C40.0597 16.0763 40.8133 15.5719 41.4941 15.0139C41.954 14.6374 42.4217 14.184 42.7682 13.779C43.4419 12.9924 43.8941 12.1877 44.1324 11.3507C44.383 10.473 44.3855 9.56039 44.1401 8.67753C43.9076 7.84052 43.4522 7.02288 42.7791 6.23237C42.4796 5.88039 42.0829 5.48578 41.6893 5.148C40.5421 4.16245 39.051 3.2686 37.2739 2.50134C36.2195 2.04603 35.0473 1.63204 33.8183 1.27941C32.1172 0.792448 30.2905 0.415922 28.3762 0.158232L28.2513 0.141439L28.2249 0.166628C28.21 0.180189 27.9247 0.415922 27.5898 0.689112C27.2548 0.96295 26.7679 1.36337 26.5077 1.57908C26.2474 1.79479 26.0214 1.98015 26.0053 1.99113C25.9892 2.00211 24.2211 3.44815 22.0762 5.20484C19.9313 6.96153 18.1458 8.42177 18.1085 8.45019C17.959 8.56321 17.8399 8.62586 17.7259 8.65105C17.5165 8.69755 17.3761 8.56128 17.3323 8.27C17.324 8.21317 17.3227 7.72233 17.3227 4.10239V0L17.3021 0.00129128C17.2905 0.00129128 17.2705 0.00322914 17.2583 0.00452042ZM9.25713 13.3728L9.2552 16.7402L9.09095 16.6666C8.51576 16.4108 7.92125 16.1099 7.41949 15.8199C5.24756 14.5663 3.82085 13.0705 3.27787 11.4766C3.15227 11.1065 3.08206 10.7778 3.04148 10.369C3.02989 10.254 3.02989 9.75415 3.04148 9.63273C3.08271 9.19614 3.17417 8.79572 3.32747 8.38625C3.70427 7.38003 4.44628 6.39835 5.50133 5.51097C6.46363 4.70108 7.65395 3.97903 9.07807 3.34159L9.2552 3.26215L9.25713 6.63344C9.25778 8.48765 9.25778 11.5205 9.25713 13.3728ZM36.633 4.03199C38.7412 5.19838 40.1918 6.58371 40.8648 8.07367C41.4471 9.36212 41.4336 10.7261 40.8262 12.012C40.5673 12.5603 40.224 13.0647 39.7454 13.6014C39.6204 13.7416 39.3016 14.0619 39.1534 14.1969C38.5776 14.7207 37.9296 15.1979 37.1831 15.6468C36.892 15.8218 36.5274 16.0266 36.5152 16.0214C36.5107 16.0195 34.9764 14.6716 33.1046 13.026C29.8609 10.1733 29.7024 10.0332 29.7134 10.0228C29.7198 10.0164 31.2496 8.64976 33.113 6.98607L36.501 3.9603L36.5203 3.96999C36.5306 3.9758 36.5815 4.00357 36.633 4.03199Z"
            fill="url(#paint0_linear_73_17036)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_73_17036"
              x1="22.1611"
              y1="0"
              x2="22.1611"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDB8" />
              <stop offset="0.100962" stop-color="#F4CD2A" />
              <stop offset="0.197115" stop-color="#F1B63B" />
              <stop offset="0.403846" stop-color="#D28D0D" />
              <stop offset="0.625" stop-color="#EDA323" />
              <stop offset="1" stop-color="#FDF68C" />
            </linearGradient>
          </defs>
        </svg>

        <div className={styles["header-title"]}>
          <span>KIM LONG</span>
          <span>MOTOR</span>
        </div>
      </div>

      <div className={styles["header-info"]}>
        <Avatar
          icon={<RxAvatar size={24} />}
          size={24}
          style={{ backgroundColor: "transparent" }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 8 }}>Vịt Điên</span>
          <span style={{ fontSize: 6 }}>Administrator</span>
        </div>
      </div>
    </div>
  );
};

const MobileNav = ({ items }: { items: typeof menuItems }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        height: 56,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f2a4a, #0b1f35)",
      }}
    >
      {items.map((item) => {
        const active = item.path === location.pathname;

        return (
          <div
            key={item.key}
            onClick={() => item.path && navigate(item.path)}
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              color: "#fff",
              backgroundColor: active ? "#1677ff33" : "transparent",
              borderBottom: active
                ? "2px solid #1677ff"
                : "2px solid transparent",
            }}
          >
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};
