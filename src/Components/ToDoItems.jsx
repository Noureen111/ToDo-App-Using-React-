import React, {useState} from 'react';

function ToDoItems(props){

    const [clicked, setClick] = useState(false)

    return <li onClick={() => props.onChecked(props.id)} >{props.text}</li>
}

export default ToDoItems;