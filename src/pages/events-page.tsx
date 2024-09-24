import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon, SearchIcon, UserIcon } from 'lucide-react';

export default function EventsPage() {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search fucking events...."
            className="w-64 bg-white py-2 pl-10 pr-4"
          />
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
        </div>
        <Button>Filter Events</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Tech Meetup 2024',
            date: 'March 15, 2024',
            location: 'San Francisco, CA', 
            status: 'Upcoming',
            attendees: '50 / 100',
          },
          {
            title: 'AI Workshop',
            date: 'March 10-12, 2024',
            location: 'Online',
            status: 'In Progress',
            attendees: '75 / 150',
          },
          {
            title: 'Startup Pitch Night',
            date: 'March 20, 2024',
            location: 'New York, NY',
            status: 'Few Spots Left',
            attendees: '90 / 100',
          },
          {
            title: 'Web Dev Conference',
            date: 'April 5-7, 2024',
            location: 'Chicago, IL',
            status: 'Registration Open',
            attendees: '200 / 500',
          },
          {
            title: 'Data Science Symposium',
            date: 'April 15, 2024',
            location: 'Boston, MA',
            status: 'Upcoming',
            attendees: '100 / 300',
          },
          {
            title: 'UX Design Workshop',
            date: 'April 22, 2024',
            location: 'Seattle, WA',
            status: 'Registration Open',
            attendees: '30 / 50',
          },
        ].map((event, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <Badge
                className={`${
                  event.status === 'Upcoming'
                    ? 'bg-green-500'
                    : event.status === 'In Progress'
                      ? 'bg-blue-500'
                      : event.status === 'Few Spots Left'
                        ? 'bg-yellow-500'
                        : 'bg-purple-500'
                }`}
              >
                {event.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex items-center space-x-2 text-sm text-gray-500">
                <CalendarIcon className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="mb-4 flex items-center space-x-2 text-sm text-gray-500">
                <MapPinIcon className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <UserIcon className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">{event.attendees}</span>
              </div>
              <Button>RSVP</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline">Load More Events</Button>
      </div>
    </>
  );
}
