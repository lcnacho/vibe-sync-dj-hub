import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Search, 
  Filter, 
  Download, 
  Play, 
  Archive,
  Calendar,
  FileAudio,
  HardDrive,
  SortAsc,
  CheckCircle2
} from "lucide-react"

export default function Library() {
  const [selectedTracks, setSelectedTracks] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const [filterFormat, setFilterFormat] = useState("all")

  const tracks = [
    {
      id: 1,
      title: "Midnight Bass",
      artist: "Deep House Artist",
      playlist: "Summer Vibes 2024",
      format: "MP3",
      quality: "320kbps",
      size: "12.4 MB",
      downloadDate: "2024-01-15",
      duration: "4:32"
    },
    {
      id: 2,
      title: "Electric Dreams",
      artist: "Synthwave Producer",
      playlist: "Electronic Essentials",
      format: "FLAC",
      quality: "Lossless",
      size: "45.2 MB",
      downloadDate: "2024-01-14",
      duration: "5:18"
    },
    {
      id: 3,
      title: "Underground Flow",
      artist: "Techno Master",
      playlist: "Techno Underground",
      format: "MP3",
      quality: "320kbps",
      size: "9.8 MB",
      downloadDate: "2024-01-13",
      duration: "3:45"
    },
    {
      id: 4,
      title: "Sunset Groove",
      artist: "Chill House DJ",
      playlist: "Deep House Mix",
      format: "MP4",
      quality: "256kbps",
      size: "15.6 MB",
      downloadDate: "2024-01-12",
      duration: "6:12"
    },
    {
      id: 5,
      title: "Neon Nights",
      artist: "Electronic Waves",
      playlist: "Summer Vibes 2024",
      format: "MP3",
      quality: "320kbps",
      size: "11.7 MB",
      downloadDate: "2024-01-11",
      duration: "4:05"
    }
  ]

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedTracks(tracks.map(track => track.id))
    } else {
      setSelectedTracks([])
    }
  }

  const handleSelectTrack = (trackId: number, checked: boolean) => {
    if (checked) {
      setSelectedTracks([...selectedTracks, trackId])
    } else {
      setSelectedTracks(selectedTracks.filter(id => id !== trackId))
    }
  }

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'FLAC': return 'bg-success/20 text-success'
      case 'MP3': return 'bg-primary/20 text-primary'
      case 'MP4': return 'bg-accent/20 text-accent'
      default: return 'bg-muted/20 text-muted-foreground'
    }
  }

  const totalSize = tracks.reduce((sum, track) => {
    const size = parseFloat(track.size.split(' ')[0])
    return sum + size
  }, 0)

  return (
    <div className="p-6 space-y-6 bg-gradient-dark min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Music Library</h1>
          <p className="text-muted-foreground mt-1">Browse and manage your downloaded tracks</p>
        </div>
        
        <div className="flex items-center gap-3">
          {selectedTracks.length > 0 && (
            <Button variant="outline" className="bg-accent/10 border-accent/20 text-accent">
              <Download className="w-4 h-4 mr-2" />
              Download Selected ({selectedTracks.length})
            </Button>
          )}
          <Button className="bg-primary hover:bg-primary/90">
            <Archive className="w-4 h-4 mr-2" />
            Export Library
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <FileAudio className="w-4 h-4" />
              Total Tracks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{tracks.length}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <HardDrive className="w-4 h-4" />
              Storage Used
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{totalSize.toFixed(1)} MB</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Formats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">MP3, FLAC, MP4</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Latest Download
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Today</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tracks, artists, or playlists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border"
          />
        </div>
        
        <div className="flex gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40 bg-card border-border">
              <SortAsc className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="date">Sort by Date</SelectItem>
              <SelectItem value="title">Sort by Title</SelectItem>
              <SelectItem value="artist">Sort by Artist</SelectItem>
              <SelectItem value="size">Sort by Size</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={filterFormat} onValueChange={setFilterFormat}>
            <SelectTrigger className="w-32 bg-card border-border">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="all">All Formats</SelectItem>
              <SelectItem value="mp3">MP3</SelectItem>
              <SelectItem value="flac">FLAC</SelectItem>
              <SelectItem value="mp4">MP4</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Tracks Table */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr className="text-left">
                  <th className="p-4">
                    <Checkbox
                      checked={selectedTracks.length === tracks.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </th>
                  <th className="p-4 text-sm font-medium text-muted-foreground">Track</th>
                  <th className="p-4 text-sm font-medium text-muted-foreground">Artist</th>
                  <th className="p-4 text-sm font-medium text-muted-foreground">Playlist</th>
                  <th className="p-4 text-sm font-medium text-muted-foreground">Format</th>
                  <th className="p-4 text-sm font-medium text-muted-foreground">Size</th>
                  <th className="p-4 text-sm font-medium text-muted-foreground">Downloaded</th>
                  <th className="p-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {tracks.map((track) => (
                  <tr key={track.id} className="hover:bg-background/50 transition-colors">
                    <td className="p-4">
                      <Checkbox
                        checked={selectedTracks.includes(track.id)}
                        onCheckedChange={(checked) => handleSelectTrack(track.id, checked as boolean)}
                      />
                    </td>
                    <td className="p-4">
                      <div>
                        <div className="font-medium text-foreground">{track.title}</div>
                        <div className="text-sm text-muted-foreground">{track.duration}</div>
                      </div>
                    </td>
                    <td className="p-4 text-foreground">{track.artist}</td>
                    <td className="p-4 text-muted-foreground">{track.playlist}</td>
                    <td className="p-4">
                      <Badge className={getFormatColor(track.format)}>
                        {track.format} {track.quality}
                      </Badge>
                    </td>
                    <td className="p-4 text-muted-foreground">{track.size}</td>
                    <td className="p-4 text-muted-foreground">{track.downloadDate}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10">
                          <Play className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-accent hover:bg-accent/10">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}