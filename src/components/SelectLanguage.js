import React from "react";
import Select from "react-select";
import langoptions from "../constant/langoptions";

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
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '0.375rem', // Tailwind's rounded-md
    marginTop: '0.25rem', // Tailwind's mt-1
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#63B3ED' : state.isFocused ? '#E2E8F0' : provided.backgroundColor, // Tailwind's blue-400 and gray-100
    color: state.isSelected ? '#ffffff' : '#2D3748', // Tailwind's gray-900 for unselected
    '&:hover': {
      backgroundColor: '#E2E8F0', // Tailwind's gray-100
      color: '#2D3748', // Tailwind's gray-900
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#A0AEC0', // Tailwind's gray-400
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#2D3748', // Tailwind's gray-900
  }),
};

const SelectLanguage = ({ onSelectChange }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Select
        placeholder="Filter By Category"
        options={langoptions}
        onChange={(selectedOption) => onSelectChange(selectedOption)}
        styles={customStyles}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default SelectLanguage;
