
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "@/components/AdminLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Lock,
  Search,
  Filter,
  Plus,
  Pencil,
  Trash,
  Eye,
  BookOpen,
  Home,
  Award
} from "lucide-react";
import { toast } from "sonner";

// Mock data
const mockPremiumRooms = [
  { id: 1, title: "Advanced Physics Concepts", type: "Room", accessLevel: "Premium", status: "Active", users: 145, createdAt: "2024-04-15" },
  { id: 2, title: "Organic Chemistry Deep Dive", type: "Room", accessLevel: "Premium", status: "Active", users: 89, createdAt: "2024-04-10" },
  { id: 3, title: "Calculus Mastery", type: "Room", accessLevel: "Free", status: "Active", users: 312, createdAt: "2024-03-25" },
  { id: 4, title: "Biology Exam Prep", type: "Room", accessLevel: "Premium", status: "Draft", users: 0, createdAt: "2024-05-02" },
];

const mockPremiumChallenges = [
  { id: 1, title: "Physics Olympiad Mock Test", type: "Challenge", accessLevel: "Premium", status: "Active", users: 78, createdAt: "2024-04-12" },
  { id: 2, title: "Chemistry Competition Prep", type: "Challenge", accessLevel: "Premium", status: "Active", users: 56, createdAt: "2024-04-05" },
  { id: 3, title: "Math Challenge Basic", type: "Challenge", accessLevel: "Free", status: "Active", users: 210, createdAt: "2024-03-20" },
];

const mockPremiumExams = [
  { id: 1, title: "Full Physics GCSE Mock", type: "Exam", accessLevel: "Premium", status: "Active", users: 112, createdAt: "2024-04-18" },
  { id: 2, title: "Chemistry A-Level Practice", type: "Exam", accessLevel: "Premium", status: "Active", users: 87, createdAt: "2024-04-08" },
  { id: 3, title: "Biology Sample Test", type: "Exam", accessLevel: "Free", status: "Active", users: 245, createdAt: "2024-03-15" },
];

const PremiumContentManagement = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [accessFilter, setAccessFilter] = useState("all");

  // Filter function for all content types
  const filterContent = (content: any[]) => {
    return content.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "all" || item.status.toLowerCase() === statusFilter.toLowerCase();
      const matchesAccess = accessFilter === "all" || item.accessLevel.toLowerCase() === accessFilter.toLowerCase();
      
      return matchesSearch && matchesStatus && matchesAccess;
    });
  };

  const handleToggleAccess = (id: number, currentAccess: string, type: string) => {
    const newAccess = currentAccess === "Premium" ? "Free" : "Premium";
    toast.success(`Changed ${type} #${id} access to ${newAccess}`);
    // In a real app, we would update the data here
  };

  const handleDelete = (id: number, type: string) => {
    toast.success(`Deleted ${type} #${id}`);
    // In a real app, we would delete the item here
  };

  const getContentIcon = (type: string) => {
    switch (type) {
      case "Room":
        return <Home className="h-4 w-4" />;
      case "Challenge":
        return <Award className="h-4 w-4" />;
      case "Exam":
        return <BookOpen className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const ContentTable = ({ data, type }: { data: any[], type: string }) => (
    <Table>
      <TableCaption>A list of premium {type.toLowerCase()}s.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Title</TableHead>
          <TableHead>Access Level</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-center">Users</TableHead>
          <TableHead className="text-right">Created</TableHead>
          <TableHead className="text-right w-[120px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length === 0 ? (
          <TableRow>
            <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
              No {type.toLowerCase()}s found matching your filters
            </TableCell>
          </TableRow>
        ) : (
          data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {getContentIcon(item.type)}
                  {item.title}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={item.accessLevel === "Premium" ? "default" : "outline"}>
                  {item.accessLevel === "Premium" && <Lock className="h-3 w-3 mr-1" />}
                  {item.accessLevel}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={item.status === "Active" ? "success" : "secondary"}>
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell className="text-center">{item.users}</TableCell>
              <TableCell className="text-right">{item.createdAt}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => toast.info(`Viewing ${type} ${item.id}`)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => toast.info(`Editing ${type} ${item.id}`)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="hover:text-red-500" 
                    onClick={() => handleDelete(item.id, type)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );

  const filteredRooms = filterContent(mockPremiumRooms);
  const filteredChallenges = filterContent(mockPremiumChallenges);
  const filteredExams = filterContent(mockPremiumExams);

  return (
    <AdminLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Premium Content Management</h1>
            <p className="text-muted-foreground">
              Manage access to premium content across the platform
            </p>
          </div>
          <Button onClick={() => navigate("/admin/premium/new")} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Add New Content
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search content..." 
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-[150px]">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[150px]">
                <Select value={accessFilter} onValueChange={setAccessFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Access" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Access</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="free">Free</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Tabs defaultValue="rooms">
            <TabsList className="mb-6">
              <TabsTrigger value="rooms">Rooms</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="exams">Exam Preparation</TabsTrigger>
            </TabsList>

            <TabsContent value="rooms" className="border rounded-lg p-4">
              <ContentTable data={filteredRooms} type="Room" />
            </TabsContent>

            <TabsContent value="challenges" className="border rounded-lg p-4">
              <ContentTable data={filteredChallenges} type="Challenge" />
            </TabsContent>

            <TabsContent value="exams" className="border rounded-lg p-4">
              <ContentTable data={filteredExams} type="Exam" />
            </TabsContent>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lock className="h-5 w-5 text-blue-600" />
              Access Management
            </h2>
            <p className="text-muted-foreground mb-6">
              Configure global access settings for premium content
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="strict-mode" className="font-medium">Strict Paywall Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Block all access to premium content for unpaid users
                  </p>
                </div>
                <Switch id="strict-mode" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="preview-mode" className="font-medium">Allow Content Preview</Label>
                  <p className="text-sm text-muted-foreground">
                    Let free users see limited previews of premium content
                  </p>
                </div>
                <Switch id="preview-mode" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="trial-mode" className="font-medium">Enable Free Trial</Label>
                  <p className="text-sm text-muted-foreground">
                    Give new users a 7-day trial of premium content
                  </p>
                </div>
                <Switch id="trial-mode" defaultChecked />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Filter className="h-5 w-5 text-blue-600" />
              Premium Analytics
            </h2>
            <p className="text-muted-foreground mb-6">
              Key statistics about premium content usage
            </p>

            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <div>
                  <p className="text-sm text-blue-600 font-medium">Conversion Rate</p>
                  <p className="text-2xl font-bold">8.4%</p>
                </div>
                <div className="text-green-500 text-sm font-medium">
                  +1.2% from last month
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium">Premium Users</p>
                  <p className="text-xl font-bold">1,245</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium">Total Revenue</p>
                  <p className="text-xl font-bold">£24,680</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium">Avg. Session Time</p>
                  <p className="text-xl font-bold">18m 24s</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium">Content Access</p>
                  <p className="text-xl font-bold">6.2 items/user</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PremiumContentManagement;
