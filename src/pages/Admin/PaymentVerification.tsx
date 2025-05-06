
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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Filter,
  MoreHorizontal,
  Check,
  X,
  CreditCard,
  Eye,
  DownloadCloud,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AdminLayout from "@/components/AdminLayout";

// Mock payment data
const mockPayments = [
  {
    id: "PAY12345",
    user: "Alice Johnson",
    email: "alice@example.com",
    amount: 49.99,
    subscription: "Premium Annual",
    status: "Pending",
    date: "2023-05-02T14:43:21",
    method: "Bank Transfer",
    reference: "BTRN987654321",
    proofUrl: "#",
  },
  {
    id: "PAY12346",
    user: "Bob Smith",
    email: "bob@example.com",
    amount: 9.99,
    subscription: "Premium Monthly",
    status: "Verified",
    date: "2023-05-01T10:23:11",
    method: "Credit Card",
    reference: "CARD123456789",
    proofUrl: "#",
  },
  {
    id: "PAY12347",
    user: "Charlie Brown",
    email: "charlie@example.com",
    amount: 29.99,
    subscription: "Standard Annual",
    status: "Rejected",
    date: "2023-04-29T09:15:42",
    method: "Mobile Money",
    reference: "MOMO567891234",
    proofUrl: "#",
  },
  {
    id: "PAY12348",
    user: "Diana Prince",
    email: "diana@example.com",
    amount: 49.99,
    subscription: "Premium Annual",
    status: "Pending",
    date: "2023-05-03T15:07:32",
    method: "PayPal",
    reference: "PP987654321",
    proofUrl: "#",
  },
  {
    id: "PAY12349",
    user: "Edward Blake",
    email: "edward@example.com",
    amount: 5.99,
    subscription: "Standard Monthly",
    status: "Pending",
    date: "2023-05-02T11:32:18",
    method: "Bank Transfer",
    reference: "BTRN567891234",
    proofUrl: "#",
  },
];

const PaymentVerification = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedPayment, setSelectedPayment] = useState<any>(null);
  const [viewProofDialog, setViewProofDialog] = useState(false);

  // Filter payments based on search term and status filter
  const filteredPayments = mockPayments.filter((payment) => {
    const matchesSearch =
      payment.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || payment.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return `$${amount.toFixed(2)}`;
  };

  const handleViewProof = (payment: any) => {
    setSelectedPayment(payment);
    setViewProofDialog(true);
  };

  const handleVerifyPayment = (paymentId: string, verified: boolean) => {
    // In a real application, this would call an API to update the payment status
    console.log(`Payment ${paymentId} ${verified ? "verified" : "rejected"}`);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Payment Verification</h1>
            <p className="text-muted-foreground">
              Verify payment proofs and activate premium subscriptions
            </p>
          </div>
          <Button variant="outline" className="flex items-center">
            <DownloadCloud className="h-4 w-4 mr-2" />
            Export Records
          </Button>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Payment Records</CardTitle>
            <CardDescription>
              Review and verify payment submissions from users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search payments..."
                  className="pl-9 w-full sm:w-[250px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Select
                  value={statusFilter}
                  onValueChange={setStatusFilter}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="verified">Verified</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Subscription</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">
                        {payment.id}
                      </TableCell>
                      <TableCell>
                        <div>
                          <div>{payment.user}</div>
                          <div className="text-sm text-muted-foreground">
                            {payment.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{formatCurrency(payment.amount)}</TableCell>
                      <TableCell>{payment.subscription}</TableCell>
                      <TableCell>{formatDate(payment.date)}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-1 text-muted-foreground" />
                          {payment.method}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            payment.status === "Verified"
                              ? "default"
                              : payment.status === "Rejected"
                              ? "destructive"
                              : "outline"
                          }
                          className={
                            payment.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                              : ""
                          }
                        >
                          {payment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleViewProof(payment)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => handleVerifyPayment(payment.id, true)}
                                className="text-green-600"
                              >
                                <Check className="h-4 w-4 mr-2" />
                                Verify
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleVerifyPayment(payment.id, false)}
                                className="text-red-600"
                              >
                                <X className="h-4 w-4 mr-2" />
                                Reject
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => handleViewProof(payment)}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Proof
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Verification Guide</CardTitle>
            <CardDescription>
              Steps to follow when verifying payment submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Check Payment Details</h3>
                  <p className="text-sm text-muted-foreground">
                    Verify that the payment amount matches the subscription plan selected
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Verify Payment Proof</h3>
                  <p className="text-sm text-muted-foreground">
                    Examine the provided receipt or screenshot to confirm payment was made
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Confirm Reference Numbers</h3>
                  <p className="text-sm text-muted-foreground">
                    Match the transaction reference on the proof with the one provided by the user
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <h3 className="font-medium">Activate or Reject Payment</h3>
                  <p className="text-sm text-muted-foreground">
                    Approve valid payments to activate premium features or reject fraudulent ones
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Proof Viewing Dialog */}
        {selectedPayment && (
          <Dialog open={viewProofDialog} onOpenChange={setViewProofDialog}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Payment Proof - {selectedPayment.id}</DialogTitle>
                <DialogDescription>
                  Submitted by {selectedPayment.user} ({selectedPayment.email})
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg bg-gray-50">
                  <div className="text-center p-4">
                    <CreditCard className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Payment proof image would display here</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Reference: {selectedPayment.reference}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Amount</p>
                    <p className="text-lg">{formatCurrency(selectedPayment.amount)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Method</p>
                    <p className="text-lg">{selectedPayment.method}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Date</p>
                    <p className="text-lg">{formatDate(selectedPayment.date)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Plan</p>
                    <p className="text-lg">{selectedPayment.subscription}</p>
                  </div>
                </div>
              </div>
              <DialogFooter className="flex gap-2 sm:justify-between">
                <Button
                  variant="destructive"
                  onClick={() => {
                    handleVerifyPayment(selectedPayment.id, false);
                    setViewProofDialog(false);
                  }}
                >
                  <X className="h-4 w-4 mr-2" />
                  Reject
                </Button>
                <Button
                  variant="default"
                  onClick={() => {
                    handleVerifyPayment(selectedPayment.id, true);
                    setViewProofDialog(false);
                  }}
                >
                  <Check className="h-4 w-4 mr-2" />
                  Verify Payment
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </AdminLayout>
  );
};

export default PaymentVerification;
