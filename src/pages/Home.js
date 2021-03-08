import { Card } from '@material-ui/core';
import React from 'react';
import FlatCard from '../components/FlatCard/FlatCard';
import './Home.css';
import CardSection from '../components/CardSection/CardSection';
import Welcome from '../components/Welcome/Welcome';
import ContactInfo from '../components/ContactInfo/ContactInfo';
function Home () {
    return (
        <div className="cardSection">
          <div>
            <Welcome/>
          </div>
          <div>
            <h2>Why Choose Us? </h2>
            <CardSection/>
            <ContactInfo/>
          </div>
        </div>
    )
}

export default Home;
