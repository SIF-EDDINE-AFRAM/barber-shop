import { Employee, Schedule } from "../db.mjs";

export async function get_schedules(req, res) {
    try {
        const schedules = await Schedule.find()
        res.json(schedules)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

export async function add_schedule(req, res) {
    try {
        const { employee, service, date, time } = req.body
        console.log('a');
        const schedule = await Schedule.insertOne({employee, service, date, time})
        res.json(schedule)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

// export async function modify_schedule(req, res) {
//     try {
//         const {modified_data} = req.body
//         const {_id} = req.params
//         const modified = await Employee.updateOne({_id}, {...modified_data})
//         console.log({...modified_data});
//         if(modified.matchedCount) res.json({_id, modified_data})
//         else res.status(404).json("not found")
//     } catch (error) {
        
//         console.log(error);
//         res.status(500).send(error)
//     }
// }
export async function delete_schedule(req, res) {
    const { _id } = req.params
    
    try {
        const { _id } = req.params
        const deleted = await Schedule.deleteOne({_id})
        if(deleted.deletedCount) return res.json(_id)
        else res.status(404).send("not found")
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}
