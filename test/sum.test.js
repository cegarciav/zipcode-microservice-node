let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
chai.use(chaiHttp);


describe("sum", () => {
    beforeEach((done) => {
        // Things to do before each test
        done(); // Called when everything is ready for next test
    });


    /**
     * Test for the GET method of sum
     */
    describe("GET /sum", () => {
        it("It should get the sum of the param values", async () => {
            const response = await chai.request(server)
                .get('/sum')
                .query({values: "1,2,3,4"});
            
            chai.expect(response.status).to.equal(200) // Check status
            chai.expect(response.body).to.have.property("message"); // Check expected property message
            chai.expect(response.body).to.have.property("result"); // Check expected property result
            chai.expect(response.body.message).to.equal("ok");
            chai.expect(+response.body.result).to.equal(10);
        });

        it("It should get an error because of a NaN element", async () => {
            const response = await chai.request(server)
                .get('/sum')
                .query({values: "1,2,a,4"});
            
            chai.expect(response.status).to.equal(400) // Check status
            chai.expect(response.body).to.have.property("message"); // Check expected property message
            chai.expect(response.body).to.have.property("result"); // Check expected property result
            chai.expect(response.body.message).to.equal("error");
            chai.expect(response.body.result).to.equal("Element \'a\' at index 2 is not a number");
        });

        it("It should get an error because values param is not sent", async () => {
            const response = await chai.request(server)
                .get('/sum')
            
            chai.expect(response.status).to.equal(400) // Check status
            chai.expect(response.body).to.have.property("message"); // Check expected property message
            chai.expect(response.body).to.have.property("result"); // Check expected property result
            chai.expect(response.body.message).to.equal("error");
            chai.expect(response.body.result).to.equal("values param is required");
        });
    });

    /**
     * Test for the POST method of sum
     */
     describe("POST /sum", () => {

     });

});
