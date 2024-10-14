import axios from "axios";

async function sendReachoutQuery(data: any) {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/query/create-reachout-query`,
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // console.log(error.message);
            return error.message
        }

    }
}

export { sendReachoutQuery };
