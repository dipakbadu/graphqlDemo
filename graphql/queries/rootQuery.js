const graphql = require('graphql');
const {
    GraphQLObjectType, GraphQLString,
    GraphQLID, GraphQLInt,GraphQLSchema,
    GraphQLList,GraphQLNonNull } = graphql;
const {
    ClassType,
    StudentType,
    StudentClass
} = require('../types/rootTypes');

const  { getClass, getClasses } =  require("../../controller/classController");
const  { getStudents, getStudent } =  require("../../controller/studentController");
const {getStudentsClasses, getStudentClass} = require("../../controller/studentClassController");

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        class: {
            type: ClassType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return getClass(args._id);
            }
        },
        classes:{
            type: new GraphQLList(ClassType),
            resolve(parent, args) {
                return getClasses()
            }
        },
        student:{
            type: StudentType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return getStudent(args._id)
            }
        },
        students:{
            type: new GraphQLList(StudentType),
            resolve(parent, args) {
                return getStudents()
            }
        },
        studentClass:{
            type: StudentClass,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return getStudentClass(args._id)
            }
        },
        studentClasses:{
            type: new GraphQLList(StudentType),
            resolve(parent, args) {
                return getStudentsClasses()
            }
        }
    }
});

module.exports = RootQuery
