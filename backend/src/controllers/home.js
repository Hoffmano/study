export default {
	async home(require, response) {
		return response.json({
			title: "Its working",
		});
	},
};
