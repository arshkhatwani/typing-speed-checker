import { useRecoilState } from "recoil";
import { contentStr } from "../state/contentState";

function Content() {
    const [content] = useRecoilState(contentStr);
    return <div className="my-3 text-4xl">{content}</div>;
}

export default Content;
