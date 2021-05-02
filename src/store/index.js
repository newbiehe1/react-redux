import { createSlice, configureStore } from "@reduxjs/toolkit";
import isMobile from "ismobilejs";
import antiShake from "../assets/js/anti-shake";

const deviceTypeSlice = createSlice({
    name: "deviceType",
    initialState: {
        value: null,
    },
    reducers: {
        changeDeviceType(state, data) {
            state.value = data.payload;
        },
    },
});

export const { changeDeviceType } = deviceTypeSlice.actions;

export const store = configureStore({
    reducer: deviceTypeSlice.reducer,
});

function setDeviceType() {
    const deviceType = isMobile(window.navigator);
    if (deviceType.tablet) {
        store.dispatch(changeDeviceType("tablet"));
    } else if (deviceType.phone) {
        store.dispatch(changeDeviceType("phone"));
    } else {
        store.dispatch(changeDeviceType("pc"));
    }
}
setDeviceType();
window.addEventListener("resize", antiShake(setDeviceType, 500), false);
