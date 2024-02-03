import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTodosThunk } from '../../redux/action/postsAction';

const Todos = () => {
    const todos = useSelector((store)=>store.todosReducer.todos);
    const dispatch = useDispatch();
    const getTodos = () => dispatch(getTodosThunk());
  
    useEffect(() => {
      getTodos();
    }, []);
  
    return (
      <div>
        <h2>Todos</h2>
        {todos?.map((todo)=> {
                return  (
                        <div key={todo.id} style={{border: '1px solid black', margin: '10px'}}>
                            <p>{todo.id}</p>
                            <h4>{todo.title}</h4>
                        </div>
                    )
            })}
      </div>
    );
  }

  export default Todos;