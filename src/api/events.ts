import axios from "../core";

export const create = async (val) => {
  const { data } = await axios.post("/events/", val);

  return data;
};

export const getAllByUniversity = async (id) => {
  const { data } = await axios.get(`/events/university/${id}`);
  console.log(data);
  return data;
};
