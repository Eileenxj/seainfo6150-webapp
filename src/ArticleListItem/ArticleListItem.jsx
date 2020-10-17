import React from 'react';
import PropTypes from "prop-types";

const ArticleListItem = props => {
    const myArticle = props.article;
  return (
    <>
        <h2>
            <li key={myArticle.slug}>{myArticle.title}</li>
        </h2>
        <time datetime={myArticle.timeStamp}>{myArticle.displayDate} </time>
        <p>{myArticle.shortText} </p>
    </>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleListItem;