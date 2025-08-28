import { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Tag, Play, Youtube, Download, ExternalLink, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

const ContentLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');

  const formats = ['All', 'Article', 'Podcast', 'Video', 'Course', 'Media Appearance'];
  const topics = ['All', 'Medical Cannabis', 'Telehealth', 'Integrative Medicine', 'Healthcare Innovation', 'State Guides', 'Professional Education'];

  const allContent = [
    // Articles
    {
      id: 1,
      type: 'article',
      title: "Benefits of Medical Cannabis for Chronic Pain Management",
      excerpt: "Exploring the evidence-based applications of medical cannabis in treating chronic pain conditions and improving quality of life for patients.",
      author: "Dr. Erick Kaufman",
      date: "2024-01-15",
      topic: "Medical Cannabis",
      readTime: "8 min read",
      featured: true,
      tags: ["chronic pain", "medical cannabis", "patient care"],
      format: "Article"
    },
    {
      id: 2,
      type: 'article',
      title: "How Telemedicine Enhances Holistic Healthcare Delivery",
      excerpt: "Understanding how telehealth platforms can provide comprehensive, patient-centered care while maintaining the personal touch of traditional medicine.",
      author: "Dr. Erick Kaufman",
      date: "2024-01-10",
      topic: "Telehealth",
      readTime: "6 min read",
      featured: false,
      tags: ["telehealth", "patient experience", "accessibility"],
      format: "Article"
    },
    {
      id: 3,
      type: 'article',
      title: "Building Trust in Healthcare Through Patient Feedback Systems",
      excerpt: "How implementing transparent feedback loops transforms the doctor-patient relationship and improves healthcare outcomes.",
      author: "Dr. Erick Kaufman",
      date: "2024-01-08",
      topic: "Healthcare Innovation",
      readTime: "7 min read",
      featured: false,
      tags: ["trust", "feedback", "patient satisfaction", "Trustmary"],
      format: "Article"
    },
    {
      id: 4,
      type: 'article',
      title: "Oklahoma Medical Marijuana: A Complete Guide for Patients",
      excerpt: "Everything Oklahoma residents need to know about obtaining and using medical marijuana legally and safely in the state.",
      author: "Dr. Erick Kaufman",
      date: "2024-01-05",
      topic: "State Guides",
      readTime: "12 min read",
      featured: false,
      tags: ["Oklahoma", "medical marijuana", "state regulations", "patient guide"],
      format: "Article"
    },
    // Podcasts
    {
      id: 5,
      type: 'podcast',
      title: "Cannabis Certification: A Guide for Healthcare Professionals",
      excerpt: "Comprehensive overview of medical cannabis certification processes and requirements for healthcare providers.",
      author: "Dr. Erick Kaufman",
      date: "2024-01-20",
      topic: "Professional Education",
      duration: "45:30",
      featured: false,
      tags: ["certification", "healthcare providers", "medical cannabis", "education"],
      format: "Podcast",
      thumbnail: "/api/placeholder/400/225",
      videoId: "placeholder-video-1"
    },
    {
      id: 6,
      type: 'podcast',
      title: "Building Trust in Telemedicine: The Feedback Revolution",
      excerpt: "How patient feedback systems are transforming telehealth and creating better doctor-patient relationships.",
      author: "Dr. Erick Kaufman",
      date: "2024-01-15",
      topic: "Healthcare Innovation",
      duration: "38:15",
      featured: false,
      tags: ["telehealth", "feedback", "trust"],
      format: "Podcast",
      thumbnail: "/api/placeholder/400/225",
      videoId: "placeholder-video-2"
    },
    {
      id: 7,
      type: 'podcast',
      title: "Integrative Medicine: Bridging Traditional and Holistic Care",
      excerpt: "Exploring the principles and practices of integrative medicine in modern healthcare settings.",
      author: "Dr. Erick Kaufman",
      date: "2024-01-10",
      topic: "Integrative Medicine",
      duration: "42:20",
      featured: false,
      tags: ["integrative medicine", "holistic care", "healthcare trends"],
      format: "Podcast",
      thumbnail: "/api/placeholder/400/225",
      videoId: "placeholder-video-3"
    },
    // Media Appearances
    {
      id: 8,
      type: 'media',
      title: "Healthcare Innovation Podcast",
      excerpt: "The Future of Telehealth in Integrative Medicine",
      author: "Dr. Erick Kaufman",
      date: "2024-01-25",
      topic: "Healthcare Innovation",
      outlet: "MedTech Today",
      featured: false,
      tags: ["telehealth", "integrative medicine", "innovation"],
      format: "Media Appearance",
      link: "#",
      mediaType: "Podcast"
    },
    {
      id: 9,
      type: 'media',
      title: "Cannabis & Medicine Summit",
      excerpt: "Building Trust in Medical Cannabis Practice",
      author: "Dr. Erick Kaufman",
      date: "2024-01-18",
      topic: "Medical Cannabis",
      outlet: "Medical Cannabis Conference",
      featured: false,
      tags: ["medical cannabis", "trust", "practice management"],
      format: "Media Appearance",
      link: "#",
      mediaType: "Speaking Engagement"
    }
  ];

  const filteredContent = allContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFormat = selectedFormat === 'All' || item.format === selectedFormat;
    const matchesTopic = selectedTopic === 'All' || item.topic === selectedTopic;
    return matchesSearch && matchesFormat && matchesTopic;
  });

  const featuredContent = allContent.find(item => item.featured);
  const regularContent = filteredContent.filter(item => !item.featured);

  const renderContentCard = (item) => {
    if (item.type === 'article') {
      return (
        <Card key={item.id} className="trust-card group hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline">
                  {item.format}
                </Badge>
                <Badge variant="secondary">
                  {item.topic}
                </Badge>
              </div>
              <h3 className="text-xl font-semibold text-professional-navy mb-3 group-hover:text-medical-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-medical-gray-600 text-sm leading-relaxed">
                {item.excerpt}
              </p>
            </div>
            
            <div className="flex items-center text-xs text-medical-gray-500 mb-4">
              <Calendar className="h-3 w-3 mr-1" />
              <span className="mr-3">{new Date(item.date).toLocaleDateString()}</span>
              <span>{item.readTime}</span>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {item.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <Button variant="ghost" className="text-medical-primary hover:text-medical-accent p-0">
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      );
    }

    if (item.type === 'podcast') {
      return (
        <Card key={item.id} className="trust-card group hover:shadow-lg transition-all duration-300">
          <div className="relative">
            <div className="bg-medical-gray-100 aspect-video flex items-center justify-center">
              <Youtube className="h-12 w-12 text-medical-gray-400" />
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <Button 
                size="sm"
                className="opacity-0 group-hover:opacity-100 bg-white/90 hover:bg-white text-professional-navy rounded-full"
              >
                <Play className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {item.duration}
            </div>
          </div>
          
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline">
                {item.format}
              </Badge>
              <Badge variant="secondary">
                {item.topic}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-professional-navy mb-3 group-hover:text-medical-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-medical-gray-600 text-sm mb-4">
              {item.excerpt}
            </p>
            
            <div className="flex items-center text-xs text-medical-gray-500">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{new Date(item.date).toLocaleDateString()}</span>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (item.type === 'media') {
      return (
        <Card key={item.id} className="trust-card">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">
                    {item.format}
                  </Badge>
                  <Badge variant="secondary">
                    {item.mediaType}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-professional-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-medical-gray-600 mb-2">
                  {item.outlet}
                </p>
                <p className="text-sm text-medical-gray-600 mb-3">
                  Topic: {item.excerpt}
                </p>
                <div className="flex items-center text-xs text-medical-gray-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="medical-section bg-medical-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-professional-navy mb-6">
              Content Library
            </h1>
            <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
              Comprehensive resources on integrative medicine, medical cannabis, telehealth, 
              and healthcare innovation from Dr. Erick Kaufman.
            </p>
          </div>

          {/* Search */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-medical-gray-400" />
              <Input
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Format Filter */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-medical-gray-700 mb-3">Format</h3>
            <div className="flex flex-wrap gap-2">
              {formats.map((format) => (
                <Button
                  key={format}
                  variant={selectedFormat === format ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFormat(format)}
                  className={selectedFormat === format ? "medical-button-primary" : ""}
                >
                  {format}
                </Button>
              ))}
            </div>
          </div>

          {/* Topic Filter */}
          <div className="mb-12">
            <h3 className="text-sm font-medium text-medical-gray-700 mb-3">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <Button
                  key={topic}
                  variant={selectedTopic === topic ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTopic(topic)}
                  className={selectedTopic === topic ? "medical-button-primary" : ""}
                >
                  {topic}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      {featuredContent && (
        <section className="medical-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-professional-navy mb-8">Featured Content</h2>
            
            <Card className="trust-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-medical-primary/5 p-8 flex items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-medical-primary text-white">
                        {featuredContent.format}
                      </Badge>
                      <Badge variant="outline">
                        {featuredContent.topic}
                      </Badge>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-professional-navy mb-4">
                      {featuredContent.title}
                    </h3>
                    <p className="text-medical-gray-600 mb-6">
                      {featuredContent.excerpt}
                    </p>
                    
                    <div className="flex items-center text-sm text-medical-gray-500 mb-6">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredContent.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{new Date(featuredContent.date).toLocaleDateString()}</span>
                      <span>{featuredContent.readTime}</span>
                    </div>
                    
                    <Button className="medical-button-primary">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-medical-gray-100 min-h-[300px] flex items-center justify-center">
                  <div className="text-center text-medical-gray-500">
                    <Tag className="h-16 w-16 mx-auto mb-4" />
                    <p>Featured Content</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Content Grid */}
      <section className="medical-section bg-medical-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-professional-navy">All Content</h2>
            <p className="text-medical-gray-600">
              Displaying 1-{Math.min(regularContent.length, 34)} of {filteredContent.length} results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularContent.map((item) => renderContentCard(item))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="medical-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="trust-card p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-professional-navy mb-4">
                Stay Updated on Healthcare Innovation
              </h3>
              <p className="text-medical-gray-600 mb-6">
                Get the latest insights on integrative medicine, medical cannabis research, 
                and telehealth innovations delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button className="medical-button-primary">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-xs text-medical-gray-500 mt-4">
                HIPAA-compliant. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
      <AIChat />
    </div>
  );
};

export default ContentLibrary;