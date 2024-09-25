import { useState , useEffect , useRef } from "react";
import { AlarmClockIcon, Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

// Define the type for the options
type FrameworkOption = {
    value: string;
    label: string;
};

// Define the props for the component
interface ComboboxProps {
    options: FrameworkOption[];
    className?: string;
    placeholder?: string;
    setFunction: (value: string) => void;
}

// Your existing Combobox component
export function Combobox(props: ComboboxProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                        "w-[100%] min-w-[245px] justify-between",
                        props.className,
                    )}
                >
                    {value
                        ? props.options.find((option) => option.value === value)?.label
                        : props.placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-[250px]">
                <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandList>
                        <CommandEmpty>No options found.</CommandEmpty>
                        <CommandGroup>
                            {props.options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue);
                                        setOpen(false);
                                        props.setFunction(currentValue);
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === option.value ? "opacity-100" : "opacity-0",
                                        )}
                                    />
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

interface OperatingHoursDropdownProps {
    timeOptions: FrameworkOption[];
    updateFormState: (newState: { operatingHours?: { openingTime?: string; closingTime?: string } }) => void;
    formState: { operatingHours?: { openingTime?: string; closingTime?: string } }; // Add formState to pass the current state
}

export function OperatingHoursDropdown({
    timeOptions,
    updateFormState,
    formState, // Accept current formState as a prop
}: OperatingHoursDropdownProps) {
    const [open, setOpen] = useState(false); // Manage dropdown open state
    const [startValue, setStartValue] = useState(formState.operatingHours?.openingTime || ""); // Start time
    const [endValue, setEndValue] = useState(formState.operatingHours?.closingTime || ""); // End time
    const dropdownRef = useRef<HTMLDivElement>(null); 

    const handleDropdownToggle = () => {
        setOpen((prevOpen) => !prevOpen); // Toggle dropdown
    };

    // Close dropdown if click is outside of the dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false); // Close dropdown
            }
        };

        // Attach event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Button to open/close dropdown */}
            <button
                className="w-full px-4 py-2 border-2 h-14 text-gray-600 border-gray-200 rounded-lg flex justify-between items-center"
                onClick={handleDropdownToggle}
            >
                {startValue && endValue
                    ? `${startValue} - ${endValue}`
                    : "Select your category"}
                <svg height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" fill="#808080" />
                </svg>
            </button>

            {/* Dropdown menu */}
            {open && (
                <div className="absolute mt-2 w-full border border-gray-300 rounded-md bg-white p-4 z-10">
                    <div className="flex gap-4">
                        {/* Start Time Picker */}
                        <div className="flex-1 relative">
                            <label className="block font-semibold mb-2">Start Time</label>
                            <div className="relative">
                                <AlarmClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <select
                                    value={startValue}
                                    onChange={(e) => {
                                        const newOpeningTime = e.target.value;
                                        setStartValue(newOpeningTime);
                                        // Merge current formState with the new openingTime
                                        updateFormState({
                                            operatingHours: {
                                                ...formState.operatingHours, // Keep the current closingTime if it exists
                                                openingTime: newOpeningTime,
                                            },
                                        });
                                    }}
                                    className="w-full pl-10 pr-4 py-2 border text-sm border-gray-300 rounded-md appearance-none text-center"
                                >
                                    <option value="">HH:MM</option>
                                    {timeOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* End Time Picker */}
                        <div className="flex-1 relative">
                            <label className="block font-semibold mb-2">End Time</label>
                            <div className="relative">
                                <AlarmClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <select
                                    value={endValue}
                                    onChange={(e) => {
                                        const newClosingTime = e.target.value;
                                        setEndValue(newClosingTime);
                                        // Merge current formState with the new closingTime
                                        updateFormState({
                                            operatingHours: {
                                                ...formState.operatingHours, // Keep the current openingTime if it exists
                                                closingTime: newClosingTime,
                                            },
                                        });
                                    }}
                                    className="w-full pl-10 pr-4 text-sm py-2 border border-gray-300 rounded-md appearance-none text-center"
                                >
                                    <option value="">HH:MM</option>
                                    {timeOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
