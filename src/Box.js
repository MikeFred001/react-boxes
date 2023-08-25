

function Box({ backgroundColor, height, width, removeBox, id }){

  const styles = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: backgroundColor
  };

  return (
    <div>
      <div style={ styles }></div>
      <button onClick={ () => removeBox(id) }>Remove Box</button>
    </div>
  );
}

export default Box;