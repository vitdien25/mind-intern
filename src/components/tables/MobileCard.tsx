import styles from "./table.module.scss";
import { MdOutlineListAlt } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";

const MobileCard = () => {
  return (
    <div className={styles["mobile-card"]}>
      <p className={styles["mobile-card-title"]}>
        <MdOutlineListAlt color="#FACC14" size={20} /> Mã tủ 1
      </p>
      <div className={styles["mobile-card-info"]}>
        <span>
          <FcCalendar size={14} /> 30,07 MWh
        </span>
        <span>
          <FcCalendar size={14} />
          30,07 MWh
        </span>
      </div>
    </div>
  );
};

export default MobileCard;
