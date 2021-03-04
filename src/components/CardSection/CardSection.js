import { Card } from '@material-ui/core';
import React from 'react';
import FlatCard from '../../components/FlatCard/FlatCard';
import '../CardSection/CardSection.css';
//import './Home.css';

function CardSection () {
    const content = [{
      title: 'Expert Drivers',
      desc: 'A team of highly Experienced drivers. Most are fluent in English & Telugu.',
      icon: ''
    },
    {
      title: 'Experience Skills​',
      desc: 'This is a short description elaborating the service you have mentioned above.',
      icon: ''
    },{
      title: 'Low Cost',
      desc: 'We provide service at resonable budget price.',
      icon: ''
    },{
      title: 'Travel Services​',
      desc: 'We provide complete guide to visit the places near around tirupati.',
      icon: ''
    },{
      title: 'Sutiable Vehicles',
      desc: 'We have a wide range of vehicles, suitable for many different traveling options',
      icon: ''
    },{
      title: 'Quality​ Customer Support',
      desc: 'Our team will be happy to help you before and onwards your journey.',
      icon: ''
    }];
    return (
          <div className='homepage'>
            {content && content.length > 0 && 
              content.map((item, index) => {
                return (
                  <div className="homepage_card" key={index}>
                    <FlatCard
                      title={item.title}
                      desc={item.desc}
                      icon={item.icon}
                    />
                  </div>
                )
              })
            }
          </div>
    )
}

export default CardSection;
