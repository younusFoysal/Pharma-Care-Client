import React from 'react';
import { Search } from 'lucide-react';

interface CustomerSearchProps {
  value: string;
  onChange: (value: string) => void;
}

function CustomerSearch({ value, onChange }: CustomerSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        placeholder="Search customers..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}

export default CustomerSearch;