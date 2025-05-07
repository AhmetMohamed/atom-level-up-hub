
import React, { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Lock, UserPlus, Shield, Users, UserMinus, Key } from "lucide-react";
import { motion } from "framer-motion";

const AccessControl = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("users");
  
  // Sample data for users with permission levels
  const usersData = [
    { id: 1, name: "John Smith", email: "john@example.com", role: "Student", status: "active", premiumAccess: true, lastLogin: "2023-05-15" },
    { id: 2, name: "Sarah Wilson", email: "sarah@example.com", role: "Teacher", status: "active", premiumAccess: true, lastLogin: "2023-05-16" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Student", status: "inactive", premiumAccess: false, lastLogin: "2023-04-30" },
    { id: 4, name: "Emily Davis", email: "emily@example.com", role: "Admin", status: "active", premiumAccess: true, lastLogin: "2023-05-17" },
    { id: 5, name: "David Johnson", email: "david@example.com", role: "Student", status: "active", premiumAccess: false, lastLogin: "2023-05-14" },
    { id: 6, name: "Lisa Anderson", email: "lisa@example.com", role: "Student", status: "active", premiumAccess: true, lastLogin: "2023-05-15" },
  ];
  
  // Sample data for roles and permissions
  const rolesData = [
    { id: 1, name: "Admin", users: 3, permissions: 15 },
    { id: 2, name: "Teacher", users: 12, permissions: 10 },
    { id: 3, name: "Premium Student", users: 437, permissions: 7 },
    { id: 4, name: "Student", users: 2341, permissions: 4 },
    { id: 5, name: "Guest", users: 156, permissions: 2 },
  ];
  
  // Filter data based on search term
  const filteredUsers = usersData.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <h1 className="text-3xl font-bold tracking-tight mb-1">Access Control</h1>
            <p className="text-muted-foreground">
              Manage users, roles, and permissions across the platform
            </p>
          </div>
          <Button className="mt-4 md:mt-0">
            <UserPlus className="mr-2 h-4 w-4" />
            Add New User
          </Button>
        </div>
        
        {/* Access Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2,949</div>
              <p className="text-xs text-muted-foreground mt-1">
                +124 this month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Premium Access</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">437</div>
              <p className="text-xs text-muted-foreground mt-1">
                14.8% of total users
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">789</div>
              <p className="text-xs text-muted-foreground mt-1">
                26.7% of total users
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">5</div>
              <p className="text-xs text-muted-foreground mt-1">
                Custom permission sets
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Tabs and Table Section */}
        <div className="bg-white rounded-lg border shadow-sm">
  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
    {/* Header Section */}
    <div className="p-4 border-b">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <TabsList>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          <TabsTrigger value="access-logs">Access Logs</TabsTrigger>
        </TabsList>

        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search..." 
            className="pl-8" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
      </div>
    </div>

    {/* Users Tab Content */}
    <TabsContent value="users" className="p-0 m-0">
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Premium Access</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.email}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={user.role === "Admin" ? "default" : user.role === "Teacher" ? "secondary" : "outline"}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={user.status === "active" ? "outline" : "secondary"} className={user.status === "active" ? "bg-green-100 text-green-800 border-green-200" : "bg-red-100 text-red-800 border-red-200"}>
                    {user.status === "active" ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Switch checked={user.premiumAccess} onCheckedChange={() => {}} />
                </TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                      <UserMinus className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TabsContent>

    {/* Roles Tab Content */}
    <TabsContent value="roles" className="p-0 m-0">
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Role Name</TableHead>
              <TableHead>Users</TableHead>
              <TableHead>Permissions</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rolesData.map((role) => (
              <TableRow key={role.id}>
                <TableCell className="font-medium">{role.name}</TableCell>
                <TableCell>{role.users}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <div className="h-2 bg-science-primary rounded-full" style={{ width: `${(role.permissions / 15) * 100}px` }}></div>
                    <span className="text-xs">{role.permissions}/15</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">Edit Permissions</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TabsContent>

    {/* Access Logs Tab Content */}
    <TabsContent value="access-logs" className="p-4">
      <div className="flex justify-center items-center p-8 text-center">
        <div>
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <Key className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h3 className="text-xl font-medium mb-2">Access Logs</h3>
          <p className="text-muted-foreground mb-4">
            View detailed access logs to monitor login attempts, permission changes, and security events.
          </p>
          <Button>
            View Access Logs
          </Button>
        </div>
      </div>
    </TabsContent>
  </Tabs>
</div>

        
        {/* Additional Actions Section */}
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">Security Options</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Require 2FA for admin accounts and sensitive operations
                </p>
                <Button variant="outline" className="w-full">Configure 2FA</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Lock className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium">Password Policies</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Set password requirements and expiration policies
                </p>
                <Button variant="outline" className="w-full">Manage Policies</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-medium">Bulk User Operations</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Import, export, or bulk update user accounts
                </p>
                <Button variant="outline" className="w-full">Bulk Operations</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default AccessControl;
