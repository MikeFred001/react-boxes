import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  console.log("BOXES>>>>", boxes);

  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [ ...boxes, newBox ]);
  }

  function removeBox(id) {
    setBoxes(boxes => boxes.map(box => box.id === id ? <EditTodoForm /> : box));
  }

  return(
    <div>
      <NewBoxForm addBox={ addBox } />
      {boxes.map(b => <Box
        height={b.height}
        width={b.width}
        backgroundColor={b.backgroundColor}
        removeBox={ removeBox }
        id={ b.id }
      />)}
    </div>
  )
}

export default BoxList;