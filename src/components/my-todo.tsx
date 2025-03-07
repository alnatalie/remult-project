import { Item } from "@/shared/item";
import { title } from "process";
import { useState } from "react";
import { repo } from "remult";

export function MyTodo() {
  const 
    [list, setList] = useState<Item[]>([]),
    [newTaskTitle, setNewTaskTitle] = useState("");
    async function addItem(){
        const newItem = await repo(Item).insert({title: newTaskTitle});
        setList([...list, newItem])

    }

  return <>
  <h3>My ToDo</h3>
  <hr />
  <input 
    type = "text"
    value={newTaskTitle}
    placeholder="What needs to be done?"
    onChange={(e)=> setNewTaskTitle(e.target.value)} />
    <button onClick={addItem}>
        <img src="plus.svg" alt="Add" />
    </button>
      <ol>
        {list.map(el=> <li key={el.id}>
            {el.title}
            </li>
        )}
      </ol>
    </>
  
}
