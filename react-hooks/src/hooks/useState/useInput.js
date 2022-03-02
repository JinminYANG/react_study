import {useState} from "react";

export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        console.log(event.target);

        const {
            target: { value }
        } = event;

        let willUpdate = true;

        if (typeof validator === "function") {
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};


const App = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    // const maxLen = (value) => value.length <= 10;
    const maxLen = (value) => !value.includes("@");
    const name = useInput("Mr.", maxLen);
    // name을 사용해서 useInput에 'Mr.'와 maxLen을 넣어준다.
    // 매번 validator는 바뀔 것이고, validator 타입이 function 이라면, willUpdate에 validator의 결과를 업로드 한다.
    // 이 케이스에서 validator는 maxLen이고, 결과는 true/false 이다.
    // 조건문 'if (willUpdate)' 절에서 true라면, 'setValue(value);'을 업데이트 하겠다는 것이다.

    return (
        <div className="App">
            <h1>Hello {item}</h1>

            <h2>Start editing to see some magic happen!</h2>
            <button onClick={incrementItem}>Increment</button>
            <button onClick={decrementItem}>Decrement</button>
            <br />

            <input placeholder="Name" {...name} />
            {/* value={name.value} onChange={name.onChange} === {...name} */}
        </div>
    );
};

export default App;

