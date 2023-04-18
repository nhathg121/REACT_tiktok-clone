import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function SideBar() {
  return <div className={cx("side-bar")}>123</div>;
}

export default SideBar;
