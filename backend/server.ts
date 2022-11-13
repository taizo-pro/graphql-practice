import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// schema
// dataset
// resolver
// instance

// 型定義
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// Queryが実行されたら、どの値を返すか指定する
const resolvers = {
  Query: {
    books: () => books,
  },
};

// schemaとresolver をパラメータに持たせる
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {port: 4000}
})
console.log("🚀 ~ file: server.ts ~ line 30 ~ url", url)

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];