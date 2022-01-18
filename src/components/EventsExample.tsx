import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const ClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('drag');
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('drop');
  };

  const LeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <div>
      <div draggable onDrag={dragHandler} style={{ width: 200, height: 200, background: 'red' }}></div>
      <div 
        onDrop={dropHandler}
        onDragLeave={LeaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{ width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15 }}
      ></div>
      <input value={value} onChange={ChangeHandler} type="text" placeholder='Управляемый' />
      <input ref={inputRef} type="text" placeholder='Неуправляемый' />
      <button onClick={ClickHandler}>Add</button>
    </div>
  )
};

export default EventsExample;
