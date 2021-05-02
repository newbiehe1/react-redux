import styles from "../../assets/css/top.module.scss";
import PcOperationsTemplate from "../../sub-components/top-options/pc.jsx";
import MobileOperationsTemplate from "../../sub-components/top-options/mobile.jsx";
import { store } from "../../store/index";

let OptionTemplate = null;
// 赋值操作框组件;
function setOptionTemplate() {
    const state = store.getState();

    OptionTemplate =
        state.value === "pc" ? PcOperationsTemplate : MobileOperationsTemplate;
}
setOptionTemplate();
store.subscribe(() => {
    setOptionTemplate();
});

function Template() {
    // console.log(111);

    return (
        <div className={styles.top}>
            <div className={styles.left}>dataReachable</div>
            <div className={styles.right}>
                <div className={styles.user}>YL</div>
                {/* <TestTemp
                    pcTemp={PcOperationsTemplate}
                    mobileTemp={MobileOperationsTemplate}
                /> */}
                <OptionTemplate />
            </div>
        </div>
    );
}

export default Template;
