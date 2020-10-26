import React, { useState } from 'react';
import PropTypes from "prop-types";
import ArticleTextToggleButton from '../ArticleTextToggleButton/ArticleTextToggleButton'
import styles from "./ArticleListItem.module.css";
const ArticleListItem = props => {
    const myArticle = props.article;
    let buttonText = 'Show more';
    const [showDetails, setShowDetails] = useState(false);
  return (
    <div className={styles.article}>
        <h2 className={styles.title}>
            {myArticle.title}
        </h2>
        {showDetails &&
          <div className={styles.content}>
            <p>{myArticle.shortText} </p>
            <time className={styles.time} datetime={myArticle.timeStamp}>{myArticle.displayDate} </time>
          </div>
        }
        <ArticleTextToggleButton 
          buttonText = {showDetails?'Show less':'Show more'}
          onClick={()=>{
            if(showDetails){
              setShowDetails(false);
            }else{
              setShowDetails(true);
            }
        }}></ArticleTextToggleButton>
    </div>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleListItem;