const users = {};
const Userses = require('../models/users.js');

users.getUsers = async(req,res)=>{
	const user = await Userses.find();
    res.json(user);	
} 
users.createUsers = async(req,res)=>{
	const {name, email, imageurl, number, idpay} = req.body;
	const userses = new Userses({
			"name": name,
			"email": email,
			"imageurl": imageurl,
			"number": number,
			"idpay": idpay
	});
	await userses.save();
	res.json("note create");
}
users.updateUsers = async(req,res)=>{
	const {name, email, imageurl, number, ID} = req.body;
	await  Userses.findByIdAndUpdate(req.params.id,{
			"name": name,
			"email": email,
			"imageurl": imageurl,
			"number": number,
			"idpay": ID
	})
	res.json({"id": req.params.id});
};
users.deleteUsers = async(req,res)=>{
	const {id} = req.params;
	await  Userses.findByIdAndDelete(id);
	res.json("note remove");
};

module.exports = users;