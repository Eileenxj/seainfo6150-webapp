import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleImage.module.css";
const ArticleImage = (props) => {
  
    return (
        <img src={props.url} alt={props.title} className={styles.image}/>
    );
  };
  
  ArticleImage.propTypes = {
    url: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
  };
  export default ArticleImage;
  