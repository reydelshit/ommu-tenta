import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

import { CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Coffee,
  Droplet,
  Leaf,
  TrendingUpIcon,
  Wheat,
  Zap,
} from 'lucide-react';

import Logo from '@/assets/prof.jpg';

import Jed2 from '@/assets/jed.jpg';
import Jed4 from '@/assets/jed4.jpg';
import Jeds from '@/assets/jeds.jpg';

export default function MainDashboard() {
  const [userPoints] = useState(1250);
  const [userLevel] = useState(5);

  const challenges = [
    { id: 1, title: 'Post 5 comments', points: 50, progress: 60 },
    { id: 2, title: 'Create a new topic', points: 100, progress: 0 },
    { id: 3, title: 'Reach 1000 likes', points: 200, progress: 80 },
  ];

  const leaderboard = [
    { id: 1, name: 'Kathuro', points: 5000, image: Jed2 },
    { id: 2, name: 'Mark M.', points: 4500, image: Jed4 },
    { id: 3, name: 'Agayan', points: 4000, image: Jeds },
  ];

  // const rewards = [
  //   { id: 1, title: 'Custom Avatar', points: 2000, earned: true },
  //   { id: 2, title: '1 Month Premium', points: 5000, earned: false },
  //   { id: 3, title: 'Exclusive Badge', points: 3000, earned: false },
  // ];

  // const recentActivities = [
  //   { id: 1, user: 'Pretz', action: 'posted a new topic', image: Pretz },
  //   { id: 2, user: 'Kathuro', action: 'completed a challenge', image: Kathuro },
  //   { id: 3, user: 'Mark', action: 'earned a reward', image: Mark },
  // ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold"> Dashboard</h1>
          {/* <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            New Post
          </Button> */}
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={Logo} alt="User avatar" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <h2 className="text-2xl font-semibold">User Name</h2>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">CIV {userLevel}</Badge>
                  <span>{userPoints} points</span>
                </div>
                <Progress value={75} className="w-full" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {challenges.map((challenge) => (
                  <li key={challenge.id} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{challenge.title}</span>
                      <span>{challenge.points} pts</span>
                    </div>
                    <Progress value={challenge.progress} className="w-full" />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {leaderboard.map((user, index) => (
                  <li key={user.id} className="flex items-center space-x-4">
                    <span className="text-2xl font-bold">{index + 1}</span>
                    <Avatar>
                      <AvatarImage
                        className="object-cover"
                        src={user.image}
                        alt={user.name}
                      />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="flex-1">{user.name}</span>
                    <span>{user.points} pts</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {rewards.map((reward) => (
                  <li key={reward.id} className="flex items-center space-x-4">
                    <Gift
                      className={
                        reward.earned ? 'text-green-500' : 'text-gray-400'
                      }
                    />
                    <span className="flex-1">{reward.title}</span>
                    <Badge variant={reward.earned ? 'default' : 'secondary'}>
                      {reward.earned ? 'Earned' : `${reward.points} pts`}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {recentActivities.map((activity) => (
                  <li key={activity.id} className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage
                        className="object-cover"
                        src={activity.image}
                        alt={activity.user}
                      />
                      <AvatarFallback>{activity.user[0]}</AvatarFallback>
                    </Avatar>
                    <span>
                      <strong>{activity.user}</strong> {activity.action}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div> */}

        {/* Activities, Quests, Tasks, and Patronage */}
        <Tabs defaultValue="activities">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="quests">Quests</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="patronage">Patronage</TabsTrigger>
          </TabsList>
          <TabsContent value="activities" className="mt-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Family Picnic',
                  description: 'Organize a picnic in the local park',
                  date: 'June 15, 2024',
                },
                {
                  title: 'Book Club Meeting',
                  description: 'Monthly book discussion group',
                  date: 'June 20, 2024',
                },
                {
                  title: 'Neighborhood Cleanup',
                  description: 'Join us in cleaning up our community',
                  date: 'June 22, 2024',
                },
              ].map((activity, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      {activity.description}
                    </p>
                    <p className="mt-2 text-sm font-medium">{activity.date}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Join Activity</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="quests" className="mt-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Community Garden',
                  description: 'Help establish a community garden',
                  reward: [
                    { type: 'sugar', amount: 100 },
                    { type: 'rice', amount: 200 },
                  ],
                  progress: 60,
                },
                {
                  title: 'Fitness Challenge',
                  description: 'Complete a 30-day fitness program',
                  reward: [
                    { type: 'teardrop', amount: 150 },
                    { type: 'leaf', amount: 100 },
                  ],
                  progress: 33,
                },
                {
                  title: 'Local History Project',
                  description: 'Document and share local historical stories',
                  reward: [
                    { type: 'sugar', amount: 200 },
                    { type: 'rice', amount: 100 },
                  ],
                  progress: 0,
                },
              ].map((quest, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{quest.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-sm text-gray-600">
                      {quest.description}
                    </p>
                    <div className="mb-2 flex space-x-2">
                      {quest.reward.map((r, i) => (
                        <TooltipProvider key={i}>
                          <Tooltip>
                            <TooltipTrigger>
                              <Badge
                                variant="secondary"
                                className="flex items-center space-x-1"
                              >
                                {r.type === 'sugar' && (
                                  <Coffee className="h-4 w-4" />
                                )}
                                {r.type === 'rice' && (
                                  <Wheat className="h-4 w-4" />
                                )}
                                {r.type === 'teardrop' && (
                                  <Droplet className="h-4 w-4" />
                                )}
                                {r.type === 'leaf' && (
                                  <Leaf className="h-4 w-4" />
                                )}
                                <span>{r.amount}</span>
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                {r.type.charAt(0).toUpperCase() +
                                  r.type.slice(1)}{' '}
                                points
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                    <Progress value={quest.progress} className="mt-2" />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Continue Quest</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tasks" className="mt-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Daily Check-in',
                  description: 'Log in every day for bonus XP',
                  xp: 50,
                },
                {
                  title: 'Forum Participation',
                  description: 'Post or reply in the community forum',
                  xp: 100,
                },
                {
                  title: 'Complete Your Profile',
                  description: 'Fill out all sections of your user profile',
                  xp: 200,
                },
              ].map((task, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{task.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <Badge>{task.xp} XP</Badge>
                    <Button size="sm">Complete</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="patronage" className="mt-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Web Development',
                  description: 'Create a website for a local non-profit',
                  reward: '$500',
                },
                {
                  title: 'Content Writing',
                  description: 'Write blog posts for community initiatives',
                  reward: '$200',
                },
                {
                  title: 'Event Planning',
                  description:
                    'Organize a fundraising event for the community center',
                  reward: '$350',
                },
              ].map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-sm text-gray-600">
                      {job.description}
                    </p>
                    <p className="font-semibold">Reward: {job.reward}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Apply</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUpIcon className="h-5 w-5" />
                <span>Community Stats</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>Active Users: 1,250</p>
                <p>Total Quests: 120</p>
                <p>Ongoing Activities: 45</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {leaderboard.map((user, index) => (
                  <li key={user.id} className="flex items-center space-x-4">
                    <span className="text-2xl font-bold">{index + 1}</span>
                    <Avatar>
                      <AvatarImage
                        className="object-cover"
                        src={user.image}
                        alt={user.name}
                      />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="flex-1">{user.name}</span>
                    <span>{user.points} pts</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Recent Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <p className="font-semibold">Quest Master</p>
                  <p className="text-sm text-gray-500">
                    Completed 10 quests in a week
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Social Butterfly</p>
                  <p className="text-sm text-gray-500">
                    Attended 5 community activities
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
