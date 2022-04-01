const Student = require('../model/student')

const getStudents = async () => {
    return await Student.find({})
        .sort({created: 'desc'});
};

const getStudent = async (_id) => {
    const student = await Student.find({ _id });
    if (!student) {
        return 'student does not exist';
    }
    return student;
};

const createStudent = async (args) => {
    return await (new Student(args)).save()
}

const updateStudent = async  (args) => {
    return await Student.findOneAndUpdate(
        {_id: args._id},
        args,
        {
            new: true,
        }
    )
}
const deleteStudent = async (args) => {
    return await Student.findByIdAndDelete(args._id)
}

module.exports  = {
    createStudent,
    updateStudent,
    deleteStudent,
    getStudent,
    getStudents
}