// Import the React library
import React from 'react';

// Define a functional component called EmployeeListItem
// This component takes in a prop called 'employee' which is an object containing employee details
const EmployeeListItem = ({ employee }) => {
    // Return JSX that represents a list item for an employee
    // The employee's thumbnail, name, and job title are displayed
    return (
        <div className="employee-list-item">
            <img src={employee.thumbnail} alt={employee.name} />
            <h2>{employee.name}</h2>
            <p>{employee.jobTitle}</p>
        </div>
    );
};

// Define a functional component called EmployeeList
// This component takes in a prop called 'employees' which is an array of employee objects
const EmployeeList = ({ employees }) => {
    // Return JSX that represents a list of employees
    // Each employee in the array is passed to the EmployeeListItem component
    return (
        <div className="employee-list">
            {employees.map(employee => <EmployeeListItem key={employee.id} employee={employee} />)}
        </div>
    );
};

// Define a functional component called SearchBar
// This component doesn't take any props
const SearchBar = () => {
    // Return JSX that represents a search input field
    return (
        <input type="text" placeholder="Search..." />
    );
};

// Define a functional component called Header
// This component takes in a prop called 'title' which is a string representing the header text
const Header = ({ title }) => {
    // Return JSX that represents a header with the given title
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
};

// Define a functional component called HomePage
// This component doesn't take any props
const HomePage = () => {
    // Define an array of employees
    const employees = [/* array of employees */];

    // Return JSX that represents the home page
    // The home page consists of a header, a search bar, and a list of employees
    return (
        <div className="home-page">
            <Header title="Home Page" />
            <SearchBar />
            <EmployeeList employees={employees} />
        </div>
    );
};

// Define a functional component called EmployeePage
// This component doesn't take any props
const EmployeePage = () => {
    // Define an object representing an employee
    const employee = {/* employee details */};

    // Return JSX that represents the employee page
    // The employee page consists of a header, a back button, an employee's portrait, name, job title, and contact options
    return (
        <div className="employee-page">
            <Header title="Employee Page" />
            <button>Back</button>
            <img src={employee.portrait} alt={employee.name} />
            <h1>{employee.name}</h1>
            <p>{employee.jobTitle}</p>
            <ul>
                <li><button>Call Office</button></li>
                <li><button>Call Mobile</button></li>
                <li><button>SMS</button></li>
                <li><button>Email</button></li>
            </ul>
        </div>
    );
};

// Define a functional component called App
// This component doesn't take any props
const App = () => {
    // Return JSX that represents the entire application
    // The application consists of a home page and an employee page
    return (
        <div className="app">
            <HomePage />
            <EmployeePage />
        </div>
    );
};

// Export the App component as the default export
export default App;