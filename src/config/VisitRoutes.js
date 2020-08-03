import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// internal components
import VisitIndex from '../Components/Visit/VisitIndex/VisitIndex';
import Tickets from '../Components/Visit/Tickets/Tickets';

const VisitRoutes = () => {
    return (
        <Switch>
            <Route exact path="/visit" component={VisitIndex} />
            <Route path="/visit/tickets" component={Tickets} />
        </Switch>
    );
};

export default withRouter(VisitRoutes);