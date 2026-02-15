<<<<<<< HEAD
import mongoose, {Schema} from "mongoose";
=======
import mongoose,{Schema} from "mongoose";
>>>>>>> 6d7682ae87cb24209b2d87f154cc582ddd8fd7a6
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
<<<<<<< HEAD
        videoFile: {
            type: String, //cloudinary url
            required: true
        },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, 
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    }, 
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)
=======
        videoFile:{
            type:String,    //Cloudinary url
            required:true,
        },
        thumbnail:{
            type:String,    //Cloudinary url
            required:true,
        },
        title:{
            type:String,     
            required:true,
        },
        description:{
            type:String,     
            required:true,
        },
        duration:{
            type:Number,     //Cloudinary url
            required:true,
        },
        views:{
            type:Number,     
            default:0,
        },
        isPublished:{
            type:Boolean,
            default:true,
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User",
        }
        
    },
    {
        timestamps:true,
    }
)
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",videoSchema)
>>>>>>> 6d7682ae87cb24209b2d87f154cc582ddd8fd7a6
