import { useEffect, useRef } from "react";

export const useConfirm = (meassge = "", onConfirm, onCancel) => {
    if (onConfirm && typeof onConfirm !== "function") {
        return;
    }
    if (onCancel && typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if (confirm(meassge)) {
            onConfirm();
        } else {
            onCancel();
        }
    };

    return confirmAction;
};

const App = () => {
    const deleteWorld = () => console.log("Deleting the world...");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

    return (
        <div className="App">
            <h1>Hi</h1>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
};

export default App;

// useConfirm은 사용자가 무언가를 하기 전에 (확인)하는 작업
// ex) 사용자가 버튼을 클릭하는 작업을 하면 (이벤트 실행 전) 메세지를 보여주는 동작
