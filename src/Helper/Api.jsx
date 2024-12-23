import axios from "axios";

export const fetchTableData = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      // 'Authorization': `Bearer YOUR_TOKEN_HERE` // If token is required
    };

    let data = await axios.post(
      "https://domestic-kate-wcclg-7ed3ef90.koyeb.app/lead/getAllLeads",
      {} // Body, if required
    );
    console.log(data.data);
    return data.data; // Return only the response data
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
  }
};
