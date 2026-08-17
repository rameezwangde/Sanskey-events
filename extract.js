import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleries = {
  tydal: {
    title: 'Tydal Events Archive',
    subtitle: '2000 to 2010',
    images: [
      '/tydal/image.png', '/tydal/image copy.png', '/tydal/image copy 2.png',
      '/tydal/image copy 3.png', '/tydal/image copy 4.png', '/tydal/image copy 5.png'
    ]
  },
  surge: {
    title: 'Surge Launch',
    subtitle: 'Product Showcase',
    images: [
      '/surge/image.png', '/surge/image copy.png', '/surge/image copy 2.png',
      '/surge/image copy 3.png', '/surge/image copy 4.png'
    ]
  },
  dacss: {
    title: 'Dacss Granite',
    subtitle: 'Corporate Event',
    images: [
      '/Dacss Granite/image copy 2.png', '/Dacss Granite/image copy.png', '/Dacss Granite/image.png'
    ]
  },
  eknirangan: {
    title: 'Ek Nirangan',
    subtitle: 'Movie Launch',
    images: [
      '/Ek nirangan movie launch/image copy 2.png', '/Ek nirangan movie launch/image copy.png', '/Ek nirangan movie launch/image.png'
    ]
  },
  tamanna: {
    title: 'Tamanna Event',
    subtitle: 'Live Event',
    images: [
      '/Tamanna Event/image copy 2.png', '/Tamanna Event/image copy 3.png',
      '/Tamanna Event/image copy.png', '/Tamanna Event/image.png'
    ]
  },
  sagascious: {
    title: 'Sagascious Show 2012',
    subtitle: 'Live Event',
    images: [
      '/sagascious show 2012/image copy 10.png', '/sagascious show 2012/image copy 11.png',
      '/sagascious show 2012/image copy 12.png', '/sagascious show 2012/image copy 2.png',
      '/sagascious show 2012/image copy 3.png', '/sagascious show 2012/image copy 4.png',
      '/sagascious show 2012/image copy 5.png', '/sagascious show 2012/image copy 6.png',
      '/sagascious show 2012/image copy 7.png', '/sagascious show 2012/image copy 8.png',
      '/sagascious show 2012/image copy 9.png', '/sagascious show 2012/image copy.png',
      '/sagascious show 2012/image.png'
    ]
  },
  iift: {
    title: 'IIFT Bangalore 2012',
    subtitle: 'Institution Event',
    images: [
      '/iift bangalore 2012/image copy 2.png', '/iift bangalore 2012/image copy 3.png',
      '/iift bangalore 2012/image copy 4.png', '/iift bangalore 2012/image copy 5.png',
      '/iift bangalore 2012/image copy 6.png', '/iift bangalore 2012/image copy.png',
      '/iift bangalore 2012/image.png'
    ]
  },
  newyear: {
    title: 'New Year 2012',
    subtitle: 'Celebration',
    images: [
      '/new year 2012/image copy.png', '/new year 2012/image.png'
    ]
  },
  acc: {
    title: 'ACC 2012',
    subtitle: 'Corporate Event',
    images: [
      '/acc 2012/image.png'
    ]
  },
  imark: {
    title: 'IMARK 2012',
    subtitle: 'Marketing Event',
    images: [
      '/IMARK 2012/image copy 2.png', '/IMARK 2012/image copy 3.png',
      '/IMARK 2012/image copy 4.png', '/IMARK 2012/image copy 5.png',
      '/IMARK 2012/image copy 6.png', '/IMARK 2012/image copy.png',
      '/IMARK 2012/image.png'
    ]
  },
  hassan: {
    title: 'Hassan Rainbow 2012',
    subtitle: 'Cultural Event',
    images: [
      '/Hassan Rainbow 2012/image copy 2.png', '/Hassan Rainbow 2012/image copy 3.png',
      '/Hassan Rainbow 2012/image copy 4.png', '/Hassan Rainbow 2012/image copy.png',
      '/Hassan Rainbow 2012/image.png'
    ]
  },
  raichur: {
    title: 'Raichur Show 2012',
    subtitle: 'Exhibition',
    images: [
      '/raichur show 2012/image copy.png', '/raichur show 2012/image.png'
    ]
  },
  amet2011: {
    title: 'Amet Cruise Event 2011',
    subtitle: 'Cruise Event',
    images: [
      '/Amet Cruise Event 2011/image copy 2.png', '/Amet Cruise Event 2011/image copy.png',
      '/Amet Cruise Event 2011/image.png'
    ]
  },
  acc2011: {
    title: 'ACC Cement 2011',
    subtitle: 'Corporate Event',
    images: [
      '/ACC Cement 2011/image copy 2.png', '/ACC Cement 2011/image copy 3.png',
      '/ACC Cement 2011/image copy.png', '/ACC Cement 2011/image.png'
    ]
  },
  sony2011: {
    title: 'Sony Show 2011',
    subtitle: 'Electronics Expo',
    images: [
      '/sony show 2011/image copy 2.png', '/sony show 2011/image copy 3.png',
      '/sony show 2011/image copy 4.png', '/sony show 2011/image copy.png',
      '/sony show 2011/image.png'
    ]
  },
  misssouth2011: {
    title: 'India Miss South 2011',
    subtitle: 'Beauty Pageant',
    images: [
      '/INDIA MISS SOUTH 2011/image copy 2.png', '/INDIA MISS SOUTH 2011/image copy 3.png',
      '/INDIA MISS SOUTH 2011/image copy 4.png', '/INDIA MISS SOUTH 2011/image copy 5.png',
      '/INDIA MISS SOUTH 2011/image copy.png', '/INDIA MISS SOUTH 2011/image.png'
    ]
  },
  newyearsalem2011: {
    title: 'New Year Show Salem 2011',
    subtitle: 'Celebration',
    images: [
      '/New year show salem 2011/image copy 2.png', '/New year show salem 2011/image copy 3.png',
      '/New year show salem 2011/image copy 4.png', '/New year show salem 2011/image copy 5.png',
      '/New year show salem 2011/image copy 6.png', '/New year show salem 2011/image copy 7.png',
      '/New year show salem 2011/image copy.png', '/New year show salem 2011/image.png'
    ]
  },
  django2011: {
    title: 'Django Hubli 2011',
    subtitle: 'Live Event',
    images: [
      '/Django Hubli 2011/image copy 2.png', '/Django Hubli 2011/image copy.png',
      '/Django Hubli 2011/image.png'
    ]
  },
  princess2011: {
    title: 'Princess 2011 & Miss Sankey',
    subtitle: 'Beauty Pageant',
    images: [
      '/princess 2011 & miss sankey/image copy 2.png', '/princess 2011 & miss sankey/image copy 3.png',
      '/princess 2011 & miss sankey/image copy.png', '/princess 2011 & miss sankey/image.png'
    ]
  },
  salem2013: {
    title: 'Salem Show 2013',
    subtitle: 'Live Event',
    images: [
      '/salem show 2013/image copy 2.png', '/salem show 2013/image copy 3.png',
      '/salem show 2013/image copy 4.png', '/salem show 2013/image copy 5.png',
      '/salem show 2013/image copy.png', '/salem show 2013/image.png'
    ]
  },
  gardencity2013: {
    title: 'Miss Gardencity 2013',
    subtitle: 'Fashion Event',
    images: [
      '/miss gardencity 2013/image copy 2.png', '/miss gardencity 2013/image copy 3.png',
      '/miss gardencity 2013/image copy 4.png', '/miss gardencity 2013/image copy.png',
      '/miss gardencity 2013/image.png'
    ]
  },
  hangyo2013: {
    title: 'Hangyo Ice Cream 2013',
    subtitle: 'Brand Promotion',
    images: [
      '/hangyo ice cream 2013/image copy 2.png', '/hangyo ice cream 2013/image copy 3.png',
      '/hangyo ice cream 2013/image copy 4.png', '/hangyo ice cream 2013/image copy.png',
      '/hangyo ice cream 2013/image.png'
    ]
  },
  samsung2013: {
    title: 'Samsung 2013',
    subtitle: 'Product Launch',
    images: [
      '/samsung 2013/image copy 2.png', '/samsung 2013/image copy.png', '/samsung 2013/image.png'
    ]
  },
  sony2013: {
    title: 'Sony Show 2013',
    subtitle: 'Electronics Expo',
    images: [
      '/sony show 2013/image copy 2.png', '/sony show 2013/image copy 3.png',
      '/sony show 2013/image copy 4.png', '/sony show 2013/image copy.png',
      '/sony show 2013/image.png'
    ]
  },
  kerala2013: {
    title: 'Kerala Handloom 2013',
    subtitle: 'Exhibition',
    images: [
      '/kerala hand loom technology 2013/image copy 2.png', '/kerala hand loom technology 2013/image copy 3.png',
      '/kerala hand loom technology 2013/image copy 4.png', '/kerala hand loom technology 2013/image copy.png',
      '/kerala hand loom technology 2013/image.png'
    ]
  },
  itpl2013: {
    title: 'ITPL Show on 31st',
    subtitle: 'New Year Event',
    images: [
      '/ITPL show on 31st 2013/image copy 2.png', '/ITPL show on 31st 2013/image copy.png',
      '/ITPL show on 31st 2013/image.png'
    ]
  },
  iift2013: {
    title: 'IIFT 2013',
    subtitle: 'Institution Event',
    images: [
      '/IIFT 2013/image copy 2.png', '/IIFT 2013/image copy 3.png',
      '/IIFT 2013/image copy 4.png', '/IIFT 2013/image copy.png', '/IIFT 2013/image.png'
    ]
  },
  sriganesh2013: {
    title: 'Sri Ganesh Diamonds',
    subtitle: 'Jewellery Expo',
    images: [
      '/sri ganesh diamonds & jewellery 2013/image copy.png', '/sri ganesh diamonds & jewellery 2013/image.png'
    ]
  },
  shravana2013: {
    title: 'Shravana Banthu 2013',
    subtitle: 'Cultural Fest',
    images: [
      '/shravana banthu sharavana 2013/image copy 2.png', '/shravana banthu sharavana 2013/image copy 3.png',
      '/shravana banthu sharavana 2013/image copy 4.png', '/shravana banthu sharavana 2013/image copy 5.png',
      '/shravana banthu sharavana 2013/image copy.png', '/shravana banthu sharavana 2013/image.png'
    ]
  },
  tripunithura2013: {
    title: 'Tripunithura Show 2013',
    subtitle: 'Live Event',
    images: [
      '/Tripunithura Show 2013/image.png'
    ]
  }
};

const eventSections = [
  {
    eyebrow: 'Our Journey',
    title: 'Events from 2000 to 2010',
    description: 'A decade of unforgettable moments, extraordinary experiences and successful celebrations.',
    start: '2000',
    end: '2010',
    footer: 'Milestones that inspire. Memories that last.',
    items: ['tydal', 'surge', 'dacss', 'eknirangan', 'tamanna']
  },
  {
    eyebrow: 'Our Journey',
    title: 'Events from 2011',
    description: 'A year of energetic showcases, brand celebrations and memorable live experiences.',
    start: '2011',
    end: '2011',
    footer: 'Celebrations shaped with precision.',
    items: ['amet2011', 'acc2011', 'sony2011', 'misssouth2011', 'newyearsalem2011', 'django2011', 'princess2011']
  },
  {
    eyebrow: 'Our Journey',
    title: 'Events from 2012',
    description: 'Distinctive launches, cultural evenings and corporate experiences across the year.',
    start: '2012',
    end: '2012',
    footer: 'Experiences crafted to be remembered.',
    items: ['sagascious', 'imark', 'iift', 'hassan', 'newyear', 'raichur', 'acc']
  },
  {
    eyebrow: 'Our Journey',
    title: 'Events from 2013',
    description: 'Fashion, entertainment, exhibitions and brand moments brought together with care.',
    start: '2013',
    end: '2013',
    footer: 'Every detail. Every occasion.',
    items: ['salem2013', 'gardencity2013', 'hangyo2013', 'samsung2013', 'sony2013', 'kerala2013', 'itpl2013', 'iift2013', 'sriganesh2013', 'shravana2013', 'tripunithura2013']
  }
];

Object.keys(galleries).forEach(key => {
  const event = galleries[key];
  event.id = key;
  fs.writeFileSync(path.join(__dirname, 'src', 'data', 'events', `${key}.json`), JSON.stringify(event, null, 2));
});

eventSections.forEach((section, idx) => {
  fs.writeFileSync(path.join(__dirname, 'src', 'data', 'event_sections', `section_${idx}.json`), JSON.stringify(section, null, 2));
});

console.log("Done extracting events!");
