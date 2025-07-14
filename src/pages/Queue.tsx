import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Download, 
  Pause, 
  Play, 
  RotateCcw, 
  X,
  CheckCircle2,
  AlertCircle,
  Clock,
  Music,
  Activity
} from "lucide-react"

export default function Queue() {
  const [currentTime, setCurrentTime] = useState(new Date())

  // Simulate real-time updates
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const queueStats = {
    active: 3,
    completed: 24,
    failed: 1,
    totalToday: 28
  }

  const downloadJobs = [
    {
      id: 1,
      title: "Summer Anthem 2024",
      artist: "Electronic Dreams",
      playlist: "Summer Vibes 2024",
      progress: 75,
      status: "downloading",
      speed: "2.4 MB/s",
      eta: "45s",
      size: "12.4 MB",
      downloaded: "9.3 MB"
    },
    {
      id: 2,
      title: "Deep Bass Revolution",
      artist: "Underground Collective",
      playlist: "Techno Underground",
      progress: 45,
      status: "downloading",
      speed: "1.8 MB/s",
      eta: "2m 15s",
      size: "15.7 MB",
      downloaded: "7.1 MB"
    },
    {
      id: 3,
      title: "Neon Pulse",
      artist: "Synthwave Master",
      playlist: "Electronic Essentials",
      progress: 100,
      status: "completed",
      speed: "3.2 MB/s",
      eta: "Complete",
      size: "11.2 MB",
      downloaded: "11.2 MB"
    },
    {
      id: 4,
      title: "Midnight Drive",
      artist: "Retro Vibes",
      playlist: "Deep House Mix",
      progress: 0,
      status: "queued",
      speed: "0 MB/s",
      eta: "Waiting",
      size: "13.8 MB",
      downloaded: "0 MB"
    },
    {
      id: 5,
      title: "Broken Dreams",
      artist: "Error Artist",
      playlist: "Test Playlist",
      progress: 35,
      status: "error",
      speed: "0 MB/s",
      eta: "Failed",
      size: "9.5 MB",
      downloaded: "3.3 MB"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success/20 text-success'
      case 'downloading': return 'bg-primary/20 text-primary'
      case 'queued': return 'bg-muted/20 text-muted-foreground'
      case 'error': return 'bg-destructive/20 text-destructive'
      case 'paused': return 'bg-accent/20 text-accent'
      default: return 'bg-muted/20 text-muted-foreground'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle2
      case 'downloading': return Download
      case 'queued': return Clock
      case 'error': return AlertCircle
      case 'paused': return Pause
      default: return Clock
    }
  }

  return (
    <div className="p-6 space-y-6 bg-gradient-dark min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Download Queue</h1>
          <p className="text-muted-foreground mt-1">Real-time download progress and management</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-border">
            <Pause className="w-4 h-4 mr-2" />
            Pause All
          </Button>
          <Button variant="outline" className="border-destructive/50 text-destructive hover:bg-destructive/10">
            <X className="w-4 h-4 mr-2" />
            Clear Completed
          </Button>
        </div>
      </div>

      {/* Queue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              Active Downloads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{queueStats.active}</div>
            <p className="text-xs text-muted-foreground mt-1">Currently downloading</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{queueStats.completed}</div>
            <p className="text-xs text-muted-foreground mt-1">Successfully downloaded</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-destructive" />
              Failed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{queueStats.failed}</div>
            <p className="text-xs text-muted-foreground mt-1">Require attention</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <Music className="w-4 h-4 text-accent" />
              Total Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{queueStats.totalToday}</div>
            <p className="text-xs text-muted-foreground mt-1">Downloads processed</p>
          </CardContent>
        </Card>
      </div>

      {/* Current Time */}
      <Card className="bg-gradient-primary border-primary/20 shadow-glow">
        <CardContent className="p-4">
          <div className="flex items-center justify-between text-white">
            <div>
              <h3 className="font-medium">Queue Status - Live Updates</h3>
              <p className="text-sm opacity-90">Last updated: {currentTime.toLocaleTimeString()}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm">Live</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Download Jobs */}
      <div className="space-y-4">
        {downloadJobs.map((job) => {
          const StatusIcon = getStatusIcon(job.status)
          return (
            <Card key={job.id} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Status Icon */}
                  <div className={`p-2 rounded-full ${getStatusColor(job.status)}`}>
                    <StatusIcon className="w-5 h-5" />
                  </div>
                  
                  {/* Job Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-foreground truncate">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.artist}</p>
                        <p className="text-xs text-muted-foreground mt-1">from "{job.playlist}"</p>
                      </div>
                      
                      <div className="text-right flex-shrink-0">
                        <Badge className={getStatusColor(job.status)} variant="outline">
                          {job.status}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">
                          {job.downloaded} / {job.size}
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progress: {job.progress}%</span>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{job.speed}</span>
                          <span>ETA: {job.eta}</span>
                        </div>
                      </div>
                      <Progress 
                        value={job.progress} 
                        className="h-2"
                      />
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {job.status === 'downloading' && (
                        <Button size="sm" variant="outline" className="border-border">
                          <Pause className="w-4 h-4 mr-2" />
                          Pause
                        </Button>
                      )}
                      {job.status === 'paused' && (
                        <Button size="sm" variant="outline" className="border-border">
                          <Play className="w-4 h-4 mr-2" />
                          Resume
                        </Button>
                      )}
                      {job.status === 'error' && (
                        <Button size="sm" variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Retry
                        </Button>
                      )}
                      <Button size="sm" variant="ghost" className="text-destructive hover:bg-destructive/10">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}