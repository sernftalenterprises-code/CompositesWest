export interface Product {
  slug: string;
  name: string;
  shortName: string;
  brand: 'Hexcel' | 'Toray' | 'FCIM' | 'CFA' | 'Composites West';
  image: string;
  weave: 'Plain' | 'Twill' | 'Satin' | 'Unidirectional' | 'Knit';
  weaveLabel: string;
  tow?: string;
  weightOz: number;
  weightGsm: number;
  widthIn: number;
  lengthIn: number;
  features: string[];
  typicalUse: string[];
  description: string;
  seoDescription: string;
}

export const products: Product[] = [
  {
    slug: 'hexcel-3k-balanced-plain-weave',
    name: 'Hexcel 282 x 50″ 5.8oz/197gsm 3K Balanced Plain Weave Carbon Fiber Fabric',
    shortName: 'Hexcel 282 Plain Weave',
    brand: 'Hexcel',
    image: 'plain-weave',
    weave: 'Plain',
    weaveLabel: 'Balanced Plain Weave',
    tow: '3K',
    weightOz: 5.8,
    weightGsm: 197,
    widthIn: 50,
    lengthIn: 282,
    features: ['Balanced'],
    typicalUse: ['Cosmetic', 'Flat sheets', 'Tubes', '2D curves'],
    description:
      'Hexcel style 282 balanced plain weave carbon fiber fabric, woven from 3K standard-modulus tow at 5.8 oz/yd² (197 gsm) in a 50-inch width. The tight over/under plain weave gives this fabric excellent stability and weave-angle control, making it a go-to choice for flat sheets, tubes, and gentle 2D curves.',
    seoDescription:
      'Hexcel 282 3K balanced plain weave carbon fiber fabric, 5.8 oz/yd² (197 gsm), 50″ wide. From Composites West.',
  },
  {
    slug: 'hexcel-twill-weave',
    name: 'Hexcel 284 x 50″ 5.8oz/197gsm Balanced 2×2 Twill Weave Carbon Fiber Fabric',
    shortName: 'Hexcel 284 2×2 Twill',
    brand: 'Hexcel',
    image: 'twill-2x2',
    weave: 'Twill',
    weaveLabel: 'Balanced 2×2 Twill Weave',
    tow: '3K',
    weightOz: 5.8,
    weightGsm: 197,
    widthIn: 50,
    lengthIn: 284,
    features: ['Balanced', 'Conformable'],
    typicalUse: ['Cosmetic', 'Automotive', 'Complex contours'],
    description:
      'Hexcel style 284 balanced 2×2 twill weave carbon fiber fabric, 3K tow, 5.8 oz/yd² (197 gsm), 50-inch width. The twill pattern offers great pliability for forming complex contours with fewer crimps and stress concentrations — the classic cosmetic carbon look used throughout the automotive industry.',
    seoDescription:
      'Hexcel 284 3K balanced 2×2 twill weave carbon fiber fabric, 5.8 oz/yd² (197 gsm), 50″ wide. The classic cosmetic carbon twill, from Composites West.',
  },
  {
    slug: 'toray-t300-balanced-till-weave-carbon-fiber-fabric',
    name: 'Toray 795 x 60″ 6.1oz/205gsm Balanced Twill Weave Carbon Fiber Fabric',
    shortName: 'Toray TC 795 Twill',
    brand: 'Toray',
    image: 'toray-twill',
    weave: 'Twill',
    weaveLabel: 'Balanced Twill Weave',
    tow: '3K',
    weightOz: 6.1,
    weightGsm: 205,
    widthIn: 60,
    lengthIn: 795,
    features: ['Balanced'],
    typicalUse: ['Cosmetic', 'Automotive', 'Sporting goods'],
    description:
      'Toray TC 795 balanced twill weave carbon fiber fabric woven from T300 3K tow at 6.1 oz/yd² (205 gsm) in an extra-wide 60-inch format. Toray T300 is one of the most widely certified aerospace-grade fibers in the world, and the wide format reduces seams and waste on larger parts.',
    seoDescription:
      'Toray TC 795 T300 3K balanced twill weave carbon fiber fabric, 6.1 oz/yd² (205 gsm), 60″ wide roll. Aerospace-grade fiber from Composites West.',
  },
  {
    slug: '8h-satin-weave-carbon-fiber-fabric',
    name: '938 x 50″ 11oz/372gsm 8H Satin Weave Carbon Fiber Fabric',
    shortName: 'SC 938 8H Satin',
    brand: 'Composites West',
    image: 'satin-8h',
    weave: 'Satin',
    weaveLabel: '8 Harness Satin Weave',
    tow: '3K',
    weightOz: 11,
    weightGsm: 372,
    widthIn: 50,
    lengthIn: 938,
    features: ['Conformable', 'Heavy Weight'],
    typicalUse: ['Tooling', 'Complex contours', 'Aerospace'],
    description:
      'Style SC 938 8-harness satin weave carbon fiber fabric, 3K standard modulus, 11 oz/yd² (372 gsm), 50-inch width. The 8H satin architecture minimizes crimp and drapes beautifully over compound curves, making it a favorite for tooling and complex aerospace laminates where conformability matters.',
    seoDescription:
      '8H satin weave carbon fiber fabric, 3K standard modulus, 11 oz/yd² (372 gsm), 50″ wide. Highly conformable tooling-grade fabric from Composites West.',
  },
  {
    slug: 't700s-12k-balanced-twill-weave-carbon-fiber-fabric',
    name: 'T700s 741 X 50″ 19.8oz/670gsm 12k Balanced Twill Weave Carbon Fiber Fabric',
    shortName: 'T700S TC 741 12K Twill',
    brand: 'Toray',
    image: 't700-12k',
    weave: 'Twill',
    weaveLabel: 'Balanced 2×2 Twill Weave',
    tow: '12K',
    weightOz: 19.8,
    weightGsm: 670,
    widthIn: 50,
    lengthIn: 741,
    features: ['Balanced', 'Heavy Weight'],
    typicalUse: ['Tooling', 'Structural laminates'],
    description:
      'Style TC 741 heavyweight balanced 2×2 twill woven from Toray T700S 12K tow at 19.8 oz/yd² (670 gsm), 50-inch width. T700S delivers higher tensile strength than standard T300, and the heavy areal weight builds thickness fast — ideal for tooling and structural laminates that need fewer plies.',
    seoDescription:
      'Toray T700S 12K balanced 2×2 twill carbon fiber fabric, 19.8 oz/yd² (670 gsm), 50″ wide. Heavyweight structural fabric from Composites West.',
  },
  {
    slug: 'unidirectional-carbon-fiber',
    name: '1143 x 12″ 9.1oz/309gsm Unidirectional Carbon Fiber',
    shortName: 'CFA Unidirectional Tape',
    brand: 'CFA',
    image: 'uni',
    weave: 'Unidirectional',
    weaveLabel: 'Unidirectional (Hot Melt Fill)',
    weightOz: 9.1,
    weightGsm: 309,
    widthIn: 12,
    lengthIn: 1143,
    features: ['Non-crimp'],
    typicalUse: ['Bicycle frames', 'Spar caps', 'Reinforcement strips'],
    description:
      'CFA unidirectional carbon fiber tape, 9.1 oz/yd² (309 gsm) in a 12-inch width. Because the fibers are unwoven and perfectly straight, unidirectional material avoids crimp entirely and delivers unmatched strength and stiffness along the fiber direction — the standard choice for bicycle frames, spar caps, and targeted reinforcement. Other sizes may be available on request.',
    seoDescription:
      'Unidirectional carbon fiber tape, 9.1 oz/yd² (309 gsm), 12″ wide. Maximum strength and stiffness with zero crimp, from Composites West.',
  },
  {
    slug: 'fcim-45-degree-knit-carbon-fiber-fabric',
    name: 'FCIM 320×50″ 3.04oz/103gsm +/- 45 Degree Knit Carbon Fiber Fabric',
    shortName: 'FCIM 320 ±45° Knit',
    brand: 'FCIM',
    image: 'knit-320',
    weave: 'Knit',
    weaveLabel: '±45° Non-Crimp Knit',
    weightOz: 3.04,
    weightGsm: 103,
    widthIn: 50,
    lengthIn: 320,
    features: ['Knit', 'Non-crimp', 'Conformable'],
    typicalUse: ['Torsional reinforcement', 'Tubes', 'Marine'],
    description:
      'FCIM 320 lightweight ±45° knit carbon fiber fabric, 3.04 oz/yd² (103 gsm), 50-inch width. The stitched non-crimp architecture places fibers on a true ±45° bias for maximum torsional stiffness with no weave crimp — perfect where light weight and shear performance both matter.',
    seoDescription:
      'FCIM ±45° knit carbon fiber fabric, 3.04 oz/yd² (103 gsm), 50″ wide. Lightweight non-crimp bias fabric for torsional reinforcement, from Composites West.',
  },
  {
    slug: 'fcim-151x50-45-degree-carbon-fiber-fabric',
    name: 'FCIM 151×50″ 8.9oz/303gsm +/- 45 Degree Knit Carbon Fiber Fabric',
    shortName: 'FCIM 151 ±45° Knit',
    brand: 'FCIM',
    image: 'knit-151',
    weave: 'Knit',
    weaveLabel: '±45° Non-Crimp Knit',
    weightOz: 8.9,
    weightGsm: 303,
    widthIn: 50,
    lengthIn: 151,
    features: ['Knit', 'Non-crimp'],
    typicalUse: ['Torsional reinforcement', 'Marine', 'Industrial'],
    description:
      'FCIM 151 mid-weight ±45° knit carbon fiber fabric, 8.9 oz/yd² (303 gsm), 50-inch width. Stitched non-crimp construction keeps fibers straight on the bias for superior shear and torsional properties, building thickness faster than lightweight knits.',
    seoDescription:
      'FCIM ±45° knit carbon fiber fabric, 8.9 oz/yd² (303 gsm), 50″ wide. Mid-weight non-crimp bias reinforcement from Composites West.',
  },
  {
    slug: 'fcim-105x50-45-degree-knit-carbon-fiber-fabric',
    name: 'FCIM 105×50″ 12oz/408gsm +/- 45 Degree Knit Carbon Fiber Fabric',
    shortName: 'FCIM 105 ±45° Knit',
    brand: 'FCIM',
    image: 'knit-105',
    weave: 'Knit',
    weaveLabel: '±45° Non-Crimp Knit',
    weightOz: 12,
    weightGsm: 408,
    widthIn: 50,
    lengthIn: 105,
    features: ['Knit', 'Non-crimp', 'Heavy Weight'],
    typicalUse: ['Torsional reinforcement', 'Structural laminates'],
    description:
      'FCIM 105 heavyweight ±45° knit carbon fiber fabric, 12 oz/yd² (408 gsm), 50-inch width. The heaviest of our bias knits — stitched non-crimp fibers on a true ±45° orientation deliver maximum shear stiffness per ply for structural and torsional applications.',
    seoDescription:
      'FCIM ±45° knit carbon fiber fabric, 12 oz/yd² (408 gsm), 50″ wide. Heavyweight non-crimp bias reinforcement from Composites West.',
  },
];

export const hex3rWraps = [
  { style: 'Hex-3R Wrap 100', description: '27 oz. unidirectional glass', width: '50″', length: '150 ft.', note: 'Most commonly used products' },
  { style: 'Hex-3R Wrap 101', description: '17 oz. +/- 45 glass', width: '50″', length: '150 ft.' },
  { style: 'Hex-3R Wrap 103', description: '18 oz. unidirectional carbon', width: '25″', length: '300 ft.', note: 'Most commonly used products' },
  { style: 'Hex-3R Wrap 103HS', description: '18 oz. unidirectional carbon – 700 ksi fiber', width: '25″', length: '300 ft.' },
  { style: 'Hex-3R Wrap 106', description: '9.7 oz. woven balanced bidirectional glass', width: '50″', length: '450 ft.', note: 'Most commonly used products' },
  { style: 'Hex-3R Wrap 107', description: '27 oz. unidirectional glass', width: '50″', length: '150 ft.', note: 'Special order' },
  { style: 'Hex-3R Wrap 113', description: '5.8 oz. woven balanced bidirectional carbon', width: '50″', length: '150 ft.' },
  { style: 'Hex-3R Wrap 115', description: '18.7 oz. woven balanced bidirectional carbon', width: '50″', length: '300 ft.' },
  { style: 'Hex-3R Wrap 116', description: '23 oz. +/- 45 glass with 4.5 oz. mat attached', width: '50″', length: '150 ft.' },
  { style: 'Hex-3R Wrap 230-12', description: '6 oz. unidirectional carbon', width: '12″', length: '150 ft.', note: 'Most commonly used products' },
  { style: 'Hex-3R Wrap 230-24', description: '6 oz. unidirectional carbon', width: '24″', length: '150 ft.', note: 'Most commonly used products' },
  { style: 'Hex-3R Wrap 430-12', description: '13 oz. unidirectional glass', width: '12″', length: '150 ft.' },
  { style: 'Hex-3R Wrap 430-24', description: '13 oz. unidirectional glass', width: '24″', length: '150 ft.' },
];

export const hex3rEpoxies = [
  { product: 'Hex-3R Epoxy 300', description: 'Low viscosity, low tack', sizes: '1/2 gallon kit, 4 gallon kit, 55 gallon drum', ratio: '100 to 34.5' },
  { product: 'Hex-3R Epoxy 301', description: 'High viscosity, coating', sizes: '4 gallon kit', ratio: '100 to 33.2' },
  { product: 'Hex-3R Epoxy 301T', description: 'Trowel applied coating', sizes: '4 gallon kit', ratio: '100 to 49.9 to 96.1' },
  { product: 'Hex-3R Epoxy 306', description: 'High viscosity, high tack', sizes: '1/2 gallon kit, 4 gallon kit, 55 gallon drum', ratio: '100 to 32.5' },
  { product: 'Hex-3R Epoxy 306XR', description: 'Lower viscosity, high tack', sizes: '1/2 gallon kit, 4 gallon kit, 55 gallon drum', ratio: '100 to 28.5' },
  { product: 'Hex-3R Epoxy 505', description: 'FireLam Epoxy, 2 part', sizes: '3 gallon kit', ratio: 'See spec sheet' },
  { product: 'Hex-3R Epoxy 506', description: 'FireLam Paint, 1 part', sizes: '4 gallon single unit', ratio: 'See spec sheet' },
];

export const company = {
  name: 'Composites West, Inc.',
  phone: '(775) 833-4300',
  phoneHref: '+17758334300',
  fax: '(775) 833-4307',
  email: 'info@compositeswest.com',
  physicalAddress: {
    street: '4902 Ampere Dr.',
    city: 'Reno',
    state: 'NV',
    zip: '89502',
  },
  mailingAddress: {
    street: '748 South Meadows Pkwy STE A9-200',
    city: 'Reno',
    state: 'NV',
    zip: '89521',
  },
  founded: '2001',
};
