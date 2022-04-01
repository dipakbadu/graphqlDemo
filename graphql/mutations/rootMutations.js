const graphql = require('graphql');
const {
    GraphQLObjectType, GraphQLString,
    GraphQLID, GraphQLInt,GraphQLSchema,
    GraphQLList,GraphQLNonNull } = graphql;
const {
    ClassType,
    StudentType,
    UserType,
    StudentClass
}  = require('../types/rootTypes');

const  { createClass, updateClass, deleteClass } = require("../../controller/classController");
const  { createStudent, updateStudent, deleteStudent } = require("../../controller/studentController");
const { signIn } = require("../../controller/authController");
const {createStudentClass, updateStudentClass, deleteStudentClass} = require("../../controller/studentClassController")

const ClassMutationRootType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addClass: {
            type: ClassType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent,args, req) {
                if (!req.isAuth) {
                    throw new Error("unauthorized")
                }
                return createClass(args)
            }
        },
        updateClass: {
            type: ClassType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args, req) {
                if (!req.isAuth) {
                    throw new Error("unauthorized")
                }
                return updateClass(args)
            }
        },
        deleteClass: {
            type: ClassType,
            description: 'delete a Author',
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args, req) {
                if (!req.isAuth) {
                    throw new Error("unauthorized")
                }
                return deleteClass(args);
            },
        },
        addStudent: {
            type: StudentType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve(parent,args,req) {
                if (!req.isAuth) {
                    throw new Error("unauthorized")
                }
                return createStudent(args)
            }
        },
        updateStudent: {
            type: StudentType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                grade: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args, req) {
                if (!req.isAuth) {
                    throw new Error("unauthorized")
                }
                return updateStudent(args)
            }
        },
        deleteStudent: {
            type: ClassType,
            description: 'delete a Author',
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args,req) {
                if (!req.isAuth) {
                    throw new Error("unauthorized")
                }
                return deleteStudent(args);
            },
        },
        createStudentClass: {
          type: StudentClass,
            args: {
              studentId: {type: new GraphQLNonNull(GraphQLString)},
              classId: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args, req) {
                if (!req.isAuth) {
                    throw new Error("unauthorized")
                }
              return createStudentClass(args)
            }
        },

        updateStudentClass: {
            type: StudentClass,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
                studentId: { type: new GraphQLNonNull(GraphQLString) },
                classId: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args,req) {
                if (!req.isAuth) {
                    throw new Error("unauthorized")
                }
                return updateStudentClass(args)
            }
        },

        deleteStudentClass: {
            type: StudentClass,
            description: 'delete a Student Class',
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args, req) {
                if (!req.isAuth) {
                    throw new Error("unauthorized")
                }
                return deleteStudentClass(args);
            },
        },

        authorization: {
            type: UserType,
            args: {
                userName: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
               return signIn(args)
            }
        }
    }
})

module.exports = ClassMutationRootType
