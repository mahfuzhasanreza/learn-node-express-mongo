import { Link, useLoaderData } from "react-router-dom";

const Servers = () => {
    const servers = useLoaderData();
    return (
        <div>
            <h2>All servers here: {servers.length}</h2>
            {
                servers.map(server => <li key={server.id}>
                   <Link to={`/server/${server.id}`}>{server.id}</Link>
                </li>)
            }
        </div>
    );
};

export default Servers;