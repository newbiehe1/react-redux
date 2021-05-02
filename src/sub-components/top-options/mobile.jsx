import { list, dashboardClick } from "./item-mixins";
import { useState, useEffect } from "react";
import styles from "./assets/mobile.module.scss";
import "../../assets/css/commit.css";
import { getAllParentNode } from "../../assets/js/get-all-parent-node";

function Template() {
    const liItems = list.map((index) => {
        return (
            <li key={index.key} className="no-list-style">
                <div className="point" onClick={index.click}>
                    {index.name}
                </div>
            </li>
        );
    });

    let [show, changeShow] = useState(false);

    useEffect(() => {
        window.addEventListener("click", hiddenOperation, false);
        return () => {
            window.removeEventListener("click", hiddenOperation, false);
        };
    });

    function hiddenOperation(e) {
        const nodes = getAllParentNode(e.target);
        const flag = nodes.some(
            (index) => index.className.indexOf("mobile_doSomething") >= 0
        );
        if (flag) changeShow(!show);
        else changeShow(false);
    }

    return (
        <div className={styles.doSomething}>
            <div className={styles.hover}>
                <i></i>
                <i></i>
                <i></i>
            </div>
            <ul
                className="no-list-style"
                style={show ? {} : { display: "none" }}
            >
                <li className="no-list-style">
                    <div className="point" onClick={dashboardClick}>
                        Dashboard
                    </div>
                </li>
                {liItems}
            </ul>
        </div>
    );
}
export default Template;
