import React from "react";
import List from "../Component/List";
import Form from "../Component/Form";
const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add new Articles</h2>
      <Form />
    </div>
  </div>
);
export default App;
