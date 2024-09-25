import React from 'react';
import cx from 'classnames';
import { useLang } from '@/app/_contexts/LangContext';

const LanguageSelector = ({ options, onSelect }) => {
  const {lang} = useLang();
  return (
    <select data-testid="language-selector"
      className={cx(
        'p-2 border rounded-md bg-white text-gray-800 hover:bg-gray-100',
        'transition-colors duration-300 ease-in-out',
        'focus:outline-none focus:ring focus:border-blue-300',
        'dark:border-none dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700'
      )}
      onChange={(e) => onSelect(e.target.value)}

      value={lang}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
