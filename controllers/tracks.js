const express = require('express')
const tracks = express.Router()
const Tracks = require('../models/tracks.js')

tracks.get('/', (req, res) => {
    Tracks.find({}, (err, foundTracks) => {
        if (err) {
            res.status(400).json({ error: err.message})
        }
        res.status(200).json(foundTracks)
    })
})

tracks.get('/:id', (req, res) => {
	Tracks.findById(req.params.id, (err, foundTracks) => {
		if (err) {
			res.status(400).json({error: err.message})
		}
		res.status(200).json(foundTracks)
	})
})

tracks.delete('/:id', (req, res) => {
  Tracks.findByIdAndRemove(req.params.id, (err, deletedTracks) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    console.log('Tracks Deleted:', deletedTracks)
    res.status(200).json(deletedTracks)
  })
})

tracks.delete('/', (req, res) => {
  Tracks.deleteMany({}, (err, deletedTracks) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    console.log('Tracks Deleted:', deletedTracks)
    res.status(200).json(deletedTracks)
  })
})

tracks.post('/', async (req, res) => {
    
    console.log(req.body)
  Tracks.create(req.body, (error, createdTracks) => {
      
    if (error) {
      res.status(400).json({ error: error.message })
    }
    console.log('Tracks Created:', createdTracks)
    res.status(200).json(createdTracks) //  .json() will send proper headers in response so client knows it's json coming back
  })
})

// tracks.put('/players/:id', (req, res) => {
// 	Tracks.find
// })

tracks.put('/:id', (req, res) => {
  Tracks.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTracks) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    console.log('Updated Tracks:', updatedTracks)
    res.status(200).json(updatedTracks)
  })
})

module.exports = tracks