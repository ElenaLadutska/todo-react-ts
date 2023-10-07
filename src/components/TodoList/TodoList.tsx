import TodoItem from "../TodoItem/TodoItem";
import { ITodo } from "../../types/data";

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id:number) => void;
  toggleTodo: (id:number) => void;
}

const TodoList:React.FC<ITodoListProps>= ({items, toggleTodo, removeTodo}) => {
  return (
    <div className="todos">
      {
        items.map(todo => 
        <TodoItem key={todo.id} 
          toggleTodo={toggleTodo} 
          removeTodo={removeTodo}
          {...todo} />)
      }
    </div>
  )
}

export default TodoList;
