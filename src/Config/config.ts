require('dotenv').config();

const type = 'postgres';
const host = 'ec2-52-71-231-37.compute-1.amazonaws.com';
const port = Number(5432);
const username = 'llfaqdyltyciaj';
const password =
  '36b4e75b46766d10e1ec3ed62f0419458dbfcbc125cfe0f3827eed91f6282ee2';
const database = 'ddq333gtf148kt';

export const config = {
  TYPE: process.env.TYPE || type,
  HOST: process.env.HOST || host,
  PORT: Number(process.env.PORT) || port,
  USERNAME: process.env.USERNAME || username,
  PASSWORD: process.env.PASSWORD || password,
  DATABASE: process.env.DATABASE || database,

  SERVER_PORT: process.env.SERVER_PORT || 3000,
};
