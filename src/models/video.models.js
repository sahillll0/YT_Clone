import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
      videoFile :{
        type:String,  // coludnary url
        required:true,
      },
      thumbnail:{
        type:String,  // coludnary url
        required:true,
      },
        titel:{
        type:String,  // coludnary url
        required:true,
      },
        description:{
        type:String,  // coludnary url
        required:true,
      },
        duration:{
        type:Number,  // coludnary url
        required:true,
      },
        views:{
        type:Number,  // coludnary url
        default:0,
      },
      isPublished:{
        type:Boolean,
        default:true,
      },
      owner :{
        type : Schema.Types.ObjectId,
        ref : "User",
      }


    },
    {
        timestamps:true
    }
);


videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)