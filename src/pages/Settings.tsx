import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  User, 
  Download, 
  HardDrive, 
  Bell, 
  Shield,
  Database,
  Import,
  Upload,
  Trash2,
  Save
} from "lucide-react"

export default function Settings() {
  const [autoSync, setAutoSync] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [deleteAfterDownload, setDeleteAfterDownload] = useState(false)

  return (
    <div className="p-6 space-y-8 bg-gradient-dark min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Customize your DJ Sync experience</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Account Settings */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <User className="w-5 h-5" />
                Account Settings
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Manage your account information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">Display Name</Label>
                  <Input 
                    id="name" 
                    defaultValue="DJ Producer"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    defaultValue="dj@example.com"
                    className="bg-background border-border"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="timezone" className="text-foreground">Timezone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                    <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                    <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                    <SelectItem value="cet">CET (Central European Time)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Download Preferences */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Download className="w-5 h-5" />
                Download Preferences
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Configure how your music downloads are handled
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="format" className="text-foreground">Default Format</Label>
                  <Select defaultValue="mp3">
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="mp3">MP3</SelectItem>
                      <SelectItem value="flac">FLAC (Lossless)</SelectItem>
                      <SelectItem value="mp4">MP4 (Video)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="quality" className="text-foreground">Audio Quality</Label>
                  <Select defaultValue="320">
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="128">128 kbps</SelectItem>
                      <SelectItem value="256">256 kbps</SelectItem>
                      <SelectItem value="320">320 kbps (Recommended)</SelectItem>
                      <SelectItem value="lossless">Lossless</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="concurrent" className="text-foreground">Concurrent Downloads</Label>
                <Select defaultValue="3">
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="1">1 download at a time</SelectItem>
                    <SelectItem value="3">3 downloads at a time</SelectItem>
                    <SelectItem value="5">5 downloads at a time</SelectItem>
                    <SelectItem value="10">10 downloads at a time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="auto-sync" className="text-foreground">Auto-sync playlists</Label>
                    <p className="text-sm text-muted-foreground">Automatically check for new tracks every hour</p>
                  </div>
                  <Switch 
                    id="auto-sync"
                    checked={autoSync}
                    onCheckedChange={setAutoSync}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="delete-after" className="text-foreground">Delete from YouTube after download</Label>
                    <p className="text-sm text-muted-foreground">Remove tracks from YouTube playlist after successful download</p>
                  </div>
                  <Switch 
                    id="delete-after"
                    checked={deleteAfterDownload}
                    onCheckedChange={setDeleteAfterDownload}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Storage Management */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <HardDrive className="w-5 h-5" />
                Storage Management
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Monitor and manage your storage usage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border">
                <div>
                  <div className="font-medium text-foreground">Storage Used</div>
                  <div className="text-sm text-muted-foreground">12.4 GB of 50 GB used</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">24.8%</div>
                  <div className="text-xs text-muted-foreground">of total storage</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="border-border">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clean Cache
                </Button>
                <Button variant="outline" className="border-border">
                  <Database className="w-4 h-4 mr-2" />
                  Optimize Storage
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Configure when and how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="notifications" className="text-foreground">Enable Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications for downloads and sync updates</p>
                </div>
                <Switch 
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              
              {notifications && (
                <div className="ml-4 space-y-3 border-l-2 border-primary/20 pl-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm text-muted-foreground">Download completed</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-sm text-muted-foreground">Sync completed</Label>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-sm text-muted-foreground">Download errors</Label>
                    <Switch defaultChecked />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          
          {/* Save Changes */}
          <Card className="bg-gradient-primary border-primary/20 shadow-glow">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <Save className="w-8 h-8 text-white mx-auto" />
                <div>
                  <h3 className="font-medium text-white">Save Changes</h3>
                  <p className="text-sm text-white/80">Apply your new settings</p>
                </div>
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  Save All Settings
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Import/Export */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Data Management</CardTitle>
              <CardDescription className="text-muted-foreground">
                Import or export your settings and library
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full border-border">
                <Import className="w-4 h-4 mr-2" />
                Import Settings
              </Button>
              <Button variant="outline" className="w-full border-border">
                <Upload className="w-4 h-4 mr-2" />
                Export Library
              </Button>
            </CardContent>
          </Card>

          {/* Security */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Shield className="w-5 h-5" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full border-border">
                Change Password
              </Button>
              <Button variant="outline" className="w-full border-border">
                Two-Factor Auth
              </Button>
              <Button variant="outline" className="w-full border-destructive/50 text-destructive hover:bg-destructive/10">
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}