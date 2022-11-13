import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

// https://www.apollographql.com/docs/react/get-started

// localhostにアクセスする操作
const client = new ApolloClient({
  uri: "http://localhost:4000", // GraphQLサーバーのURL
  cache: new InMemoryCache(), // キャッシュのインスタンスで、クエリ結果を取得した後にキャッシュするために使用する
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
