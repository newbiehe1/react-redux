import styles from "./assets/pc.module.scss";
function Temp(props) {
    return (
        <input type="text" defaultValue={props.name} className={styles.input} />
    );
}
export default Temp;
