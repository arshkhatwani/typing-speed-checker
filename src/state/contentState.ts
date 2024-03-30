import { atom } from "recoil";
import samplePara from "../constants/samplePara";
import initialTimer from "../constants/initialTimer";

export const contentState = atom({ key: "content", default: samplePara });

export const contentCapturedState = atom({ key: "contentCaptured", default: "" });

export const timerState = atom({
    key: "timer",
    default: initialTimer,
});

export const decrementState = atom({
    key: "decrementStarted",
    default: false,
});
