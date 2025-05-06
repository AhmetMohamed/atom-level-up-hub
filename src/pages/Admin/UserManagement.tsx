
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Users,
  UserPlus,
  UserCheck,
  BookOpen,
  Search,
  Filter,
  MoreHorizontal,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import AdminLayout from "@/components/AdminLayout";

// Mock data for users
const mockUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Student",
    status: "Active",
    subscription: "Premium",
    lastLogin: "2023-05-04T12:43:21",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Teacher",
    status: "Active",
    subscription: "Premium",
    lastLogin: "2023-05-04T10:23:11",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Student",
    status: "Inactive",
    subscription: "Free",
    lastLogin: "2023-04-28T09:15:42",
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@example.com",
    role: "Admin",
    status: "Active",
    subscription: "Premium",
    lastLogin: "2023-05-04T15:07:32",
  },
  {
    id: 5,
    name: "Edward Blake",
    email: "edward@example.com",
    role: "Student",
    status: "Pending",
    subscription: "Free",
    lastLogin: "2023-05-01T11:32:18",
  },
  {
    id: 6,
    name: "Fiona Carter",
    email: "fiona@example.com",
    role: "Teacher",
    status: "Active",
    subscription: "Standard",
    lastLogin: "2023-05-03T14:22:51",
  },
  {
    id: 7,
    name: "George Davis",
    email: "george@example.com",
    role: "Student",
    status: "Active",
    subscription: "Standard",
    lastLogin: "2023-05-02T16:44:09",
  },
];

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddUserDialog, setShowAddUserDialog] = useState(false);

  // Filter users based on search term
  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">User Management</h1>
            <p className="text-muted-foreground">
              Manage user accounts, roles, and subscriptions
            </p>
          </div>
          <Dialog open={showAddUserDialog} onOpenChange={setShowAddUserDialog}>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
                <DialogDescription>
                  Create a new user account in the system.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Full name"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="Email address"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="role" className="text-right">
                    Role
                  </Label>
                  <Input
                    id="role"
                    placeholder="Student, Teacher, Admin"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="subscription" className="text-right">
                    Subscription
                  </Label>
                  <Input
                    id="subscription"
                    placeholder="Free, Standard, Premium"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowAddUserDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setShowAddUserDialog(false)}>
                  Create User
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mb-6">
          <Tabs defaultValue="all-users" className="w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
              <TabsList>
                <TabsTrigger value="all-users" className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  All Users
                </TabsTrigger>
                <TabsTrigger value="students" className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Students
                </TabsTrigger>
                <TabsTrigger value="teachers" className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Teachers
                </TabsTrigger>
                <TabsTrigger value="admins" className="flex items-center">
                  <UserCheck className="h-4 w-4 mr-2" />
                  Admins
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search users..."
                    className="pl-9 w-full md:w-[250px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <TabsContent value="all-users">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Subscription</TableHead>
                        <TableHead>Last Login</TableHead>
                        <TableHead className="w-[80px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">
                            {user.name}
                          </TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                user.status === "Active"
                                  ? "default"
                                  : user.status === "Inactive"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={
                                user.subscription === "Premium"
                                  ? "bg-purple-100 text-purple-800 border-purple-200"
                                  : user.subscription === "Standard"
                                  ? "bg-blue-100 text-blue-800 border-blue-200"
                                  : "bg-gray-100 text-gray-800 border-gray-200"
                              }
                            >
                              {user.subscription}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {formatDate(user.lastLogin)}
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Suspend</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="students">
              <Card>
                <CardHeader>
                  <CardTitle>Students</CardTitle>
                  <CardDescription>
                    Manage student accounts and their learning progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Student management content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="teachers">
              <Card>
                <CardHeader>
                  <CardTitle>Teachers</CardTitle>
                  <CardDescription>
                    Manage teacher accounts and their permissions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Teacher management content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="admins">
              <Card>
                <CardHeader>
                  <CardTitle>Admins</CardTitle>
                  <CardDescription>
                    Manage administrator accounts and system access
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Admin management content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserManagement;
