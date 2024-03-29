import { atom } from "recoil";
import samplePara from "../constants/samplePara";

export const contentStr = atom({ key: "contentStr", default: samplePara });

export const contentCapture = atom({ key: "contentCapture", default: "" });
