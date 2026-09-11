/**
 * Application / use-case content.
 *
 * These pages exist to take a buyer past a spec sheet: what the application
 * actually demands, which fiber and construction answers that demand, and why.
 * Product references are slugs from `products.ts` — keep them in sync.
 */

export interface Application {
  slug: string;
  name: string;
  /** Short label used in nav and cards. */
  shortName: string;
  /** Market glyph in assets/markets — used as a graphic mark, not a photo. */
  image: string;
  /** Real material photography in assets/ — the hero and card image. */
  photo: 'raw' | 'rolls' | 'knits' | 'carbonfiber' | 'hero-team' | 'canoe';
  /** Caption for the hero figure. */
  photoCaption: string;
  /** One line under the H1. */
  tagline: string;
  /** Opening context — the market and what it asks of a material. */
  intro: string;
  /** The engineering problem, in the buyer's terms. */
  challenge: {
    heading: string;
    body: string;
  };
  /** What actually drives the material decision here, in priority order. */
  criteria: { label: string; body: string }[];
  /** Product slugs recommended for this application, most relevant first. */
  recommended: string[];
  /** Construction guidance — which weave/architecture and when. */
  constructions: { name: string; body: string }[];
  faq: { q: string; a: string }[];
  seoDescription: string;
  /** Optional advisory shown above the CTA (safety-critical applications). */
  advisory?: string;
}

export const applications: Application[] = [
  {
    slug: 'aerospace',
    name: 'Carbon Fiber for Aerospace',
    shortName: 'Aerospace',
    image: 'aerospace',
    photo: 'raw',
    photoCaption: 'Carbon, glass, and knit reinforcements in stock',
    tagline: 'Where every gram is negotiated and nothing is approximate.',
    intro:
      'Aerospace was the market that made carbon fiber mainstream, and it remains the most demanding one we supply. Military and civilian programs use carbon reinforcements throughout primary and secondary structure — fuselage panels, wing and tail components, control surfaces, radomes, interior structure, and tooling — because nothing else delivers the same stiffness and fatigue performance per unit of weight.',
    challenge: {
      heading: 'Stiffness per pound, held to a spec',
      body:
        'An aerospace laminate is rarely designed around ultimate strength alone. It is designed around stiffness, fatigue life, and repeatability — a part that performs identically across every ply, every roll, and every build. That puts the burden on fiber selection and areal weight consistency long before it reaches the layup. Programs also tend to specify at the fiber level, which means the question is usually not "a carbon fabric" but "this fiber, this construction, this weight."',
    },
    criteria: [
      {
        label: 'Fiber modulus first',
        body:
          'Standard modulus (T300-class) covers a large share of structure. When deflection governs rather than strength, intermediate and high modulus fibers — including HR40 — buy stiffness that no amount of extra standard-modulus material replaces efficiently.',
      },
      {
        label: 'Areal weight and ply count',
        body:
          'Lighter fabrics give finer control over laminate thickness and better conformance on contoured tools. Heavier fabrics build structure in fewer plies, which reduces labor but coarsens your thickness resolution.',
      },
      {
        label: 'Drape over the actual tool',
        body:
          'Satin and twill architectures conform to compound curvature far better than plain weave. On a complex tool, drape is often the deciding property — a fabric that bridges or wrinkles is not a candidate regardless of its mechanical data.',
      },
      {
        label: 'Traceability',
        body:
          'Aerospace buyers generally need to know exactly what they received. We supply from named, traceable sources — Hexcel, Toray, and others — rather than unbranded material.',
      },
    ],
    recommended: [
      '8h-satin-weave-carbon-fiber-fabric',
      'toray-t300-balanced-till-weave-carbon-fiber-fabric',
      'hexcel-3k-balanced-plain-weave',
    ],
    constructions: [
      {
        name: '8-harness satin',
        body:
          'The default for compound curvature and tooling. Long float lengths mean minimal crimp and excellent drape, at the cost of a less symmetric surface than a balanced weave.',
      },
      {
        name: 'Balanced twill and plain weave',
        body:
          'Predictable, symmetric properties in both directions. Plain weave is the most stable and the easiest to keep on-angle; twill trades a little stability for noticeably better conformance.',
      },
      {
        name: 'Unidirectional',
        body:
          'Where load has a single dominant direction — spar caps, stiffeners, local reinforcement — unidirectional removes crimp entirely and puts every fiber to work along the load path.',
      },
    ],
    faq: [
      {
        q: 'Do you stock high modulus carbon fiber for aerospace?',
        a: 'Yes. Our in-stock fabrics regularly include high modulus (HR40) and intermediate modulus materials in addition to 1K, 3K, 6K, and 12K standard modulus. High modulus is the usual answer when a part is deflection-limited rather than strength-limited.',
      },
      {
        q: 'Can you supply aerospace fiberglass as well as carbon?',
        a: 'Yes — aerospace-grade fiberglass is one of our stocked specialties, and it is frequently used alongside carbon for radomes, galvanic isolation layers, and applications where radio transparency or dielectric properties matter.',
      },
      {
        q: 'What is the difference between 3K and 12K tow for aerospace parts?',
        a: 'Tow count is the number of filaments in each bundle. 3K produces a finer, tighter weave with better surface definition and finer thickness control. 12K builds areal weight much faster and costs less per unit of reinforcement, which suits heavy structural laminates and tooling where surface refinement matters less.',
      },
      {
        q: 'Do you supply prepreg for aerospace programs?',
        a: 'Yes. Alongside dry reinforcements we source prepregs, honeycomb core, and the vacuum bagging and infusion consumables that go with them. Contact us with your specification and quantity.',
      },
    ],
    seoDescription:
      'Carbon fiber fabrics for aerospace structure and tooling — high modulus (HR40), intermediate and standard modulus, satin, twill, and unidirectional constructions. Aerospace fiberglass and prepregs sourced to spec.',
  },

  {
    slug: 'marine',
    name: 'Carbon Fiber for Marine',
    shortName: 'Marine',
    image: 'marine',
    photo: 'canoe',
    photoCaption: 'Carbon hull on the water',
    tagline: 'Stiffness that holds its shape against water, load, and time.',
    intro:
      'Marine structures live under sustained load in a corrosive environment. Masts, hulls, decks, rudders, foils, and propellers all benefit from carbon fiber for the same reason: the specific stiffness is high enough to change how a boat behaves. Lighter yachts, cruisers, and racing vessels carry less structure to hold themselves together, which turns directly into speed, range, and fuel efficiency.',
    challenge: {
      heading: 'Torsion, panel stiffness, and no corrosion',
      body:
        'Marine loading is rarely a single clean axis. A hull panel takes slamming loads out of plane, a mast takes compression with bending and torsion together, and a foil takes lift with twist. That combination puts unusual weight on shear performance and on how a laminate handles off-axis load — which is why bias-oriented material matters more here than in many other markets. Carbon also removes the corrosion problem that metals bring to saltwater entirely, though it introduces a galvanic consideration wherever it meets aluminum or steel.',
    },
    criteria: [
      {
        label: 'Torsional and shear performance',
        body:
          'A ±45° orientation is what resists twist. Where a boat needs torsional stiffness — mast sections, tubes, hull panels under diagonal load — bias material does the job that a 0/90 fabric cannot do efficiently.',
      },
      {
        label: 'Non-crimp construction',
        body:
          'Stitched knits keep fibers straight instead of crimped over one another. Straight fibers carry load more directly, which means better stiffness for the same weight — valuable anywhere weight aloft is penalized twice.',
      },
      {
        label: 'Panel weight versus build time',
        body:
          'Lightweight knits give fine control on thin skins and small parts. Heavier knits build a structural panel in far fewer plies, which matters when the part is large and labor is the real cost.',
      },
      {
        label: 'Wet-out and infusion behavior',
        body:
          'Marine parts are large, and most are infused rather than hand-laid. Fabric architecture drives resin flow, so construction affects process time as much as it affects mechanical properties.',
      },
    ],
    recommended: [
      'fcim-151x50-45-degree-carbon-fiber-fabric',
      'fcim-45-degree-knit-carbon-fiber-fabric',
      'fcim-105x50-45-degree-knit-carbon-fiber-fabric',
    ],
    constructions: [
      {
        name: '±45° non-crimp knit',
        body:
          'The marine workhorse. Stitched bias fibers deliver torsional and shear stiffness with no weave crimp, in weights from very light skins to heavy structural plies.',
      },
      {
        name: 'Balanced woven fabric',
        body:
          'Where load is genuinely bidirectional along the part axes, or where a visible weave is wanted on a finished surface, a balanced twill or plain weave remains the straightforward choice.',
      },
      {
        name: 'Unidirectional',
        body:
          'Mast walls, stringers, and spar caps concentrate load along one axis. Unidirectional tape puts the fiber exactly there and nowhere it is not needed.',
      },
    ],
    faq: [
      {
        q: 'Why use ±45° knit fabric instead of twill on a marine part?',
        a: 'Because most marine loads include twist. A ±45° knit places fibers directly along the diagonal where shear and torsional load act, and the stitched non-crimp construction keeps them straight rather than crimped over one another. A 0/90 twill has to rely on fiber rotation to carry that same load, which is far less efficient.',
      },
      {
        q: 'Does carbon fiber corrode in saltwater?',
        a: 'The carbon fiber itself does not corrode. The consideration is galvanic: carbon is cathodic relative to aluminum and steel, so any direct contact with those metals in a wet environment can accelerate corrosion of the metal. Standard practice is to isolate the interface — commonly with a fiberglass barrier ply.',
      },
      {
        q: 'What weight fabric should I use for a hull panel?',
        a: 'It depends on panel size, core, and the loads involved, but the general trade is straightforward: lighter fabrics give finer control over laminate thickness and conform better to curvature; heavier fabrics reach structural thickness in fewer plies and less labor. For large infused panels, heavier knits usually win on build time.',
      },
    ],
    seoDescription:
      'Carbon fiber reinforcements for marine structures — masts, hulls, foils, and decks. ±45° non-crimp knits for torsional stiffness, plus woven and unidirectional fabrics, in stock and ready to ship.',
  },

  {
    slug: 'infrastructure',
    name: 'Carbon Fiber for Infrastructure & Structural Strengthening',
    shortName: 'Infrastructure',
    image: 'infrastructure',
    photo: 'rolls',
    photoCaption: 'Unidirectional carbon, 50″ roll',
    tagline: 'Adding capacity to structures that are already standing.',
    intro:
      'Much of the built environment was designed to an earlier code. Parking structures, bridges, columns, beams, slabs, and pipelines frequently need more capacity than they were originally given — for seismic demand, for increased load, or simply because the reinforcing steel inside them has corroded. Externally bonded fiber reinforced polymer (FRP) adds that capacity without demolition, without adding meaningful mass, and without introducing new steel to corrode.',
    challenge: {
      heading: 'Strengthening in place, under code',
      body:
        'Retrofit work is constrained in ways new construction is not. The structure has to stay in service, the added material cannot add significant dead load, access is often overhead or in tight geometry, and the finished system has to satisfy a code official and a structural engineer of record. That makes the system — fabric, matched resin, anchorage, and documentation together — matter more than any single component. This is also why FRP strengthening is specified as a system rather than assembled from unrelated parts.',
    },
    criteria: [
      {
        label: 'Fiber direction against the demand',
        body:
          'Flexural strengthening wants fiber along the span. Shear and confinement want fiber around the section. Unidirectional wraps handle the first; bidirectional and ±45° material handle the second. The demand type sets the material before anything else does.',
      },
      {
        label: 'Carbon or glass',
        body:
          'Carbon delivers far higher stiffness and strength per ply and dominates where deflection or capacity governs. Glass is substantially less expensive, is electrically non-conductive, and remains the right answer for confinement and for applications where extreme stiffness is not the objective.',
      },
      {
        label: 'Matched resin for surface and orientation',
        body:
          'Overhead work needs a high-tack, high-viscosity epoxy that will not sag. Poor substrate needs a low-viscosity primer that penetrates. Using the resin matched to the surface and orientation is not a refinement — it is what makes the bond reliable.',
      },
      {
        label: 'Anchorage',
        body:
          'A wrap is only as good as its termination. Shear anchors transfer load out of the laminate and into the substrate where a wrap cannot be fully closed around a section.',
      },
    ],
    recommended: [
      'unidirectional-carbon-fiber',
      'fcim-105x50-45-degree-knit-carbon-fiber-fabric',
      't700s-12k-balanced-twill-weave-carbon-fiber-fabric',
    ],
    constructions: [
      {
        name: 'Unidirectional wrap',
        body:
          'The primary strengthening material. All fiber runs along the direction of demand — along the span for flexure, around the section for shear and confinement.',
      },
      {
        name: 'Bidirectional woven wrap',
        body:
          'Where demand exists in both directions, or where a single balanced ply is simpler than two oriented ones. Also common as a finish layer beneath coatings.',
      },
      {
        name: '±45° knit',
        body:
          'Diagonal reinforcement for shear-dominated demand, placed directly along the principal stress direction rather than relying on rotation of an orthogonal fabric.',
      },
    ],
    faq: [
      {
        q: 'What is FRP structural strengthening?',
        a: 'Fiber reinforced polymer strengthening bonds high-strength carbon or glass fabric to the outside of an existing concrete, masonry, or timber element using a structural epoxy. Once cured, the fabric acts compositely with the original structure and carries load it could not carry alone — adding flexural, shear, or confinement capacity without demolition and without significant added mass.',
      },
      {
        q: 'Why is carbon fiber used for seismic retrofit?',
        a: 'Seismic retrofit frequently requires confining a column or adding shear capacity to an element that was designed to an older code. Carbon fiber wrap adds that capacity while adding almost no mass — which matters, because added mass increases the seismic force the structure has to resist in the first place. It also installs in occupied structures with far less disruption than jacketing or replacement.',
      },
      {
        q: 'What is the Hex-3R system?',
        a: 'Hex-3R is a complete FRP strengthening line: carbon and glass wraps, matched structural epoxies for priming, impregnation and finishing, FireLam fire-protection coatings, and FibrAnchor shear anchors. It is designed to be specified and installed as a system rather than assembled from unrelated components.',
      },
      {
        q: 'Does FRP strengthening need fire protection?',
        a: 'Structural epoxies lose properties at elevated temperature, so many applications — particularly in occupied buildings and parking structures — require a fire-protective coating over the finished laminate. The requirement comes from the governing code and the project engineer, not from the FRP material itself.',
      },
    ],
    advisory:
      'Structural strengthening design is the responsibility of a licensed engineer. The guidance on this page describes material behavior and system components — it is not a design, and it does not replace project-specific engineering, code review, or the specifications of the engineer of record.',
    seoDescription:
      'Carbon and glass FRP for structural strengthening and seismic retrofit — column confinement, flexural and shear strengthening for concrete and masonry. Hex-3R wraps, matched epoxies, and FibrAnchor anchors.',
  },

  {
    slug: 'sporting-goods',
    name: 'Carbon Fiber for Sporting Goods',
    shortName: 'Sporting Goods',
    image: 'sporting',
    photo: 'knits',
    photoCaption: 'Cutting on the bias, by hand',
    tagline: 'Tuned stiffness — where feel is a measurable property.',
    intro:
      'Bicycles, racquets, skis, snowboards, bats, hockey sticks, and prosthetic running feet all use carbon fiber for the same underlying reason: the designer gets to place stiffness exactly where it belongs and leave it out everywhere else. In sporting goods, that control is not only about weight. It is how a product gets its feel — the flex pattern of a ski, the torsional response of a frame, the energy return of a foot plate.',
    challenge: {
      heading: 'Anisotropy as a design tool',
      body:
        'Most structural materials are the same in every direction, and designers work around that. Carbon composites are the opposite: properties depend on fiber orientation, and that is the point. A frame can be made stiff in torsion and compliant in vertical bending at the same time. A ski can be stiff underfoot and soft at the tip. Achieving that means selecting fiber direction and construction ply by ply, which is a materials decision long before it is a manufacturing one.',
    },
    criteria: [
      {
        label: 'Directional stiffness',
        body:
          'Unidirectional material along a load path delivers the highest stiffness per gram available. Where a specific flex characteristic is the design goal, unidirectional plies are the primary tool for tuning it.',
      },
      {
        label: 'Torsional control',
        body:
          'Frames, shafts, and tubes need torsional stiffness that axial plies cannot provide. ±45° material — knit or woven on the bias — is what resists twist.',
      },
      {
        label: 'Cosmetic surface',
        body:
          'Much sporting equipment sells partly on appearance. A 2×2 twill produces the recognizable carbon look with good conformance, which is why it dominates visible surfaces.',
      },
      {
        label: 'Fatigue life',
        body:
          'Sporting goods see millions of load cycles. Carbon composites have excellent fatigue behavior compared with metals, which is a large part of why they took over the category.',
      },
    ],
    recommended: [
      'unidirectional-carbon-fiber',
      'toray-t300-balanced-till-weave-carbon-fiber-fabric',
      'fcim-45-degree-knit-carbon-fiber-fabric',
    ],
    constructions: [
      {
        name: 'Unidirectional',
        body:
          'The tuning ply. Placed along the axis that matters, it sets the flex characteristic of a frame, shaft, plate, or ski without adding material anywhere it does not contribute.',
      },
      {
        name: '2×2 twill',
        body:
          'The visible layer. Conforms well to complex shapes and produces the familiar carbon appearance on finished surfaces.',
      },
      {
        name: '±45° knit',
        body:
          'Torsional reinforcement for tubes and frames, adding twist resistance without disturbing the axial stiffness set by the unidirectional plies.',
      },
    ],
    faq: [
      {
        q: 'What carbon fiber is used for bicycle frames?',
        a: 'Frames are typically built from a combination: unidirectional material along the tubes to set axial and bending stiffness, ±45° material for torsional stiffness, and often a twill layer on visible surfaces. The frame character comes from how those orientations are combined, not from any single fabric.',
      },
      {
        q: 'Why is 2×2 twill the fabric people recognize as carbon fiber?',
        a: 'The 2×2 twill pattern produces the distinctive diagonal checkerboard appearance, and it conforms to curved surfaces better than plain weave — so it became the standard for visible cosmetic surfaces across automotive and sporting goods. The look is a byproduct of a genuinely useful drape characteristic.',
      },
      {
        q: 'Do you supply material for prosthetics and orthotics?',
        a: 'Yes. Carbon composites are widely used in ankle-foot orthoses, dynamic foot plates, socket reinforcement, and energy-storing prosthetic feet, where high stiffness-to-weight and excellent fatigue performance both matter. Contact us with your construction and weight requirements.',
      },
    ],
    seoDescription:
      'Carbon fiber for sporting goods — bicycle frames, skis, racquets, bats, and prosthetics. Unidirectional for tuned stiffness, ±45° knits for torsion, and 2×2 twill for cosmetic surfaces.',
  },

  {
    slug: 'automotive',
    name: 'Carbon Fiber for Automotive',
    shortName: 'Automotive',
    image: 'automotive',
    photo: 'carbonfiber',
    photoCaption: '2×2 twill — the cosmetic surface',
    tagline: 'Weight out of the car, without giving up the surface.',
    intro:
      'Automotive carbon fiber spans two quite different jobs. One is structural: monocoques, crash structures, subframes, and chassis reinforcement where weight reduction improves everything a vehicle does. The other is body and appearance work — hoods, trunks, spoilers, splitters, diffusers, and interior trim — where the material has to be both light and beautiful, because the weave itself is the finish.',
    challenge: {
      heading: 'A finish surface and a structure at once',
      body:
        'A carbon body panel is a visible product and a structural part in the same layup. That means the fabric has to conform to genuinely complex geometry without wrinkling or distorting the weave pattern, because a distorted weave is a cosmetic defect even when the part is structurally sound. Weave angle control on a compound curve becomes as important as areal weight, and it is the reason twill dominates this market.',
    },
    criteria: [
      {
        label: 'Conformance without distortion',
        body:
          'Body panels are compound curves. A 2×2 twill conforms with fewer crimps and less stress concentration than plain weave, which is why it is the automotive standard for visible parts.',
      },
      {
        label: 'Appearance consistency',
        body:
          'On a cosmetic part the weave is the finish. Consistent tow spacing and a symmetric balanced construction are what keep the pattern reading cleanly across a large panel.',
      },
      {
        label: 'Roll width against panel size',
        body:
          'Wider rolls mean fewer seams and less waste on large panels. On a hood or a full body panel, a 60-inch roll can eliminate a joint that a 50-inch roll would force.',
      },
      {
        label: 'Weight savings target',
        body:
          'Converting a fiberglass or aluminum part to carbon typically yields around 30% weight savings — enough to change vehicle dynamics, not just the spec sheet.',
      },
    ],
    recommended: [
      'hexcel-twill-weave',
      'toray-t300-balanced-till-weave-carbon-fiber-fabric',
      't700s-12k-balanced-twill-weave-carbon-fiber-fabric',
    ],
    constructions: [
      {
        name: '2×2 twill',
        body:
          'The automotive default for visible parts — the recognizable cosmetic carbon look with the drape to reach complex contours cleanly.',
      },
      {
        name: 'Heavyweight twill',
        body:
          'For structural panels and tooling, 12K heavyweight twill builds thickness in fewer plies while keeping the balanced, symmetric behavior of a woven fabric.',
      },
      {
        name: 'Unidirectional',
        body:
          'Local reinforcement along a defined load path — chassis stiffening, crash structure, and areas where a panel needs targeted stiffness rather than uniform buildup.',
      },
    ],
    faq: [
      {
        q: 'What carbon fiber fabric is used for car body panels?',
        a: 'Balanced 2×2 twill, almost always. It gives the recognizable cosmetic carbon appearance and conforms to the compound curvature of body panels with fewer crimps and less stress concentration than a plain weave. Typical weights are in the 5.5–6.5 oz/yd² range for a visible finish layer.',
      },
      {
        q: 'How much weight does converting to carbon fiber actually save?',
        a: 'Converting a fiberglass or aluminum part to carbon fiber typically yields around 30% weight savings, though the real figure depends on the part, how it is engineered, and whether the design is optimized for composite behavior or simply copied from the metal original.',
      },
      {
        q: 'Does a wider roll matter for automotive parts?',
        a: 'On large panels, considerably. A 60-inch roll can cover a hood or door skin in one piece where a 50-inch roll would force a seam — which means less waste, less labor, and no visible joint on a cosmetic surface.',
      },
    ],
    seoDescription:
      'Carbon fiber fabric for automotive — hoods, trunks, spoilers, and structural components. Balanced 2×2 twill for cosmetic body panels, heavyweight twill for structure, in 50″ and 60″ widths.',
  },
];

export const applicationBySlug = (slug: string) =>
  applications.find((a) => a.slug === slug);
