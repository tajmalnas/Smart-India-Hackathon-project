import { useState } from 'react';
import Footers from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Dashboard.css';

const Dashboard = () => {
  const [filters, setFilters] = useState({
    state: '',
    city: '',
    caste: '',
    age: '',
    standard: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard__page">
        <div className="dashboard__search">
          <input placeholder="Search for school" type="text"></input>
        </div>
        <div className="main__dashboard">
          <div className="filter">
            {/* Filter inputs */}
            <div>
            <h3>State</h3>
            <input
              type="text"
              name="state"
              value={filters.state}
              onChange={handleFilterChange}
              placeholder="State"
            />
            </div>
            <div>
            <h3>City</h3>
            <input
              type="text"
              name="city"
              value={filters.city}
              onChange={handleFilterChange}
              placeholder="City"
            />
            </div>
            <div>
            <h3>Caste</h3>
            <input
              type="text"
              name="caste"
              value={filters.caste}
              onChange={handleFilterChange}
              placeholder="Caste"
            />
            </div>
            <div>
            <h3>Age</h3>
            <input
              type="text"
              name="age"
              value={filters.age}
              onChange={handleFilterChange}
              placeholder="Age"
            />
            </div>
            <div>
            <h3>Standard</h3>
            <input
              type="text"
              name="standard"
              value={filters.standard}
              onChange={handleFilterChange}
              placeholder="Standard"
            />
            </div>
          </div>
          <div className="dashboard__section">
            {/* Display filtered data here */}
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Dashboard;
