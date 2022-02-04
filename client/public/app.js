import createTeams from '/create.js';
import listTeams from  '/list.js';
import home from '/home.js';

import { Route, Switch } from 'react-router-dom';

return (        
    <>            
          <Switch>                
             <Route path='/create' component={createTeams}/>  
             <Route path='/list' component={listTeams}/>               
             <Route path='/home' component={Home}/>            
          </Switch>
    </>
);