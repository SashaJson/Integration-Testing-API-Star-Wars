'use strict';

// TODO REFACTOR ASAP

const expect = require('chai').expect;

const People = require('../api/controller/people');

const COUNT_PEOPLE_ON_PAGE = 82;
const NEXT_PEOPLE_PAGE_TWO = 'https://swapi.dev/api/people/?page=2';

describe('A People resource is an individual person or character within the Star Wars universe', () => {

    let peopleController;

    before(() => {
        peopleController = new People();
    });

    it("0. Get all the people with query parameter 'schema'", async () => {

        await peopleController.getAllPeople();

    });

    it("1. Get all the people with default query parameter 'page=1'", async () => {

        const peoplesFromFirstPage = await peopleController.getPeople();

        expect(peoplesFromFirstPage.count).to.equal(COUNT_PEOPLE_ON_PAGE);
        expect(peoplesFromFirstPage.next).to.equal(NEXT_PEOPLE_PAGE_TWO);
        expect(peoplesFromFirstPage.previous).to.equal(null);

    });

    // it("2. Get all the people with query parameter 'page=1'", async () => {
    //
    //     const response = await request(`${URL}/people?page=1`);
    //
    //     assertCode200TextOk(response.status, response.statusText);
    //     assertContentTypeJson(response.headers.get('content-type'));
    //
    //     const responseJSON = await transformResponseToJson(response);
    //
    //     validationJson(responseJSON, getAllPeopleJsonModel());
    //
    //     expect(responseJSON.count).to.equal(COUNT);
    //     expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=2');
    //     expect(responseJSON.previous).to.equal(null);
    //
    // });
    //
    // it("3. Get all the people with query parameter 'page=2'", async () => {
    //
    //     const response = await request(`${URL}/people?page=2`);
    //
    //     assertCode200TextOk(response.status, response.statusText);
    //     assertContentTypeJson(response.headers.get('content-type'));
    //
    //     const responseJSON = await transformResponseToJson(response);
    //
    //     validationJson(responseJSON, getAllPeopleJsonModel());
    //
    //     expect(responseJSON.count).to.equal(COUNT);
    //     expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=3');
    //     expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=1');
    //
    // });
    //
    // it("4. Get all the people with query parameter 'page=3'", async () => {
    //
    //     const response = await request(`${URL}/people?page=3`);
    //
    //     assertCode200TextOk(response.status, response.statusText);
    //     assertContentTypeJson(response.headers.get('content-type'));
    //
    //     const responseJSON = await transformResponseToJson(response);
    //
    //     validationJson(responseJSON, getAllPeopleJsonModel());
    //
    //     expect(responseJSON.count).to.equal(COUNT);
    //     expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=4');
    //     expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=2');
    //
    // });
    //
    // it("5. Get all the people with query parameter 'page=4'", async () => {
    //
    //     const response = await request(`${URL}/people?page=4`);
    //
    //     assertCode200TextOk(response.status, response.statusText);
    //     assertContentTypeJson(response.headers.get('content-type'));
    //
    //     const responseJSON = await transformResponseToJson(response);
    //
    //     validationJson(responseJSON, getAllPeopleJsonModel());
    //
    //     expect(responseJSON.count).to.equal(COUNT);
    //     expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=5');
    //     expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=3');
    //
    // });
    //
    // it("6. Get all the people with query parameter 'page=5'", async () => {
    //
    //     const response = await request(`${URL}/people?page=5`);
    //
    //     assertCode200TextOk(response.status, response.statusText);
    //     assertContentTypeJson(response.headers.get('content-type'));
    //
    //     const responseJSON = await transformResponseToJson(response);
    //
    //     validationJson(responseJSON, getAllPeopleJsonModel());
    //
    //     expect(responseJSON.count).to.equal(COUNT);
    //     expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=6');
    //     expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=4');
    //
    // });
    //
    // it("7. Get all the people with query parameter 'page=6'", async () => {
    //
    //     const response = await request(`${URL}/people?page=6`);
    //
    //     assertCode200TextOk(response.status, response.statusText);
    //     assertContentTypeJson(response.headers.get('content-type'));
    //
    //     const responseJSON = await transformResponseToJson(response);
    //
    //     validationJson(responseJSON, getAllPeopleJsonModel());
    //
    //     expect(responseJSON.count).to.equal(COUNT);
    //     expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=7');
    //     expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=5');
    //
    // });
    //
    // it("8. Get all the people with query parameter 'page=7'", async () => {
    //
    //     const response = await request(`${URL}/people?page=7`);
    //
    //     assertCode200TextOk(response.status, response.statusText);
    //     assertContentTypeJson(response.headers.get('content-type'));
    //
    //     const responseJSON = await transformResponseToJson(response);
    //
    //     validationJson(responseJSON, getAllPeopleJsonModel());
    //
    //     expect(responseJSON.count).to.equal(COUNT);
    //     expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=8');
    //     expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=6');
    //
    // });
    //
    // it("9. Get all the people with query parameter 'page=8'", async () => {
    //
    //     const response = await request(`${URL}/people?page=8`);
    //
    //     assertCode200TextOk(response.status, response.statusText);
    //     assertContentTypeJson(response.headers.get('content-type'));
    //
    //     const responseJSON = await transformResponseToJson(response);
    //
    //     validationJson(responseJSON, getAllPeopleJsonModel());
    //
    //     expect(responseJSON.count).to.equal(COUNT);
    //     expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=9');
    //     expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=7');
    //
    // });
    //
    // it("10. Get all the people with query parameter 'page=9'", async () => {
    //
    //     const response = await request(`${URL}/people?page=9`);
    //
    //     assertCode200TextOk(response.status, response.statusText);
    //     assertContentTypeJson(response.headers.get('content-type'));
    //
    //     const responseJSON = await transformResponseToJson(response);
    //
    //     validationJson(responseJSON, getAllPeopleJsonModel());
    //
    //     expect(responseJSON.count).to.equal(COUNT);
    //     expect(responseJSON.next).to.equal(null);
    //     expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=8');
    //
    // });
    //
    // it("11. GET request with invalid query parameter 'page=10'", async () => {
    //
    //     const response = await request(`${URL}/people?page=10`);
    //
    //     assertCode404TextNotFound(response.status, response.statusText);
    //     assertContentTypeJson(response.headers.get('content-type'));
    //
    //     const responseJSON = await transformResponseToJson(response);
    //
    //     validationJson(responseJSON, invalidQueryParameterJsonModel());
    //
    //     expect(responseJSON.detail).to.equal('Not found');
    //
    // });

}); // describe (A People resource is an individual person or character within the Star Wars universe)
