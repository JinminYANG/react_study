import { useState } from "react";
import "./styles.css";

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    }
];

export const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }

    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

const App = () => {
    const { currentItem, changeItem } = useTabs(0, content);

    return (
        <div className="App">
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            {/*
        모든 버튼은 onClick 이벤트를 가진다
        누군가 클릭하면 index가 무엇이든지 상관없이 changeItem(index)을 실행할 거고,
        changeItem의 index는 index안에 있는 값인 0 또는 1로 바꿔준다.
        이는 state를 바꿔줄 것이다.
        그래서 currentItem의 currentIndex를 바꿔줄 것이고, 모든 것을 새로고침한다.

       */}
            <div>{currentItem.content}</div>
        </div>
    );
};

export default App;
