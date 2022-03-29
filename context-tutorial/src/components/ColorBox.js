import ColorContext, {ColorConsumer} from "../contexts/color";
import {useContext} from "react";

const ColorBox = () => {
    const {state} = useContext(ColorContext);
    return (
        <ColorConsumer>
            {value => (
                <>
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            background: value.state.color
                        }}
                    >
                    </div>
                    <div
                        style={{
                            width: '32px',
                            height: '32px',
                            background: value.state.subColor
                        }}
                    >
                    </div>
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;