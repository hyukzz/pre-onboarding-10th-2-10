import React, { useRef, useEffect } from 'react';
import SuggestionItem from './SuggestionItem';
import './Suggestion.css';

const SuggestionList = ({ suggestions, focusedIndex, setFocusedIndex }) => {
  const suggestionListRef = useRef(null);
  const MAX_SUGGESTIONS = 7;
  const startIndex = Math.max(0, focusedIndex - MAX_SUGGESTIONS + 1);

  const renderedSuggestions = suggestions.slice(
    startIndex,
    startIndex + MAX_SUGGESTIONS
  );

  useEffect(() => {
    setFocusedIndex(-2);
  }, [suggestions, setFocusedIndex, MAX_SUGGESTIONS]);

  return (
    <>
      <ul className="suggestion-list" ref={suggestionListRef}>
        {suggestions.length <= MAX_SUGGESTIONS
          ? suggestions.map((suggestion, index) => (
              <SuggestionItem
                key={index}
                index={index}
                focusedIndex={focusedIndex}
                setFocusedIndex={setFocusedIndex}
                suggestionName={suggestion.name}
              />
            ))
          : renderedSuggestions.map((suggestion, index) => (
              <SuggestionItem
                key={index}
                index={startIndex + index}
                focusedIndex={focusedIndex}
                setFocusedIndex={setFocusedIndex}
                suggestionName={suggestion.name}
              />
            ))}
      </ul>
    </>
  );
};

export default SuggestionList;
