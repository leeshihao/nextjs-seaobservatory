import React from "react";
import { Button, Label, TextInput } from "flowbite-react";

interface SearchBarProps {
  keyword: string | null;
  setKeyword: (value: string | null) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ keyword, setKeyword }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log("keyword is ", value);
    setKeyword(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
    }
  };

  return (
    <form
      className="flex w-full flex-col gap-4 mb-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <input
          type="text"
          placeholder="Search here..."
          value={keyword || ""}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </form>
  );
};

export default SearchBar;
