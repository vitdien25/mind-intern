import React from "react";
import AppLayout from "../../components/layout/AppLayout";
import styles from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  return (
    <AppLayout>
      <div className={styles.homepage}>home page</div>
    </AppLayout>
  );
};

export default HomePage;
