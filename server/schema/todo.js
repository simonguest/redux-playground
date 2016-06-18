import {GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList} from 'graphql';
import mongoose from 'mongoose';

let todoMongoose = mongoose.model('Item', new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
}));

let todoType = new GraphQLObjectType({
  name: 'Todo',
  description: 'Todo',
  fields: () => ({
    _id: {
      type: GraphQLString,
      description: 'ID of the item'
    },
    title: {
      type: GraphQLString,
      description: 'Title of the item'
    },
    description: {
      type: GraphQLString,
      description: 'Description of the item'
    },
    completed: {
      type: GraphQLBoolean,
      description: 'Indicates whether the item is completed'
    }
  })
});

export default {
  query: {
    type: new GraphQLList(todoType),
    args: {},
    resolve: (root, {}) => {
      return new Promise((resolve, reject) => {
        console.log('Peforming query');
        todoMongoose.find({}, 'title description completed', (err, todos) => {
          if (err) reject(err);
          console.log(todos);
          resolve(todos);
        });
      });
    }
  }
}