import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// internal components
import Index from '../Components/Index/Index';
import VisitContainer from '../containers/VisitContainer/VisitContainer';
import EducationContainer from '../containers/EducationContainer/EducationContainer';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/visit" component={VisitContainer} loc="/visit" />
            <Route path="/education" component={EducationContainer} />
        </Switch>
    );
};

export default withRouter(Routes);
