import { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
    if (typeof duration !== "number" || typeof delay !== "number") {
        return;
    }

    const element = useRef();

    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);

    return { ref: element, style: { opacity: 0 } };
};

const App = () => {
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);

    return (
        <div className="App">
            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP}>lorem ipsum</p>
        </div>
    );
};

export default App;

// useFadeIn
// 기본적으로 하나의 element르 가진다
// 자동으로 서서히 나타나게 만듬
// animation을 hooks에 포함시키는 방법
