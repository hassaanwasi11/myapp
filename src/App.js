
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom"
import Landing from './Components/Landing/Landing';
import { ParallaxProvider } from 'react-scroll-parallax';
import React from 'react';



function App() {
  const [scrollEl, setScrollElement] = React.useState(null);
  const ref = React.useRef();
  React.useEffect(() => {
    setScrollElement(ref.current);
  });
  return (
    <>


      <ParallaxProvider>
        <Switch>
          <Route exact path="/" component={Landing} />



        </Switch>
      </ParallaxProvider>

    </>
  );
}

export default App;
