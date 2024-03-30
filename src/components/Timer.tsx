import { useRecoilState } from "recoil";
import { decrementState, timerState } from "../state/contentState";

function Timer() {
    const [decrementStarted] = useRecoilState(decrementState);
    const [timer] = useRecoilState(timerState);

    return <div>{decrementStarted ? <h2>{timer}</h2> : <></>}</div>;
}

export default Timer;
