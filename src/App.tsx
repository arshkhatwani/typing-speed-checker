import Content from "./components/Content";
import Timer from "./components/Timer";
import Title from "./components/Title";
import TypingSpeed from "./components/TypingSpeed";
import useKeyboardWithTimer from "./hooks/useKeyboardWithTimer";

function App() {
    useKeyboardWithTimer();

    return (
        <div className="p-5">
            <Title />

            <Timer />

            <Content />

            <TypingSpeed />
        </div>
    );
}

export default App;
