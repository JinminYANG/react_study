import defaultAxios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

    const [trigger, setTrigger] = useState(0);

    if (!opts.url) {
        return;
    }

    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now()); // trigger를 속여서 refetch
    };

    useEffect(() => {
        axiosInstance(opts)
            .then((data) => {
                setState({
                    ...state,
                    loading: false,
                    data
                });
            })
            .catch((error) => {
                setState({
                    ...state,
                    loading: false,
                    error
                });
            });
    }, [trigger]);

    return { ...state, refetch };
};

export default useAxios;

// axios
// HTTP requset를 만드는 것
// customization 과 configuration을 활용한다
// axios는 instance를 만드는 것릏 허용
// ex) axios는 default URL을 설정하거나 자동으로 헤더를 설정하는 것들을 허용한다
