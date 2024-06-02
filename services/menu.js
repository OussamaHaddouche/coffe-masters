import API from "./api.js";

export async function loadMenuData(){
  return await API.fetchMenu() 
}