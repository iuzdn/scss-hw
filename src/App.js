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
      <p>Here is some text</p>
    </div>
  );
}

export default App;
