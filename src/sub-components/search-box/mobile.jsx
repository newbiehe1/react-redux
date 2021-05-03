import styles from "./assets/mobile.module.scss";
import select from "../../assets/img/select.png";
import add from "../../assets/img/add.png";
import orgList from "../../assets/js/org-list";
import { useState, useEffect } from "react";
import { getAllParentNode } from "../../assets/js/get-all-parent-node";

function Temp(props) {
    const [list, setList] = useState([]);
    const [showOrg, setShowOrg] = useState(false);
    const [selectData, setSelectData] = useState(null);
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
    // 反向显示Org列表
    function toggleOrg(e) {
        const nodes = getAllParentNode(e.target);
        const flag = nodes.some(
            (index) => index.className.indexOf("mobile_flex") >= 0
        );
        if (flag) setShowOrg(!showOrg);
        else setShowOrg(false);
    }

    useEffect(() => {
        setList(JSON.parse(JSON.stringify(orgList)));
        initTableField();
        window.addEventListener("click", toggleOrg, false);
        return () => {
            window.removeEventListener("click", toggleOrg, false);
        };
    }, []);

    useEffect(() => {
        const data = list.find((index) => index.show);
        if (!data && list.length > 0) {
            chooseItem(list[0]);
        }
    }, [list]);
    // 选择Item
    function chooseItem(data, e) {
        e && e.stopPropagation();
        setSelectData(JSON.parse(JSON.stringify(data)));
        props.setTableList(JSON.parse(JSON.stringify(data)));
        setShowOrg(false);
    }

    let listTemp = list.map((index) => {
        return (
            <li
                className={styles.item + " no-list-style"}
                onClick={(e) => {
                    chooseItem(index, e);
                }}
                key={index.id}
            >
                <img src={index.img} alt="" />
                <div className={styles.name}>{index.name}</div>
            </li>
        );
    });
    return (
        <div className={styles.mobile}>
            <div className={styles.flex}>
                <img src={select} className={styles.select} alt="" />
                <img
                    src={selectData ? selectData.img : ""}
                    alt=""
                    className={styles.icon}
                />
                <input
                    type="text"
                    defaultValue={selectData ? selectData.name : ""}
                />
                <ul
                    className="no-list-style"
                    style={showOrg ? {} : { display: "none" }}
                >
                    {listTemp}
                </ul>
            </div>
            <img
                src={add}
                className={styles.add}
                alt=""
                onClick={() => {
                    console.log("新增");
                }}
            />
        </div>
    );
}
export default Temp;
