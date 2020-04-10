import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpenseDashboardPage from '../components/AddExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';




const AppRouter = () => (
    <BrowserRouter>
    <div>
      <Header />

      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpenseDashboardPage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)
;

export default AppRouter;