const  graphql = require('graphql')
const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt
}  =  graphql;

const ClassType = new GraphQLObjectType({
    name: 'Class',
    description: 'This represent a class',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    })
})

const StudentType = new GraphQLObjectType({
    name: 'Student',
    description: 'This represent a student',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: {type: GraphQLString},
        phone: {type: GraphQLInt}
    })
})

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        token: {type: GraphQLString}
    })
})

const StudentClass = new GraphQLObjectType({
    name: "StudentClass",
    fields: () => ({
        studentId: {type: GraphQLString},
        classId: {type: GraphQLString}
    })
})

module.exports = {
    ClassType,
    StudentType,
    UserType,
    StudentClass
}