import logo from "../../assets/img/icon.png";
import styles from "./index.module.scss";
import "../../assets/css/commit.css";
import help from "../../assets/img/help.png";
import add from "../../assets/img/add.png";
import MobileTemp from "../../sub-components/search-box/mobile.jsx";
import { useState } from "react";

function Context() {
    const [tableField, setTableField] = useState([]);
    const [tableList, setTableList] = useState([]);

    const tableTitle = tableField.map((index) => {
        return (
            <li
                style={{ width: index.width }}
                className="no-list-style"
                key={index.key}
            >
                {index.name}
            </li>
        );
    });
    let tableListTemp = tableList.map((index, n) => {
        const html = tableField.map((item) => {
            let itemHtml = (
                <li
                    style={{ width: item.width }}
                    className="no-list-style"
                    key={item.key}
                >
                    {index[item.key]}
                </li>
            );

            if (item.callback) itemHtml = item.callback(item, index, itemHtml);

            return itemHtml;
        });
        return (
            <ul className={styles.tableItem + " no-list-style"} key={n}>
                {html}
            </ul>
        );
    });

    function getTableList(res) {
        setTableList(res.child);
    }
    function getTableField(res) {
        setTableField(res);
    }

    return (
        <div className={styles.container}>
            <MobileTemp
                setTableList={getTableList}
                setTableField={getTableField}
            />

            <div className={styles.status}>
                <div className={styles.left}>
                    <div className={styles.title}>Status</div>
                    <div className={styles.data}>
                        Private
                        <img src={help} alt="" />
                    </div>
                </div>
                <div className={styles.right}>
                    <img src={logo} alt="" />
                    <div className={styles.name}>Change Logo</div>
                </div>
            </div>

            <div className={styles.table}>
                <div className={styles.title}>Members</div>

                <ul className={styles.tableTitle + " no-list-style"}>
                    {tableTitle}
                </ul>
                {tableListTemp}
                <button
                    className={styles.btn}
                    onClick={() => {
                        console.log("addMember");
                    }}
                >
                    <img src={add} alt="" />
                    Add member
                </button>
            </div>
        </div>
    );
}
export default Context;
