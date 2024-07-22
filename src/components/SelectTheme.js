import React from "react";
import Select from "react-select";
import monacoThemes from "monaco-themes/themes/themelist";

// Custom styles for react-select
const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: '#4A5568', // Tailwind's gray-600
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#63B3ED', // Tailwind's blue-400
    },
    borderRadius: '0.375rem', // Tailwind's rounded-md
    padding: '0.25rem', // Tailwind's p-1
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '0.375rem', // Tailwind's rounded-md
    marginTop: '0.25rem', // Tailwind's mt-1
    zIndex: 9999, // Ensure dropdown appears above other elements
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#63B3ED' : state.isFocused ? '#E2E8F0' : provided.backgroundColor, // Tailwind's blue-400 and gray-100
    color: state.isSelected ? '#ffffff' : '#2D3748', // Tailwind's gray-900 for unselected
    padding: '0.75rem 1rem', // Tailwind's py-3 px-4
    '&:hover': {
      backgroundColor: '#E2E8F0', // Tailwind's gray-100
      color: '#2D3748', // Tailwind's gray-900
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#A0AEC0', // Tailwind's gray-400
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#2D3748', // Tailwind's gray-900
  }),
};

const SelectTheme = ({ handleThemeChange, theme }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Select
        placeholder="Choose Theme"
        options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
          label: themeName,
          value: themeId,
          key: themeId,
        }))}
        value={theme}
        onChange={handleThemeChange}
        styles={customStyles}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default SelectTheme;
