import axios from "axios";

const baseUrl = "https://6656c9b79f970b3b36c68439.mockapi.io/shopping";

const prodInstance = axios.create({
  baseURL: baseUrl,
  headers: { "X-Custom-Header": "foobar" },
});

const getAllProd = async () => {
  const response = await prodInstance.get("");
  return response.data;
};

const deleteProd = async (itemId) => {
    const response = await prodInstance.delete(`${itemId}`);
    return response.data;
  };


const createProd = async (pdData) => {
  const response = await prodInstance.post("", pdData);
  return response.data;
};

const getItemProd = async (itemId) => {
    return (await prodInstance.get(`${itemId}`)).data;
  }; 

const editProd = async (itemId, pdin) => {
  const response =  await prodInstance.put(`${itemId}`, pdin);
  return response.data;
};


export { getAllProd, deleteProd, createProd, getItemProd, editProd };