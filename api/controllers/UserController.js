/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var nodemailer = require('nodemailer');
module.exports = {
	sendemail : function(req,res,next){
	       var usrObj = {
	       	name : req.param('name'),
	       	email : req.param('email'),
	       	phone : req.param('phone'),
	       	message : req.param('message')
	       }
	       var transporter = nodemailer.createTransport({
	              service:'Gmail',
	              auth:{
	                user:'mike.visualsoft@gmail.com',
	                pass:'michaellim493133'
	              }
	        });
	        var MailOptions = {
	                from:usrObj.email,
	                to : 'mike.visualsoft@gmail.com',
	                subject : 'Email Portfolio Michael',
	                html : 'Hai, Michael. Seseorang menghubungimu dengan informasi sebagai berikut : <br><br>Nama : '+usrObj.name+'<br>Email : '+ usrObj.email +'<br>Nomor Telepon : '+usrObj.phone+'<br>Pesannya adalah : <br><p>'+usrObj.message+'</p>'
	            };
	        transporter.sendMail(MailOptions,function(error,info){
	              if (error) {
	                console.log(error);
	              } else {
	                console.log('Message sent: '+info.response);
	              }
	        });
	        return res.redirect('/');
	}
};

