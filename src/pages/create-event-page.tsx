import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Coffee, Droplet, Leaf, Wheat } from 'lucide-react';
import { useState } from 'react';

export default function CreateEventPage() {
  const [eventType, setEventType] = useState('activity');

  return (
    <div className="flex w-full justify-center">
      <Card className="w-[40%]">
        <CardHeader>
          <CardTitle>Create New Event</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <Label htmlFor="event-type">Event Type</Label>
              <Select onValueChange={(value) => setEventType(value)}>
                <SelectTrigger id="event-type">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="activity">Activity</SelectItem>
                  <SelectItem value="quest">Quest</SelectItem>
                  <SelectItem value="task">Task</SelectItem>
                  <SelectItem value="patronage">Patronage</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="event-name">Event Name</Label>
              <Input id="event-name" placeholder="Enter event name" />
            </div>
            <div>
              <Label htmlFor="event-description">Description</Label>
              <Textarea
                id="event-description"
                placeholder="Describe the event"
              />
            </div>
            {eventType === 'activity' && (
              <div>
                <Label htmlFor="event-date">Date</Label>
                <Input id="event-date" type="date" />
              </div>
            )}
            {eventType === 'quest' && (
              <div className="space-y-4">
                <div>
                  <Label>Reward Points</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="sugar-points"
                        className="flex items-center gap-2"
                      >
                        <Coffee className="h-4 w-4" /> Sugar
                      </Label>
                      <Input
                        id="sugar-points"
                        type="number"
                        placeholder="Enter sugar points"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="rice-points"
                        className="flex items-center gap-2"
                      >
                        <Wheat className="h-4 w-4" /> Rice
                      </Label>
                      <Input
                        id="rice-points"
                        type="number"
                        placeholder="Enter rice points"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="teardrop-points"
                        className="flex items-center gap-2"
                      >
                        <Droplet className="h-4 w-4" /> Teardrop
                      </Label>
                      <Input
                        id="teardrop-points"
                        type="number"
                        placeholder="Enter teardrop points"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="leaf-points"
                        className="flex items-center gap-2"
                      >
                        <Leaf className="h-4 w-4" /> Leaf
                      </Label>
                      <Input
                        id="leaf-points"
                        type="number"
                        placeholder="Enter leaf points"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Label htmlFor="quest-duration">Duration (days)</Label>
                  <Input
                    id="quest-duration"
                    type="number"
                    placeholder="Enter duration in days"
                  />
                </div>
              </div>
            )}
            {eventType === 'task' && (
              <div>
                <Label htmlFor="task-xp">XP Reward</Label>
                <Input
                  id="task-xp"
                  type="number"
                  placeholder="Enter XP reward"
                />
              </div>
            )}
            {eventType === 'patronage' && (
              <div>
                <Label htmlFor="patronage-reward">Monetary Reward ($)</Label>
                <Input
                  id="patronage-reward"
                  type="number"
                  placeholder="Enter monetary reward"
                />
              </div>
            )}
            <Button type="submit" className="w-full">
              Create Event
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
