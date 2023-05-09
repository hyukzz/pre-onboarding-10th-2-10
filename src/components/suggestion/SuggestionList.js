import React, { useRef } from 'react';
import SuggestionItem from './SuggestionItem';
import './Suggestion.css';

const MAX_SUGGESTIONS = 7;

const SuggestionList = ({ suggestions, focusedIndex }) => {
  const suggestionListRef = useRef(null);
  const startIndex = Math.max(0, focusedIndex - MAX_SUGGESTIONS + 1);

  const renderedSuggestions = suggestions.slice(
    startIndex,
    startIndex + MAX_SUGGESTIONS
  );

  return (
    <>
      <ul className="suggestion-list" ref={suggestionListRef}>
        {suggestions.length <= MAX_SUGGESTIONS
          ? suggestions.map((suggestion, index) => (
              <SuggestionItem
                key={index}
                index={index}
                focusedIndex={focusedIndex}
                suggestionName={suggestion.name}
              />
            ))
          : renderedSuggestions.map((suggestion, index) => (
              <SuggestionItem
                key={index}
                index={startIndex + index}
                focusedIndex={focusedIndex}
                suggestionName={suggestion.name}
              />
            ))}
      </ul>
    </>
  );
};

export default SuggestionList;
