import { graphql, GraphQLSchema, GraphQLObjectType } from 'graphql';
import todo from './todo';

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    fields: {
      //todos
      todos: todo.query
    }
  })
});

export default schema;