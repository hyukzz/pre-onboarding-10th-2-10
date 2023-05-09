import React from 'react';
import './Suggestion.css';

const SuggestionItem = ({ index, focusedIndex, suggestionName }) => {
  const isFocused = index === focusedIndex;
  return (
    <li
      key={index}
      className={`suggestion-item ${
        isFocused ? 'suggestion-item--focused' : ''
      }`}
    >
      <>
        <img
          src="https://cdn.icon-icons.com/icons2/1155/PNG/512/1486564716-magnifying-glass-search_81527.png"
          alt="search-icon"
          style={{ marginRight: '12px', width: '16px' }}
        />
        <span>{suggestionName}</span>
      </>
    </li>
  );
};

export default SuggestionItem;
