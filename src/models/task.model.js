import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  category: String,
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium"
  },
  dueDate: Date,
  completed: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  versionKey: false,
  timestamps: true
});

export default model('Task', taskSchema);
