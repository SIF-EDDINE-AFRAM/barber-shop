import { Service } from "../db.mjs";

export const getService = async (req, res) => {
    try {
        const services = await Service.find()
        res.json(services)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const addService = async (req, res) => {
    const service = new Service({name : req.body.name})
    try {
        const newService = await service.save()
        res.status(200).json(newService)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

// update a name of service from database
export const updateService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id)
        if (!service) return res.status(404).json({ message: "not found" })
        service.name = req.body.name
        const updatedService = await service.save()
        res.json(updatedService)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id)
        if (!service) return res.status(404).json({ message: "not found" })
        await service.deleteOne()
        res.json({ message: "deleted" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}