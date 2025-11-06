import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <main className="App">
            <Outlet /> {/*Outlet komponenten motsvarar alla children till Layout-komponenten, dvs allt som är nästlat inom Layout-komponenten representeras av Outlet-komponenten.*/}
        </main>
    )
}

export default Layout