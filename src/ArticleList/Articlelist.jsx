import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem'
import PropTypes from "prop-types";

const Articlelist = (props) => {
    const myList = props.list;
    console.log("myList: ### ", myList)
    return (
        <div>
          <ul>
            {myList.map((listItem) => (
              <ArticleListItem article={listItem}></ArticleListItem>
            ))}
          </ul>
        </div>
    );
  };
  
  Articlelist.propTypes = {
    articlelist: PropTypes.arrayOf(
      PropTypes.shape({
        article: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  export default Articlelist;