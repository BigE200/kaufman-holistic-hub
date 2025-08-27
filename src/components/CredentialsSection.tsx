import { Card } from '@/components/ui/card';
import { Award, BookOpen, Users, Building, Star, Trophy } from 'lucide-react';

const CredentialsSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Board Certified",
      description: "Internal Medicine",
      color: "text-medical-primary"
    },
    {
      icon: BookOpen,
      title: "Associate Program Director",
      description: "OU Internal Medicine Residency",
      color: "text-trust-blue"
    },
    {
      icon: Building,
      title: "Chief Quality Officer",
      description: "OU Health Sciences Center",
      color: "text-wellness-green"
    },
    {
      icon: Users,
      title: "Medical Director",
      description: "Doctors of Cannabis Network",
      color: "text-medical-secondary"
    }
  ];

  const credentials = [
    {
      degree: "Doctor of Medicine (MD)",
      institution: "University of Oklahoma Health Sciences Center",
      year: "1988-1992"
    },
    {
      degree: "Internal Medicine Residency", 
      institution: "Providence Portland Medical Center",
      year: "1996-1998"
    },
    {
      degree: "Ophthalmology Residency",
      institution: "University of Arkansas for Medical Sciences", 
      year: "1994-1996"
    },
    {
      degree: "Research Fellowship",
      institution: "OMRF Sjogrens Research Group",
      year: "Research Scientist"
    }
  ];

  const affiliations = [
    "Founder & Medical Director - Doctors of Cannabis",
    "Founder & Medical Director - Holistically Rx", 
    "Assistant Professor of Medicine - OU Health Sciences",
    "Internal Medicine Residency Clinic Medical Director"
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-professional-navy mb-4">
            Awards & <span className="text-medical-primary">Credentials</span>
          </h2>
          <p className="text-lg sm:text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Over 30 years of medical excellence, research, and innovation in patient-centered care
          </p>
        </div>

        {/* Key Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 text-center border border-medical-gray-200 hover:shadow-lg transition-shadow">
              <div className={`mx-auto w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4`}>
                <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
              </div>
              <h3 className="font-semibold text-professional-navy mb-2">{achievement.title}</h3>
              <p className="text-sm text-medical-gray-600">{achievement.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-6">
              <Trophy className="h-6 w-6 text-medical-primary mr-3" />
              <h3 className="text-2xl font-bold text-professional-navy">Education & Training</h3>
            </div>
            <div className="space-y-4">
              {credentials.map((cred, index) => (
                <div key={index} className="border-l-2 border-medical-primary pl-4 py-2">
                  <h4 className="font-semibold text-professional-navy">{cred.degree}</h4>
                  <p className="text-medical-gray-600">{cred.institution}</p>
                  <p className="text-sm text-medical-gray-500">{cred.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Affiliations */}
          <div>
            <div className="flex items-center mb-6">
              <Star className="h-6 w-6 text-medical-primary mr-3" />
              <h3 className="text-2xl font-bold text-professional-navy">Leadership & Innovation</h3>
            </div>
            <div className="space-y-3">
              {affiliations.map((affiliation, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-medical-gray-600">{affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-medical-primary/5 to-trust-blue/5 border-medical-primary/20">
            <blockquote className="text-xl sm:text-2xl text-professional-navy italic mb-4">
              "Champion for patient-centered, affordable and integrative health care. 
              Co-founder and medical director passionate about advancing medical cannabis education and accessibility."
            </blockquote>
            <cite className="text-medical-primary font-semibold">- Erick Kaufman MD</cite>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;