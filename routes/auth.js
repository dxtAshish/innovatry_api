const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { findOne } = require("../models/User");
const JWT_SECRET = "ashihsdxt$";
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");

// ROUTE 1:create a user using POST "/api/auth/creatuser" no LOGIN  required
router.post(
  "/createuser",
  body("email").isEmail(),
  body("name").isLength({ min: 3 }),
  body("password").isLength({ min: 8 }),

  async (req, res) => {
    //if there are errors, return bad request

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //check whether a user with this email present or not
    try {
      console.log("here 28")
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(404)
          .json({ error: "sorry a user with this email is already exist" });
      }

      //create password salt
      const salt = await bcrypt.genSalt(10);

      const secPass = await bcrypt.hash(req.body.password, salt);

      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({token: authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);
// ROUTE:2 authentication a user using POST "/api/auth/login" no LOGIN  required

router.post(
  "/login",
  body("email").isEmail(),
  body("password", "password cannot be blank").exists(),

  async (req, res) => {
    //if there are errors, return bad request

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "please try to login with valid credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "please try to login with valid credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal some error occured");
    }
  }
);
//ROUTE 3: get logged in user details using GET "/api/auth/getuser" Login required
router.post( "/getuser",
  fetchuser,

  async (req, res) => {
    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal some error occured");
    }
  }
);


router.post("/getuserbytoken",fetchuser,async(req,res)=>{
  try{
    if(req.user){
      const user_response = await User.findById(req.user.id)
      return res.status(200).json({
        data:user_response,
        status:200
      })
    }
    return res.status(302).json({
      message:"user not found",
      status:302
    })
}
catch(err){
  return res.status(500).json({
    message:"user not found",
    status:500
  })
}
})


module.exports = router;
