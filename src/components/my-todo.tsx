import { Item } from "@/shared/entities/item";
import { useEffect, useState } from "react";
import { repo } from "remult";


function cx(...c : any[]){
  return c
  .filter(p=> 'string' === typeof c)
  .join(' ');
}

export function MyTodo() {
  const [loading, setLoading] = useState(true),
    [error, setError] = useState(null),
    [list, setList] = useState<Item[]>([]),
    [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    repo(Item)
      .find()
      .then(setList)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  async function addItem() {
    const optimtsticItem = new Item;
    optimtsticItem.title = newTaskTitle;
    optimtsticItem.temp = true;
    setList([...list, optimtsticItem]);
    try{
      const 
        newItem = await repo(Item).insert({ title: newTaskTitle });
        

    }  catch(err) {
      //toster

    }
    finally{
      const list = await repo(Item).find();
      setList(list);
    }
  }

  async function deleteItem(id) {
    const 
      index = list.findIndex(el=>id ===el.id),
      delItem = list[index];
    delItem.del = true;

    setList(list.with(index, delItem));
    try{
      const res = await repo(Item).delete(id);
      console.log('res=', res);
    }catch{
      //toster
    }finally{
      const 
        list = await repo(Item).find();
      setList(list);

    }
    
  }



  console.log('error=',error);
  if (error) return <ShoeError error={error}/>

  return (
    <>
      <div>
        <h3>My ToDo</h3>
        <hr />
        <input
          type="text"
          value={newTaskTitle}
          placeholder="What needs to be done?"
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button onClick={addItem}>
          <img
            src="plus.svg"
            alt="Add"
          />
        </button>
        {loading ? (
          <Spinner />
        ) : (
          <ol>
            {list.map((el) => (
              <li key={el.id} className={cx(el.temp && 'temp', el.del && 'del')}>
                ({el.id}) - 
                {el.title} <button onClick={()=>deleteItem(el.id)}>❌</button>
                </li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
}

function Spinner() {
  return <div>Loading...</div>;
}

function ShoeError({error}){
  return <div className="error">
    Error:{error.message}{error?.status}
  </div>
 
}
