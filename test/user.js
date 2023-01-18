let chai = require("chai");
let chaihttp = require("chai-http");
let should = chai.should();
let server = require("../index.js");
chai.use(chaihttp)
const User = require("../controller/userController.js");
const UserVal = require('../models/User.js');
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


describe('generating user',  () => {
    it('generate one user', (done) => {              
        let userLocal = {
            username: "myUser",
            password: "qwerty1234",
            mode:"publisher",
            contact:"",
            code:"000002"
        }
        chai.request(server)    
        .post("/api/user/test")    
        .send(userLocal)
        .end( (err,res) => { 
            res.should.have.status(200);
            res.body.should.be.a('object');                  
            done();
        })
    });

    it('generate one failure user', (done) => {              
        let userLocal = {
            username: null,
            password: "qwerty1234",
            mode:"publisher",
            contact:"",
            code:"000002"
        }
        chai.request(server)    
        .post("/api/user/test")    
        .send(userLocal)
        .end( (err,res) => { 
            res.should.have.status(200);
            res.body.should.have.property('errors');
            res.body.should.be.a('object');                     
            done();
        })
    });


    it('generate one user with mode bad', (done) => {              
        let userLocal = {
            username: "myUser",
            password: "qwerty1234",
            mode:null,
            contact:"",
            code:"000002"
        }
        chai.request(server)    
        .post("/api/user/test")    
        .send(userLocal)
        .end( (err,res) => { 
            res.should.have.status(500);            
            res.body.should.be.a('object');                      
            done();
        })
    });

})

describe('deleting user/:id ',  () => {
    it('deleting one user', (done) => {                      
        let localUser = new UserVal({
            username: "myUser",
            password: "qwerty1234",
            mode:"publisher",
            contact:"",
            code:"000002"});
       
        localUser.save((err, localUser )=> {                         
            chai.request(server)    
            .delete('/api/user/'+localUser.id)                    
            .end( (err,res) => { 
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('User successfully deleted!');
                res.body.result.should.have.property('acknowledged').eql(true);
                res.body.result.should.have.property('deletedCount').eql(1);  
                //console.log(res.body)
              done();
                })
            })
    });
});