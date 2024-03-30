import { atom } from "recoil";
import samplePara from "../constants/samplePara";
import initialTimer from "../constants/initialTimer";

export const contentStr = atom({ key: "contentStr", default: samplePara });

export const contentCapture = atom({ key: "contentCapture", default: "" });

export const timerState = atom({
    key: "timer",
    default: initialTimer,
});

export const decrementState = atom({
    key: "decrementStarted",
    default: false,
});
