import './Layoutmodule.css'
import { Link, Outlet } from "react-router-dom"
import links from '../link.json'

const Layout = () => {
    return (
        <div>
            <header className="header">
                <h1 style={{ paddingLeft: '400px', fontFamily: 'Poetsen One', color: 'green', fontSize: '35px' }}>Fill Basket</h1>
                {
                    links.map((val) => (
                        <Link key={val.path} to={val.path} style={{ margin: '10px', color: 'red' }}>
                            {val.name}
                        </Link>
                    ))
                }
            </header>
            <aside className="sidebar">
                <h2>Vegetables</h2>
                <h2>Fruits</h2>
                <h2>Proteins</h2>
                <h2>Nuts</h2>
                <h2>Spices</h2>
            </aside>
            <div className='content'>
                <Outlet />
            </div>
            <footer className='footer'>
                <i style={{ padding: '10px' }} className="fa-brands fa-facebook"></i>
                <i style={{ padding: '10px' }} className="fa-brands fa-twitter"></i>
                <i style={{ padding: '10px' }} className="fa-brands fa-instagram"></i>
            </footer>
        </div>
    )
}

export default Layout