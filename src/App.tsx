import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Content from "./components/Content";
import { contentCapture, contentStr } from "./state/contentState";

function App() {
    const [content, setContent] = useRecoilState(contentStr);
    const [captured, setCaptured] = useRecoilState(contentCapture);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (
                /^[a-z]$/.test(event.key) ||
                /^[A-Z]$/.test(event.key) ||
                event.key === " "
            ) {
                // console.log(event.key);
                if (content.length && content[0] == event.key) {
                    setContent(content.slice(1));
                    setCaptured(captured + event.key);
                }
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [content, captured]);

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold underline">
                Know Your Typing Speed!
            </h1>

            <Content />
        </div>
    );
}

export default App;
