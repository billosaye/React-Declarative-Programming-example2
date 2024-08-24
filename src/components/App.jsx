import React from "react";

function App() {
  const isDone = true;

  const strikeThrough = { textDecoration: "line-through" };

  return <p style={isDone ? strikeThrough : null}>Buy Milk</p>;
}

export default App;
