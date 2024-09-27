const request = require("request");
const expect = require("chai").expect;

describe("http://localhost:7865/index_page", function () {
	it("Get client request for home page", function (done) {
		request.get("http://localhost:7865/", (_, res, body) => {
			expect(res.statusCode).to.be.equal(200);
			expect(body).to.be.equal("Welcome to the payment system");
			done();
		});
	});
	it("Get client request for cart items of id 60", function (done) {
		request.get("http://localhost:7865/cart/60", (_, res, body) => {
			expect(res.statusCode).to.be.equal(200);
			expect(body).to.be.equal("Payment methods for cart 60");
			done();
		});
	});
	it("Get client request for cart items of id -60", function (done) {
		request.get("http://localhost:7865/cart/-60", (_, res, _body) => {
			expect(res.statusCode).to.be.equal(404);
			done();
		});
	});
	it("Get client request for cart items of id phones", function (done) {
		request.get("http://localhost:7865/cart/phones", (_, res, _body) => {
			expect(res.statusCode).to.be.equal(404);
			done();
		});
	});
});