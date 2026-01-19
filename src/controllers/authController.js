import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generatetoken.js";
import express from "express";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const userExists = await prisma.user.findUnique({
    where: { email },
  });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //generate JWT token
  const token = generateToken(user.id, res);

  res.status(201).json({
    status: "success",
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token,  
  });
};


const login = async (req, res) => {
    const { email, password } = req.body;

    //check if user exists
    const user = await prisma.user.findUnique({
        where: { email: email },
    });

    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    //generate JWT token
    const token = generateToken(user.id, res);

    res.status(201).json({
        status: "success",
        data: {
            id: user.id,
            email: user.email,
        },
        token,
    });
};

const logout = async (req, res) => {
  res.cookie('jwt', "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ 
    status: "success",
    message: "User logged out successfully" 
  });
};

export { register, login, logout };