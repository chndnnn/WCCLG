import { useState, useEffect } from "react";
import Table from "../Components/Table";
import FormScreen from "./FormScreen";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true); // Set loading to true when the request starts
        fetch('https://dummyjson.com/users')
            .then((res) => res.json())
            .then((response) => {
                setData(response.users); // Update the data
                console.log(Object.keys(response.users[0])); // Log the keys of the first user object
            })
            .catch((error) => {
                setError(error); // Set the error state
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false when the request completes
            });
    }, []); // Empty dependency array so the API call runs only once on component mount

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <FormScreen />
            <Table data={data} />
        </>
    );
}
