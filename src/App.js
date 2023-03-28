import React from "react";
import Cards from "./components/cards/Card";
function App() {
  const cardProps = {
    name: "Sydney",
    phone: "111-111-1111",
    email: "vajganidhanesh@gmail.com",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1673461703605-0c6cc77e1a35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      alt: "cat",
    },
    favoured: false,
  };
  return (
    <>
      <Cards cardProps={cardProps.name} />
    </>
  );
}

export default App;
