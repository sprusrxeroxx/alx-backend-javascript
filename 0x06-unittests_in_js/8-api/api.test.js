const request = require("request");
const expect = require("chai").expect;

const url = "http://localhost:7865/";

describe("http://localhost:7865/index_page", function () {
	it("Should make request to api endpoint and validate server response", function (done) {
		request.get(url, (_, res, body) => {
			expect(res.statusCode).to.be.equal(200);
			expect(body).to.be.equal("Welcome to the payment system");
			done();
		});
	});
});