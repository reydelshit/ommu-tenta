import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between p-4 px-[7rem]">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg" alt="Ommu logo" className="h-8 w-8" />
          <span className="text-sm text-gray-500">3:46 AM GMT+8</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/authenticated/events"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Events
          </Link>
          <Link
            to="/authenticated/create"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Create
          </Link>

          <Link
            to="/authenticated/rewards"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Rewards
          </Link>

          <Link
            to="/login"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Logout
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
