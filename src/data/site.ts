// All company facts live here. Values marked PENDING come from the manager
// (see docs/needs.md); the pages hide or fall back gracefully while they are empty.

export const company = {
  name: 'T-LOGISTICS Inc',
  legalName: 'T LOGISTICS INC',
  city: 'Saint Charles',
  state: 'MO',
  street: '1360 S 5th Street, Suite 336G',
  zip: '63301',
  phone: '+1 (636) 452-2222',
  phoneHref: 'tel:+16364522222',
  email: 'info@t-logisticsinc.com',
  mc: '1255214',
  dot: '3640305',
  authoritySince: 'December 2023',
};

export const fullAddress = `${company.street}, ${company.city}, ${company.state} ${company.zip}`;

export const links = {
  // PENDING: the company's own Tenstreet application link.
  // While empty, the driver page offers phone and email instead of a dead button.
  tenstreet: '',
  // HIDDEN: the FMCSA SAFER snapshot link did not open (403). Put a verified link here to show it again
  // in the footer, stats row and "Why shippers" text, e.g. the SAFER company snapshot for USDOT ${company.dot}.
  fmcsa: '',
  maps: `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`,
};

// Static figures, no count-up animation. Source: current site CMS. PENDING confirmation.
export const stats = [
  { value: '48', label: 'Contiguous states covered' },
  { value: '1,000+', label: 'Loads delivered' },
  { value: '24/7', label: 'Dispatch on the phone' },
];

export const primaryService = {
  title: 'Dry van freight',
  body:
    'Our 53-foot dry van trailers keep freight enclosed, dry and secure from pickup to delivery. We run full truckloads and take partial loads when the lane fits.',
  hauls: [
    'Retail and commercial distribution',
    'Manufacturing supply',
    'E-commerce fulfillment',
    'Cross-dock transfers',
  ],
};

// photo: name of a file set in public/photos (TEMPORARY stock photos, see src/data/credits.ts).
export const services = [
  {
    id: 'full-truckload', icon: 'truck', photo: 'svc-ftl', title: 'Full truckload',
    body: 'The whole 53 ft trailer is yours. No extra stops and no transfers between pickup and delivery.',
  },
  {
    id: 'partial', icon: 'pallet', photo: 'svc-partial', title: 'Partial and LTL loads',
    body: 'Smaller shipments share trailer space on a matching lane, so you pay for the space you use.',
  },
  {
    id: 'door-to-door', icon: 'pin', photo: 'svc-door', title: 'Door-to-door delivery',
    body: 'We pick up at your dock and deliver to the receiver. One carrier, one point of contact.',
  },
  {
    id: 'expedited', icon: 'bolt', photo: 'svc-expedited', title: 'Expedited freight',
    body: 'Time-critical loads get priority dispatch when your freight cannot wait.',
  },
  {
    id: 'tracking', icon: 'gps', photo: null, title: 'GPS tracking',
    body: 'Every truck is GPS tracked. Ask dispatch for the location and ETA of your load at any time.',
  },
  {
    id: 'dedicated', icon: 'route', photo: null, title: 'Dedicated lanes',
    body: 'Recurring freight on a fixed schedule, with capacity held for you on the same lane.',
  },
];

export const reasons = [
  { icon: 'shield', title: 'FMCSA authorized', body: `USDOT ${company.dot} and MC ${company.mc}, public on FMCSA SAFER.` },
  { icon: 'gps', title: 'GPS-tracked trucks', body: 'Location and ETA from dispatch whenever you ask.' },
  { icon: 'clock', title: '24/7 dispatch', body: 'A person answers the phone day and night.' },
  { icon: 'route', title: 'All 48 states', body: 'Coast to coast from our base in Saint Charles, MO.' },
];

// Driver-facing fleet. photo: TEMPORARY stock photo of the same make. PENDING real photos of T-LOGISTICS trucks.
export const fleet = [
  { make: 'Freightliner', photo: 'fleet-freightliner', features: ['Inverter', 'Automatic transmission', 'Combo sleeper', 'APU equipped'] },
  { make: 'Volvo', photo: 'fleet-volvo', features: ['Inverter', 'Automatic transmission', 'Full sleeper', 'Collision mitigation'] },
  { make: 'Mack', photo: 'fleet-mack', features: ['Inverter', 'Automatic transmission', 'Combo sleeper', 'Predictive cruise'] },
];

// Coverage: all 48 contiguous states. The current site lists only 37;
// ID, ME, MT, NH, NM, ND, RI, SD, VT, WV and WY were added. PENDING manager confirmation.
export const regions = [
  { name: 'Midwest', home: true, states: ['MO', 'IL', 'IN', 'OH', 'MI', 'WI', 'MN', 'IA', 'KS', 'NE', 'ND', 'SD'] },
  { name: 'Southeast', home: false, states: ['TN', 'KY', 'GA', 'FL', 'AL', 'MS', 'SC', 'NC', 'VA', 'WV'] },
  { name: 'Northeast', home: false, states: ['NY', 'PA', 'NJ', 'CT', 'MA', 'MD', 'DE', 'RI', 'VT', 'NH', 'ME'] },
  { name: 'South Central', home: false, states: ['TX', 'OK', 'AR', 'LA'] },
  { name: 'West', home: false, states: ['CA', 'AZ', 'NV', 'CO', 'UT', 'OR', 'WA', 'ID', 'MT', 'WY', 'NM'] },
];

// Map shapes for these states: src/data/us-map.json (scripts/build-us-map.mjs).

// PENDING: real customer reviews (name, company, quote, permission to publish).
// The section stays hidden while this list is empty. Template reviews are not used.
export const reviews: { quote: string; name: string; company: string }[] = [];
