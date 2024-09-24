import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';
import CreateEventPage from './pages/create-event-page';
import EventsPage from './pages/events-page';
import Header from './pages/Header';
import LandingPage from './pages/LandingPage';
import LoginForm from './pages/LoginForm';
import RewardsPage from './pages/rewards-page';

const AppContent = () => {
  const path = useLocation().pathname;


  return (
    <div className="min-h-screen bg-gray-100">
      {path !== '/' && path !== '/login' && <Header />}

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/authenticated/events" element={<EventsPage />} />
          <Route path="/authenticated/create" element={<CreateEventPage />} />
          <Route path="/authenticated/rewards" element={<RewardsPage />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
