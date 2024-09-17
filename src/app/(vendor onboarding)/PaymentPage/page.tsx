"use client";
interface PlanDetails {
    title: string;
    description: string;
    price: number;
    period: string;
    details: string[];
}

const Plans = () => {
    const planDetails: PlanDetails[] = [
        {
            title: "Basic Plan",
            description: "Show Social Proof notifications to increase leads and sales.",
            price: 99,
            period: "one time",
            details: ["All analytics features", "Up to 250,000 tracked visits", "Normal support", "Up to 3 team members"],
        },
        {
            title: "Basic Plan",
            description: "Show Social Proof notifications to increase leads and sales.",
            price: 999,
            period: "month",
            details: ["All analytics features", "Up to 250,000 tracked visits", "Normal support", "Up to 3 team members"],
        },
        {
            title: "Annual Plan",
            description: "Show Social Proof notifications to increase leads and sales.",
            price: 9999,
            period: "year",
            details: ["All analytics features", "Up to 250,000 tracked visits", "Normal support", "Up to 3 team members"],
        },
    ];


    return (
        <div className="bg-[#F7F6F9] py-[3.5rem] w-screen">
            <div className="flex flex-col h-max justify-center pl-[72px] gap-6 w-[264px]">
                <div className="flex gap-3 justify-start">
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.35 9.55L8.71317 12.1868C8.26407 12.6359 8.26407 13.3641 8.71317 13.8132L11.35 16.45M9.05 13H17.1M12.5 1.5C6.14873 1.5 1 6.64873 1 13C1 19.3513 6.14873 24.5 12.5 24.5C18.8513 24.5 24 19.3513 24 13C24 6.64873 18.8513 1.5 12.5 1.5Z" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <h2 className="font-poppins font-normal text-[rgba(55, 65, 81, 1)] text-xl">Back To Plans</h2>
                </div>
                <div className="w-screen">
                    <h4 className="font-poppins mb-4 text-[32px]  font-medium text-[rgba(19, 47, 65, 1)]">Payment Details</h4>
                </div>
            </div>
            <div className="flex justify-start px-[72px]">
                <div className="w-screen gap-4 flex-col flex justify-center">
                    <div className="custom-shadow w-[856px] h-[262px] rounded-2xl p-5 bg-[#ffffff] ">
                        <div className="flex justify-end">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80454C14.5869 2.72979 16.3274 2.72913 17.4013 3.80307L19.8932 6.29493C20.958 7.35971 20.969 9.08347 19.918 10.1618L10.6849 19.6351C9.97933 20.359 9.01167 20.7672 8.00124 20.7671L5.24909 20.767C3.96984 20.7669 2.94823 19.7006 3.00203 18.4215L3.12019 15.6124C3.15968 14.6734 3.54996 13.7834 4.2138 13.1186L13.5137 3.80454ZM16.3415 4.86454C15.8533 4.37638 15.0622 4.37668 14.5744 4.8652L12.9118 6.53032L17.1916 10.8101L18.8446 9.11408C19.3224 8.62391 19.3173 7.84038 18.8333 7.35639L16.3415 4.86454ZM5.27446 14.1792L11.8519 7.59178L16.1445 11.8844L9.61148 18.5873C9.18816 19.0217 8.60756 19.2666 8.0013 19.2665L5.24916 19.2664C4.82274 19.2664 4.4822 18.9109 4.50014 18.4846L4.61829 15.6756C4.64199 15.1121 4.87616 14.5781 5.27446 14.1792ZM20.5158 20.6948C20.9298 20.6948 21.2655 20.3589 21.2655 19.9445C21.2655 19.5301 20.9298 19.1942 20.5158 19.1942H14.3941C13.98 19.1942 13.6444 19.5301 13.6444 19.9445C13.6444 20.3589 13.98 20.6948 14.3941 20.6948H20.5158Z" fill="#2B3F6C" />
                            </svg>
                        </div>
                    </div>
                    <div className="custom-shadow w-[856px] h-[262px] rounded-2xl p-4 bg-[#ffffff]  ">

                    </div>
                </div>
                <div className="custom-shadow w-[518px] h-[320px] rounded-2xl p-4 bg-[#ffffff] ">

                </div>
            </div>
        </div >
    );
};

export default Plans;