import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
        return;
    }

    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };

    useEffect(() => {
        document.addEventListener("mouseleave", handle);

        return () => {
            document.removeEventListener("mouseleave", handle);
        };
    }, []);
};

const App = () => {
    const begForLife = () => {
        console.log("plz dont leave");
    };
    useBeforeLeave(begForLife);

    return (
        <div className="App">
            <h1>Hello</h1>
        </div>
    );
};

export default App;

// useBeforeLeave
// 탭을 닫을 때 실행되는 function
// 마우스 커서가 페이지를 벗어날 때 function이 실행된다
