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
import MainDashboard from './pages/MainDashboard';
import PortfolioPage from './pages/Portfolio';
import SettingsPage from './pages/Settings';

const AppContent = () => {
  const path = useLocation().pathname;

  return (
    <div className="min-h-screen bg-gray-100">
      {path !== '/' && path !== '/login' && <Header />}

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/authenticated/" element={<MainDashboard />} />
          <Route path="/authenticated/events" element={<EventsPage />} />
          <Route path="/authenticated/create" element={<CreateEventPage />} />
          <Route path="/authenticated/rewards" element={<RewardsPage />} />
          <Route path="/authenticated/portfolio" element={<PortfolioPage />} />
          <Route path="/authenticated/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
      <footer className="flex h-[4rem] w-full items-center justify-center bg-transparent font-semibold">
        © 2024 OMMU ONE NIGHT STAND WITH AI. All rights reserved.
      </footer>
    </Router>
  );
};

export default App;
