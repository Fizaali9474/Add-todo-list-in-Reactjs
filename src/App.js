
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function addItem() {
    if (editIndex !== null) {
      // Editing an existing item
      const copyList = [...list];
      copyList[editIndex] = inputText;
      setList(copyList);
      setEditIndex(null);
      setInputText("");
    } else {
      // Adding a new item
      const copyList = [...list];
      copyList.push(inputText);
      setList(copyList);
      setInputText("");
    }
  }

  function updateText(e) {
    const value = e.target.value;
    setInputText(value);
  }

  function deleteItem(index) {
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  }

  function editItem(index) {
    setEditIndex(index);
    setInputText(list[index]);
  }


  function deleteAll(index) {setList([""])
    
  }

  return (
    <div>
      <input
        onChange={updateText}
        value={inputText}
        placeholder="Enter any item"
      />

<button onClick={deleteAll} >Delete All</button>

      <button onClick={addItem}>
        {editIndex !== null ? "Update" : "Add"}
      </button>
      <ul>
        {list.map(function (item, index) {
          return (
            <li key={index}>
              {editIndex === index ? (
                <input
                  value={inputText}
                  onChange={updateText}
                  placeholder="Edit item"
                />
              ) : (
                item
              )}
              <button onClick={() => deleteItem(index)}>Delete</button>
              <button onClick={() => editItem(index)}>Edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;




