import Logo from '@/assets/logo.png';
import Profile from '@/assets/prof.jpg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  BellDotIcon,
  Calendar,
  DollarSign,
  LogOut,
  Settings,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between p-4 px-[7rem]">
        <div className="flex items-center space-x-4">
          <Link
            to="/authenticated"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            <img src={Logo} alt="Ommu logo" className="w-28" />
          </Link>

          <span className="text-sm text-gray-500">3:46 AM GMT+8</span>
          <Link
            to="/authenticated/events"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Explore
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/authenticated"
            className="text-sm font-semibold text-gray-600 hover:text-gray-800"
          >
            Dashboard
          </Link>
          <Link
            to="/authenticated/create"
            className="text-sm font-semibold text-gray-600 hover:text-gray-800"
          >
            Create Event
          </Link>

          <Popover>
            <PopoverTrigger>
              {' '}
              <BellDotIcon className="h-6 w-6 cursor-pointer text-gray-600" />
            </PopoverTrigger>
            <PopoverContent>Empty notification</PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={Profile} alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[10rem]" align="end">
              <DropdownMenuItem asChild>
                <Link to="/authenticated/portfolio">
                  <User className="mr-2 h-4 w-4" />
                  <span>Portfolio</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/authenticated/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/authenticated/events">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Events</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/authenticated/rewards">
                  <DollarSign className="mr-2 h-4 w-4" />
                  <span>Rewards</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link className="flex w-full items-center" to="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/*               
          <DropdownMenu>
            <DropdownMenuTrigger>
              {' '}
              <img
                src={Profile}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-[6rem]">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {' '}
                <Link
                  to="/authenticated/events"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Events
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {' '}
                <Link
                  to="/authenticated/create"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Create
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {' '}
                <Link
                  to="/authenticated/rewards"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Rewards
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {' '}
                <Link
                  to="/login"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </header>
    </>
  );
};

export default Header;
