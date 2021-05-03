import styles from "../../assets/css/top.module.scss";
import PcOperationsTemplate from "../../sub-components/top-options/pc.jsx";
import MobileOperationsTemplate from "../../sub-components/top-options/mobile.jsx";
import TestTemp from "../../assets/js/is-mobile.jsx";

function Template() {
    return (
        <div className={styles.top}>
            <div className={styles.left}>dataReachable</div>
            <div className={styles.right}>
                <div className={styles.user}>YL</div>
                <TestTemp
                    pcTemp={PcOperationsTemplate}
                    mobileTemp={MobileOperationsTemplate}
                />
            </div>
        </div>
    );
}

export default Template;
