import mongoose from 'mongoose'; //import the mongoose API
const Schema = mongoose.Schema; //alias for mongoose Schema
//create a model class to connect database
const GameSchema = new Schema
({
		name: String,  //define properties
		genre: String,
		developer: String,
		cost: Number
},
{
		collection: "games"
});

const Model = mongoose.model("Game", GameSchema); 
export default Model;