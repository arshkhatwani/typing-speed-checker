import { useRecoilState } from "recoil";
import { decrementState, timerState } from "../state/contentState";

function Timer() {
    const [decrementStarted] = useRecoilState(decrementState);
    const [timer] = useRecoilState(timerState);

    return (
        <div className="my-3">
            {decrementStarted ? <h2 className="text-2xl">{timer}</h2> : <></>}
        </div>
    );
}

export default Timer;
