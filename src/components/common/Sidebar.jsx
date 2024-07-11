import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
    // Function to handle logout
    const handleLogout = () => {
        // Implement your logout logic here
        console.log('Logging out...');
    };

    return (
        <aside>
            {/* Company Logo and Name */}
            <div className='company-logo'>
                <img src={require("assets/images/logo.png")} alt="app logo" className="logo" />
                <h2>OCEAN CAPITAL</h2>
            </div>

            {/* Button to close the sidebar */}
            <button id="close-btn">
                <span className="material-icons-sharp">close</span>
            </button>

            <div className="navigations">
                {/* NavLink for Dashboard - use 'end' to ensure it's only active on exact match */}
                <NavLink to={"/"} className={({ isActive }) => isActive ? "active" : undefined} end >
                    <span className="material-icons-sharp">dashboard</span>
                    <h4>Dashboard</h4>
                </NavLink>

                {/* NavLink for Transaction */}
                <NavLink to={"/transaction"} className={({ isActive }) => isActive ? "active" : undefined} >
                    <span className="material-icons-sharp">payment</span>
                    <h4>Transaction</h4>
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

                {/* NavLink for Analytic */}
                <NavLink to={"/analytic"} className={({ isActive }) => isActive ? "active" : undefined} >
                    <span className="material-icons-sharp">pie_chart</span>
                    <h4>Analytic</h4>
                </NavLink>
            </div>

            {/* Logout section */}


            {/* <div className="updates">
                <span className="material-icons-sharp">update</span>
                <h4>Updates Available</h4>
                <small>Security Updates</small>
                <small>General Updates</small>
                <button>Update Now</button>
            </div> */}
            <div className="logout-section">
                <button className="logout-btn" onClick={handleLogout}>
                    <span className="material-icons-sharp">exit_to_app</span>
                    <h4>Logout</h4>
                </button>
            </div>
        </aside>
    );
}
