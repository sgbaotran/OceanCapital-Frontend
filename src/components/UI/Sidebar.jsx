import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
    return (
        <aside>
            {/* Button to close the sidebar */}
            <button id="close-btn">
                <span className="material-icons-sharp">close</span>
            </button>

            <div className="sidebar">
                {/* NavLink for Dashboard - use 'end' to ensure it's only active on exact match */}
                <NavLink to={"/"} className={({ isActive }) => isActive ? "active" : undefined} end >
                    <span className="material-icons-sharp">dashboard</span>
                    <h4>Dashboard</h4>
                </NavLink>

                {/* NavLink for Exchange */}
                <NavLink to={"/exchange"} className={({ isActive }) => isActive ? "active" : undefined} >
                    <span className="material-icons-sharp">currency_exchange</span>
                    <h4>Exchange</h4>
                </NavLink>

                {/* NavLink for Wallet */}
                <NavLink to={"/wallet"} className={({ isActive }) => isActive ? "active" : undefined} >
                    <span className="material-icons-sharp">account_balance</span>
                    <h4>Wallet</h4>
                </NavLink>

                {/* NavLink for Transaction */}
                <NavLink to={"/transaction"} className={({ isActive }) => isActive ? "active" : undefined} >
                    <span className="material-icons-sharp">payment</span>
                    <h4>Transaction</h4>
                </NavLink>

                {/* NavLink for Analytic */}
                <NavLink to={"/analytic"} className={({ isActive }) => isActive ? "active" : undefined} >
                    <span className="material-icons-sharp">pie_chart</span>
                    <h4>Analytic</h4>
                </NavLink>
            </div>

            <div className="updates">
                {/* Section for updates */}
                <span className="material-icons-sharp">update</span>
                <h4>Updates Available</h4>
                <small>Security Updates</small>
                <small>General Updates</small>
            </div>
        </aside>
    );
}
