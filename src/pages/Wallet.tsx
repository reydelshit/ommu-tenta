import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Wallet, ArrowUpRight, ArrowDownLeft, RefreshCw } from 'lucide-react';

export default function WalletPage() {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: 'Earned',
      amount: 50,
      description: 'Completed City Explorer Quest',
      date: '2024-06-15',
    },
    {
      id: 2,
      type: 'Traded',
      amount: -100,
      description: 'Converted to USD',
      date: '2024-06-14',
    },
    {
      id: 3,
      type: 'Earned',
      amount: 75,
      description: 'Organized Community Event',
      date: '2024-06-13',
    },
  ]);

  const [tradeAmount, setTradeAmount] = useState('');
  const [tradeType, setTradeType] = useState('ommu-to-usd');

  const handleTrade = () => {
    const amount = parseFloat(tradeAmount);
    if (isNaN(amount) || amount <= 0) return;

    let newBalance;
    let newTransaction;

    if (tradeType === 'ommu-to-usd') {
      newBalance = balance - amount;
      newTransaction = {
        id: transactions.length + 1,
        type: 'Traded',
        amount: -amount,
        description: 'Converted to USD',
        date: new Date().toISOString().split('T')[0],
      };
    } else {
      newBalance = balance + amount;
      newTransaction = {
        id: transactions.length + 1,
        type: 'Traded',
        amount: amount,
        description: 'Converted from USD',
        date: new Date().toISOString().split('T')[0],
      };
    }

    setBalance(newBalance);
    setTransactions([newTransaction, ...transactions]);
    setTradeAmount('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Wallet</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{balance.toFixed(2)} OMMU</div>
            <p className="mt-2 text-sm text-muted-foreground">
              ≈ ₱{(balance * 0.1).toFixed(2)} PHP
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Button variant="outline" className="flex-1">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Send
              </Button>
              <Button variant="outline" className="flex-1">
                <ArrowDownLeft className="mr-2 h-4 w-4" />
                Receive
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex-1">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Trade
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Trade OMMU</DialogTitle>
                    <DialogDescription>
                      Convert your OMMU tokens to USD or vice versa.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="trade-amount" className="text-right">
                        Amount
                      </Label>
                      <Input
                        id="trade-amount"
                        type="number"
                        value={tradeAmount}
                        onChange={(e) => setTradeAmount(e.target.value)}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="trade-type" className="text-right">
                        Type
                      </Label>
                      <Select value={tradeType} onValueChange={setTradeType}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select trade type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ommu-to-usd">
                            OMMU to USD
                          </SelectItem>
                          <SelectItem value="usd-to-ommu">
                            USD to OMMU
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button onClick={handleTrade}>Execute Trade</Button>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Earnings This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-600">+125 OMMU</div>
            <p className="mt-2 text-sm text-muted-foreground">
              From 3 activities
            </p>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="transactions" className="mt-6">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell
                        className={
                          transaction.amount > 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }
                      >
                        {transaction.amount > 0 ? '+' : ''}
                        {transaction.amount} OMMU
                      </TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="earnings">
          <Card>
            <CardHeader>
              <CardTitle>Earning Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Complete Daily Quests</h3>
                  <p className="text-sm text-muted-foreground">
                    Earn up to 10 OMMU per day
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">Organize Community Events</h3>
                  <p className="text-sm text-muted-foreground">
                    Earn 50-100 OMMU per successful event
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold">
                    Contribute to Local Projects
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Earn 25-75 OMMU based on project impact
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
