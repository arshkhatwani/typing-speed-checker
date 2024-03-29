import { useEffect } from "react";
import Content from "./components/Content";
import { useRecoilState } from "recoil";
import { contentStr } from "./state/contentState";

function App() {
    const [content, setContent] = useRecoilState(contentStr);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (
                /^[a-z]$/.test(event.key) ||
                /^[A-Z]$/.test(event.key) ||
                event.key === " "
            ) {
                console.log(event.key);
                if (content.length && content[0] == event.key) {
                    setContent((prevContent) => prevContent.slice(1));
                }
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [content]);

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
