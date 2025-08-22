
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gsmart GmbH",
  "alternateName": "Gsmart",
  "url": "https://smartheizoel.de",
  "logo": "https://i.imgur.com/jOSkXXt.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-217-385229-38",
    "contactType": "customer service",
    "email": "info@smartheizoel.de",
    "availableLanguage": "German"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rheinpromenade 4 a",
    "addressLocality": "Monheim a. Rhein",
    "postalCode": "40789",
    "addressCountry": "DE"
  },
  "foundingDate": "2018",
  "numberOfEmployees": "10-50",
  "description": "Deutschlands günstigster Heizöl-Händler seit 2018. Heizöl ab 70 Cent pro Liter mit kostenloser Lieferung ab 2.000L deutschlandweit.",
  "areaServed": {
    "@type": "Country",
    "name": "Germany"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": "Heizöl",
      "description": "Premium Heizöl für Privat- und Geschäftskunden"
    },
    "price": "0.70",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  },
  "sameAs": [
    "https://www.facebook.com/smartheizoel",
    "https://www.instagram.com/smartheizoel"
  ]
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gsmart GmbH",
  "image": "https://i.imgur.com/jOSkXXt.png",
  "@id": "https://smartheizoel.de",
  "url": "https://smartheizoel.de",
  "telephone": "+49-217-385229-38",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rheinpromenade 4 a",
    "addressLocality": "Monheim a. Rhein",
    "postalCode": "40789",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.4521,
    "longitude": 11.0767
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "100000"
  }
};
