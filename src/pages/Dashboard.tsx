import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Download, 
  Music, 
  FolderOpen, 
  Plus, 
  TrendingUp,
  PlayCircle,
  CheckCircle,
  Clock,
  HardDrive,
  Users
} from "lucide-react"
import heroImage from "@/assets/hero-dj.jpg"

export default function Dashboard() {
  const stats = [
    { title: "Total Tracks", value: "1,247", icon: Music, change: "+12%", trend: "up" },
    { title: "Active Downloads", value: "3", icon: Download, change: "2 pending", trend: "neutral" },
    { title: "Storage Used", value: "12.4GB", icon: HardDrive, change: "68% full", trend: "neutral" },
    { title: "Playlists", value: "18", icon: FolderOpen, change: "+2 this week", trend: "up" },
  ]

  const recentActivity = [
    { 
      title: "Playlist 'Summer Vibes 2024' synced", 
      time: "2 min ago", 
      status: "success",
      icon: CheckCircle 
    },
    { 
      title: "Downloading 'Midnight Bass' by Artist X", 
      time: "5 min ago", 
      status: "progress",
      icon: Download,
      progress: 65
    },
    { 
      title: "New playlist 'Deep House Mix' added", 
      time: "1 hour ago", 
      status: "info",
      icon: Plus 
    },
    { 
      title: "Downloaded 24 tracks from 'Electronic Essentials'", 
      time: "3 hours ago", 
      status: "success",
      icon: CheckCircle 
    },
  ]

  return (
    <div className="p-6 space-y-8 bg-gradient-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 text-white">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Welcome back, DJ!</h1>
              <p className="text-xl opacity-90 max-w-2xl">
                Sync your YouTube playlists, download tracks automatically, and manage your music library like a pro.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Playlist
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  View Queue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="flex items-center gap-2">
                <span className={`text-sm ${stat.trend === 'up' ? 'text-success' : 'text-muted-foreground'}`}>
                  {stat.change}
                </span>
                {stat.trend === 'up' && <TrendingUp className="w-3 h-3 text-success" />}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Activity</CardTitle>
            <CardDescription className="text-muted-foreground">
              Your latest downloads and playlist updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-background/50 border border-border">
                <div className={`p-2 rounded-full ${
                  activity.status === 'success' ? 'bg-success/20 text-success' :
                  activity.status === 'progress' ? 'bg-accent/20 text-accent' :
                  'bg-primary/20 text-primary'
                }`}>
                  <activity.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {activity.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                  {activity.progress && (
                    <div className="mt-2">
                      <Progress value={activity.progress} className="h-1" />
                    </div>
                  )}
                </div>
                <Badge variant={
                  activity.status === 'success' ? 'secondary' :
                  activity.status === 'progress' ? 'default' :
                  'outline'
                } className="text-xs">
                  {activity.status === 'success' ? 'Complete' :
                   activity.status === 'progress' ? 'Downloading' :
                   'New'}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-foreground">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Add New Playlist
            </Button>
            <Button variant="outline" className="w-full justify-start border-border hover:bg-accent/10">
              <Download className="w-4 h-4 mr-2" />
              View Download Queue
            </Button>
            <Button variant="outline" className="w-full justify-start border-border hover:bg-accent/10">
              <FolderOpen className="w-4 h-4 mr-2" />
              Browse Library
            </Button>
            <Button variant="outline" className="w-full justify-start border-border hover:bg-accent/10">
              <Users className="w-4 h-4 mr-2" />
              Sync All Playlists
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}