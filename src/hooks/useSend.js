import { useState } from "react";

const SERVER_URL =
    "https://reactnew-a3ad3-default-rtdb.firebaseio.com/data.json";

const useSend = () => {
    const [status, setStatus] = useState("pending");
    const dispatch = async data => {
        setStatus("loading");
        try {
            const fetchedData = await fetch(SERVER_URL, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "PUT",
                body: JSON.stringify(data)
            });
            if (!fetchedData.ok) {
                throw new Error("Cannot connect");
            } else {
                setStatus("success");
            }
        } catch (message) {
            setStatus("error");
        }
    };
    return { dispatch, status };
};

export default useSend;
