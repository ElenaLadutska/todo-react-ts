import { ITodo } from "../../types/data";
import { Reorder } from "framer-motion";

interface ITodoItem extends ITodo {
  todo:object;
  removeTodo: (id:number) => void;
  toggleTodo: (id:number) => void;
};

const TodoItem: React.FC<ITodoItem> = ({todo, id, title, complete, toggleTodo, removeTodo}) => {
  return (
      <Reorder.Item 
        className="todo" 
        as="div" 
        key={id} 
        value={todo}
        whileDrag={{
          scale:1.1,
          boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"
        }}>
        <div className="todo-content">
          {/* <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/> */}

          <span style={{
            display: "inline-block",
            margin: "0 10px"
          }}>
            {title}
          </span>
        </div>

        <button 
          onClick={() => removeTodo(id)}
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            color: "red",
            cursor: "pointer"
          }}
        >x</button>
      </Reorder.Item>
  )
}

export default TodoItem;
