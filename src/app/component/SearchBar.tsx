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
    <div className="flex items-center space-x-2">
        <button
            className="bg-primary text-white px-4 py-2 rounded-md"
            onClick={handleSearch}
        >
            {icon}
        </button>
        <input
            type="text"
            className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Search for products or brands"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>
  )
}

export default SearchBar
