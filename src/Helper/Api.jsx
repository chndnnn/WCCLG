import axios from "axios";

export const fetchTableData = async () => {
  try {
    let data = await axios.get("https://dummyjson.com/users");
    return data.data.users;
  } catch (err) {
    console.log(err);
  }
};
