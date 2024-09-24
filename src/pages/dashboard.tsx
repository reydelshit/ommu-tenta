import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Gift, LightbulbIcon, MessageSquare, Trophy, Users } from "lucide-react"

export default function Dashboard() {
  const [userPoints, setUserPoints] = useState(1250)
  const [userLevel, setUserLevel] = useState(5)

  const challenges = [
    { id: 1, title: "Post 5 comments", points: 50, progress: 60 },
    { id: 2, title: "Create a new topic", points: 100, progress: 0 },
    { id: 3, title: "Reach 1000 likes", points: 200, progress: 80 },
  ]

  const leaderboard = [
    { id: 1, name: "Alice", points: 5000 },
    { id: 2, name: "Bob", points: 4500 },
    { id: 3, name: "Charlie", points: 4000 },
  ]

  const rewards = [
    { id: 1, title: "Custom Avatar", points: 2000, earned: true },
    { id: 2, title: "1 Month Premium", points: 5000, earned: false },
    { id: 3, title: "Exclusive Badge", points: 3000, earned: false },
  ]

  const recentActivities = [
    { id: 1, user: "David", action: "posted a new topic" },
    { id: 2, user: "Emma", action: "completed a challenge" },
    { id: 3, user: "Frank", action: "earned a reward" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Community Dashboard</h1>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div className="space-y-2 flex-1">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <Gift className={reward.earned ? "text-green-500" : "text-gray-400"} />
                    <span className="flex-1">{reward.title}</span>
                    <Badge variant={reward.earned ? "default" : "secondary"}>
                      {reward.earned ? "Earned" : `${reward.points} pts`}
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
  )
}