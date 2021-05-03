import TopTemplate from "./components/top/index";
import styles from "./assets/css/wrap.module.scss";
// import SidebarTemp from "./components/sidebar/index";
// import ContextTemp from "./components/context/index";
import IsMobileTemp from "./assets/js/is-mobile.jsx";
import PcTemp from "./sub-components/main/pc.jsx";
import MobileTemp from "./sub-components/main/mobile.jsx";
import { useState } from "react";
import { deepCopy } from "./assets/js/deep-copy";

function App() {
    const [tableField, setTableField] = useState([]);
    const [tableData, setTableData] = useState(null);

    const getTableData = function (res) {
        setTableData(deepCopy(res));
    };
    const getTableField = function (res) {
        setTableField(res);
    };

    return (
        <div className={styles.wrap}>
            <TopTemplate />
            <IsMobileTemp
                setTableList={getTableData}
                setTableField={getTableField}
                tableField={tableField}
                tableData={tableData}
                pcTemp={PcTemp}
                mobileTemp={MobileTemp}
            />
            {/* <div className={styles.main}>
                <SidebarTemp
                    setTableList={getTableData}
                    setTableField={getTableField}
                />
                <ContextTemp tableField={tableField} tableData={tableData} />
            </div> */}
        </div>
    );
}

export default App;
