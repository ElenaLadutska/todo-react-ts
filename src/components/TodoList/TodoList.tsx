import TodoItem from "../TodoItem/TodoItem";
import { ITodo } from "../../types/data";
import { Reorder } from "framer-motion";

interface ITodoListProps {
  items: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  removeTodo: (id:number) => void;
  toggleTodo: (id:number) => void;
}

const TodoList:React.FC<ITodoListProps>= ({items, setTodos, toggleTodo, removeTodo}) => {
  const handleReorder = (newItems: ITodo[]) => setTodos(newItems)

  return (
    <div className="todos-container">
      <div className="todos">
        <div className="todos-todo-container">
          <h3>To do</h3>

        {!!items.length && 
          <div className="todos-todo">
            <Reorder.Group 
              as="div"
              onReorder={handleReorder} 
              values={items}
              axis="y"
            >
              {
                items.map(todo => 
                  <TodoItem 
                    todo={todo}
                    key={todo.id} 
                    toggleTodo={toggleTodo} 
                    removeTodo={removeTodo}
                      {...todo} />)
              }
            </Reorder.Group>
          </div>}
        </div>

        <div className="todos-in-progress-container">
          <h3>In Progress</h3>
        </div>

        <div className="todos-complited-container">
          <h3>Complited</h3>
        </div>
      </div>
    </div>
  )
}

export default TodoList;
