import React, { useEffect, useRef } from 'react';
import { Home, Calendar, Clipboard, MessageSquare, Headphones, Settings } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    const sidebarRef = useRef<HTMLDivElement>(null); // Create a ref for the sidebar

    // Effect to handle clicks outside the sidebar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                toggleSidebar(); // Close the sidebar if clicked outside
            }
        };

        // Add event listener for clicks
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Cleanup the event listener on unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggleSidebar]);

    // if (!isOpen) return null; 

    return (
        <aside ref={sidebarRef}
            className={`fixed  left-0 z-40 transition-transform transform translate-x-0
                 bg-white w-56 h-[calc(100vh-64px)] shadow-lg sidebar m-auto`} // Adjust height and start below navbar
        >

            <ul className="m-4 flex flex-col gap-4 mt-6 ">
                <li className="mb-2 text-sm ">
                    <Link href="/" className="flex items-center px-3 py-2 text-gray-600 hover:bg-[#D5D6E9] hover:rounded-lg hover:text-[#605ED8] gap-4">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 9.93841C1.5 8.71422 2.06058 7.55744 3.02142 6.79888L8.52142 2.45677C9.97466 1.30948 12.0253 1.30948 13.4786 2.45677L18.9786 6.79888C19.9394 7.55744 20.5 8.71422 20.5 9.93841V16.5C20.5 18.7091 18.7091 20.5 16.5 20.5H15C14.4477 20.5 14 20.0523 14 19.5V16.5C14 15.3954 13.1046 14.5 12 14.5H10C8.89543 14.5 8 15.3954 8 16.5V19.5C8 20.0523 7.55228 20.5 7 20.5H5.5C3.29086 20.5 1.5 18.7091 1.5 16.5L1.5 9.93841Z" stroke="#2B3F6C" stroke-width="1.5" />
                        </svg>
                        Home
                    </Link>
                </li>
                <li className="mb-2 text-sm">
                    <Link href="/calendar" className="flex items-center px-3 py-2 text-gray-600 hover:bg-[#D5D6E9] hover:rounded-lg hover:text-[#605ED8] gap-3">
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="2.5" width="18" height="18" rx="5" stroke="#5D6679" stroke-width="1.5" />
                            <path d="M1 7.5H19" stroke="#5D6679" stroke-width="1.5" stroke-linejoin="round" />
                            <path d="M14.5 1L14.5 4" stroke="#5D6679" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.5 1L5.5 4" stroke="#5D6679" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.5 11.5H5.5" stroke="#5D6679" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.5 11.5H10.5" stroke="#5D6679" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.5 11.5H15.5" stroke="#5D6679" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.5 15.5H5.5" stroke="#5D6679" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.5 15.5H10.5" stroke="#5D6679" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.5 15.5H15.5" stroke="#5D6679" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        Calendar
                    </Link>
                </li>
                <li className="mb-2 text-sm">
                    <Link href="/manage-bookings" className="flex items-center px-3 py-2 text-gray-600 hover:bg-[#D5D6E9] hover:rounded-lg hover:text-[#605ED8] gap-3">
                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.35 2.836C8.285 3.046 8.25 3.269 8.25 3.5C8.25 3.914 8.586 4.25 9 4.25H13.5C13.6989 4.25 13.8897 4.17098 14.0303 4.03033C14.171 3.88968 14.25 3.69891 14.25 3.5C14.2501 3.27491 14.2164 3.05109 14.15 2.836M8.35 2.836C8.49203 2.3767 8.77738 1.97493 9.16426 1.68954C9.55115 1.40414 10.0192 1.25011 10.5 1.25H12C13.012 1.25 13.867 1.918 14.15 2.836M8.35 2.836C7.974 2.859 7.6 2.886 7.226 2.916C6.095 3.01 5.25 3.973 5.25 5.108V7.25M14.15 2.836C14.526 2.859 14.9 2.886 15.274 2.916C16.405 3.01 17.25 3.973 17.25 5.108V15.5C17.25 16.0967 17.0129 16.669 16.591 17.091C16.169 17.5129 15.5967 17.75 15 17.75H12.75M5.25 7.25H1.875C1.254 7.25 0.75 7.754 0.75 8.375V19.625C0.75 20.246 1.254 20.75 1.875 20.75H11.625C12.246 20.75 12.75 20.246 12.75 19.625V17.75M5.25 7.25H11.625C12.246 7.25 12.75 7.754 12.75 8.375V17.75M4.5 14.75L6 16.25L9 12.5" stroke="#5D6679" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Manage Bookings
                    </Link>
                </li>
                <li className="mb-2 text-sm">
                    <Link href="/quotations" className="flex items-center px-3 py-2 text-gray-600 hover:bg-[#D5D6E9] hover:rounded-lg hover:text-[#605ED8] gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.6247 21.7002L3.15617 21.1146H3.15617L3.6247 21.7002ZM6.45217 19.4383L5.98365 18.8526L6.45217 19.4383ZM2.75 8C2.75 5.65279 4.65279 3.75 7 3.75V2.25C3.82436 2.25 1.25 4.82436 1.25 8H2.75ZM2.75 13.5V8H1.25V13.5H2.75ZM2.75 14V13.5H1.25V14H2.75ZM2.75 20.9194V14H1.25V20.9194H2.75ZM3.15617 21.1146C2.99248 21.2455 2.75 21.129 2.75 20.9194H1.25C1.25 22.3868 2.94738 23.2026 4.09322 22.2859L3.15617 21.1146ZM5.98365 18.8526L3.15617 21.1146L4.09322 22.2859L6.92069 20.0239L5.98365 18.8526ZM17 18.25H7.70156V19.75H17V18.25ZM21.25 14C21.25 16.3472 19.3472 18.25 17 18.25V19.75C20.1756 19.75 22.75 17.1756 22.75 14H21.25ZM21.25 8V14H22.75V8H21.25ZM17 3.75C19.3472 3.75 21.25 5.65279 21.25 8H22.75C22.75 4.82436 20.1756 2.25 17 2.25V3.75ZM7 3.75H17V2.25H7V3.75ZM6.92069 20.0239C7.14233 19.8466 7.41772 19.75 7.70156 19.75V18.25C7.07712 18.25 6.47126 18.4625 5.98365 18.8526L6.92069 20.0239Z" fill="#5D6679" />
                            <circle cx="7.05078" cy="11.0498" r="1.25" fill="#5D6679" />
                            <circle cx="12.0508" cy="11.0498" r="1.25" fill="#5D6679" />
                            <circle cx="17.0508" cy="11.0498" r="1.25" fill="#5D6679" />
                        </svg>
                        Quotations
                    </Link>
                </li>
                <li className="mb-2 text-sm">
                    <Link href="/support" className="flex items-center px-3 py-2 text-gray-600 hover:bg-[#D5D6E9] hover:rounded-lg hover:text-[#605ED8] gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_8788_28869)">
                                <path d="M5.14509 12.0004V7.49181C5.15848 6.60558 5.34661 5.7307 5.6987 4.9173C6.05079 4.1039 6.55992 3.36797 7.19692 2.75168C7.83391 2.13538 8.58626 1.65084 9.41084 1.3258C10.2354 1.00077 11.116 0.84164 12.0022 0.857528C12.8884 0.84164 13.769 1.00077 14.5936 1.3258C15.4182 1.65084 16.1706 2.13538 16.8075 2.75168C17.4445 3.36797 17.9537 4.1039 18.3058 4.9173C18.6579 5.7307 18.846 6.60558 18.8594 7.49181V12.0004M15.4308 21.0004C16.3401 21.0004 17.2122 20.6392 17.8552 19.9962C18.4982 19.3532 18.8594 18.4811 18.8594 17.5718V13.7147M15.4308 21.0004C15.4308 21.5687 15.205 22.1138 14.8032 22.5156C14.4013 22.9175 13.8563 23.1432 13.2879 23.1432H10.7165C10.1482 23.1432 9.60315 22.9175 9.20129 22.5156C8.79943 22.1138 8.57366 21.5687 8.57366 21.0004C8.57366 20.4321 8.79943 19.887 9.20129 19.4852C9.60315 19.0833 10.1482 18.8575 10.7165 18.8575H13.2879C13.8563 18.8575 14.4013 19.0833 14.8032 19.4852C15.205 19.887 15.4308 20.4321 15.4308 21.0004ZM2.57366 9.42896H4.28795C4.51527 9.42896 4.73329 9.51926 4.89404 9.68001C5.05478 9.84075 5.14509 10.0588 5.14509 10.2861V15.429C5.14509 15.6563 5.05478 15.8743 4.89404 16.035C4.73329 16.1958 4.51527 16.2861 4.28795 16.2861H2.57366C2.119 16.2861 1.68297 16.1055 1.36148 15.784C1.03999 15.4625 0.859375 15.0265 0.859375 14.5718V11.1432C0.859375 10.6886 1.03999 10.2526 1.36148 9.93106C1.68297 9.60957 2.119 9.42896 2.57366 9.42896ZM21.4308 16.2861H19.7165C19.4892 16.2861 19.2712 16.1958 19.1104 16.035C18.9497 15.8743 18.8594 15.6563 18.8594 15.429V10.2861C18.8594 10.0588 18.9497 9.84075 19.1104 9.68001C19.2712 9.51926 19.4892 9.42896 19.7165 9.42896H21.4308C21.8855 9.42896 22.3215 9.60957 22.643 9.93106C22.9645 10.2526 23.1451 10.6886 23.1451 11.1432V14.5718C23.1451 15.0265 22.9645 15.4625 22.643 15.784C22.3215 16.1055 21.8855 16.2861 21.4308 16.2861Z" stroke="#5D6679" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_8788_28869">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Support
                    </Link>
                </li>
                <li className="mb-2 text-sm">
                    <Link href="/settings" className="flex items-center px-3 py-2 text-gray-600 hover:bg-[#D5D6E9] hover:rounded-lg hover:text-[#605ED8] gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 15 9)" stroke="#5D6679" stroke-width="1.5" />
                            <path d="M16.4951 4.9375L16.8701 4.28798V4.28798L16.4951 4.9375ZM16.4951 19.0621L16.1201 18.4126H16.1201L16.4951 19.0621ZM7.49514 19.0621L7.12014 19.7117H7.12014L7.49514 19.0621ZM7.49514 4.9375L7.12014 4.28798V4.28798L7.49514 4.9375ZM8.91789 3.0159L8.18724 2.84662L8.91789 3.0159ZM2.90589 9.68353L2.42897 10.2624L2.90589 9.68353ZM2.55576 8.70289L1.84767 8.45569L2.55576 8.70289ZM5.3097 18.7396L5.4812 19.4697L5.3097 18.7396ZM4.4016 18.502L4.9712 18.0141L4.4016 18.502ZM9.5337 21.6937L9.71806 20.9667L9.5337 21.6937ZM8.91795 20.984L8.18729 21.1532L8.91795 20.984ZM15.072 20.9856L15.8027 21.1544L15.072 20.9856ZM19.5956 18.504L20.1651 18.9921L19.5956 18.504ZM18.686 18.7408L18.8588 18.011L18.686 18.7408ZM21.4432 8.70289L20.7351 8.95009L21.4432 8.70289ZM21.093 9.68353L21.57 10.2624L21.093 9.68353ZM2.90589 14.3165L2.42897 13.7376L2.90589 14.3165ZM18.6858 5.25885L18.513 4.52903L18.6858 5.25885ZM19.5954 5.49568L20.1648 5.0076L19.5954 5.49568ZM4.40187 5.49768L3.83228 5.00975L4.40187 5.49768ZM5.30988 5.26012L5.13843 5.99026L5.30988 5.26012ZM21.093 14.3165L20.6161 14.8953L21.093 14.3165ZM15.072 3.01429L14.3413 3.18316L15.072 3.01429ZM14.4553 2.3038L14.2717 3.03097L14.4553 2.3038ZM14.3413 3.18316C14.5669 4.15943 15.1826 5.04573 16.1201 5.58702L16.8701 4.28798C16.3076 3.96318 15.9387 3.43343 15.8028 2.84541L14.3413 3.18316ZM16.1201 5.58702C16.9822 6.08472 17.9614 6.2011 18.8586 5.98867L18.513 4.52903C17.9733 4.65682 17.3879 4.58688 16.8701 4.28798L16.1201 5.58702ZM22.1513 8.4557C21.7055 7.1789 21.0261 6.01252 20.1648 5.0076L19.0259 5.98376C19.7678 6.8493 20.352 7.85289 20.7351 8.95009L22.1513 8.4557ZM20.7495 12C20.7495 11.3006 21.0677 10.6762 21.57 10.2624L20.6161 9.1047C19.7828 9.79128 19.2495 10.8337 19.2495 12H20.7495ZM21.57 13.7376C21.0677 13.3238 20.7495 12.6994 20.7495 12H19.2495C19.2495 13.1663 19.7828 14.2087 20.6161 14.8953L21.57 13.7376ZM20.1651 18.9921C21.0263 17.9872 21.7056 16.821 22.1513 15.5443L20.7351 15.0499C20.3521 16.147 19.7679 17.1505 19.0261 18.016L20.1651 18.9921ZM16.8701 19.7117C17.3879 19.4127 17.9734 19.3428 18.5131 19.4707L18.8588 18.011C17.9616 17.7985 16.9823 17.9149 16.1201 18.4126L16.8701 19.7117ZM15.8027 21.1544C15.9386 20.5663 16.3075 20.0365 16.8701 19.7117L16.1201 18.4126C15.1825 18.954 14.5668 19.8404 14.3412 20.8168L15.8027 21.1544ZM11.9995 22.75C12.9092 22.75 13.7936 22.6368 14.6389 22.4234L14.2717 20.969C13.5455 21.1524 12.7844 21.25 11.9995 21.25V22.75ZM9.34934 22.4207C10.1978 22.6359 11.0859 22.75 11.9995 22.75V21.25C11.2112 21.25 10.447 21.1516 9.71806 20.9667L9.34934 22.4207ZM7.12014 19.7117C7.68239 20.0363 8.05121 20.5656 8.18729 21.1532L9.64862 20.8148C9.42269 19.8392 8.80715 18.9536 7.87014 18.4126L7.12014 19.7117ZM5.4812 19.4697C6.01984 19.3432 6.60367 19.4135 7.12014 19.7117L7.87014 18.4126C7.0102 17.9161 6.03363 17.7991 5.1382 18.0094L5.4812 19.4697ZM1.84767 15.5443C2.29303 16.82 2.9717 17.9856 3.832 18.9899L4.9712 18.0141C4.23022 17.149 3.64657 16.1462 3.26385 15.0499L1.84767 15.5443ZM3.24947 12C3.24947 12.6994 2.93128 13.3238 2.42897 13.7376L3.38281 14.8953C4.21611 14.2087 4.74947 13.1663 4.74947 12H3.24947ZM2.42897 10.2624C2.93128 10.6762 3.24947 11.3006 3.24947 12H4.74947C4.74947 10.8337 4.21612 9.79128 3.38281 9.10469L2.42897 10.2624ZM3.83228 5.00975C2.97185 6.01418 2.29308 7.17981 1.84767 8.45569L3.26385 8.95009C3.64662 7.85367 4.23035 6.85073 4.97145 5.98561L3.83228 5.00975ZM7.12014 4.28798C6.60372 4.58614 6.01994 4.65646 5.48134 4.52998L5.13843 5.99026C6.0338 6.20052 7.01027 6.08347 7.87014 5.58702L7.12014 4.28798ZM8.18724 2.84662C8.05112 3.43416 7.68233 3.9634 7.12014 4.28798L7.87014 5.58702C8.80703 5.0461 9.42254 4.16065 9.64854 3.18517L8.18724 2.84662ZM11.9995 1.25C11.0858 1.25 10.1978 1.36415 9.34925 1.57933L9.71798 3.03331C10.447 2.84844 11.2112 2.75 11.9995 2.75V1.25ZM14.639 1.57662C13.7937 1.36319 12.9093 1.25 11.9995 1.25V2.75C12.7844 2.75 13.5455 2.84761 14.2717 3.03097L14.639 1.57662ZM9.64854 3.18517C9.66415 3.11777 9.69058 3.07023 9.71107 3.0453C9.72868 3.02388 9.73182 3.0298 9.71798 3.03331L9.34925 1.57933C8.65873 1.75445 8.30211 2.3508 8.18724 2.84662L9.64854 3.18517ZM3.38281 9.10469C3.32193 9.05453 3.28654 9.00026 3.27234 8.96396C3.2604 8.93343 3.26919 8.9348 3.26385 8.95009L1.84767 8.45569C1.58166 9.21767 1.99381 9.90381 2.42897 10.2624L3.38281 9.10469ZM5.1382 18.0094C5.07101 18.0252 5.01681 18.0226 4.98539 18.0152C4.95836 18.0089 4.96207 18.0034 4.9712 18.0141L3.832 18.9899C4.29459 19.53 4.98588 19.586 5.4812 19.4697L5.1382 18.0094ZM9.71806 20.9667C9.7319 20.9702 9.72876 20.9761 9.71115 20.9547C9.69065 20.9298 9.66423 20.8822 9.64862 20.8148L8.18729 21.1532C8.30212 21.6491 8.65874 22.2456 9.34934 22.4207L9.71806 20.9667ZM14.3412 20.8168C14.3256 20.8844 14.2991 20.932 14.2786 20.957C14.2609 20.9785 14.2578 20.9725 14.2717 20.969L14.6389 22.4234C15.3308 22.2487 15.688 21.6511 15.8027 21.1544L14.3412 20.8168ZM19.0261 18.016C19.0353 18.0053 19.039 18.0108 19.0119 18.0171C18.9804 18.0244 18.9261 18.027 18.8588 18.011L18.5131 19.4707C19.0089 19.5881 19.7016 19.5329 20.1651 18.9921L19.0261 18.016ZM20.7351 8.95009C20.7297 8.9348 20.7385 8.93343 20.7266 8.96396C20.7124 9.00026 20.677 9.05453 20.6161 9.1047L21.57 10.2624C22.0051 9.90382 22.4173 9.21768 22.1513 8.4557L20.7351 8.95009ZM3.26385 15.0499C3.26919 15.0652 3.2604 15.0666 3.27234 15.036C3.28654 14.9997 3.32193 14.9455 3.38281 14.8953L2.42897 13.7376C1.99381 14.0962 1.58166 14.7823 1.84767 15.5443L3.26385 15.0499ZM18.8586 5.98867C18.9259 5.97275 18.9802 5.97531 19.0117 5.98263C19.0388 5.98892 19.035 5.99443 19.0259 5.98376L20.1648 5.0076C19.7013 4.46685 19.0088 4.41165 18.513 4.52903L18.8586 5.98867ZM4.97145 5.98561C4.96232 5.99627 4.95861 5.99077 4.98563 5.98446C5.01705 5.97713 5.07125 5.97449 5.13843 5.99026L5.48134 4.52998C4.98605 4.41368 4.29485 4.46977 3.83228 5.00975L4.97145 5.98561ZM20.6161 14.8953C20.677 14.9455 20.7124 14.9997 20.7266 15.036C20.7385 15.0666 20.7297 15.0652 20.7351 15.0499L22.1513 15.5443C22.4173 14.7823 22.0051 14.0962 21.57 13.7376L20.6161 14.8953ZM15.8028 2.84541C15.688 2.34882 15.3308 1.75131 14.639 1.57662L14.2717 3.03097C14.2579 3.02747 14.261 3.02153 14.2787 3.04299C14.2992 3.06798 14.3257 3.11563 14.3413 3.18316L15.8028 2.84541Z" fill="#5D6679" />
                        </svg>
                        Settings
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
