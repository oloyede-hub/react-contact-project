import './App.css';
import { BrowserRouter as Router, Switch , Route,useHistory} from "react-router-dom";
import routes from "./routes";
import 'semantic-ui-css/semantic.min.css'
import { GlobalProvider } from "./context/Provider"
import isAuthenticated from "./utils/isAuthenticated";


const RenderRoute = (route) => {
  const history = useHistory()
  document.title = route.title || "trulyContact"
  if(route.needsAuth && !isAuthenticated()) {
    history.push("/auth/login");
  }
  return(
     <Route 
      render={(props) => <route.component {...props}  />}
      path={route.path} 
      exact 
      ></Route>
  )
}

function App() {
  return (
    <GlobalProvider>
    <Router>
       <Switch>
         {/* it rendered before component rendered so it will not work effectively */}
         {routes.map((route, index) =>(<RenderRoute {...route} key={index} />))}
       </Switch>
    </Router>
    </GlobalProvider>
  );
}

export default App;
