import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { 
  Plus, 
  Music, 
  RefreshCw, 
  Download, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Search,
  Filter,
  Grid,
  List
} from "lucide-react"

export default function Playlists() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState("")

  const playlists = [
    {
      id: 1,
      title: "Summer Vibes 2024",
      description: "The hottest tracks for summer parties",
      trackCount: 47,
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      lastSync: "2 hours ago",
      status: "synced",
      url: "https://youtube.com/playlist?list=PLrAl4X..."
    },
    {
      id: 2,
      title: "Deep House Mix",
      description: "Underground deep house essentials",
      trackCount: 32,
      thumbnail: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop",
      lastSync: "1 day ago",
      status: "syncing",
      url: "https://youtube.com/playlist?list=PLrAl4Y..."
    },
    {
      id: 3,
      title: "Electronic Essentials",
      description: "Must-have electronic tracks",
      trackCount: 89,
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop",
      lastSync: "3 days ago",
      status: "error",
      url: "https://youtube.com/playlist?list=PLrAl4Z..."
    },
    {
      id: 4,
      title: "Techno Underground",
      description: "Raw techno beats from the underground",
      trackCount: 56,
      thumbnail: "https://images.unsplash.com/photo-1574707878337-8dd04b540a8f?w=300&h=300&fit=crop",
      lastSync: "1 week ago",
      status: "synced",
      url: "https://youtube.com/playlist?list=PLrAl4W..."
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'synced': return 'bg-success/20 text-success'
      case 'syncing': return 'bg-accent/20 text-accent'
      case 'error': return 'bg-destructive/20 text-destructive'
      default: return 'bg-muted/20 text-muted-foreground'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'synced': return CheckCircle2
      case 'syncing': return RefreshCw
      case 'error': return AlertCircle
      default: return Clock
    }
  }

  return (
    <div className="p-6 space-y-6 bg-gradient-dark min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Playlists</h1>
          <p className="text-muted-foreground mt-1">Manage your YouTube playlists and sync settings</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-card border border-border rounded-lg p-1">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Add Playlist
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-border">
              <DialogHeader>
                <DialogTitle className="text-foreground">Add YouTube Playlist</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Enter the URL of your YouTube playlist to start syncing
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="playlist-url" className="text-foreground">Playlist URL</Label>
                  <Input 
                    id="playlist-url"
                    placeholder="https://youtube.com/playlist?list=..."
                    className="bg-background border-border"
                  />
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    Add Playlist
                  </Button>
                  <Button variant="outline" className="border-border">
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search playlists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border"
          />
        </div>
        <Button variant="outline" className="border-border">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Playlists Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist) => {
            const StatusIcon = getStatusIcon(playlist.status)
            return (
              <Card key={playlist.id} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={playlist.thumbnail} 
                    alt={playlist.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg flex items-center justify-center">
                    <Button size="sm" variant="secondary">
                      <Music className="w-4 h-4 mr-2" />
                      View Tracks
                    </Button>
                  </div>
                  <Badge 
                    className={`absolute top-3 right-3 ${getStatusColor(playlist.status)}`}
                  >
                    <StatusIcon className="w-3 h-3 mr-1" />
                    {playlist.status}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-foreground text-lg">{playlist.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{playlist.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{playlist.trackCount} tracks</span>
                    <span>Synced {playlist.lastSync}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 border-border">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Sync
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-accent/10 border-accent/20 text-accent hover:bg-accent/20">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      ) : (
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {playlists.map((playlist) => {
                const StatusIcon = getStatusIcon(playlist.status)
                return (
                  <div key={playlist.id} className="p-4 hover:bg-background/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <img 
                        src={playlist.thumbnail} 
                        alt={playlist.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-foreground font-medium truncate">{playlist.title}</h3>
                        <p className="text-sm text-muted-foreground truncate">{playlist.description}</p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                          <span>{playlist.trackCount} tracks</span>
                          <span>Synced {playlist.lastSync}</span>
                        </div>
                      </div>
                      <Badge className={getStatusColor(playlist.status)}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {playlist.status}
                      </Badge>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-border">
                          <RefreshCw className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="bg-accent/10 border-accent/20 text-accent">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}