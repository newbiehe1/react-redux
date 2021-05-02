import { list, dashboardClick } from "./item-mixins";
import "../../assets/css/commit.css";
import styles from "./assets/pc.module.scss";

function template() {
    const liItems = list.map((index) => {
        return (
            <li key={index.key} className={"no-list-style " + styles.first}>
                <div className={"point " + index.key} onClick={index.click}>
                    {index.name}
                </div>
            </li>
        );
    });
    return (
        <div className={styles.doSomething}>
            <div className="point" onClick={dashboardClick}>
                Go to Dashboard
            </div>
            <ul className="no-list-style">{liItems}</ul>
        </div>
    );
}
export default template;
