import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import '../Footer/Footer.css';

export default function Footer() {
    return (
        <div position="static" color="primary">
          <div maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                &copy; 2021 My Budget Cabs
              </Typography>
            </Toolbar>
          </div>
        </div>
    )
}
