import './App.css';
import {useRef, useState} from "react";
import Form from "./Form";

function App() {
    const [fruitItems, setFruitItems] = useState(['Apple', 'Banana', 'Orange']);
    const [newFruitItem, setNewFruitItem] = useState('');

    // save reference for dragItem and dragOverItem
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);


    //const handle drag sorting
    const handleSort = () => {
        // duplicate items
        let _fruitItems=[...fruitItems];

        // remove and save the dragged item content
        const draggedItemContent = _fruitItems.splice(dragItem.current, 1)[0];

        // switch the position
        _fruitItems.splice(dragOverItem.current, 0 , draggedItemContent);

        // reset the position ref
        dragItem.current = null;
        dragOverItem.current = null;

        // update the actual array
        setFruitItems(_fruitItems);
    };

    // handle name change
    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewFruitItem(e.target.value);
    };

    // handle new item addition
    const handleAddItem = () => {
        const _fruitItems = [...fruitItems];
        _fruitItems.push(newFruitItem);
        setFruitItems(_fruitItems);
    };

    return (
        <div className="app">
            <h2>Fruit List</h2>
            <div className={"input-group"}>
                <input type={"text"} name={"fruitName"} placeholder={"e.g Banana"} onChange={handleNameChange}/>
                <button type={"button"} className={"btn"} onClick={handleAddItem}>Add item</button>
            </div>

            <div className={"list-container"}>
                {fruitItems.map((item, index) => (
                    <div
                        key={index}
                        className={"list-item"}
                        draggable
                        onDragStart={(e) => dragItem.current = index}
                        onDragEnter={(e) => dragOverItem.current = index}
                        onDragEnd={handleSort}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        <i className={"fa-solid fa-bars"}></i>
                        <h3>{item}</h3>
                    </div>
                ))}
            </div>
            <Form/>
        </div>
    );
}

export default App;
