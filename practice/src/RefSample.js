import {createRef} from "react";

export const RefSample = () => {
    const input = createRef();
    const onFocus = () => {
        input.current.focus();
    }

    return (
        <div>
            <input
                ref={input}
            />
        </div>
    )
}

// DOM에 직접 접근해야할 때는 ref를 사용한다.
// 함수형 컴포넌트에서는 useRef() 라는 Hook 함수를 사용한다.. -> 내가 코드 이상하게 짜고 있었음..