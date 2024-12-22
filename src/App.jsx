import useSWR from "swr";
import "./App.css";

const headers = { Accept: "application/json" };
const fetcher = (url) => fetch(url, { headers }).then((res) => res.json());

function App() {
  const { data, error, isLoading } = useSWR(
    "https://httpstat.us/200?sleep=2000",
    fetcher
  );

  if (error) return <div>Failed to load.</div>;
  if (isLoading) return <div>Loading...</div>;

  return <p>Status: {data.description}</p>;
}

export default App;
