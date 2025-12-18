import { Layout } from "antd";
import LoginForm from "../../components/LoginForm";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className={styles["login-bg"]}>
        <LoginForm />
      </div>
    </Layout>
  );
};
export default LoginPage;
