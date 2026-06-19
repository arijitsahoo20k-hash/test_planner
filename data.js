// Prayas 2.0 2027 — Complete Test Data
const TESTS = [
  {
    id: 1,
    name: "JEE Main-1",
    date: "2026-06-28",
    type: "JEE Main",
    testType: "Part Test",
    pattern: "JEE Main",
    physics: ["Mathematical Tools (Complete Chapter)"],
    chemistry: [
      "Some Basic Concepts of Chemistry: Nature of Matter, Classification of Matter",
      "Properties of Matter and their Measurement",
      "International System of Units (S.I)",
      "Uncertainty in Measurement",
      "Laws of Chemical Combinations",
      "Dalton's Atomic Theory, Atomic Mass, Atomic Mass Unit",
      "Gram Atomic Mass, Average Atomic Mass"
    ],
    maths: ["Basic Mathematics (Complete Chapter)"]
  },
  {
    id: 2,
    name: "JEE Main-2",
    date: "2026-07-12",
    type: "JEE Main",
    testType: "Part Test",
    pattern: "JEE Main",
    physics: [
      "Motion in a Straight Line (Complete Chapter)",
      "Motion in a Plane — Introduction, Motion in a plane, Projectile Motion, Relative Velocity, Circular motion"
    ],
    chemistry: ["Some Basic Concepts of Chemistry (Complete Chapter)"],
    maths: ["Quadratic Equations — Introduction, Common roots"]
  },
  {
    id: 3,
    name: "JEE Advanced-1",
    date: "2026-07-26",
    type: "JEE Advanced",
    testType: "Part Test",
    pattern: "JEE Advanced",
    physics: [
      "Mathematical Tools (Complete Chapter)",
      "Motion in a Straight Line (Complete Chapter)",
      "Motion in a Plane (Complete Chapter)"
    ],
    chemistry: [
      "Some Basic Concepts of Chemistry (Complete Chapter)",
      "Redox Reaction (Complete Chapter)"
    ],
    maths: [
      "Basic Mathematics (Complete Chapter)",
      "Quadratic Equations (Complete Chapter)"
    ]
  },
  {
    id: 4,
    name: "AITS-1",
    date: "2026-08-09",
    type: "AITS Part",
    testType: "Part Test",
    pattern: "Main",
    physics: [
      "Motion in a Straight Line",
      "Motion in a Plane",
      "Laws of Motion",
      "Work, Energy and Power"
    ],
    chemistry: [
      "Some Basic Concepts of Chemistry",
      "Redox Reactions",
      "Solutions"
    ],
    maths: [
      "Basic Maths",
      "Quadratic Equations",
      "Sequence and Series"
    ]
  },
  {
    id: 5,
    name: "JEE Main-3",
    date: "2026-08-23",
    type: "JEE Main",
    testType: "Part Test",
    pattern: "JEE Main",
    physics: [
      "Laws of Motion (Complete Chapter)",
      "Work, Energy and Power (Complete Chapter)",
      "Circular Motion (Complete Chapter)",
      "Centre of Mass & System of Particles (Complete Chapter)"
    ],
    chemistry: [
      "Structure of Atom (Complete Chapter)",
      "Classification of Elements and Periodicity in Properties (Complete Chapter)",
      "Chemical Bonding and Molecular Structure (Complete Chapter)"
    ],
    maths: [
      "Sequence and Series (Complete Chapter)",
      "Trigonometric Functions (Complete Chapter)",
      "Trigonometric Equation (Complete Chapter)",
      "Permutations and Combinations (Complete Chapter)"
    ]
  },
  {
    id: 6,
    name: "JEE Main-4",
    date: "2026-09-06",
    type: "JEE Main",
    testType: "Part Test",
    pattern: "JEE Main",
    physics: [
      "Rotational Motion — Definition of Rigid body, Moment of inertia, Parallel Axis Theorem, Perpendicular Axis Theorem, Radius of gyration, Torque, Rotational equilibrium, Angular momentum, Combined translational and rotational motion"
    ],
    chemistry: [
      "Solutions (Complete Chapter)",
      "Chemical Kinetics — Rate of Reaction, Rate Law Expression, Rate constant, Factors Affecting Rate, Order and molecularity, Integrated Rate Equations, Pseudo First Order Reaction, Collision Theory, Activation Energy, Transition State Theory, Temperature Dependence"
    ],
    maths: ["Binomial Theorem (Complete Chapter)"]
  },
  {
    id: 7,
    name: "AITS-2",
    date: "2026-09-20",
    type: "AITS Part",
    testType: "Part Test",
    pattern: "Main",
    physics: [
      "Centre of Mass & System of Particles",
      "Rotational Motion",
      "Mechanical Properties of Solids",
      "Mechanical Properties of Fluids",
      "Thermodynamics"
    ],
    chemistry: [
      "Equilibrium",
      "Electrochemistry",
      "Chemical Kinetics"
    ],
    maths: [
      "Trigonometric Functions",
      "Sets",
      "Trigonometric Equation",
      "Determinants"
    ]
  },
  {
    id: 8,
    name: "AITS-3",
    date: "2026-09-27",
    type: "AITS Part",
    testType: "Part Test",
    pattern: "Advanced",
    physics: [
      "Motion in a Straight Line",
      "Motion in a Plane",
      "Laws of Motion",
      "Work, Energy and Power",
      "Centre of Mass & System of Particles",
      "Rotational Motion",
      "Mechanical Properties of Solids",
      "Mechanical Properties of Fluids"
    ],
    chemistry: [
      "Some Basic Concepts of Chemistry",
      "Redox Reactions",
      "Solutions",
      "Thermodynamics",
      "Equilibrium",
      "Electrochemistry",
      "Chemical Kinetics"
    ],
    maths: [
      "Basic Maths",
      "Quadratic Equations",
      "Sequence and Series",
      "Trigonometric Functions",
      "Sets",
      "Trigonometric Equation",
      "Determinants"
    ]
  },
  {
    id: 9,
    name: "JEE Advanced-2",
    date: "2026-10-11",
    type: "JEE Advanced",
    testType: "Part Test",
    pattern: "JEE Advanced",
    physics: [
      "Laws of Motion (Complete Chapter)",
      "Work, Energy and Power (Complete Chapter)",
      "Circular Motion (Complete Chapter)",
      "Centre of Mass & System of Particles (Complete Chapter)",
      "Rotational Motion (Complete Chapter)",
      "Mechanical Properties of Solids (Complete Chapter)",
      "Thermal Properties of Matter (Complete Chapter)",
      "Kinetic Theory (Complete Chapter)",
      "Thermodynamics (Complete Chapter)",
      "Mechanical Properties of Fluids (Complete Chapter)",
      "Oscillations (Complete Chapter)"
    ],
    chemistry: [
      "Structure of Atom (Complete Chapter)",
      "Classification of Elements and Periodicity in Properties (Complete Chapter)",
      "Chemical Bonding and Molecular Structure (Complete Chapter)",
      "Solutions (Complete Chapter)",
      "Chemical Kinetics (Complete Chapter)",
      "Thermodynamics (Complete Chapter)",
      "Chemical Equilibrium (Complete Chapter)",
      "Ionic Equilibrium (Complete Chapter)"
    ],
    maths: [
      "Sequence and Series (Complete Chapter)",
      "Trigonometric Functions (Complete Chapter)",
      "Trigonometric Equation (Complete Chapter)",
      "Permutations and Combinations (Complete Chapter)",
      "Binomial Theorem (Complete Chapter)",
      "Straight Lines (Complete Chapter)",
      "Circles (Complete Chapter)",
      "Conic Sections: Parabola (Complete Chapter)",
      "Conic Sections: Ellipse (Complete Chapter)",
      "Conic Sections: Hyperbola (Complete Chapter)"
    ]
  },
  {
    id: 10,
    name: "AITS-4",
    date: "2026-11-01",
    type: "AITS Part",
    testType: "Part Test",
    pattern: "Main",
    physics: [
      "Thermal Properties of Matter",
      "Kinetic Theory",
      "Thermodynamics",
      "Gravitation",
      "Oscillations",
      "Electric Charges and Fields",
      "Electrostatic Potential and Capacitance"
    ],
    chemistry: [
      "Structure of Atom",
      "Classification of Elements and Periodicity in Properties",
      "Chemical Bonding and Molecular Structure",
      "Organic Chemistry - IUPAC Nomenclature",
      "Organic Chemistry - Isomerism",
      "Organic Chemistry - General Organic Chemistry"
    ],
    maths: [
      "Matrices",
      "Relations and Functions",
      "Inverse Trigonometric Functions",
      "Continuity and Differentiability",
      "Method of Differentiation"
    ]
  },
  {
    id: 11,
    name: "JEE Main-5",
    date: "2026-11-22",
    type: "JEE Main",
    testType: "Part Test",
    pattern: "JEE Main",
    physics: [
      "Waves (Complete Chapter)",
      "Electric Charges and Fields (Complete Chapter)",
      "Electrostatic Potential and Capacitance (Complete Chapter)",
      "Gravitation (Complete Chapter)",
      "Current Electricity"
    ],
    chemistry: [
      "Electrochemistry (Complete Chapter)",
      "Some Basic Principles and Techniques: IUPAC Nomenclature (Complete Chapter)",
      "Some Basic Principles and Techniques: GOC (Complete Chapter)"
    ],
    maths: [
      "Determinants (Complete Chapter)",
      "Matrices (Complete Chapter)",
      "Sets (Complete Chapter)",
      "Relations and Functions (Complete Chapter)",
      "Inverse Trigonometric Functions (Complete Chapter)"
    ]
  },
  {
    id: 12,
    name: "AITS-5",
    date: "2026-12-13",
    type: "AITS Full",
    testType: "Part Test",
    pattern: "Main",
    physics: [
      "Waves",
      "Current Electricity",
      "Moving Charges and Magnetism",
      "Magnetism and Matter",
      "Electromagnetic Induction",
      "Alternating Current",
      "Electromagnetic Waves"
    ],
    chemistry: [
      "Hydrocarbons",
      "Haloalkanes and Haloarenes",
      "Alcohols, Phenols and Ethers",
      "Aldehydes, Ketones and Carboxylic Acids",
      "Amines"
    ],
    maths: [
      "Application of Derivatives",
      "Indefinite Integration",
      "Definite Integration",
      "Application of Integrals",
      "Differential Equations",
      "Straight Lines",
      "Circles",
      "Conic Sections - Parabola",
      "Conic Sections - Ellipse",
      "Conic Sections - Hyperbola"
    ]
  },
  {
    id: 13,
    name: "AITS-6",
    date: "2026-12-20",
    type: "AITS Part",
    testType: "Part Test",
    pattern: "Advanced",
    physics: [
      "Thermal Properties of Matter",
      "Kinetic Theory",
      "Thermodynamics",
      "Gravitation",
      "Oscillations",
      "Electric Charges and Fields",
      "Electrostatic Potential and Capacitance",
      "Waves",
      "Current Electricity",
      "Moving Charges and Magnetism",
      "Magnetism and Matter",
      "Electromagnetic Induction",
      "Alternating Current",
      "Electromagnetic Waves"
    ],
    chemistry: [
      "Structure of Atom",
      "Classification of Elements and Periodicity in Properties",
      "Chemical Bonding and Molecular Structure",
      "Organic Chemistry - IUPAC Nomenclature",
      "Organic Chemistry - Isomerism",
      "Organic Chemistry - General Organic Chemistry",
      "Hydrocarbons",
      "Haloalkanes and Haloarenes",
      "Alcohols, Phenols and Ethers",
      "Aldehydes, Ketones and Carboxylic Acids",
      "Amines"
    ],
    maths: [
      "Matrices",
      "Relations and Functions",
      "Inverse Trigonometric Functions",
      "Continuity and Differentiability",
      "Method of Differentiation",
      "Application of Derivatives",
      "Indefinite Integration",
      "Definite Integration",
      "Application of Integrals",
      "Differential Equations",
      "Straight Lines",
      "Circles",
      "Conic Sections - Parabola",
      "Conic Sections - Ellipse",
      "Conic Sections - Hyperbola"
    ]
  },
  {
    id: 14,
    name: "JEE Main-6",
    date: "2027-01-03",
    type: "JEE Main",
    testType: "Part Test",
    pattern: "JEE Main",
    physics: [
      "Current Electricity (Complete Chapter) — Electric Current, Current in Conductors, Kirchhoff's Laws, Wheatstone Bridge",
      "Moving Charges and Magnetism (Complete Chapter)",
      "Magnetism and Matter (Complete Chapter)",
      "Electromagnetic Induction (Complete Chapter)",
      "Alternating Current (Complete Chapter)",
      "Electromagnetic Waves (Complete Chapter)",
      "Ray Optics and Optical Instruments (Complete Chapter)"
    ],
    chemistry: [
      "Some Basic Principles and Techniques: Isomerism (Complete Chapter)",
      "Hydrocarbon (Complete Chapter)",
      "Coordination Compounds (Complete Chapter)",
      "Haloalkanes and Haloarenes (Complete Chapter)",
      "Alcohols, Phenols and Ethers (Complete Chapter)",
      "Aldehydes, Ketones and Carboxylic Acids (Complete Chapter)"
    ],
    maths: [
      "Method of Differentiation (Complete Chapter)",
      "Limit, Continuity and Differentiability (Complete Chapter)",
      "Indefinite Integration (Complete Chapter)",
      "Application of Derivatives (Complete Chapter)",
      "Definite Integration (Complete Chapter)",
      "Application of Integrals (Complete Chapter)",
      "Differential Equation (Complete Chapter)",
      "Vector Algebra (Complete Chapter)"
    ]
  },
  {
    id: 15,
    name: "AITS-7",
    date: "2027-01-10",
    type: "AITS Part",
    testType: "Part Test",
    pattern: "Main",
    physics: [
      "Ray Optics and Optical Instruments",
      "Wave Optics",
      "Dual Nature of Radiation and Matter",
      "Atoms",
      "Nuclei",
      "Semiconductor Electronics - Materials, Devices and Simple Circuits",
      "Units and Measurements"
    ],
    chemistry: [
      "Biomolecules",
      "Purification and Analysis of Organic Compound",
      "Coordination Compounds",
      "The p-Block Elements",
      "The d- and f-Block Elements",
      "Salt Analysis"
    ],
    maths: [
      "Vector Algebra",
      "Three-dimensional Geometry",
      "Binomial Theorem",
      "Permutations and Combinations",
      "Probability",
      "Statistics",
      "Complex Numbers"
    ]
  },
  {
    id: 16,
    name: "AITS-8",
    date: "2027-01-13",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Main",
    physics: ["Full Syllabus — As per NTA JEE Main"],
    chemistry: ["Full Syllabus — As per NTA JEE Main"],
    maths: ["Full Syllabus — As per NTA JEE Main"]
  },
  {
    id: 17,
    name: "AITS-9",
    date: "2027-01-17",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Main",
    physics: ["Full Syllabus — As per NTA JEE Main"],
    chemistry: ["Full Syllabus — As per NTA JEE Main"],
    maths: ["Full Syllabus — As per NTA JEE Main"]
  },
  {
    id: 18,
    name: "AITS-10",
    date: "2027-01-20",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Main",
    physics: ["Full Syllabus — As per NTA JEE Main"],
    chemistry: ["Full Syllabus — As per NTA JEE Main"],
    maths: ["Full Syllabus — As per NTA JEE Main"]
  },
  {
    id: 19,
    name: "AITS-11",
    date: "2027-02-14",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Main",
    physics: ["Full Syllabus — As per NTA JEE Main"],
    chemistry: ["Full Syllabus — As per NTA JEE Main"],
    maths: ["Full Syllabus — As per NTA JEE Main"]
  },
  {
    id: 20,
    name: "AITS-12",
    date: "2027-02-28",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Main",
    physics: ["Full Syllabus — As per NTA JEE Main"],
    chemistry: ["Full Syllabus — As per NTA JEE Main"],
    maths: ["Full Syllabus — As per NTA JEE Main"]
  },
  {
    id: 21,
    name: "AITS-13",
    date: "2027-03-07",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Advanced",
    physics: ["Full Syllabus — As per NTA JEE Advanced"],
    chemistry: ["Full Syllabus — As per NTA JEE Advanced"],
    maths: ["Full Syllabus — As per NTA JEE Advanced"]
  },
  {
    id: 22,
    name: "AITS-14",
    date: "2027-03-14",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Main",
    physics: ["Full Syllabus — As per NTA JEE Main"],
    chemistry: ["Full Syllabus — As per NTA JEE Main"],
    maths: ["Full Syllabus — As per NTA JEE Main"]
  },
  {
    id: 23,
    name: "AITS-15",
    date: "2027-03-21",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Main",
    physics: ["Full Syllabus — As per NTA JEE Main"],
    chemistry: ["Full Syllabus — As per NTA JEE Main"],
    maths: ["Full Syllabus — As per NTA JEE Main"]
  },
  {
    id: 24,
    name: "AITS-16",
    date: "2027-03-28",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Main",
    physics: ["Full Syllabus — As per NTA JEE Main"],
    chemistry: ["Full Syllabus — As per NTA JEE Main"],
    maths: ["Full Syllabus — As per NTA JEE Main"]
  },
  {
    id: 25,
    name: "AITS-17",
    date: "2027-04-18",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Advanced",
    physics: ["Full Syllabus — As per NTA JEE Advanced"],
    chemistry: ["Full Syllabus — As per NTA JEE Advanced"],
    maths: ["Full Syllabus — As per NTA JEE Advanced"]
  },
  {
    id: 26,
    name: "AITS-18",
    date: "2027-04-25",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Advanced",
    physics: ["Full Syllabus — As per NTA JEE Advanced"],
    chemistry: ["Full Syllabus — As per NTA JEE Advanced"],
    maths: ["Full Syllabus — As per NTA JEE Advanced"]
  },
  {
    id: 27,
    name: "AITS-19",
    date: "2027-05-02",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Advanced",
    physics: ["Full Syllabus — As per NTA JEE Advanced"],
    chemistry: ["Full Syllabus — As per NTA JEE Advanced"],
    maths: ["Full Syllabus — As per NTA JEE Advanced"]
  },
  {
    id: 28,
    name: "AITS-20",
    date: "2027-05-09",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Advanced",
    physics: ["Full Syllabus — As per NTA JEE Advanced"],
    chemistry: ["Full Syllabus — As per NTA JEE Advanced"],
    maths: ["Full Syllabus — As per NTA JEE Advanced"]
  },
  {
    id: 29,
    name: "AITS-21",
    date: "2027-05-16",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Advanced",
    physics: ["Full Syllabus — As per NTA JEE Advanced"],
    chemistry: ["Full Syllabus — As per NTA JEE Advanced"],
    maths: ["Full Syllabus — As per NTA JEE Advanced"]
  },
  {
    id: 30,
    name: "AITS-22",
    date: "2027-05-10",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Advanced",
    physics: ["Full Syllabus — As per NTA JEE Advanced"],
    chemistry: ["Full Syllabus — As per NTA JEE Advanced"],
    maths: ["Full Syllabus — As per NTA JEE Advanced"]
  },
  {
    id: 31,
    name: "AITS-23",
    date: "2027-05-17",
    type: "AITS Full",
    testType: "Full Test",
    pattern: "Advanced",
    physics: ["Full Syllabus — As per NTA JEE Advanced"],
    chemistry: ["Full Syllabus — As per NTA JEE Advanced"],
    maths: ["Full Syllabus — As per NTA JEE Advanced"]
  }
];

// Type color mapping
const TYPE_COLORS = {
  "JEE Main": { accent: "#3B82F6", bg: "rgba(59,130,246,0.12)", label: "Main" },
  "JEE Advanced": { accent: "#F5A623", bg: "rgba(245,166,35,0.12)", label: "Adv" },
  "AITS Part": { accent: "#10B981", bg: "rgba(16,185,129,0.12)", label: "Part" },
  "AITS Full": { accent: "#EC4899", bg: "rgba(236,72,153,0.12)", label: "Full" }
};

// Build date lookup
const DATE_MAP = {};
TESTS.forEach(t => {
  const d = t.date;
  if (!DATE_MAP[d]) DATE_MAP[d] = [];
  DATE_MAP[d].push(t);
});
