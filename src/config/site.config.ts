export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {

  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };

  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };

  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };

  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };

  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
      aspectRatio?: string;
    };
  };

  seo: {
    title: string;
    description: string;
  };

  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };

  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };

  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };

  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };

  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {

  brand: {
    name: "Precision Air Conditioning & Heating",
    shortName: "Precision",
    logo: "/brand/company-logo.svg",
    logoLight: "/brand/company-logo.svg",
    region: "Prattville · River Region",

  },

  theme: {
    style: "clean",
    colors: {"brandPrimary": "#23549B", "brandSecondary": "#D83C37", "brandAccent": "#69A8D8", "page": "#101A26", "surfaceDark": "#07131F", "surfaceDarkAlt": "#132538", "surfaceElevated": "#1C3449", "surfaceSoft": "#F4F7F8", "textPrimary": "#F7FAFC", "textSecondary": "#D8E1E7", "textMuted": "#95A5AF", "textOnBrand": "#FFFFFF", "borderSubtle": "#2B4150", "borderStrong": "#657B86", "glowPrimary": "#23549B", "glowSecondary": "#D83C37", "networkLine": "#69A8D8", "success": "#70A982", "service1": "#23549B", "service2": "#69A8D8", "service3": "#D83C37", "service4": "#F1A83B", "service5": "#6983BB"},

  },

  header: {
    navServices: "Services",
    navAreas: "Service areas",
    navContact: "Contact",
    helpLabel: "Call 334-361-6550",
    ctaLabel: "Request service",
    mobileEyebrow: "PRATTVILLE · RIVER REGION",
    mobileCallLabel: "Call now"
  },

  opening: {
    enabled: false,
    durationMs: 1400,
    eyebrow: "PRATTVILLE · RIVER REGION",
    line1: "Precision",
    line2: "Local comfort.",
    detail: "Prattville heating and cooling repair and installation for all makes and models, including ductless mini-splits and Precision Maintenance Agreements.",
    location: "Established 1993 · AL Cert #87168",
    skipLabel: "Skip intro"
  },

  hero: {
    layout: "service-craft",
    eyebrow: "PRATTVILLE · RIVER REGION · LOCAL HVAC",
    headlineLine1: "Quality service,",
    headlineLine2: "year ’round.",
    description: "Heating and cooling system repair, replacement, mini-split installation, and maintenance from a Prattville company established in 1993.",
    primaryCta: "Request service",
    secondaryCta: "Call Precision",
    locationLabel: "PRATTVILLE · RIVER REGION",
    locationValue: "Prattville · River Region",
    edgeLabel: "PRATTVILLE · RIVER REGION",
    bottomStatement: "REPAIR · REPLACEMENT · MINI-SPLITS · MAINTENANCE",
    sillLabel: "Established 1993 · AL Cert #87168",
    serviceLabels: ["Cooling", "Heating", "Mini-splits"],
    discoverLabel: "Explore services",
    motion: {
      enabled: true,
      pace: "gentle",
      ambient: false
    },
    system: {
      eyebrow: "LOCAL COMFORT / IN MOTION",
      modes: [
        {
          id: "cool",
          label: "Cooling",
          detail: "A considered path from warm intake to balanced, conditioned air."
        },
        {
          id: "warm",
          label: "Heating",
          detail: "Steady circulation, carefully controlled for colder days."
        },
        {
          id: "pure",
          label: "Air quality",
          detail: "A focus on filtration and the air moving through every room."
        }
      ]
    },
    media: {"primarySrc": "https://precisionacandheat.com/assets/images/Building_front.61132905_std.jpg", "primaryAlt": "Precision Air Conditioning & Heating office building shown on its website", "primaryPosition": "center center", "fit": "cover", "backdrop": "matte", "aspectRatio": "534 / 287"},

  },

  seo: {
    title: "Precision Air Conditioning & Heating | HVAC Service in Prattville",
    description: "Prattville heating and cooling repair and installation for all makes and models, including ductless mini-splits and Precision Maintenance Agreements.",

  },

  contact: {
    phoneDisplay: "334-361-6550",
    phoneHref: "tel:+13343616550",
    email: "precision_airconditioning@yahoo.com",
    address: "1849 Hwy 31 North, Prattville, AL 36067",
    contactUrl: "#contact",
    servicesUrl: "#services",

  },

  brandStandard: {
    eyebrow: "Established 1993 · AL Cert #87168",
    titleLine1: "Comfort, handled locally.",
    titleLine2: "Service built around your home.",
    bodyTitle: "Established 1993 · AL Cert #87168",
    body: "Precision Air Conditioning & Heating repairs all makes and models, installs systems including ductless mini-splits, and offers its Precision Maintenance Agreement.",
    callLabel: "Call now",
    availabilityLabel: "Prattville · River Region",
    panelEyebrow: "PRECISION AIR CONDITIONING & HEATING",
    panelTitle: "Precision Air Conditioning & Heating repairs all makes and models, installs systems including ductless mini-splits, and offers its Precision Maintenance Agreement.",
    panelFooter: "Prattville · River Region",
    handoff: "Explore Precision Air Conditioning & Heating services.",
    items: [{"icon": "cooling", "label": "Air conditioning", "detail": "Air conditioning repairs and replacement for all makes and models."}, {"icon": "heating", "label": "Heating systems", "detail": "Heating repair, replacement, and new system installation."}, {"icon": "maintenance", "label": "Ductless mini-splits", "detail": "Installation and service for ductless heating and cooling."}],

  },

  services: {
    eyebrow: "PRECISION AIR CONDITIONING & HEATING · SERVICES",
    introLine1: "Comfort,",
    introLine2: "done right.",
    summaryEyebrow: "PRATTVILLE · RIVER REGION",
    summaryTitle: "Precision Air Conditioning & Heating repairs all makes and models, installs systems including ductless mini-splits, and offers its Precision Maintenance Agreement.",
    summaryBody: "Precision Air Conditioning & Heating repairs all makes and models, installs systems including ductless mini-splits, and offers its Precision Maintenance Agreement.",
    summaryCta: "Talk to the team",
    items: [{"name": "Air conditioning", "shortName": "Cooling", "image": "/services/01.svg", "description": "Air conditioning repairs and replacement for all makes and models."}, {"name": "Heating systems", "shortName": "Heating", "image": "/services/02.svg", "description": "Heating repair, replacement, and new system installation."}, {"name": "Ductless mini-splits", "shortName": "Mini-splits", "image": "/services/03.svg", "description": "Installation and service for ductless heating and cooling."}, {"name": "Maintenance agreement", "shortName": "Maintenance", "image": "/services/04.svg", "description": "Precision Maintenance Agreement options for ongoing care."}, {"name": "System replacement", "shortName": "Replacement", "image": "/services/05.svg", "description": "Help comparing repair and replacement options for home comfort."}],

  },

  coverage: {
    eyebrow: "LOCAL SERVICE AREA",
    titleLine1: "Comfort close",
    titleLine2: "to home.",
    description: "Prattville · River Region",
    featuredLocation: "Prattville, AL",
    locationDetail: "Serving Prattville · River Region.",
    ctaLabel: "Contact the team",
    networkLabel: "LOCAL SERVICE NETWORK",
    regionLabel: "Prattville · River Region",
    metrics: [{"value": "4 communities", "label": "Coverage shown"}, {"value": "Established 1993 · AL Cert #87168", "label": "Service commitment"}, {"value": "Local team", "label": "Prattville · River Region"}],
    locations: [{"name": "Prattville, AL", "kind": "city", "lat": 32.464, "lng": -86.4597, "hub": true}, {"name": "Montgomery, AL", "kind": "city", "lat": 32.3668, "lng": -86.3, "hub": false}, {"name": "Millbrook, AL", "kind": "city", "lat": 32.4799, "lng": -86.3619, "hub": false}, {"name": "Deatsville, AL", "kind": "city", "lat": 32.6085, "lng": -86.3958, "hub": false}],

  },

  contactSection: {
    eyebrow: "LET’S TALK COMFORT",
    titleLine1: "Tell us what",
    titleLine2: "you need.",
    body: "Contact Precision Air Conditioning & Heating about heating, cooling, or service for your home or business.",
    primaryCta: "Request service",
    secondaryCta: "Call Precision",
    submissionMode: "demo",
    formEndpoint: "",
    successMessage: "Thanks for reaching out. This concept form is a preview and is not connected yet; call 334-361-6550 to contact Precision Air Conditioning & Heating.",

  }
};
