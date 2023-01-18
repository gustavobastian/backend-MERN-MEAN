let chai = require("chai");
let chaihttp = require("chai-http");
let should = chai.should();
let server = require("../index.js");
chai.use(chaihttp)
const User = require("../controller/userController.js");
const { json } = require("express");

describe('starting',  () => {
    it('start db', (done) => {        
        setTimeout(done, 1500);
    })
})


describe('searching',  () => {
    it('get one user', (done) => {        
        
        chai.request(server)    
        .get("/api/user/test")    
        .end( (err,res) => {   
            res.should.have.status(200);  
            done();
        })
        
        
    })
})