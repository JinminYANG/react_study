import React, {useCallback} from "react";
import {List} from "react-virtualized";
import TodoListItem from "./TodoListItem";
import './TodoList.scss'

const TodoList = ({todos, onRemove, onToggle}) => {
    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = todos[index];
            return (
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                    />
            );
        },
        [onRemove, onToggle, todos],
    );

    return (
/*        <div className={"TodoList"}>
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>*/
        <List
            className={"TodoList"}
            width={512}
            height={513}
            rowCount={todos.length}
            rowHeight={57}
            rowRenderer={rowRenderer}
            list={todos}
            style={{outline: 'none'}}
        />
    );
};

// export default TodoList;
export default React.memo(TodoList);

/*
    todos 배열을 props로 받아온 후,
    이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여준다.
*/