import React, { useState } from 'react';
import useKeywordSuggestion from '../hooks/useKeywordSuggestion';
import useInputChange from '../hooks/useInputChange';
import suggestKeyboardHandler from '../utils/suggestKeyboardHandler';
import SearchBarInput from '../components/input/SearchBarInput';
import SuggestionList from '../components/suggestion/SuggestionList';
import Title from '../components/title/Title';
import './SearchBar.css';

const SearchBar = () => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [keyword, handleInputChange, setKeyword] = useInputChange();
  const [suggestions] = useKeywordSuggestion(keyword, {
    onSuccess: () => setFocusedIndex(-2),
  });
  const handleKeyDown = suggestKeyboardHandler(
    suggestions,
    focusedIndex,
    setFocusedIndex,
    setKeyword
  );

  return (
    <div className="layout">
      <div className="inner-layout">
        <Title />
        <SearchBarInput
          className="search-bar-input"
          keyword={keyword}
          handleInputChange={handleInputChange}
          handleKeyDown={handleKeyDown}
        />
        {suggestions.length > 0 ? (
          <SuggestionList
            suggestions={suggestions}
            focusedIndex={focusedIndex}
            setFocusedIndex={setFocusedIndex}
          />
        ) : (
          keyword && (
            <div className="none-suggestion">
              <div className="none-suggestion-text">검색 결과가 없습니다.</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchBar;
