const Class = require('../model/class');
const jwt = require("jsonwebtoken");

const getClasses = async () => {
    return await Class.find({})
        .sort({created: 'desc'});
};

const getClass = async (_id) => {
    const classRoom = await Class.find({ _id });
    if (!classRoom) {
        return 'Author does not exist';
    }
    return classRoom;
};

const createClass = async (args) => {
    return await (new Class(args)).save()
}

const updateClass = async  (args) => {
    return await Class.findOneAndUpdate(
        {_id: args._id},
        args,
        {
            new: true,
        }
    )
}
const deleteClass = async (args) => {
    return await Class.findByIdAndDelete(args._id)
}


module.exports  = {
    createClass,
    updateClass,
    deleteClass,
    getClass,
    getClasses,
}