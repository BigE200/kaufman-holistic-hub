import { useState } from 'react';
import { Play, Youtube, Download, ExternalLink, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Media = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const podcastEpisodes = [
    {
      id: 1,
      title: "Cannabis Certification: A Guide for Healthcare Professionals",
      description: "Comprehensive overview of medical cannabis certification processes and requirements for healthcare providers.",
      duration: "45:30",
      date: "2024-01-20",
      thumbnail: "/api/placeholder/400/225",
      videoId: "placeholder-video-1",
      category: "Professional Education",
      featured: true
    },
    {
      id: 2,
      title: "Building Trust in Telemedicine: The Feedback Revolution",
      description: "How patient feedback systems are transforming telehealth and creating better doctor-patient relationships.",
      duration: "38:15",
      date: "2024-01-15",
      thumbnail: "/api/placeholder/400/225",
      videoId: "placeholder-video-2",
      category: "Healthcare Innovation",
      featured: false
    },
    {
      id: 3,
      title: "Integrative Medicine: Bridging Traditional and Holistic Care",
      description: "Exploring the principles and practices of integrative medicine in modern healthcare settings.",
      duration: "42:20",
      date: "2024-01-10",
      thumbnail: "/api/placeholder/400/225",
      videoId: "placeholder-video-3",
      category: "Integrative Medicine",
      featured: false
    },
    {
      id: 4,
      title: "State-by-State: Medical Cannabis Regulations Explained",
      description: "Navigating the complex landscape of medical cannabis laws across different states.",
      duration: "35:45",
      date: "2024-01-05",
      thumbnail: "/api/placeholder/400/225",
      videoId: "placeholder-video-4",
      category: "Legal & Regulations",
      featured: false
    }
  ];

  const mediaAppearances = [
    {
      title: "Healthcare Innovation Podcast",
      outlet: "MedTech Today",
      date: "2024-01-25",
      topic: "The Future of Telehealth in Integrative Medicine",
      link: "#",
      type: "Podcast"
    },
    {
      title: "Cannabis & Medicine Summit",
      outlet: "Medical Cannabis Conference",
      date: "2024-01-18",
      topic: "Building Trust in Medical Cannabis Practice",
      link: "#",
      type: "Speaking Engagement"
    },
    {
      title: "Digital Health Weekly",
      outlet: "HealthTech Magazine",
      date: "2024-01-12",
      topic: "Patient Feedback Systems in Healthcare",
      link: "#",
      type: "Interview"
    }
  ];

  const featuredEpisode = podcastEpisodes.find(ep => ep.featured);
  const regularEpisodes = podcastEpisodes.filter(ep => !ep.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}
      <section className="medical-section bg-medical-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-professional-navy mb-6">
              Podcast & Media
            </h1>
            <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
              Weekly insights on integrative medicine, medical cannabis, and healthcare innovation. 
              Join the conversation about the future of patient-centered care.
            </p>
          </div>

          <div className="flex justify-center">
            <Button className="medical-button-primary text-lg px-8 py-4" asChild>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Youtube className="mr-2 h-5 w-5" />
                Subscribe on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      {featuredEpisode && (
        <section className="medical-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-professional-navy mb-8">Latest Episode</h2>
            
            <Card className="trust-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative bg-medical-gray-100 min-h-[300px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button 
                      size="lg"
                      className="bg-white/90 hover:bg-white text-professional-navy rounded-full p-4"
                      onClick={() => setActiveVideo(featuredEpisode.id)}
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                  <div className="text-center text-medical-gray-500">
                    <Youtube className="h-16 w-16 mx-auto mb-4" />
                    <p>Video Thumbnail</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <Badge className="mb-4 bg-medical-primary text-white">
                    {featuredEpisode.category}
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-professional-navy mb-4">
                    {featuredEpisode.title}
                  </h3>
                  <p className="text-medical-gray-600 mb-6">
                    {featuredEpisode.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-medical-gray-500 mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(featuredEpisode.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredEpisode.duration}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="medical-button-primary">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Now
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Content Tabs */}
      <section className="medical-section bg-medical-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="episodes" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="episodes">All Episodes</TabsTrigger>
              <TabsTrigger value="transcripts">Transcripts</TabsTrigger>
              <TabsTrigger value="appearances">Media</TabsTrigger>
            </TabsList>

            {/* Episodes Grid */}
            <TabsContent value="episodes">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularEpisodes.map((episode) => (
                  <Card key={episode.id} className="trust-card group hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <div className="bg-medical-gray-100 aspect-video flex items-center justify-center">
                        <Youtube className="h-12 w-12 text-medical-gray-400" />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <Button 
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 bg-white/90 hover:bg-white text-professional-navy rounded-full"
                          onClick={() => setActiveVideo(episode.id)}
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {episode.duration}
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {episode.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-professional-navy mb-3 group-hover:text-medical-primary transition-colors">
                        {episode.title}
                      </h3>
                      <p className="text-medical-gray-600 text-sm mb-4">
                        {episode.description}
                      </p>
                      
                      <div className="flex items-center text-xs text-medical-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{new Date(episode.date).toLocaleDateString()}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Transcripts */}
            <TabsContent value="transcripts">
              <div className="space-y-6">
                {podcastEpisodes.map((episode) => (
                  <Card key={episode.id} className="trust-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-professional-navy mb-2">
                            {episode.title}
                          </h3>
                          <p className="text-medical-gray-600 text-sm mb-3">
                            {episode.description}
                          </p>
                          <div className="flex items-center text-xs text-medical-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span className="mr-4">{new Date(episode.date).toLocaleDateString()}</span>
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{episode.duration}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </Button>
                          <Button variant="ghost" size="sm">
                            View Online
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Media Appearances */}
            <TabsContent value="appearances">
              <div className="space-y-6">
                {mediaAppearances.map((appearance, index) => (
                  <Card key={index} className="trust-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-professional-navy">
                              {appearance.title}
                            </h3>
                            <Badge variant="secondary">
                              {appearance.type}
                            </Badge>
                          </div>
                          <p className="text-medical-gray-600 mb-2">
                            {appearance.outlet}
                          </p>
                          <p className="text-sm text-medical-gray-600 mb-3">
                            Topic: {appearance.topic}
                          </p>
                          <div className="flex items-center text-xs text-medical-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{new Date(appearance.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href={appearance.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="medical-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="trust-card p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-professional-navy mb-4">
                Join the Conversation
              </h3>
              <p className="text-medical-gray-600 mb-6">
                Stay updated with weekly insights on healthcare innovation. 
                Subscribe to never miss an episode.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="medical-button-primary" asChild>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Youtube className="mr-2 h-4 w-4" />
                    Subscribe on YouTube
                  </a>
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Podcast App
                </Button>
              </div>
              
              <p className="text-xs text-medical-gray-500 mt-6">
                New episodes every Tuesday at 9 AM EST
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Media;