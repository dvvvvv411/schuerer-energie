
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Schürer Energie GmbH",
  "alternateName": "Schürer Energie",
  "url": "https://schuerer-energie.de",
  "logo": "https://i.imgur.com/jOSkXXt.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-911-123456",
    "contactType": "customer service",
    "email": "info@schuerer-energie.de",
    "availableLanguage": "German"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Fürther Str. 252",
    "addressLocality": "Nürnberg",
    "postalCode": "90402",
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
    "https://www.facebook.com/schuererenergie",
    "https://www.instagram.com/schuererenergie"
  ]
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Schürer Energie GmbH",
  "image": "https://i.imgur.com/jOSkXXt.png",
  "@id": "https://schuerer-energie.de",
  "url": "https://schuerer-energie.de",
  "telephone": "+49-911-123456",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Fürther Str. 252",
    "addressLocality": "Nürnberg",
    "postalCode": "90402",
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
