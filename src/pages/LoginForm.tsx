import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { HandWaving } from 'lucide-react';
import Logo from '@/assets/logo.png';

export default function LoginForm() {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');

  return (
    <div className="flex min-h-[90vh] flex-col bg-gray-100">
      <header className="flex justify-between border-2 p-4">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Ommu logo" className="w-28" />

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

      <div className="flex h-full w-full items-center justify-center">
        {' '}
        <Card className="mt-[4rem] w-full max-w-md">
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-2">
              {/* <HandWaving className="h-6 w-6 text-pink-500" /> */}
              <CardTitle className="text-2xl font-bold">
                Welcome to ommu
              </CardTitle>
            </div>
            <p className="text-sm text-muted-foreground">
              Please sign in or sign up below.
            </p>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="login">
                    {loginMethod === 'email' ? 'Email' : 'Phone Number'}
                  </Label>
                  <Input
                    id="login"
                    type={loginMethod === 'email' ? 'email' : 'tel'}
                    placeholder={
                      loginMethod === 'email'
                        ? 'Enter your email'
                        : 'Enter your phone number'
                    }
                  />
                </div>
                <Button
                  type="button"
                  variant="link"
                  className="justify-end"
                  onClick={() =>
                    setLoginMethod(loginMethod === 'email' ? 'phone' : 'email')
                  }
                >
                  Use {loginMethod === 'email' ? 'Phone Number' : 'Email'}
                </Button>
                <Button type="submit" className="w-full">
                  <Link to="/authenticated/events">
                    Continue with {loginMethod === 'email' ? 'Email' : 'Phone'}
                  </Link>
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <Button variant="outline" type="button" className="w-full">
                  <svg
                    className="mr-2 h-4 w-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>

                  <Link
                    to="/authenticated/events"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Sign in with Google
                  </Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
