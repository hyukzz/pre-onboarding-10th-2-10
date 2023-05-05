import React, { useState } from 'react';
import useKeywordSuggestion from '../hooks/useKeywordSuggestion';
import useInputChange from '../hooks/useInputChange';
import useKeyboard from '../hooks/useKeyboard';
import SearchBarInput from '../components/input/SearchBarInput';
import SuggestionList from '../components/suggestion/SuggestionList';
import Title from '../components/title/Title';

import './SearchBar.css';

const SearchBar = () => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [keyword, handleInputChange, setKeyword] = useInputChange();
  const [suggestions] = useKeywordSuggestion(keyword);

  const handleKeyDown = useKeyboard(
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
              <span className="none-keyword">검색어 없음</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchBar;
