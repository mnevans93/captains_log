require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')
const app = express()