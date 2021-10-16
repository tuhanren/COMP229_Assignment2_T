import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema
({
      FullName: String,
      EmailAddress: String,
      ContactNumber: String
},
{
      collection: "contactlist"
});

const Model = mongoose.model("Contact", ContactSchema);
export default Model;