import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import CreatePage from "../pages/CreatePage.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: HomePage },
		{ path: "/create", component: CreatePage },
	],
});

export default router;
