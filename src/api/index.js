import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

export async function getAllProducts() {
  return await axios.get("/items/");
}
export async function fetchCategory(grillkorv) {
  return await axios.get("/items/?category=" + `${grillkorv}`);
}
export async function fetchApparel() {
  return await axios.get("/items/?exclude=skateboard,wheel");
}
export async function saveUser(user) {
  console.log("API", user);
  //   return await axios.post("/register/", { user });
  return await axios.post(
    "/register/",
    { body: user },
    { headers: { "Content-Type": "application/json" } }
  );
}

// http://localhost:5000/api/items?exclude=wheel,skateboard&page=1
// när vi vill trycka på apparel, exkludera wheels & boards. välj sida 1, 2, 3
