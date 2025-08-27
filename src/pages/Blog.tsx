import { useState } from 'react';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Medical Cannabis', 'Telehealth', 'Integrative Medicine', 'Healthcare Innovation', 'State Guides'];

  const blogPosts = [
    {
      id: 1,
      title: "Benefits of Medical Cannabis for Chronic Pain Management",
      excerpt: "Exploring the evidence-based applications of medical cannabis in treating chronic pain conditions and improving quality of life for patients.",
      author: "Dr. Erick Kaufman",
      date: "2024-01-15",
      category: "Medical Cannabis",
      readTime: "8 min read",
      featured: true,
      tags: ["chronic pain", "medical cannabis", "patient care"]
    },
    {
      id: 2,
      title: "How Telemedicine Enhances Holistic Healthcare Delivery",
      excerpt: "Understanding how telehealth platforms can provide comprehensive, patient-centered care while maintaining the personal touch of traditional medicine.",
      author: "Dr. Erick Kaufman",
      date: "2024-01-10",
      category: "Telehealth",
      readTime: "6 min read",
      featured: false,
      tags: ["telehealth", "patient experience", "accessibility"]
    },
    {
      id: 3,
      title: "Building Trust in Healthcare Through Patient Feedback Systems",
      excerpt: "How implementing transparent feedback loops transforms the doctor-patient relationship and improves healthcare outcomes.",
      author: "Dr. Erick Kaufman",
      date: "2024-01-08",
      category: "Healthcare Innovation",
      readTime: "7 min read",
      featured: false,
      tags: ["trust", "feedback", "patient satisfaction", "Trustmary"]
    },
    {
      id: 4,
      title: "Oklahoma Medical Marijuana: A Complete Guide for Patients",
      excerpt: "Everything Oklahoma residents need to know about obtaining and using medical marijuana legally and safely in the state.",
      author: "Dr. Erick Kaufman",
      date: "2024-01-05",
      category: "State Guides",
      readTime: "12 min read",
      featured: false,
      tags: ["Oklahoma", "medical marijuana", "state regulations", "patient guide"]
    },
    {
      id: 5,
      title: "The Future of Integrative Medicine in Primary Care",
      excerpt: "Examining how integrative approaches are reshaping primary care and creating better outcomes for patients across all demographics.",
      author: "Dr. Erick Kaufman",
      date: "2024-01-03",
      category: "Integrative Medicine",
      readTime: "9 min read",
      featured: false,
      tags: ["primary care", "integrative medicine", "healthcare trends"]
    },
    {
      id: 6,
      title: "Cannabis Certification: What Healthcare Providers Need to Know",
      excerpt: "A comprehensive guide for healthcare professionals interested in incorporating medical cannabis into their practice.",
      author: "Dr. Erick Kaufman",
      date: "2024-01-01",
      category: "Medical Cannabis",
      readTime: "10 min read",
      featured: false,
      tags: ["certification", "healthcare providers", "medical cannabis", "education"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}
      <section className="medical-section bg-medical-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-professional-navy mb-6">
              Medical Insights & Research
            </h1>
            <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
              Evidence-based articles on integrative medicine, medical cannabis, telehealth, 
              and healthcare innovation from Dr. Erick Kaufman.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-medical-gray-400" />
              <Input
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "medical-button-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="medical-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-professional-navy mb-8">Featured Article</h2>
            
            <Card className="trust-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-medical-primary/5 p-8 flex items-center">
                  <div>
                    <Badge className="mb-4 bg-medical-primary text-white">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-professional-navy mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-medical-gray-600 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center text-sm text-medical-gray-500 mb-6">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                      <span>{featuredPost.readTime}</span>
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
                    <p>Featured Article Image</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="medical-section bg-medical-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-professional-navy">Latest Articles</h2>
            <p className="text-medical-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="trust-card group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-professional-navy mb-3 group-hover:text-medical-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-medical-gray-600 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-xs text-medical-gray-500 mb-4">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
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
            ))}
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

export default Blog;