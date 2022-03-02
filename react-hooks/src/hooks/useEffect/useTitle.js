import { useEffect, useState } from "react";

export const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title"); // <head> ..<title>
        htmlTitle.innerText = title;
    };

    useEffect(updateTitle, [title]);

    return setTitle;
};

const App = () => {
    const titleUpdater = useTitle("Loading..."); // setTitle과 동일
    setTimeout(() => titleUpdater("Home"), 5000);

    return (
        <div className="App">
            <div>Hi</div>
        </div>
    );
};

export default App;
