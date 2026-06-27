import react from "react";

function todoCreate() {
  return (
    <div classname='todo-create'>
      <input placeholder="todo Giriniz" classname='todo-input' type="text" />
      <button classname='todo-create-button'>oluştur</button>
    </div>
  );
}

export default todoCreate;
