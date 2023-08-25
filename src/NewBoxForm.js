import { useState } from "react";

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: ""
  });
  console.log("FORM DATA>>>>", formData);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData({
      height: "",
      width: "",
      backgroundColor: ""
    });
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="height">Height</label>
      <input
        onChange={ handleChange }
        id="height"
        name="height"
        value={ formData.height }
      />

      <label htmlFor="width">Width</label>
      <input
        onChange={ handleChange }
        id="width"
        name="width"
        value={ formData.width }
      />

      <label htmlFor="backgroundColor">Background Color</label>
      <input
        onChange={ handleChange }
        id="backgroundColor"
        name="backgroundColor"
        value={ formData.backgroundColor }
      />
      <button>Add New Box</button>
    </form>
  )
}

export default NewBoxForm;