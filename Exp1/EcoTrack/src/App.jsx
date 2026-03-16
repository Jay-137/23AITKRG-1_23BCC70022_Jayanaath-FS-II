import Header from './components/Header'
import Dashboard from './pages/dashboard'
import Log from './pages/logs'

function App() {
  return (
    <>
      <Header heading="Eco-Track"/>
      <Dashboard/>
      <Log/>
    </>
  );
}

export default App;
