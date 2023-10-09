'use client'
// TodoItem.tsx
import { updateTodoAction } from '@/utiles/serveraction';
import { useTransition } from 'react';

interface TodoItemProps {
  id:number
  title: string;
  date: Date;
  done: boolean;
  //onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({id,title,date, done }) => {
  const [isPending, startTransition] = useTransition()
  return (
    <div className="flex  justify-between mx-auto items-center space-x-4 py-2">
      <input
        type="checkbox"
        checked={done}
      defaultChecked={true}
      onChange={(e)=>startTransition(()=>updateTodoAction(id,e.target.checked))}
        className="form-checkbox text-blue-500 h-6 w-6"
      />
      <span className={done ? 'line-through text-gray-400' : ''}>{title}</span>
      <span className="text-red-800 text-sm">{date.toString().slice(8,18) }</span> 
    </div>
  );
};

export default TodoItem;
