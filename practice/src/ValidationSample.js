import './ValidationSample.css'
import {createRef, useState} from "react";

export const ValidationSample = () => {
    const [form, setForm] = useState({
        password: '',
        clicked: false,
        validated: false,
    });

    const onChange = (e) => {
        setForm({
            password : e.target.value,
        });
    };

    const onClick = (e) => {
        setForm({
            clicked: true,
            validated: form.password === '0000'
        });
        onFocus();
    };

    let input = createRef();
    const onFocus = () => {
        input.focus();
    }

    return (
        <div>
            <input
                type={"password"}
                value={form.password}
                onChange={onChange}
                className={form.clicked ? (form.validated ? 'success' : 'failure' ) : '' }
                ref={(ref) => input = ref}
            />
            <button onClick={onClick}>검증하기</button>
        </div>
    )

}