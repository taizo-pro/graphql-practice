import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

type Query = {
  title: string;
  author: string;
};

function App() {
  const [count, setCount] = useState(0);
  const GET_BOOKS = gql`
    query GetBooks {
      books {
        title
        author
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {data.books.map(({ title, author }: Query) => (
        <>
          <br />
          <div>title</div>
          <span>{title}</span>
          <br />
          <div>author</div>
          <span>{author}</span>
          <br />
        </>
      ))}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
