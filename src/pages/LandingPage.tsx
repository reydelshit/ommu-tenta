import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="flex min-h-[90vh] flex-col bg-gray-100">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg" alt="Ommu logo" className="h-8 w-8" />
          <span className="text-sm text-gray-500">3:46 AM GMT+8</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Explore
          </a>
          <Link
            to="/login"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Sign in
          </Link>
        </div>
      </header>

      <main className="flex flex-grow items-center justify-center p-8">
        <div className="flex w-full max-w-6xl space-x-8">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl text-gray-500">ommu</h2>
            <h1 className="text-5xl font-bold">
              Engage
              <br />
              <span className="text-blue-500">to Earn</span>
            </h1>
            <p className="max-w-md text-gray-600">
              Explore your community, invite friends and join events. Find a
              memorable event today.
            </p>
            <Button className="bg-gray-900 text-white hover:bg-gray-700">
              CREATE YOUR FIRST EVENT
            </Button>
          </div>
          <div className="flex-1">
            <div className="flex aspect-video items-center justify-center rounded-lg bg-red-200">
              <p className="font-semibold text-red-800">PUT IMAGE HERE</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <nav className="flex space-x-4">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              What's new
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Explore
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Rewards
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Help
            </a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Google
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Instagram
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Twitter
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Facebook
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Tiktok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
