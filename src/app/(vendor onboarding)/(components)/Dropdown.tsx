import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
    options: string[];
    onSelect: (option: string) => void;
    placeholder?: string; // New placeholder prop
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, placeholder = 'Select an option' }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null); // Allow null for initial state

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <div className="relative w-full">
            <button
                type="button"
                className="flex items-center justify-between w-full p-5 py-3 text-sm border-2 font-medium text-left bg-white border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span
                    className={`${selectedOption ? 'text-black' : 'text-gray-400'}`}
                >
                    {selectedOption || placeholder}
                </span>
                <ChevronDown className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
            </button>

            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
                    <ul className="py-1 overflow-auto text-base rounded-md max-h-60 focus:outline-none sm:text-sm">
                        {options.map((option) => (
                            <li
                                key={option}
                                className={`flex gap-1 items-center cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white ${selectedOption === option ? 'text-black' : 'text-gray-900'
                                    }`}
                                onClick={() => handleSelect(option)}
                            >
                                {
                                    selectedOption === option ?
                                        (<img
                                            src={'/selection/Choice_2.svg'}
                                            className='h-5 w-5'
                                        />
                                        ) : (
                                            <img
                                                src={'/selection/Choice.svg'}
                                                className='h-5 w-5'
                                            />
                                        )
                                }
                                
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
