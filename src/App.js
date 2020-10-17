import React, {useEffect, useState} from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Article from "./Article/Article";
import DynamicArticle from "./DynamicArticle/DynamicArticle";
import ArticleList from "./ArticleList/Articlelist";
import { isEmpty } from "lodash";

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
       // performs a GET request
       const responseFetchArticles = await fetch(
        "http://demo1390455.mockable.io/articles"
      );
      const responseJson = await responseFetchArticles.json();
      setFetchedData(responseJson);
      // console.log(responseJson["181122102925-statue-of-liberty-crown"])
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);
  let { url } = useRouteMatch();
  console.log("url : ### ",url)
  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>
        <Route  path="/article" >
          <DynamicArticle article={Object.values(fetchedData)[1]} />
        </Route>
        <Route path="/articlelist" exact>
          <ArticleList list={Object.values(fetchedData)} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
