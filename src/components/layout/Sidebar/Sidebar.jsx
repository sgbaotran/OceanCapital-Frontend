
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {
    return (
        <aside>
            <button id="close-btn">
                <span className="material-icons-sharp">close</span>
            </button>

            <div className="sidebar">
                {/* because all of thse navlink is child of the same route ("/"), therefore, they are all considerd active. use keyword end to highlight active if the dir ends with to prop */}
                <NavLink to={"/"} className={({isActive}) => isActive ? "active" : undefined} end >
                    <span className="material-icons-sharp">dashboard</span>
                    <h4>Dashboard</h4>
                </NavLink>

                <NavLink to={"/exchange"} className={({isActive}) => isActive ? "active" : undefined} >
                    <span className="material-icons-sharp">currency_exchange</span>
                    <h4>Exchange</h4>
                </NavLink>

                <NavLink to={"/wallet"} className={({isActive}) => isActive ? "active" : undefined} >
                    <span className="material-icons-sharp">account_balance</span>
                    <h4>Wallet</h4>
                </NavLink>

                <NavLink to={"/transaction"} className={({isActive}) => isActive ? "active" : undefined} >
                    <span className="material-icons-sharp">payment</span>
                    <h4>Transaction</h4>
                </NavLink>

                <NavLink to={"/analytic"} className={({isActive}) => isActive ? "active" : undefined} >
                    <span className="material-icons-sharp">pie_chart</span>
                    <h4>Analytic</h4>
                </NavLink>

            </div>


            <div className="updates">
                <span className="material-icons-sharp">update</span>
                <h4>Updates Available</h4>
                <small>Security Updates</small>
                <small>General Updates</small>
            </div>


        </aside>

    )
}