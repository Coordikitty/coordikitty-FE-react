import api from "../api";

const classifyClothesApi = (data) => {
  console.log("classifyClothesApi", data);
  return api.post("/closet/categorization", data);
};

export default classifyClothesApi;
