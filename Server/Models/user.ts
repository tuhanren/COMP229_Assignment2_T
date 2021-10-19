import mongoose, { PassportLocalSchema } from 'mongoose';
const Schema = mongoose.Schema;
import PassportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema
({
      username: String,
      emaiAddress: String,
      displayName: String,
      created:
      {
            type: Date,
            default: Date.now()
      },
      updated:
      {
            type: Date,
            default: Date.now()
      }
},
{
      collection: "users"
});

// for easier encription and decription?
UserSchema.plugin(PassportLocalMongoose);

// typescript can define global object
declare global
{
      export type UserDocument = mongoose.Document &
      {
            _id: String,
            username: String,
            emailAddress: String,
            displayName: String
      }
}

const Model = mongoose.model("User", UserSchema as PassportLocalSchema);
export default Model;