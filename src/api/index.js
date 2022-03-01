import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

export function saveToken(token) {
	axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export async function getProductCategory(category) {
	return await axios.get("/items/?category=" + `${category}`);
}
export async function fetchApparel() {
	return await axios.get("/items/?exclude=skateboard,wheel");
}
export async function fetchSkate() {
	return await axios.get("/items/?exclude=totebag,tshirt,socks,hoodie,cap");
}
export async function registerUser(user) {
	return await axios.post("/register/", user);
}
export async function currentUser() {
	return await axios.get("/me", { headers: getAuthHeader() });
}
export async function getOrders() {
	return await axios.get("/orders", { headers: getAuthHeader() });
}

export function getAuthHeader() {
	const token = localStorage.getItem("authToken");
	console.log(token);
	if (token) {
		return { Authorization: `Bearer ${token}` };
	}
	return {};
}

export async function loginUser(email, password) {
	return await axios.post("/auth/", { email, password });
}
export async function placeOrder(order) {
	return await axios.post("/orders", order, { headers: getAuthHeader() });
}
export async function getOrder() {
	return await axios.get("/orders");
}

// http://localhost:5000/api/items?exclude=wheel,skateboard&page=1
// när vi vill trycka på apparel, exkludera wheels & boards. välj sida 1, 2, 3
