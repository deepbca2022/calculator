import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#2e7d32', // dark green
    padding: '16px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '29px',
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: 'white',
    fontWeight: '500',
    fontSize: '18px',
    textDecoration: 'none',
    transition: 'color 0.2s ease-in-out',
  };

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Register', path: '/RegistrationPage' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Insurance', path: '/InsuranceForm' },
    { name: 'Investment', path: '/investments' },
    { name: 'FinanceInsight', path: '/financeInsight' },
  ];

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>FinGroww</div>
        <ul style={ulStyle}>
          {links.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                style={linkStyle}
                onMouseEnter={(e) => (e.target.style.color = '#33fff6')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
