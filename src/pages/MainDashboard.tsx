import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Gift, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import Logo from '@/assets/prof.jpg';

import Jed2 from '@/assets/jed.jpg';
import Jed4 from '@/assets/jed4.jpg';
import Jeds from '@/assets/jeds.jpg';

import Kathuro from '@/assets/kath.jpg';
import Mark from '@/assets/mark.jpg';
import Pretz from '@/assets/pretz.jpg';

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

  const rewards = [
    { id: 1, title: 'Custom Avatar', points: 2000, earned: true },
    { id: 2, title: '1 Month Premium', points: 5000, earned: false },
    { id: 3, title: 'Exclusive Badge', points: 3000, earned: false },
  ];

  const recentActivities = [
    { id: 1, user: 'Pretz', action: 'posted a new topic', image: Pretz },
    { id: 2, user: 'Kathuro', action: 'completed a challenge', image: Kathuro },
    { id: 3, user: 'Mark', action: 'earned a reward', image: Mark },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Community Dashboard</h1>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            New Post
          </Button>
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
                  <Badge variant="secondary">Level {userLevel}</Badge>
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
        </div>
      </div>
    </div>
  );
}
