import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Content from "./components/Content";
import {
    contentCapture,
    contentStr,
    decrementState,
    timerState,
} from "./state/contentState";
import initialTimer from "./constants/initialTimer";

function App() {
    const [content, setContent] = useRecoilState(contentStr);
    const [captured, setCaptured] = useRecoilState(contentCapture);

    const [count, setCount] = useRecoilState(timerState);
    const [decrementStarted, setDecrementStarted] =
        useRecoilState(decrementState);
    const [intervalState, setIntervalState] = useState<number>();

    useEffect(() => {
        if (count == 0) {
            clearInterval(intervalState);
        }
    }, [count]);

    useEffect(() => {
        if (decrementStarted) {
            const interval = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);
            setIntervalState(interval);

            return () => clearInterval(interval);
        }
    }, [decrementStarted]);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
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
        if (!count) return;

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
    }, [content, captured, count]);

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold underline">
                Know Your Typing Speed!
            </h1>

            {decrementStarted ? <h2>{count}</h2> : <></>}

            <Content />

            {count === 0 ? (
                <h3>
                    Your typing speed is{" "}
                    {(captured.split(" ").length * 60) / initialTimer} words per
                    minute
                </h3>
            ) : (
                <></>
            )}
        </div>
    );
}

export default App;
