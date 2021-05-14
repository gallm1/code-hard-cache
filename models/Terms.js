const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const termsSchema = new Schema({
  term: { type: String, required: true },
  represents: { type: String, required: true },
  meaning: String,
  date: { type: Date, default: Date.now },
  tips: String,
// Need to come back to this one, once the User model is complete and we have access to the user table.
  user: String,
    //   {
    //       type:Schema.Types.ObjectId,
    //       ref: "User"
    //   }
  
});

const Terms = mongoose.model("Terms", termsSchema);

module.exports = Terms;
