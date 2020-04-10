import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
  <div>
  <h1>Info</h1>
  <p>The infor is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
       <div>
       {props.isAdmin && <p>THIS IS PRIVATE INFO</p>}
       <WrappedComponent {...props}/>
       </div>
    );

};
const requireAuth = (WrappedComponent) => {
    return (props) => (
       <div>
       {props.isAuthenticated ?  (
          <WrappedComponent {...props}/> ) : (
              <p>Please login to view</p>
          )
       }
       </div>
    );

};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);


//ReactDOM.render(<AdminInfo isAdmin={true}info='something'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='something'/>, document.getElementById('app'));