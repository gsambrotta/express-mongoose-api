const express = require('express')
const router = express.Router()
const StudentSchema = require('../models/StudentsModel')

router.post('/', async (req, res) => {
  // manually inserted new Entry - we don't want this most of the time
  // const student = {
  //   name: 'Gio',
  //   first_name: 'me',
  //   email: 'gio@gio.com',
  // }

  const student = req.body

  // you can use await/async with Try/catch block to catch error
  // or you can use promises with .then / .catch
  try {
    const newStudent = await StudentSchema.create(student)
    console.log(newStudent)
  } catch (err) {
    console.log('err creating new student', err)
  }
})

router.get('/', (req, res) => {
  StudentSchema.find({}, (err, data) => res.send(data))
})

module.exports = router
