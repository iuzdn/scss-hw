import '@fontsource/roboto';
import './styles/index.scss';

import {
  Heading,
  NavBar,
  PhoneMock,
  Tab,
  Cards,
  AugReality,
  FunWayToRide,
  FloatingScreens,
  Footer,
} from './components';

function App() {
  return (
    <div className="container-xxl">
      <NavBar />
      <Heading />
      <PhoneMock />
      <Tab />
      <Cards />
      <AugReality />
      <FunWayToRide />
      <FloatingScreens />
      <Footer />
    </div>
  );
}

export default App;
