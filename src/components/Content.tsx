import { useRecoilState } from "recoil";
import { contentCapture, contentStr } from "../state/contentState";

function Content() {
    const [content] = useRecoilState(contentStr);
    const [captured] = useRecoilState(contentCapture);

    return (
        <div className="my-3 text-4xl">
            <span className="bg-blue-300">{captured}</span>
            <span>{content}</span>
        </div>
    );
}

export default Content;
