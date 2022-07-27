import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

import {
  charle,
  glif,
  mlane,
  zxocde,
  remy
} from "../../assets/avatar";
export const posts = [{
    _id: uuid(),
    content: "“In three words I can sum up everything I've learned about life: it goes on.”",
    likes: {
      likeCount: 7,
      likedBy: [{
        _id: uuid(),
        firstName: "Roy",
        lastName: "Nelson",
        username: "royNme",
        password: "nelson45@",
        avatar: {
          zxocde
        },
      }, {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Dixon",
        username: "lauraDeon",
        password: "4Kpng@",
        avatar: {
          charle
        },
      }],
      dislikedBy: [],
    },
    firstName: "Richard",
    lastName: "Tucker",
    username: "Richard",
    profileUrl: glif,
    createdAt: new Date("Apr 08 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [{
        _id: uuid(),
        firstName: "Henry",
        lastName: "Warren",
        avatar: remy,
        username: "henryWarren22",
        commentData: "yeah,its true man",
        votes: {
          upvotedBy: [{
            _id: uuid(),
            upvoteCount: 4
          }],
          downvotedBy: [],
        },
        createdAt: new Date("Apr 08 2021 12:31:25"),
      },
      {
        _id: uuid(),
        firstName: "Jose",
        lastName: "Bowman",
        username: "meRocky",
        password: "charlie23",
        avatar: mlane,
        commentData: "ha haaa",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 01 2021 12:31:25"),
      }
    ],
    postImg:""
  },
  {
    _id: uuid(),
    content: `sore today,strong tomorrow`,
    likes: {
      likeCount: 3,
      likedBy: [{
        _id: uuid(),
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        avatar: {
          zxocde
        },
      }],
      dislikedBy: [],
    },
    firstName: "Shivani",
    lastName: "B",
    username: "shivani",
    profileUrl:glif,
    createdAt: new Date(),
    updatedAt: formatDate(),
    comments: [{
      _id: uuid(),
      firstName: "",
      lastName: "",
      avatar: "",
      username: "",
      commentData: "",
      votes: {
        upvotedBy: [{
          _id: uuid(),
          firstName: "",
          upvoteCount: ""
        }],
        downvotedBy: [],
      },
      createdAt: new Date(""),
    }]
  },
  {
    _id: uuid(),
    content: "It's a new day in India.",
    likes: {
      likeCount:4,
      likedBy: [{
        _id: uuid(),
        firstName: "Roy",
        lastName: "Nelson",
        username: "royNme",
        password: "nelson45@",
        avatar: zxocde,
      }, {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Dixon",
        username: "lauraDeon",
        password: "4Kpng@",
        avatar: 
          charle
        ,
      }],
      dislikedBy: [],
    },
    firstName: "Richard",
    lastName: "Tucker",
    username: "Richard",
    profileUrl: glif,
    createdAt: new Date("Apr 08 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Jose",
        lastName: "Bowman",
        username: "meRocky",
        password: "charlie23",
        avatar: mlane,
        commentData: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 01 2021 12:31:25"),
      }
    ],
  },{
    _id: uuid(),
    content: "Darkness cannot drive out darkness: only light can do that.Hate cannot drive out hate: only love can do that.",
    likes: {
      likeCount: 7,
      likedBy: [{
        _id: uuid(),
        firstName: "Roy",
        lastName: "Nelson",
        username: "royNme",
        password: "nelson45@",
        avatar: {
          zxocde
        },
      }, {
        _id: uuid(),
        firstName: "Laura",
        lastName: "Dixon",
        username: "lauraDeon",
        password: "4Kpng@",
        avatar: {
          charle
        },
      }],
      dislikedBy: [],
    },
    firstName: "Richard",
    lastName: "Tucker",
    username: "Richard",
    profileUrl: glif,
    createdAt: new Date("Apr 08 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [{
        _id: uuid(),
        firstName: "Henry",
        lastName: "Warren",
        avatar: remy,
        username: "henryWarren22",
        commentData: "",
        votes: {
          upvotedBy: [{
            _id: uuid(),
            upvoteCount: 4
          }],
          downvotedBy: [],
        },
        createdAt: new Date("Apr 08 2021 12:31:25"),
      },
      {
        _id: uuid(),
        firstName: "Jose",
        lastName: "Bowman",
        username: "meRocky",
        password: "charlie23",
        avatar: mlane,
        commentData: "",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: new Date("May 01 2021 12:31:25"),
      }
    ],
  },
  {
    _id:uuid(),
    content:"Nothing changes if nothing changes",
    likes:{
      likeCount: 4,
      likedBy: [],
      dislikedBy:[]
    },
    firstName: "Henry",
    lastName: "Warren",
    username: "warrenS",
    profileUrl:remy,
    createdAt: new Date("Jan 08 2020 12:31:25"),
    updatedAt: formatDate(),
    comments:[]
  },
  {
    _id:uuid(),
    content:" ONE DAY,OR DAY ONE.YOU DECIDE",
    likes:{
      likeCount: 1,
      likedBy: [],
      dislikedBy:[]
    },
    firstName: "Henry",
    lastName: "Warren",
    username: "warrenS",
    profileUrl:remy,
    createdAt: new Date("June 10 2021 12:31:25"),
    updatedAt: formatDate(),
    comments:[]
  },
  {
    _id:uuid(),
    content:"Be stronger than your excuses",
    likes:{
      likeCount:0,
      likedBy: [],
      dislikedBy:[]
    },
      firstName: "Laura",
    lastName: "Dixon",
    username: "laura98",
    profileUrl:charle,
    createdAt: new Date("Apr 08 2021 12:31:25"),
    updatedAt: formatDate(),
    comments:[]
  },
  {
    _id:uuid(),
    content:"falling down is an accident ,staying down is a choice.",
    likes:{
      likeCount:0,
      likedBy: [],
      dislikedBy:[]
    },
     firstName: "Laura",
    lastName: "Dixon",
    username: "laura98",
    profileUrl:charle,
    createdAt: new Date("Apr 08 2021 12:31:25"),
    updatedAt: formatDate(),
    comments:[]
  },
  {
    _id:uuid(),
    content:"practice like you have never won.perform like youve never lost",
    likes:{
      likeCount:0,
      likedBy: [],
      dislikedBy:[]
    },
      firstName: "Laura",
    lastName: "Dixon",
    username: "laura98",
    profileUrl:charle,
    createdAt: new Date("Apr 08 2021 12:31:25"),
    updatedAt: formatDate(),
    comments:[]
  },
  {
    _id:uuid(),
    content:"great things takes time",
    likes:{
      likeCount:0,
      likedBy: [],
      dislikedBy:[]
    },
     firstName: "Jose",
    lastName: "Bowman",
    username: "happyJose",
    profileUrl:mlane,
    createdAt: new Date("may 2022 12:31:25"),
    updatedAt: formatDate(),
    comments:[]
  },
  {
    _id:uuid(),
    content:"stay patient and trust your journey",
    likes:{
      likeCount:0,
      likedBy: [],
      dislikedBy:[]
    },
     firstName: "Roy",
    lastName: "Nelson",
    username: "whereIam",
    profileUrl:zxocde,
    createdAt: new Date("Feb 10 2018 12:31:25"),
    updatedAt: formatDate(),
    comments:[]
  }
];
