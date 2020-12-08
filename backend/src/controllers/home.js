export default {
	async home(require, response) {
		return response.json({
			title: "Isso está vindo da API REST",
		});
	},
};
