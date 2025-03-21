import React from "react";
import PropTypes from "prop-types";

interface props {
  title: string;
  content: string;
  className?: string;
}

const TextContent = ({ title, content, className }: props) => {
  return (
    <>
      <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
      <p className={`text-lightgray-600 text-base ${className}`}>{content}</p>
    </>
  );
};

TextContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TextContent;
