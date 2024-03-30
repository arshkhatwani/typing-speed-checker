import { useRecoilState } from "recoil";
import initialTimer from "../constants/initialTimer";
import { contentCapturedState, timerState } from "../state/contentState";

function TypingSpeed() {
    const [timer] = useRecoilState(timerState);
    const [contentCaptured] = useRecoilState(contentCapturedState);

    if (timer !== 0) return <></>;

    return (
        <div>
            <h3>
                Your typing speed is{" "}
                {(contentCaptured.split(" ").length * 60) / initialTimer} words
                per minute
            </h3>
        </div>
    );
}

export default TypingSpeed;
