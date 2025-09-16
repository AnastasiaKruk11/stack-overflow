import { Outlet } from "react-router-dom";
import styles from "./MainField.module.css";

export default function MainField() {
    return (
        <div className={styles.wrapper}>
            <Outlet />
        </div>
    )
}