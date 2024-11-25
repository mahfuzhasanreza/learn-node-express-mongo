import { useLoaderData } from "react-router-dom";

const Server = () => {
    const server = useLoaderData();
    console.log(server);
    return (
        <div>
            <h2>{server.id}</h2>
            <h1>{server.server.host}</h1>
            <h1>{server.server.port}</h1>
        </div>
    );
};

export default Server;