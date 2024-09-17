"use client"
import Link from "next/link"
function Registration_Completed() {
    return (
        <>
            <div className="bg-[#F7F6F9] px-[72px] py-[3.5rem] w-screen">
                <div className="flex flex-col  justify-center  gap-6 w-[264px]">
                    <Link href="/plans">
                        <div className="flex gap-3 justify-start">
                            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.35 9.55L8.71317 12.1868C8.26407 12.6359 8.26407 13.3641 8.71317 13.8132L11.35 16.45M9.05 13H17.1M12.5 1.5C6.14873 1.5 1 6.64873 1 13C1 19.3513 6.14873 24.5 12.5 24.5C18.8513 24.5 24 19.3513 24 13C24 6.64873 18.8513 1.5 12.5 1.5Z" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            <h2 className="font-poppins font-normal text-[rgba(55, 65, 81, 1)] text-xl">Back To Plans</h2>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col mt-[3rem]  justify-center items-center rounded-2xl  h-[450px]">
                    <svg width="399" height="342" viewBox="0 0 399 342" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4527_21158)">
                            <path d="M29.9613 313.85C32.2605 314.657 34.729 314.859 37.1291 314.437C39.5292 314.015 41.78 312.982 43.6646 311.439C48.4641 307.415 49.9692 300.787 51.1933 294.649L54.8148 276.492L47.2328 281.707C41.7799 285.457 36.2045 289.328 32.4293 294.76C28.6541 300.192 27.0071 307.607 30.0395 313.485" fill="#E6E6E6" />
                            <path d="M31.1308 337.095C30.1765 330.15 29.1947 323.116 29.8657 316.097C30.4603 309.863 32.3644 303.775 36.2408 298.781C38.2984 296.136 40.8021 293.87 43.6394 292.084C44.3791 291.618 45.06 292.789 44.3235 293.253C39.4141 296.352 35.6168 300.929 33.4791 306.322C31.1182 312.32 30.7391 318.859 31.1457 325.23C31.3916 329.083 31.9139 332.911 32.4385 336.735C32.4799 336.908 32.4541 337.09 32.3662 337.244C32.2783 337.399 32.1349 337.514 31.965 337.567C31.7917 337.614 31.6069 337.59 31.4509 337.502C31.2948 337.413 31.18 337.267 31.1313 337.094L31.1308 337.095Z" fill="#F2F2F2" />
                            <path d="M38 325.953C38.9859 327.45 40.3413 328.668 41.9355 329.491C43.5297 330.313 45.3091 330.711 47.1021 330.647C51.7109 330.428 55.5516 327.216 59.0088 324.166L69.2364 315.146L62.4676 314.823C57.5999 314.59 52.6065 314.371 47.9701 315.872C43.3336 317.374 39.0578 320.981 38.2101 325.774" fill="#E6E6E6" />
                            <path d="M28.4329 341.089C33.0273 332.969 38.356 323.944 47.8782 321.06C50.5257 320.26 53.3017 319.974 56.0567 320.216C56.9252 320.291 56.7083 321.628 55.8416 321.553C51.2234 321.17 46.614 322.389 42.7895 325.003C39.1092 327.505 36.2436 330.984 33.8185 334.673C32.3328 336.933 31.0021 339.288 29.6714 341.64C29.2462 342.392 28.0027 341.849 28.4329 341.089Z" fill="#F2F2F2" />
                            <path d="M396.056 240.846H142.76C141.98 240.845 141.232 240.535 140.68 239.984C140.128 239.432 139.817 238.685 139.816 237.905V2.94073C139.817 2.16111 140.128 1.41372 140.68 0.862444C141.232 0.311173 141.98 0.00101915 142.76 0H396.056C396.837 0.00101915 397.585 0.311173 398.137 0.862444C398.689 1.41372 399 2.16111 399.001 2.94073V237.905C399 238.684 398.689 239.432 398.137 239.983C397.585 240.534 396.837 240.845 396.056 240.846Z" fill="white" />
                            <path d="M396.056 240.846H142.76C141.98 240.845 141.232 240.535 140.68 239.984C140.128 239.432 139.817 238.685 139.816 237.905V2.94073C139.817 2.16111 140.128 1.41372 140.68 0.862444C141.232 0.311173 141.98 0.00101915 142.76 0H396.056C396.837 0.00101915 397.585 0.311173 398.137 0.862444C398.689 1.41372 399 2.16111 399.001 2.94073V237.905C399 238.684 398.689 239.432 398.137 239.983C397.585 240.534 396.837 240.845 396.056 240.846ZM142.76 1.17397C142.293 1.17499 141.844 1.36105 141.514 1.69144C141.183 2.02182 140.997 2.46963 140.996 2.93687V237.905C140.997 238.372 141.183 238.82 141.514 239.15C141.844 239.481 142.293 239.667 142.76 239.668H396.056C396.524 239.667 396.973 239.481 397.303 239.15C397.634 238.82 397.82 238.372 397.821 237.905V2.94073C397.82 2.47349 397.634 2.02568 397.303 1.6953C396.973 1.36491 396.524 1.17885 396.056 1.17783L142.76 1.17397Z" fill="#CACACA" />
                            <path d="M262.448 61.0566C261.919 61.0575 261.411 61.2683 261.037 61.6426C260.663 62.0169 260.453 62.5242 260.453 63.0531C260.453 63.582 260.663 64.0893 261.037 64.4636C261.411 64.8379 261.919 65.0487 262.448 65.0496H372.122C372.651 65.0487 373.159 64.8379 373.533 64.4636C373.907 64.0893 374.117 63.582 374.117 63.0531C374.117 62.5242 373.907 62.0169 373.533 61.6426C373.159 61.2683 372.651 61.0575 372.122 61.0566H262.448Z" fill="#E4E4E4" />
                            <path d="M262.447 73.0371C261.918 73.0384 261.411 73.2493 261.037 73.6236C260.663 73.9978 260.453 74.5049 260.453 75.0336C260.453 75.5623 260.663 76.0693 261.037 76.4436C261.411 76.8179 261.918 77.0288 262.447 77.0301H318.438C318.967 77.0288 319.474 76.8179 319.848 76.4436C320.222 76.0693 320.431 75.5623 320.431 75.0336C320.431 74.5049 320.222 73.9978 319.848 73.6236C319.474 73.2493 318.967 73.0384 318.438 73.0371H262.447Z" fill="#E4E4E4" />
                            <path d="M166.588 137.461C166.058 137.462 165.551 137.673 165.177 138.047C164.804 138.422 164.594 138.929 164.594 139.457C164.594 139.986 164.804 140.493 165.177 140.867C165.551 141.242 166.058 141.453 166.588 141.454H372.226C372.755 141.453 373.262 141.242 373.636 140.867C374.01 140.493 374.22 139.986 374.22 139.457C374.22 138.929 374.01 138.422 373.636 138.047C373.262 137.673 372.755 137.462 372.226 137.461H166.588Z" fill="#E4E4E4" />
                            <path d="M166.588 149.439C166.058 149.441 165.551 149.652 165.177 150.026C164.804 150.4 164.594 150.907 164.594 151.436C164.594 151.965 164.804 152.472 165.177 152.846C165.551 153.22 166.058 153.431 166.588 153.432H318.543C319.072 153.431 319.579 153.22 319.953 152.846C320.327 152.472 320.537 151.965 320.537 151.436C320.537 150.907 320.327 150.4 319.953 150.026C319.579 149.652 319.072 149.441 318.543 149.439H166.588Z" fill="#E4E4E4" />
                            <path d="M166.588 161.148C166.058 161.15 165.551 161.361 165.177 161.735C164.804 162.109 164.594 162.616 164.594 163.145C164.594 163.674 164.804 164.181 165.177 164.555C165.551 164.929 166.058 165.14 166.588 165.141H372.226C372.755 165.14 373.262 164.929 373.636 164.555C374.01 164.181 374.22 163.674 374.22 163.145C374.22 162.616 374.01 162.109 373.636 161.735C373.262 161.361 372.755 161.15 372.226 161.148H166.588Z" fill="#E4E4E4" />
                            <path d="M166.588 173.129C166.058 173.13 165.551 173.341 165.177 173.715C164.804 174.09 164.594 174.597 164.594 175.125C164.594 175.654 164.804 176.161 165.177 176.535C165.551 176.91 166.058 177.121 166.588 177.122H318.543C319.072 177.121 319.579 176.91 319.953 176.535C320.327 176.161 320.537 175.654 320.537 175.125C320.537 174.597 320.327 174.09 319.953 173.715C319.579 173.341 319.072 173.13 318.543 173.129H166.588Z" fill="#E4E4E4" />
                            <path d="M166.588 185.15C166.058 185.152 165.551 185.363 165.177 185.737C164.804 186.111 164.594 186.618 164.594 187.147C164.594 187.676 164.804 188.183 165.177 188.557C165.551 188.931 166.058 189.142 166.588 189.143H372.226C372.755 189.142 373.262 188.931 373.636 188.557C374.01 188.183 374.22 187.676 374.22 187.147C374.22 186.618 374.01 186.111 373.636 185.737C373.262 185.363 372.755 185.152 372.226 185.15H166.588Z" fill="#E4E4E4" />
                            <path d="M166.588 197.129C166.058 197.13 165.551 197.341 165.177 197.715C164.804 198.09 164.594 198.597 164.594 199.125C164.594 199.654 164.804 200.161 165.177 200.535C165.551 200.91 166.058 201.121 166.588 201.122H318.543C319.072 201.121 319.579 200.91 319.953 200.535C320.327 200.161 320.537 199.654 320.537 199.125C320.537 198.597 320.327 198.09 319.953 197.715C319.579 197.341 319.072 197.13 318.543 197.129H166.588Z" fill="#E4E4E4" />
                            <path d="M199.162 97.727C193.482 97.7271 187.93 96.0448 183.208 92.8931C178.485 89.7413 174.805 85.2615 172.631 80.0202C170.458 74.7789 169.889 69.0116 170.997 63.4474C172.105 57.8833 174.84 52.7723 178.856 48.7608C182.872 44.7492 187.989 42.0174 193.559 40.9106C199.129 39.8038 204.903 40.3718 210.15 42.5428C215.398 44.7138 219.883 48.3903 223.038 53.1073C226.193 57.8243 227.877 63.3701 227.877 69.0432C227.869 76.6479 224.841 83.9387 219.457 89.3161C214.074 94.6935 206.775 97.7183 199.162 97.727Z" fill="#6C63FF" />
                            <path d="M111.99 206.183C111.94 205.136 111.661 204.112 111.173 203.185C110.684 202.257 109.998 201.448 109.163 200.814C108.327 200.179 107.363 199.736 106.337 199.514C105.312 199.293 104.25 199.299 103.227 199.531L93.7349 186.17L84.1992 189.951L97.8688 208.632C98.3741 210.323 99.4828 211.77 100.985 212.699C102.487 213.628 104.278 213.974 106.018 213.672C107.759 213.371 109.328 212.441 110.429 211.061C111.529 209.681 112.085 207.945 111.99 206.183Z" fill="#A0616A" />
                            <path d="M93.494 205.191L64.7734 167.973L75.5348 134.19C76.3234 125.697 81.6443 123.325 81.8707 123.228L82.2161 123.08L91.5804 148.024L84.7048 166.339L101.581 194.69L93.494 205.191Z" fill="#3F3D56" />
                            <path d="M193.236 90.4624C192.195 90.5928 191.195 90.9496 190.307 91.5078C189.418 92.0659 188.664 92.8118 188.095 93.6929C187.527 94.5739 187.159 95.5688 187.017 96.6073C186.875 97.6458 186.963 98.7027 187.274 99.7037L174.672 110.189L179.183 119.394L196.772 104.336C198.421 103.702 199.78 102.486 200.591 100.918C201.402 99.3506 201.609 97.5402 201.173 95.8301C200.737 94.12 199.689 92.629 198.226 91.6397C196.763 90.6504 194.987 90.2315 193.236 90.4624Z" fill="#A0616A" />
                            <path d="M193.675 108.962L158.748 140.442L124.196 132.337C115.657 132.209 112.878 127.093 112.764 126.875L112.59 126.542L136.763 115.288L155.575 120.719L182.569 101.721L193.675 108.962Z" fill="#3F3D56" />
                            <path d="M133.178 332.754L142.562 332.753L147.026 296.598L133.176 296.598L133.178 332.754Z" fill="#A0616A" />
                            <path d="M160.66 341.457L131.167 341.458L131.166 330.076L152.385 330.075C154.58 330.075 156.684 330.946 158.236 332.496C159.788 334.046 160.66 336.148 160.66 338.34L160.66 341.457Z" fill="#2F2E41" />
                            <path d="M95.6691 332.754L105.053 332.753L109.518 296.598L95.668 296.598L95.6691 332.754Z" fill="#A0616A" />
                            <path d="M123.152 341.457L93.6591 341.458L93.6586 330.076L114.877 330.075C115.964 330.075 117.04 330.289 118.044 330.704C119.048 331.119 119.96 331.728 120.728 332.496C121.497 333.263 122.106 334.174 122.522 335.177C122.938 336.18 123.152 337.254 123.152 338.34L123.152 341.457Z" fill="#2F2E41" />
                            <path d="M92.332 200.781L93.0974 254.302L93.8634 324.644L110.703 323.115L119.123 226.013L129.839 323.115H147.224L148.975 225.249L142.852 203.84L92.332 200.781Z" fill="#2F2E41" />
                            <path d="M125.294 207.969C106.971 207.97 90.105 199.687 89.8773 199.573L89.6882 199.479L88.1506 162.619C87.7047 161.316 78.9247 135.615 77.4377 127.445C75.9311 119.169 97.7666 111.905 100.418 111.056L101.02 104.397L125.489 101.764L128.591 110.283L137.369 113.571C138.364 113.944 139.188 114.669 139.684 115.608C140.18 116.547 140.314 117.635 140.06 118.666L135.181 138.485L147.098 204.056L144.532 204.167C138.383 206.941 131.746 207.969 125.294 207.969Z" fill="#3F3D56" />
                            <path d="M122.661 95.3893C131.199 90.7274 134.337 80.0347 129.669 71.5065C125.002 62.9783 114.298 59.8441 105.76 64.5061C97.222 69.168 94.0843 79.8607 98.7515 88.3889C103.419 96.9171 114.123 100.051 122.661 95.3893Z" fill="#A0616A" />
                            <path d="M99.9413 96.9847C103.299 100.557 109.534 98.6394 109.972 93.7588C110.006 93.3799 110.004 92.9986 109.964 92.6201C109.739 90.4583 108.488 88.4955 108.788 86.2129C108.856 85.6448 109.067 85.1034 109.403 84.6399C112.079 81.0612 118.36 86.2406 120.885 83.0009C122.433 81.0143 120.613 77.8866 121.801 75.6663C123.369 72.7358 128.014 74.1814 130.927 72.5766C134.168 70.7909 133.974 65.824 131.841 62.8029C129.239 59.1185 124.677 57.1526 120.172 56.8692C115.668 56.5859 111.194 57.8023 106.988 59.4395C102.209 61.2996 97.4709 63.8704 94.5303 68.0674C90.9541 73.1715 90.61 80.0335 92.3985 86.0017C93.4865 89.6323 97.1995 94.0674 99.9413 96.9847Z" fill="#2F2E41" />
                            <path d="M223.868 341.911H0.586042C0.430614 341.911 0.281543 341.849 0.171638 341.74C0.0617341 341.63 0 341.481 0 341.326C0 341.17 0.0617341 341.021 0.171638 340.912C0.281543 340.802 0.430614 340.74 0.586042 340.74H223.868C224.023 340.74 224.173 340.802 224.282 340.912C224.392 341.021 224.454 341.17 224.454 341.326C224.454 341.481 224.392 341.63 224.282 341.74C224.173 341.849 224.023 341.911 223.868 341.911Z" fill="#CACACA" />
                            <path d="M197.502 79.8766C196.985 79.8772 196.486 79.6815 196.107 79.329L186.638 70.5439C186.24 70.174 186.006 69.6613 185.986 69.1187C185.966 68.576 186.163 68.0477 186.533 67.6499C186.903 67.252 187.416 67.0171 187.959 66.9968C188.502 66.9765 189.031 67.1724 189.43 67.5415L197.45 74.9829L213.318 59.1329C213.508 58.9415 213.735 58.7894 213.984 58.6855C214.233 58.5816 214.5 58.5278 214.77 58.5273C215.04 58.5268 215.308 58.5796 215.557 58.6826C215.807 58.7856 216.034 58.9368 216.225 59.1276C216.415 59.3183 216.567 59.5448 216.67 59.7942C216.773 60.0435 216.826 60.3106 216.825 60.5804C216.825 60.8501 216.771 61.1171 216.667 61.3659C216.563 61.6148 216.41 61.8407 216.219 62.0307L198.953 79.2767C198.763 79.4671 198.537 79.6182 198.288 79.7211C198.039 79.8241 197.772 79.8769 197.502 79.8766Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_4527_21158">
                                <rect width="399" height="342" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className="font-poppins mt-9 text-center font-medium text-[32px]">
                        Thank you for Registering with Eventory Business
                    </p>
                    <p className="font-poppins text-center font-medium w-screen text-[32px]">
                        Within 24 Hours, on verification you will receive a email with login credentials
                    </p>
                   <Link href={"/"}>
                    <button className=" text-white mt-9 bg-[rgba(46,49,146,1)] rounded-2xl p-4 font-poppins flex justify-center items-center h-[48px] w-[164px]">Back To Home</button>
                   </Link>
                </div>
            </div>
        </>
    )
}
export default Registration_Completed