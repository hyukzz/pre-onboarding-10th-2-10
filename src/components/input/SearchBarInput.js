import React from 'react';
import './SearchBarInput.css';

const SearchBarInput = ({ keyword, handleInputChange, handleKeyDown }) => {
  return (
    <div className="container">
      <div className="input-container">
        <input
          className="search-input"
          type="search"
          value={keyword}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="질환명을 입력해 주세요."
        />

        <button className="search-btn">
          <svg viewBox="0 0 16 16" width="1.5rem" height="1.5rem" fill="white">
            <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBarInput;
