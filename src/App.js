import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ArticleList from "./ArticleList/ArticleList.jsx";
import { isEmpty } from "lodash";
import AddingMachine from './component-examples/AddingMachine/AddingMachine.jsx'
function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      const responseJson = await response.json();
      setFetchedData(Object.values(responseJson));
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>
        <Route exact path="/articlelist"><ArticleList articles={fetchedData} /></Route>
        <Route exact path="/addingmachine"><AddingMachine startNum={0}/></Route>
      </Switch>
    </div>
  );
}

export default App;
