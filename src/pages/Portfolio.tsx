import Arc from '@/assets/acg2.jpg';
import Arcc from '@/assets/ach.jpg';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Coffee, Download, Droplet, Leaf, Wheat } from 'lucide-react';
export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Portfolio</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" /> Download Portfolio
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Name:</p>
              <p>Goj Agayan</p>
            </div>
            <div>
              <p className="font-semibold">CIV Level:</p>
              <p>CIV 3</p>
            </div>
            <div>
              <p className="font-semibold">Total XP:</p>
              <p>1250 XP</p>
            </div>
            <div>
              <p className="font-semibold">Joined:</p>
              <p>January 15, 2004</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Credit Scores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="mb-1 flex justify-between">
                <span className="flex items-center text-sm font-medium">
                  <Coffee className="mr-2 h-4 w-4" /> Sugar (Interaction)
                </span>
                <span className="text-sm font-medium">750 / 1000</span>
              </div>
              <Progress value={75} />
            </div>
            <div>
              <div className="mb-1 flex justify-between">
                <span className="flex items-center text-sm font-medium">
                  <Wheat className="mr-2 h-4 w-4" /> Rice (Environmental)
                </span>
                <span className="text-sm font-medium">600 / 1000</span>
              </div>
              <Progress value={60} />
            </div>
            <div>
              <div className="mb-1 flex justify-between">
                <span className="flex items-center text-sm font-medium">
                  <Droplet className="mr-2 h-4 w-4" /> Teardrop (Health &
                  Well-being)
                </span>
                <span className="text-sm font-medium">800 / 1000</span>
              </div>
              <Progress value={80} />
            </div>
            <div>
              <div className="mb-1 flex justify-between">
                <span className="flex items-center text-sm font-medium">
                  <Leaf className="mr-2 h-4 w-4" /> Leaf (Collaborative)
                </span>
                <span className="text-sm font-medium">700 / 1000</span>
              </div>
              <Progress value={70} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="past-activities">
        <TabsList>
          <TabsTrigger value="past-activities">Past Activities</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>
        <TabsContent value="past-activities">
          <Card>
            <CardHeader>
              <CardTitle>Past Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Community Garden Project</p>
                    <p className="text-sm text-gray-500">
                      Completed on June 1, 2024
                    </p>
                  </div>
                  <Badge>Quest</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Local History Documentation</p>
                    <p className="text-sm text-gray-500">
                      Completed on May 15, 2024
                    </p>
                  </div>
                  <Badge>Task</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Neighborhood Cleanup</p>
                    <p className="text-sm text-gray-500">
                      Attended on April 22, 2024
                    </p>
                  </div>
                  <Badge>Activity</Badge>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>Achievements and Certificates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-4">
                    <div className="mb-2 flex aspect-video items-center justify-center rounded-lg bg-gray-200">
                      <img
                        src={Arc}
                        alt="log"
                        className="h-[20rem] w-full rounded-2xl object-cover"
                      />
                    </div>
                    <p className="font-semibold">
                      Regional Startup Competition Winner
                    </p>
                    <p className="text-sm text-gray-500">
                      Awarded on July 1, 2024
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="mb-2 flex aspect-video items-center justify-center rounded-lg bg-gray-200">
                      <img
                        src={Arcc}
                        alt="log"
                        className="h-[20rem] w-full rounded-2xl object-cover"
                      />
                    </div>
                    <p className="font-semibold">Basta Champ</p>
                    <p className="text-sm text-gray-500">
                      Earned on May 5, 2024
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>AI-Generated Recommendation</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Based on your activities and achievements, we recommend focusing on
            environmental projects to boost your Rice (Environmental) score.
            Consider participating in more eco-friendly initiatives or
            organizing a local sustainability workshop.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
