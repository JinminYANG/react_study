import { useRef } from "react";

export const useFullscreen = (callback) => {
    const element = useRef();
    const runCallback = (isFull) => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    };

    const triggerFull = () => {
        if (element.current) {
            element.current.requestFullscreen();
            runCallback(true);
        }
    };

    const exitFull = () => {
        document.exitFullscreen();
        runCallback(false);
    };

    return { element, triggerFull, exitFull };
};

const App = () => {
    const onFullS = (isFull) => {
        console.log(isFull ? "Full" : "Small");
    };

    const { element, triggerFull, exitFull } = useFullscreen(onFullS);
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <div ref={element}>
                <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" />
                <button onClick={exitFull}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    );
};

export default App;

// useFullScreen
// element를 FullScreen으로 만들거나 해제할 수 있는 기능
// event에 어떻게 반응할지 선택할 수 있음
