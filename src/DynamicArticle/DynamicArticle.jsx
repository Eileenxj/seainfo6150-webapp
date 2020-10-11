import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  const authorEmail = props.article.authorEmail;
  const timeStamp = props.article.timeStamp;
  console.log(props.article.title)
  return (
    <article>
      {/* this is an example of how you insert props into a react component */}
      <header>
        <h1>{props.article.title}</h1>
        <address>
          {"by" + props.article.author + "("}
          <a href={"mailto:"+authorEmail}>{authorEmail}</a>{")"}
        </address>
        <time datetime={timeStamp}>{props.article.displayDate} </time>
      </header>
      <HTMLText text={props.article.text} />
      
    </article>
  );
};

export default DynamicArticle;
