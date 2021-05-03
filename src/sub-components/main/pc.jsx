import SidebarTemp from "../../components/sidebar/index";
import ContextTemp from "./pc-context.jsx";
import styles from "../../assets/css/wrap.module.scss";
function Temp(props) {
    return (
        <div className={styles.main}>
            <SidebarTemp {...props} />
            {/* setTableList={props.getTableData} */}
            {/* setTableField={props.getTableField} */}
            {/* tableField={tableField} tableData={tableData} */}
            <ContextTemp {...props} />
        </div>
    );
}
export default Temp;
