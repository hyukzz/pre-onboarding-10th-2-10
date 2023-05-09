import { useCallback, useEffect, useState } from 'react';
import { apiClient } from '../apis/apiClient';
import { debounce } from '../utils/debounce';

const useKeywordSuggestion = (keyword, { onSuccess } = {}) => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(
    debounce(async (name) => {
      try {
        if (name) {
          const response = await apiClient.getKeyword(name);
          setSuggestions(response.data);
          if (onSuccess) {
            onSuccess();
          }
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error(error);
      }
    }, 500),
    []
  );

  useEffect(() => {
    fetchSuggestions(keyword);
  }, [keyword, onSuccess]);

  return [suggestions];
};

export default useKeywordSuggestion;
