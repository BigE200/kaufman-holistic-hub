import { Helmet } from 'react-helmet-async';

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image?: string;
  sameAs?: string[];
}

interface OrganizationSchemaProps {
  name: string;
  description: string;
  url: string;
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType: string;
  };
}

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  dateModified?: string;
}

// Medical Professional Schema
export const PersonSchema = ({ name, jobTitle, description, url, image, sameAs }: PersonSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "url": url,
    "image": image,
    "sameAs": sameAs,
    "knowsAbout": [
      "Integrative Medicine",
      "Alternative Medicine", 
      "Medical Cannabis",
      "Holistic Healthcare",
      "Telehealth",
      "Functional Medicine"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Medical Doctor",
      "occupationLocation": "United States",
      "skills": ["Integrative Medicine", "Alternative Therapies", "Medical Cannabis Consultation"]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Organization Schema
export const OrganizationSchema = ({ name, description, url, contactPoint }: OrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${url}#organization`,
    "name": name,
    "description": description,
    "url": url,
    "contactPoint": contactPoint ? {
      "@type": "ContactPoint",
      "telephone": contactPoint.telephone,
      "email": contactPoint.email,
      "contactType": contactPoint.contactType,
      "availableLanguage": "English"
    } : undefined,
    "medicalSpecialty": [
      "Integrative Medicine",
      "Alternative Medicine",
      "Medical Cannabis",
      "Holistic Healthcare"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// FAQ Schema for AI Optimization
export const FAQSchema = ({ questions }: FAQSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// WebPage Schema
export const WebPageSchema = ({ name, description, url, dateModified }: WebPageSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "name": name,
    "description": description,
    "url": url,
    "dateModified": dateModified || new Date().toISOString(),
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://drerickkaufman.com#website",
      "name": "Dr. Erick Kaufman, MD",
      "url": "https://drerickkaufman.com"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Medical Service Schema
export const MedicalServiceSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://drerickkaufman.com#medicalbusiness",
    "name": "Dr. Erick Kaufman, MD - Integrative Medicine",
    "description": "Board certified physician specializing in integrative medicine, alternative therapies, and medical cannabis consultation.",
    "url": "https://drerickkaufman.com",
    "telephone": "+1-555-0123",
    "email": "contact@drerickkaufman.com",
    "medicalSpecialty": [
      "Integrative Medicine",
      "Alternative Medicine", 
      "Medical Cannabis Consultation",
      "Holistic Healthcare"
    ],
    "serviceType": [
      "Telehealth Consultation",
      "Medical Cannabis Guidance",
      "Integrative Medicine Planning",
      "Alternative Therapy Consultation"
    ],
    "areaServed": "United States",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Medical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Integrative Medicine Consultation",
            "description": "Comprehensive integrative medicine consultation focusing on root-cause analysis and personalized treatment plans."
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Medical Cannabis Consultation",
            "description": "Professional medical cannabis consultation and guidance for therapeutic applications."
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// WebSite Schema with Search Action
export const WebSiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://drerickkaufman.com#website",
    "name": "Dr. Erick Kaufman, MD",
    "description": "Board Certified Integrative Medicine Physician specializing in alternative therapies and holistic healthcare.",
    "url": "https://drerickkaufman.com",
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://drerickkaufman.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Person",
      "@id": "https://drerickkaufman.com#person",
      "name": "Dr. Erick Kaufman, MD"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};