import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Coffee, Leaf, MapPin, Users } from 'lucide-react';
import { useState } from 'react';

const locations = [
  {
    name: 'General Santos City',
    description:
      "Join thriving community projects in GenSan! Partnered with local youth and businesses, OMMU's activities here aim to empower and connect the community.",
    icon: <MapPin className="h-6 w-6" />,
    quests: [
      'Youth Empowerment Workshop',
      'Local Business Networking Event',
      'Community Clean-up Drive',
    ],
  },
  {
    name: 'Koronadal',
    description:
      "Explore Koronadal's grassroots initiatives and unique quests focusing on sustainable farming and environmental care.",
    icon: <Leaf className="h-6 w-6" />,
    quests: [
      'Sustainable Farming Workshop',
      'Environmental Conservation Project',
      'Local Artisan Fair',
    ],
  },
  {
    name: 'Polomolok',
    description:
      "Discover Polomolok's vibrant community and participate in exciting quests that celebrate local culture and traditions.",
    icon: <Users className="h-6 w-6" />,
    quests: [
      'Cultural Heritage Preservation',
      'Community Storytelling Event',
      'Local Food Festival',
    ],
  },
  {
    name: 'Kidapawan',
    description:
      "Engage with Kidapawan's dynamic community through educational initiatives and social development projects.",
    icon: <BookOpen className="h-6 w-6" />,
    quests: [
      'Literacy Program',
      'Youth Leadership Summit',
      'Community Health Fair',
    ],
  },
];

const partnerships = [
  {
    name: 'Sip Coffee Collective',
    location: 'General Santos City',
    description:
      'In collaboration with Sip Coffee Collective, OMMU hosts monthly discussions and creative writing events for local youth.',
    icon: <Coffee className="h-6 w-6" />,
  },
  {
    name: 'Mindanao Civic Empowerment Network',
    location: 'Koronadal',
    description:
      "With MINDCEN's partnership, OMMU offers community training and quests focused on youth empowerment and leadership.",
    icon: <Users className="h-6 w-6" />,
  },
];

export default function Explore() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-3xl font-bold">Discover OMMU in Region 12</h2>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="mr-2" />
            Explore Locations
          </CardTitle>
          <CardDescription>
            Discover where OMMU is active and join community-driven quests
            across Region 12!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={locations[0].name} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              {locations.map((location) => (
                <TabsTrigger
                  key={location.name}
                  value={location.name}
                  onClick={() => setActiveLocation(location)}
                >
                  {location.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={activeLocation.name} className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {activeLocation.icon}
                    <span className="ml-2">{activeLocation.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{activeLocation.description}</p>
                  <h4 className="mb-2 font-semibold">Active Quests:</h4>
                  <ul className="list-disc pl-5">
                    {activeLocation.quests.map((quest, index) => (
                      <li key={index}>{quest}</li>
                    ))}
                  </ul>
                  <Button className="mt-4">
                    Explore {activeLocation.name}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2" />
            Community Partnerships
          </CardTitle>
          <CardDescription>
            Connect with local partners and make a difference in your community!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {partnerships.map((partner) => (
              <Card key={partner.name}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {partner.icon}
                    <span className="ml-2">{partner.name}</span>
                  </CardTitle>
                  <CardDescription>{partner.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{partner.description}</p>
                  <Button className="mt-4">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="mr-2" />
            Interactive Discovery Map
          </CardTitle>
          <CardDescription>
            See how OMMU is helping communities grow in General Santos,
            Koronadal, Polomolok, and beyond!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-100">
            <p className="text-gray-500">
              Interactive map of Region 12 with OMMU activities
            </p>
          </div>
          <div className="mt-4 text-center">
            <Button>Explore All Regions</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
