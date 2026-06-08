import { useEffect } from 'react';
import { site } from '../data/siteData.js';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.domain}/#anil-prajapati`,
  name: site.name,
  url: `${site.domain}/`,
  image: `${site.domain}${site.image}`,
  jobTitle: 'Web Developer and IT Support Specialist',
  email: `mailto:${site.email}`,
  sameAs: ['https://github.com/hello-anil', 'https://www.instagram.com/anil_prz/'],
  knowsAbout: [
    'Web development',
    'IT support',
    'Network administration',
    'Cybersecurity awareness',
    'Responsive web design',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.domain}/#website`,
  name: site.name,
  alternateName: 'Anil Prajapati Portfolio',
  url: `${site.domain}/`,
  publisher: {
    '@id': `${site.domain}/#anil-prajapati`,
  },
};

const resumeSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${site.domain}/resume#profile`,
  url: `${site.domain}/resume`,
  name: 'Anil Prajapati Resume',
  mainEntity: {
    '@type': 'Person',
    '@id': `${site.domain}/#anil-prajapati`,
    name: site.name,
    url: `${site.domain}/`,
    jobTitle: 'Web Developer and IT Support Specialist',
    email: `mailto:${site.email}`,
    sameAs: ['https://github.com/hello-anil', 'https://www.instagram.com/anil_prz/'],
  },
};

function setMeta(selector, attribute, value) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) tag.setAttribute(match[1], match[2]);
    document.head.appendChild(tag);
  }
  tag.setAttribute(attribute, value);
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

export function useSeo(type = 'home') {
  useEffect(() => {
    const isResume = type === 'resume';
    const isThanks = type === 'thanks';
    const url = isResume ? `${site.domain}/resume` : isThanks ? `${site.domain}/thanks` : `${site.domain}/`;
    const title = isResume ? site.resumeTitle : isThanks ? `Message Sent | ${site.name}` : site.title;
    const description = isResume
      ? site.resumeDescription
      : isThanks
        ? 'Thank you for contacting Anil Prajapati.'
        : site.description;
    const robots = isThanks ? 'noindex, follow' : 'index, follow, max-image-preview:large';

    document.title = title;
    setCanonical(url);
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="robots"]', 'content', robots);
    setMeta('meta[property="og:type"]', 'content', isResume ? 'profile' : 'website');
    setMeta('meta[property="og:site_name"]', 'content', site.name);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:image"]', 'content', `${site.domain}${site.image}`);
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', `${site.domain}${site.image}`);
    setMeta('meta[name="twitter:url"]', 'content', url);

    document.querySelectorAll('script[data-react-schema]').forEach((script) => script.remove());
    const schemas = isResume ? [resumeSchema] : isThanks ? [] : [personSchema, websiteSchema];
    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.reactSchema = 'true';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [type]);
}
