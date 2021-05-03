import { store } from "../../store/index";
import { useState, useEffect } from "react";

export default function MixinsTest(props) {
    let OptionTemplate =
        store.getState().value === "pc" ? props.pcTemp : props.mobileTemp;
    const [isComponent, setComponent] = useState("");
    useEffect(() => {
        setOptionTemplate();
    }, []);
    // 赋值操作框组件
    function setOptionTemplate() {
        const state = store.getState();
        if (state.value === "pc") {
            OptionTemplate = props.pcTemp;
            setComponent("pc");
        } else {
            OptionTemplate = props.mobileTemp;
            setComponent("mobile");
        }
    }

    store.subscribe(() => {
        setOptionTemplate();
    });
    return <OptionTemplate {...props} type={isComponent} />;
}
