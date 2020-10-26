import React from 'react';
import PropTypes from "prop-types";
import styles from "./ArticleTextToggleButton.module.css";
const ArticleTextToggleButton = (props) => {
    const buttonText = props.buttonText;
    const onClick = props.onClick;
    return (
        <div>
            <button className={styles.button} onClick={onClick}>{buttonText}</button>
        </div>
    );
  };
  
  ArticleTextToggleButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };
  export default ArticleTextToggleButton;