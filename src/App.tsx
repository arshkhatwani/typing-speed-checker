import Content from "./components/Content";
import Timer from "./components/Timer";
import TypingSpeed from "./components/TypingSpeed";
import useKeyboardWithTimer from "./hooks/useKeyboardWithTimer";

function App() {
    useKeyboardWithTimer();

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold underline">
                Know Your Typing Speed!
            </h1>

            <Timer />

            <Content />

            <TypingSpeed />
        </div>
    );
}

export default App;
