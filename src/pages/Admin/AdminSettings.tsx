
import React from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const AdminSettings = () => {
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been successfully saved.",
    });
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Settings</h1>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="api">API & Integrations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Manage your admin panel general settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input id="siteName" defaultValue="ScienceHub Academy" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="siteUrl">Site URL</Label>
                  <Input id="siteUrl" defaultValue="https://sciencehub.edu" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="adminEmail">Admin Email</Label>
                  <Input id="adminEmail" type="email" defaultValue="admin@sciencehub.edu" />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                      <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                      <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                      <SelectItem value="gmt">GMT (Greenwich Mean Time)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dateFormat">Date Format</Label>
                  <Select defaultValue="mdy">
                    <SelectTrigger id="dateFormat">
                      <SelectValue placeholder="Select date format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="maintenanceMode" className="block mb-1">Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">Enable to put the site in maintenance mode.</p>
                  </div>
                  <Switch id="maintenanceMode" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="userRegistration" className="block mb-1">User Registration</Label>
                    <p className="text-sm text-muted-foreground">Allow new users to register.</p>
                  </div>
                  <Switch id="userRegistration" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize the appearance of your admin panel.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Theme Mode</Label>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1">Light</Button>
                    <Button variant="outline" className="flex-1">Dark</Button>
                    <Button variant="secondary" className="flex-1">System</Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>Primary Color</Label>
                  <div className="grid grid-cols-6 gap-2">
                    {["#0099ff", "#6d28d9", "#059669", "#dc2626", "#f59e0b", "#8b5cf6"].map((color) => (
                      <div
                        key={color}
                        style={{ backgroundColor: color }}
                        className="w-full aspect-square rounded-md cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="fontSize">Font Size</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger id="fontSize">
                      <SelectValue placeholder="Select font size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="animations" className="block mb-1">UI Animations</Label>
                    <p className="text-sm text-muted-foreground">Enable animations in the user interface.</p>
                  </div>
                  <Switch id="animations" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="compactMode" className="block mb-1">Compact Mode</Label>
                    <p className="text-sm text-muted-foreground">Reduce spacing in the user interface.</p>
                  </div>
                  <Switch id="compactMode" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Configure how you receive notifications from the system.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Email Notifications</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="userSignups" className="block mb-1">New User Signups</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications for new user registrations.</p>
                    </div>
                    <Switch id="userSignups" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="payments" className="block mb-1">Payment Received</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications for successful payments.</p>
                    </div>
                    <Switch id="payments" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="contentPublished" className="block mb-1">Content Published</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications when new content is published.</p>
                    </div>
                    <Switch id="contentPublished" />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">System Notifications</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="errorAlert" className="block mb-1">Error Alerts</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications for system errors.</p>
                    </div>
                    <Switch id="errorAlert" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="securityAlert" className="block mb-1">Security Alerts</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications for security events.</p>
                    </div>
                    <Switch id="securityAlert" defaultChecked />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="notificationEmail">Notification Email</Label>
                  <Input id="notificationEmail" type="email" defaultValue="admin@sciencehub.edu" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Configure security settings for your admin panel.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Authentication</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="2fa" className="block mb-1">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Require 2FA for all administrator accounts.</p>
                    </div>
                    <Switch id="2fa" defaultChecked />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                    <Input id="sessionTimeout" type="number" defaultValue="30" />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Password Policy</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="passwordLength">Minimum Password Length</Label>
                    <Input id="passwordLength" type="number" defaultValue="8" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="requireUppercase" className="block mb-1">Require Uppercase</Label>
                      <p className="text-sm text-muted-foreground">Require at least one uppercase letter.</p>
                    </div>
                    <Switch id="requireUppercase" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="requireSpecial" className="block mb-1">Require Special Character</Label>
                      <p className="text-sm text-muted-foreground">Require at least one special character.</p>
                    </div>
                    <Switch id="requireSpecial" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="requireNumber" className="block mb-1">Require Number</Label>
                      <p className="text-sm text-muted-foreground">Require at least one number.</p>
                    </div>
                    <Switch id="requireNumber" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>API & Integrations</CardTitle>
                <CardDescription>Manage API keys and third-party integrations.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">API Settings</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="apiEnabled" className="block mb-1">Enable API</Label>
                      <p className="text-sm text-muted-foreground">Allow external systems to connect via API.</p>
                    </div>
                    <Switch id="apiEnabled" defaultChecked />
                  </div>
                  
                  <div className="p-4 border rounded-md bg-muted/30">
                    <Label className="block mb-2">API Key</Label>
                    <div className="flex gap-2">
                      <Input value="sk_live_51NxrT7*****************************hUz2" readOnly className="font-mono text-sm" />
                      <Button variant="secondary" size="sm">Regenerate</Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Last regenerated: 2025-04-28</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Connected Services</h3>
                  
                  <div className="flex justify-between items-center p-4 border rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">G</div>
                      <div>
                        <h4 className="font-medium">Google Analytics</h4>
                        <p className="text-sm text-muted-foreground">Connected</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Disconnect</Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 border rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">S</div>
                      <div>
                        <h4 className="font-medium">Stripe</h4>
                        <p className="text-sm text-muted-foreground">Connected</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Disconnect</Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 border rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">M</div>
                      <div>
                        <h4 className="font-medium">Mailchimp</h4>
                        <p className="text-sm text-muted-foreground">Not connected</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave} className="ml-auto">Save API Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
