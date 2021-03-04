import React, {useState} from 'react';
import './Welcome.css';
import Typography from '@material-ui/core/Typography';

function Welcome () {
    return (
        <div className="Welcome">
            <h1>Welcome To MyBudgetCabs</h1>
            <Typography variant="body2" color="textSecondary" component="p">
            We offer a car renting services based on Contract to Hire and Daily Hire. Our website provides best cab/car hire services with a driver at your doorstep pickup and drop of Transfer services from Tirupati. Vehicles are offered on the basis of day, kilometer, and hour.
            <br /><br /> We also have professional drivers with perfect knowledge about the various temples and other sightseeing places.
            </Typography>
        </div>
        
    )
}

export default Welcome;
