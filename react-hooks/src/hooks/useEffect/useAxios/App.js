import useAxios from "./useAxios";

const App = () => {
    const { loading, error, data, refetch } = useAxios({
        url: "https://yts.mx/api/v2/list_movies.json"
    });
    console.log(loading, error, JSON.stringify(data));
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1>{data && data.status}</h1>
            <h2>{loading ? "Loading..." : "load"}</h2>
            <button onClick={refetch}>refetch</button>
        </div>
    );
};

export default App;
