import { Employee } from "../db.mjs";

export async function get_employees(req, res) {
    try {
        const employees = await Employee.find()
        res.json(employees)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

export async function add_employees(req, res) {
    try {
        const { name } = req.body
        const employees = await Employee.insertOne({name})
        res.json(employees)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

export async function modify_employees(req, res) {
    try {
        const {_id, name} = req.body
        
        const modified = await Employee.updateOne({_id}, {name})
        if(modified.matchedCount) res.json({_id, name})
        else res.status(404).json("not found")
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}
export async function delete_employees(req, res) {
    try {
        const { _id } = req.params
        const deleted = await Employee.deleteOne({_id})
        if(deleted.deletedCount) return res.json(_id)
        else res.status(404).send("not found")
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}
