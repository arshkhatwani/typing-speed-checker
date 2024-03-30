import { useRecoilState } from "recoil";
import { contentCapturedState, contentState } from "../state/contentState";

function Content() {
    const [content] = useRecoilState(contentState);
    const [contentCaptured] = useRecoilState(contentCapturedState);

    return (
        <div className="my-3 text-4xl">
            <span className="bg-blue-300">{contentCaptured}</span>
            <span>{content}</span>
        </div>
    );
}

export default Content;
