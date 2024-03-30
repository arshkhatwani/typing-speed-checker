import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
    contentCapturedState,
    contentState,
    decrementState,
    timerState,
} from "../state/contentState";

function useKeyboardWithTimer() {
    const [content, setContent] = useRecoilState(contentState);
    const [captured, setCaptured] = useRecoilState(contentCapturedState);

    const [timer, setTimer] = useRecoilState(timerState);
    const [decrementStarted, setDecrementStarted] =
        useRecoilState(decrementState);
    const [intervalState, setIntervalState] = useState<number>();

    useEffect(() => {
        if (timer <= 0) {
            clearInterval(intervalState);
        }

        // Fixing timer decrement issue after hot-reload during development
        if (timer < 0) {
            setTimer(0);
        }
    }, [timer]);

    useEffect(() => {
        if (decrementStarted) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            setIntervalState(interval);

            return () => clearInterval(interval);
        }
    }, [decrementStarted]);

    useEffect(() => {
        const handleKeyPress = () => {
            if (!decrementStarted) {
                setDecrementStarted(true);
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [decrementStarted]);

    useEffect(() => {
        if (!timer) return;

        const handleKeyPress = (event: KeyboardEvent) => {
            if (content.length && content[0] == event.key) {
                setContent(content.slice(1));
                setCaptured(captured + event.key);
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [content, captured, timer]);
}

export default useKeyboardWithTimer;
