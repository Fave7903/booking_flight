const Flight = require('../models/Flight')

exports.home = (req, res) => {
    res.send("Booking flight API")
}


exports.book = async (req, res) => {
    const flight = await new Flight(req.body)
    await flight.save()
    res.status(200).json({message: "Your flight is booked!", flight})
}

exports.updateFlight = (req, res) => {
    const {title, time, price, date} = req.body
    Flight.findByIdAndUpdate(req.params.id, {title, time, price, date}, {new: true}, (err, flight) => {
        if (err) {
            return res.status(400).json(err)
        }
        res.status(200).json({message: "Update successful", flight})
    })
}

exports.deleteFlight = (req, res) => {
    Flight.findByIdAndDelete(req.params.id, (err, flight) => {
        if (err) {
            return res.status(400).json(err)
        }
        res.status(200).json({message: "This flight has been deleted successfully", flight})
    })
}

exports.getAllflights = (req, res) => {
    Flight.find((err, flights) => {
        if (err) {
            return res.status(400).json(err)
        }
        res.status(200).json(flights)
    })
}

exports.getFlight = (req, res) => {
    Flight.findById(req.params.id, (err, flight) => {
        if (err) {
            return res.status(400).json(err)
        }
        res.status(200).json(flight)
    })
}