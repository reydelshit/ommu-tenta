import Logo from '@/assets/logo.png';
import Profile from '@/assets/prof.jpg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Calendar,
  DollarSign,
  Eye,
  LogOut,
  Settings,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CreateEventPage from './create-event-page';
const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between p-4 sm:px-6 lg:px-[7rem]">
        <div className="flex items-center space-x-4">
          <Link
            to="/authenticated"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            <img src={Logo} alt="Ommu logo" className="w-20 sm:w-28" />
          </Link>

          <span className="hidden text-sm text-gray-500 sm:block">
            3:46 AM GMT+8
          </span>

          <Link
            to="/authenticated/explore"
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Explore
          </Link>
        </div>

        <div className="flex gap-2">
          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              to="/authenticated"
              className="text-sm font-semibold text-gray-600 hover:text-gray-800"
            >
              Dashboard
            </Link>
            <Link
              to="/authenticated/events"
              className="text-sm font-semibold text-gray-600 hover:text-gray-800"
            >
              View Events
            </Link>

            <Dialog>
              <DialogTrigger className="font-semibold">
                Create Event
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="hidden">Create Event</DialogTitle>
                  <DialogDescription className="hidden">
                    Create a new event and share it with the community
                  </DialogDescription>
                </DialogHeader>
                <CreateEventPage />
              </DialogContent>
            </Dialog>

            <Link
              to="/authenticated/wallet"
              className="mx-[4rem] block rounded-md bg-green-500 p-2 text-sm font-semibold text-white"
            >
              <div className="flex w-full items-center justify-between gap-2">
                <h1>₱1000</h1>

                {/* <Eye className="mr-2 h-4 w-4" /> */}
              </div>
            </Link>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={Profile} alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[10rem]" align="end">
              <DropdownMenuItem asChild className="sm:hidden">
                <Link
                  to="/authenticated/events"
                  className="text-sm font-semibold text-gray-600 hover:text-gray-800"
                >
                  Explore
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="sm:hidden">
                <Link
                  to="/authenticated"
                  className="text-sm font-semibold text-gray-600 hover:text-gray-800"
                >
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="sm:hidden">
                <Link
                  to="/authenticated/events"
                  className="text-sm font-semibold text-gray-600 hover:text-gray-800"
                >
                  View Events
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="sm:hidden">
                <Link
                  to="/authenticated/create"
                  className="text-sm font-semibold text-gray-600 hover:text-gray-800"
                >
                  Create Event
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="sm:hidden">
                <Link
                  to="/authenticated/wallet"
                  className="text-sm font-semibold text-gray-600 hover:text-gray-800"
                >
                  <Button>Wallet</Button>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="block md:hidden" />

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
        </div>
      </header>
    </>
  );
};

export default Header;
