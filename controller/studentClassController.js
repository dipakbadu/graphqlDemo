const StudentClass = require('../model/studentClass')

const getStudentsClasses = async () => {
    return await StudentClass.find({})
        .sort({created: 'desc'});
};

const getStudentClass = async (_id) => {
    const studentClass = await StudentClass.find({ _id });
    if (!studentClass) {
        return 'student class does not exist';
    }
    return studentClass;
};

const createStudentClass = async (args) => {
    return await (new StudentClass(args)).save()
}

const updateStudentClass = async  (args) => {
    return await StudentClass.findOneAndUpdate(
        {_id: args._id},
        args,
        {
            new: true,
        }
    )
}
const deleteStudentClass = async (args) => {
    return await StudentClass.findByIdAndDelete(args._id)
}

module.exports  = {
    createStudentClass,
    updateStudentClass,
    deleteStudentClass,
    getStudentClass,
    getStudentsClasses
}