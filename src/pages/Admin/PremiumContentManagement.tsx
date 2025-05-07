
import React, { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Lock, Search, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

const PremiumContentManagement = () => {
  const [activeTab, setActiveTab] = useState("rooms");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Demo content data
  const roomsData = [
    { id: "room1", title: "Advanced Cell Biology", type: "Room", status: "premium", subscribers: 287, rating: 4.8 },
    { id: "room2", title: "Chemical Bonding Deep Dive", type: "Room", status: "free", subscribers: 1240, rating: 4.9 },
    { id: "room3", title: "Quantum Physics Fundamentals", type: "Room", status: "premium", subscribers: 456, rating: 4.7 },
    { id: "room4", title: "Organic Chemistry Reactions", type: "Room", status: "premium", subscribers: 320, rating: 4.6 },
    { id: "room5", title: "Mathematical Proofs", type: "Room", status: "free", subscribers: 890, rating: 4.5 },
  ];
  
  const challengesData = [
    { id: "chall1", title: "GCSE Biology Mock Exam", type: "Challenge", status: "premium", subscribers: 412, rating: 4.9 },
    { id: "chall2", title: "A-Level Chemistry Challenge", type: "Challenge", status: "premium", subscribers: 256, rating: 4.8 },
    { id: "chall3", title: "Physics Problem Solving Sprint", type: "Challenge", status: "free", subscribers: 867, rating: 4.7 },
    { id: "chall4", title: "Mathematics Competition Prep", type: "Challenge", status: "premium", subscribers: 340, rating: 4.9 },
  ];
  
  const examPrepData = [
    { id: "exam1", title: "GCSE Biology Full Practice Exam", type: "Exam Prep", status: "premium", subscribers: 523, rating: 4.9 },
    { id: "exam2", title: "A-Level Chemistry Paper 1 Prep", type: "Exam Prep", status: "premium", subscribers: 378, rating: 4.8 },
    { id: "exam3", title: "GCSE Physics Questions Bank", type: "Exam Prep", status: "free", subscribers: 1023, rating: 4.7 },
    { id: "exam4", title: "A-Level Mathematics Past Papers", type: "Exam Prep", status: "premium", subscribers: 490, rating: 4.9 },
  ];

  // Filter data based on search term
  const filterData = (data) => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Calculate analytics
  const totalPremiumContent = roomsData.filter(r => r.status === "premium").length + 
                             challengesData.filter(c => c.status === "premium").length + 
                             examPrepData.filter(e => e.status === "premium").length;
  
  const totalFreeContent = roomsData.filter(r => r.status === "free").length + 
                          challengesData.filter(c => c.status === "free").length + 
                          examPrepData.filter(e => e.status === "free").length;
  
  const totalSubscribers = [...roomsData, ...challengesData, ...examPrepData].reduce((sum, item) => sum + item.subscribers, 0);
  
  // Data for the current tab
  const currentTabData = activeTab === "rooms" ? roomsData : 
                         activeTab === "challenges" ? challengesData : examPrepData;
  
  const filteredData = filterData(currentTabData);

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">Premium Content Management</h1>
            <p className="text-muted-foreground">
              Manage premium content access and settings across the platform
            </p>
          </div>
          <Button className="mt-4 md:mt-0">
            <Lock className="mr-2 h-4 w-4" />
            Add New Premium Content
          </Button>
        </div>

        {/* Analytics Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Premium Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalPremiumContent}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {Math.round((totalPremiumContent / (totalPremiumContent + totalFreeContent)) * 100)}% of all content
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Free Content Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalFreeContent}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {Math.round((totalFreeContent / (totalPremiumContent + totalFreeContent)) * 100)}% of all content
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Subscribers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalSubscribers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Across all premium content
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Content Management Section */}
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-4 border-b">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
                <TabsList>
                  <TabsTrigger value="rooms">Rooms</TabsTrigger>
                  <TabsTrigger value="challenges">Challenges</TabsTrigger>
                  <TabsTrigger value="exam-prep">Exam Prep</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search content..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Subscribers</TableHead>
                  <TableHead className="text-right">Rating</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>
                      <Badge variant={item.status === "premium" ? "secondary" : "outline"}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{item.subscribers.toLocaleString()}</TableCell>
                    <TableCell className="text-right flex items-center justify-end">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                      {item.rating}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Switch
                          checked={item.status === "premium"}
                          onCheckedChange={() => {
                            // In a real app, this would update the item status
                          }}
                        />
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default PremiumContentManagement;
