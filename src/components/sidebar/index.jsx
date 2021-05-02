import styles from "./index.module.scss";
import icon from "../../assets/img/icon.png";
import add from "../../assets/img/add.png";
import search from "../../assets/img/search.png";
import select from "../../assets/img/select.png";
import { useState, useEffect } from "react";

function Sidebar(props) {
    // 声明表格字段
    function initTableField() {
        const tableField = [
            {
                name: "Name",
                key: "name",
                width: "25%",
            },
            {
                name: "Email",
                key: "email",
                width: "45%",
            },
            {
                name: "Permissions",
                key: "permission",
                width: "30%",
                callback: (field, data, original) => {
                    const key = field.key;
                    if (data[key] === "can edit") {
                        return (
                            <li
                                style={{ width: field.width }}
                                className="no-list-style"
                                key={field.key}
                            >
                                {data[field.key]}
                                <img
                                    src={select}
                                    className={styles.select}
                                    onClick={() => {
                                        console.log("change");
                                    }}
                                    alt=""
                                />
                            </li>
                        );
                    } else {
                        return original;
                    }
                },
            },
        ];
        props.setTableField(tableField);
    }
    // 选择Item
    function chooseItem(data) {
        const arr = JSON.parse(JSON.stringify(list));
        arr.forEach((index) => {
            index.show = index.id === data.id;
        });
        setList(JSON.parse(JSON.stringify(arr)));
        props.setTableList(JSON.parse(JSON.stringify(data)));
    }

    const [list, setList] = useState([]);

    let listTemp = list.map((index) => {
        return (
            <div
                className={
                    styles.item + (index.show ? " " + styles.active : "")
                }
                onClick={() => {
                    chooseItem(index);
                }}
                key={index.id}
            >
                <img src={index.img} alt="" />
                <div className={styles.name}>{index.name}</div>
            </div>
        );
    });

    useEffect(() => {
        const arr = [
            {
                name: "Ekas Pty Ltd",
                img: icon,
                show: false,
                id: 1,
                child: [
                    {
                        name: "Monica",
                        email: "monica.li@ekas.com",
                        permission: "owner",
                    },
                    {
                        name: "Lawrence",
                        email: "Lawrence.liu@ekas.com",
                        permission: "can edit",
                    },
                ],
            },
            {
                name: "item2",
                img: icon,
                show: false,
                id: 2,
                child: [
                    {
                        name: "name",
                        email: "email",
                        permission: "permission",
                    },
                ],
            },
        ];
        setList(JSON.parse(JSON.stringify(arr)));
        // 声明表格字段
        initTableField();
    }, []);
    useEffect(() => {
        const data = list.find((index) => index.show);
        if (!data && list.length > 0) {
            chooseItem(list[0]);
        }
    }, [list]);
    return (
        <div className={styles.sidebar}>
            <div className={styles.user}>
                <div className={styles.icon}>M</div>
                <div className={styles.name}>Michael Liu</div>
            </div>
            <div className={styles.search}>
                <img src={search} alt="" />
                <input type="text" placeholder="Search" />
            </div>
            <div className={styles.title}>
                <i className="square"></i>
                <div className={styles.name}>dataReachable Pty Ltd</div>
            </div>
            <div className={styles.org}>
                {listTemp}
                <div className={styles.add}>
                    <img src={add} alt="" />
                    <div className={styles.name}>Create new organization</div>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;
