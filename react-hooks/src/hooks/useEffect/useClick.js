import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
    if (typeof onClick !== "function") {
        return;
    }

    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }

        return () => {
            if (element.current) {
                element.current.removeListener("click", onClick);
            }
        };
    }, []);
    return element; // 2. 같은 reference를 return
};

const App = () => {
    // const input = useRef();
    // reference는 기본적으로 우리의 component의 어떤 부분을 선택할 수 있는 방법을 의미
    // === document.getElementById()와 유사
    const sayHello = () => {
        console.log("say Hello");
    };

    const title = useClick(sayHello); // 1. useClick을 사용하여 useRef()를 만듬

    return (
        <div className="App">
            <h1 ref={title}>Hi</h1>
            {/* 3. 주어진 reference를 title에 전달 */}

            {/* <input ref={input} placeholder="la" /> */}
            {/* react에 있는 모든 component는 reference element를 가지고 있다 */}
        </div>
    );
};

export default App;

// function을 리턴 받았다면
// 그 function은 componentWillUnMount로 부터 호출된 것이다.
// dependency === '[]' 를 사용하게 되면 componentDidMount때 단 한번 실행되라는 의미가 된다.
// 그리고 return에있는 함수나 코드를 실행한다. componentWillUnMount때 호출된다.
