"use client";
import { useState } from "react";


interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
    icon: React.ReactNode;
};

const SearchBar = ({
    onSearch,
    icon,
}:SearchBarProps) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        onSearch(searchQuery);
    };
  return (
    <div className="bg-[#F1F1F1] w-[362px] h-[44px] flex items-center border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent space-x-2">
        <button
            className="h-[24px] w-[24px] object-cover object-center ml-2"
            onClick={handleSearch}
        >
            {icon}
        </button>
        <input
            type="text"
            className="font-semibold text-[14px] w-full bg-inherit focus:outline-none focus:ring-0 "
            placeholder="Search for products or brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div> 
  )
}

export default SearchBar
