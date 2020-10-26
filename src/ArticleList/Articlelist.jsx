import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem'
import PropTypes from "prop-types";
import styles from "./ArticleList.module.css";

const Articlelist = (props) => {
    const myList = props.list;
    return (
        <div className={styles.list}>
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