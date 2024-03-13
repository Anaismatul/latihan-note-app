import {Link, Outlet} from "react-router-dom";

export default function Layout(){
    return(
        <>
        <div className="flex gap-2 py-2 h=[55px] items-center justify-around bg-white">
            <h1>JUDUL</h1>
            <nav className="flex gap-5 items-center ">
                <Link to={"/Login"}><p>Login</p></Link>
                <Link to={"/Register"}><p>Registrasi</p></Link>
            </nav>
        </div>
        <Outlet/>
        </>
    )
}
