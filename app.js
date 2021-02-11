const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const Apply = require('./models/Apply.model')


const aws = require('aws-sdk')
const multerS3 = require('multer-s3')

const path = require('path')

const multer = require('multer')

aws.config.update({
	accessKeyId: 'AKIAVXJG7LNEWBIM6E4P',
	secretAccessKey: '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',
	region: 'us-east-2',
})

const s3 = new aws.S3()
/**
 * Single Upload
 */
const fileUpload = multer({
	storage: multerS3({
		s3: s3,
		bucket: 'revision-audios',
		acl: 'public-read',
		key: function (req, file, cb) {
			cb(
				null,
				path.basename(file.originalname, path.extname(file.originalname)) +
					'-' +
					Date.now() +
					path.extname(file.originalname)
			)
		},
	}),
}).single('cv')



const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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'
    }
  })
)

const app = express()
app.use(cors())

app.use(express.json())

const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === 'development') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
app.use(express.static('client/build'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const uri =
  'mongodb+srv://ArslanGoraya:Minimart11@cluster0-wjxgm.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once('open', () => {
  console.log('Mongoose Connection established')
})

app.post('/sendmail', (req, res) => {

	fileUpload(req, res, (error) => {
		// console.log( 'requestOkokok', req.file );
		// console.log( 'error', error );
		const { name, email, subject, message } = req.body
		if (error) {
			console.log('errors', error)
			res.json({ error: error })
		} else {
			// If File not found
			if (req.file === undefined) {
				console.log('Error: No File Selected!')
				transporter
					.sendMail({
					to: ['ahmad106107@gmail.com'],
					from: 'contact@melliott.io',
					subject: subject,
					html: `<div><h4>Name : ${name}</h4><h4>Email : ${email}</h4><h4>Message : ${message}</h4></div>`
					})
					.then(info => {
						return res.json({  info, message: 'email sent!' })
						
					})
					.catch(error => {
					return res.json({ error, message: 'Email cannot be sent!' })
					})
			} else {
				// If Success
				const imageName = req.file.key
				const cvLocation = req.file.location
				transporter
					.sendMail({
					to: ['ahmad106107@gmail.com'],
					from: 'contact@melliott.io',
					subject: subject,
					html: `<div><h4>Name : ${name}</h4><h4>Email : ${email}</h4><h4>Message : ${message}</h4><a href="${cvLocation}" target="_blank">${cvLocation}</a></div>`
					})
					.then(info => {
						return res.json({  info, message: 'email sent!' })
						
					})
					.catch(error => {
					return res.json({ error, message: 'Email cannot be sent!' })
					})
			}
		}
	})

  
})

app.get('/applications', (req, res) => {
  Apply.find()
    .then(clients => {
      return res.json({ clients })
    })
    .catch(error => {
      return res.json({ error })
    })
})

app.post('/apply', (req, res) => {
  fileUpload(req, res, (error) => {
		// console.log( 'requestOkokok', req.file );
		// console.log( 'error', error );
		if (error) {
			console.log('errors', error)
			res.json({ error: error })
		} else {
			// If File not found
			if (req.file === undefined) {
				console.log('Error: No File Selected!')
				res.json('Error: No File Selected')
			} else {
				// If Success
				const imageName = req.file.key
				const cvLocation = req.file.location
				const newApply = new Apply({
					cv: cvLocation
				})
				newApply
					.save()
					.then((application) => {
						return res.json({ application, message: 'Application sent successfully' })
					})
					.catch((error) => {
						return res.json({ error })
					})
			}
		}
	})
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
