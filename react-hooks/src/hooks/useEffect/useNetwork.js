import { useEffect, useState } from "react";

export const useNetwork = (onchange) => {
    const [status, setStatus] = useState(navigator.onLine); // 기본 값으로 online 설정 (t/f)
    const handleChange = () => {
        if (typeof onchange === "function") {
            onchange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);

        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        };
    }, []);

    return status;
};

const App = () => {
    const handleNetwork = (online) => {
        console.log(online ? "We just went online" : "We are offline");
    };
    const onLine = useNetwork(handleNetwork);
    return (
        <div className="App">
            <h1>{onLine ? "Online" : "Offline"}</h1>
        </div>
    );
};

export default App;

// useNetwork
// navigator가 online 또는 offline이 될 때 처리해 주는 기능
