import {useForm} from 'react-hook-form';

const Form = (props) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form className={"form"} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h3 className={"form-title"}>{props.name}</h3>
            </div>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input placeholder="bill" {...register("firstName")} />
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input placeholder="luo" {...register("lastName")} />
            </div>

            <div>
                <label htmlFor="isDeveloper">Is an developer?</label>
                <input
                    type="checkbox"
                    placeholder="luo"
                    value="yes"
                    {...register("isDeveloper")}
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    placeholder="bluebill1049@hotmail.com"
                    type="email"
                    {...register("email")}
                />
            </div>
            <input type="submit"/>
        </form>
    );
};

export default Form;
