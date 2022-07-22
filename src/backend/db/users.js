import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */
import { charle,glif,mlane,zxocde,remy } from "../../assets/avatar";
export const users = [
  {
    _id: uuid(),
    firstName: "Richard",
    lastName: "Tucker",
    username: "Richard",
    password: "us@142",
    avatar:glif,
    bio:"",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
  ,{
    _id: uuid(),
    firstName: "Jose",
    lastName: "Bowman",
    username: "happyJose",
    password: "charlie23",
    avatar:mlane,
    bio:"",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },{
    _id: uuid(),
    firstName: "Roy",
    lastName: "Nelson",
    username: "whereIam",
    password: "nelson45@",
    avatar:zxocde,
    bio:"",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },{
    _id: uuid(),
    firstName: "Laura",
    lastName: "Dixon",
    username: "laura98",
    password: "4Kpng@",
    avatar:charle,
    bio:"",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },{
    _id: uuid(),
    firstName: "Henry",
    lastName: "Warren",
    username: "warrenS",
    password: "henry56",
    avatar:remy,
    bio:"",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }, {
    _id: uuid(),
    firstName: "Shivani",
    lastName: "B",
    username: "shivani",
    password: "shivani@12",
    avatar: glif,
    bio:"learning web",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
