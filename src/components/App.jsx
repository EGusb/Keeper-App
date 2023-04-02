import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Note title="First Note" content="This was the first Note ever!"/>
      <Note title="Second Note" content="Now there's two of them!"/>
      <Note title="Note #3" content="Third time's the charm!"/>
      <Footer />
    </div>
  );
}

export default App;
