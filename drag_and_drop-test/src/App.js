import './App.css';
import {useRef, useState} from "react";
import Form from "./Form";

const App = () => {
    const [formItems, setFormItems] = useState(['form1', 'form2', 'form3']);
    const [newFormItem, setNewFormItem] = useState('');

    // save reference for dragItem and dragOverItem
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    //const handle drag sorting
    const handleSort = () => {
        // duplicate items
        let _formItems = [...formItems];

        // remove and save the dragged item content
        const draggedItemContent = _formItems.splice(dragItem.current, 1)[0];

        // switch the position
        _formItems.splice(dragOverItem.current, 0, draggedItemContent);

        // reset the position ref
        dragItem.current = null;
        dragOverItem.current = null;

        // update the actual array
        setFormItems(_formItems);
    };

    // handle name change
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewFormItem(e.target.value);
    };

    // handle new item addition
    const handleAddItem = () => {
        const _formItems = [...formItems];
        _formItems.push(newFormItem);
        setFormItems(_formItems);
    };

    return (
        <div className="app">
            <h2>Form List</h2>

            <div className={"input-group"}>
                <input type={"text"} name={"formName"} placeholder={"gogo"} onChange={handleNameChange}/>
                <button type={"button"} className={"btn"} onClick={handleAddItem}>Add item</button>
            </div>

            <div className={"list-container"}>
                {formItems.map((item, index) => (
                    <div
                        key={index}
                        className={"list-item"}
                        draggable
                        onDragStart={(e) => dragItem.current = index}
                        onDragEnter={(e) => dragOverItem.current = index}
                        onDragEnd={handleSort}
                        onDragOver={(e) => {
                            e.preventDefault()
                        }}
                    >
                        <Form
                            name={item}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
