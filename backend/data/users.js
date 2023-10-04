import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("78987898", 10),
    isAdmin: true,
  },
  {
    name: "Ahsan",
    email: "user1@gmail.com",
    password: bcrypt.hashSync("78987898", 10),
    isAdmin: false,
  },
  {
    name: "Aslam",
    email: "user2@gmail.com",
    password: bcrypt.hashSync("78987898", 10),
    isAdmin: false,
  },
  {
    name: "Asima",
    email: "user3@gmail.com",
    password: bcrypt.hashSync("78987898", 10),
    isAdmin: false,
  },
];

export default users;
