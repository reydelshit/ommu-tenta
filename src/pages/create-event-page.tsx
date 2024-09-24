import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CreateEventPage() {
  return (
    <div className="flex w-full items-center justify-center">
      <Card className="w-[50%]">
        <CardHeader>
          <CardTitle>Create Event</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <Label htmlFor="event-name">Event Name</Label>
              <Input id="event-name" placeholder="Enter event name" />
            </div>
            <div>
              <Label htmlFor="event-description">Event Description</Label>
              <Textarea
                id="event-description"
                placeholder="Describe your event"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="event-date">Date</Label>
                <Input id="event-date" type="date" />
              </div>
              <div>
                <Label htmlFor="event-time">Time</Label>
                <Input id="event-time" type="time" />
              </div>
            </div>
            <div>
              <Label htmlFor="event-location">Location</Label>
              <Input
                id="event-location"
                placeholder="Enter event location or 'Online'"
              />
            </div>
            <div>
              <Label htmlFor="event-capacity">Capacity</Label>
              <Input
                id="event-capacity"
                type="number"
                placeholder="Enter maximum number of attendees"
              />
            </div>
            <div>
              <Label htmlFor="event-type">Event Type</Label>
              <Select>
                <SelectTrigger id="event-type">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conference">Conference</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="meetup">Meetup</SelectItem>
                  <SelectItem value="webinar">Webinar</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="event-image">Event Image</Label>
              <Input id="event-image" type="file" accept="image/*" />
            </div>
            <Button type="submit" className="w-full">
              Create Event
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
