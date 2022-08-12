var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        courses(topic: String): [Course]
    },
    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course
        addVisit(nurseId: String!, patientId: String!): Visit
    }
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
    type Visit {
        nurseId: String
        patientId: String
    }
    type VitalSigns {
        bt: String
        hr: String
        bp: String
        rr: String
    }
`);

module.exports = schema;

