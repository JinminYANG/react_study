export const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    }

    const fireNotif = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return fireNotif;
};

const App = () => {
    const triggerNotif = useNotification("T1");
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    );
};

export default App;

// useNotification
// 알람이 실행되는 function
// 브라우저에서 알림에 대한 설정이 선행으로 필요하다