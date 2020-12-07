export default {
	async home(require, response) {
		return response.json({
			test: "hello world",
		});
	},
};
