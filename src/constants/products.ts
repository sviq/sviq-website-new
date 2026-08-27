export interface Functionality {
  name: string;
  image?: string;
  description: string;
  key_features: string[];
}

export interface Product {
  name: string;
  href: string;
  shortName: string;
  description: string;
  bgColor: string;
  textColor: string;
  about: string[];
  features: string[];
  functionalities: Functionality[];
  brochure: string;
}

export const Products: Product[] = [
  {
    name: "Optiva",
    shortName: "Optiva",
    href: "/products/optiva",
    description:
      "One sign-in for the SVIQ suite. Run documents, visitors, safety, logistics, warehouse, and eBMR from a single operations platform.",
    bgColor: "#0D063A",
    textColor: "white",
    brochure: "",
    about: [
      "Optiva is SVIQ’s unified operations platform. Teams sign in once and open the products they use — DocuTrack, VizTrack, SafeTrack, LogiTrack, Horizon, and eBMR.",
      "Approvals, tasks, users, plants, and workflows sit in one place so each product does not need a separate login stack.",
      "Built for organisations that run more than one SVIQ product and need a single control layer.",
    ],
    features: [
      "Single sign-in across the suite",
      "App launcher for SVIQ products",
      "Shared approvals and tasks",
      "Organisation, plants, and user management",
      "Workflow and approval chains",
    ],
    functionalities: [
      {
        name: "Suite access",
        description:
          "Launch the products your organisation is licensed for from one home.",
        key_features: [
          "DocuTrack",
          "VizTrack",
          "SafeTrack",
          "LogiTrack",
          "Horizon",
          "eBMR",
        ],
      },
      {
        name: "Approvals and tasks",
        description:
          "Review pending work across products without switching accounts.",
        key_features: [
          "Central approvals inbox",
          "Task list",
          "Role-based access",
        ],
      },
      {
        name: "Organisation setup",
        description:
          "Shared masters for the sites and people who use the suite.",
        key_features: [
          "Users, departments, and designations",
          "Company, locations, and plants",
          "Workflows and approval chains",
        ],
      },
    ],
  },
  {
    name: "SafeTrack",
    shortName: "SafeTrack",
    href: "/products/safetrack",
    description:
      "EHS management for plants — observations, incidents, permit to work, PSSR, and management of change in one system.",
    bgColor: "#1B7A62",
    textColor: "white",
    brochure: "/brochures/environment-health-safety.pdf",
    about: [
      "SafeTrack is SVIQ’s Environment, Health & Safety system. It digitises the safety processes plants already run on paper and email.",
      "Modules cover observation capture, incident reporting, permit to work, pre-start safety review, and management of change.",
      "Field teams can raise observations from the plant; approvals stay in workflow so PTW, PSSR, and MOC do not stall in inboxes.",
    ],
    features: [
      "Observations",
      "Incidents",
      "Permit to Work",
      "Pre-Start Safety Review (PSSR)",
      "Management of Change (MOC)",
    ],
    functionalities: [
      {
        name: "Observations",
        image: "/images/EnvironmentHealthSafety/5.png",
        description:
          "Capture unsafe acts and conditions from the field and track action to close.",
        key_features: [
          "Quick reporting",
          "Categorisation and priority",
          "Public / field submit",
          "Action tracking",
        ],
      },
      {
        name: "Incidents",
        image: "/images/EnvironmentHealthSafety/6.png",
        description:
          "Log, investigate, and close incidents with a controlled workflow.",
        key_features: [
          "Incident logging",
          "Investigation and follow-up",
          "Corrective and preventive actions",
          "Dashboards",
        ],
      },
      {
        name: "Permit to Work",
        image: "/images/EnvironmentHealthSafety/1.png",
        description:
          "Raise, review, approve, and track work permits for high-risk jobs.",
        key_features: [
          "Online permit request and issuance",
          "Approval workflow",
          "Real-time tracking",
          "Configurable permit types",
        ],
      },
      {
        name: "Pre-Start Safety Review (PSSR)",
        image: "/images/EnvironmentHealthSafety/3.png",
        description:
          "Structured checks before a new or modified process or equipment is started.",
        key_features: [
          "Checklists",
          "Multi-department sign-off",
          "Digital approvals",
          "Ready-for-start record",
        ],
      },
      {
        name: "Management of Change (MOC)",
        image: "/images/EnvironmentHealthSafety/4.png",
        description:
          "Control workforce, equipment, and process changes before they go live.",
        key_features: [
          "Change request workflow",
          "Impact review",
          "Role-based approvals",
          "Change history",
        ],
      },
    ],
  },
  {
    name: "Horizon",
    shortName: "Horizon",
    href: "/products/horizon",
    description:
      "Warehouse management for inbound, outbound, filling, process orders, deliveries, and scan-based shop-floor work.",
    bgColor: "#3B48B5",
    textColor: "white",
    brochure: "",
    about: [
      "Horizon is SVIQ’s warehouse management system. It covers the movement of material from inbound receipt through warehouse, filling, process orders, and deliveries.",
      "Operators work with posted documents, printing, and scan flows including QR and barcode checks.",
      "Settings hold warehouses, filling stations, movement types, packing, and material masters.",
    ],
    features: [
      "Inbound and outbound",
      "Warehouse and fillings",
      "Process orders and deliveries",
      "Scan, QR, and barcode",
      "Posted documents and printing",
    ],
    functionalities: [
      {
        name: "Inbound and outbound",
        description:
          "Receive, post, and despatch against warehouse documents.",
        key_features: [
          "Inbound",
          "Outbound",
          "Posted documents",
          "Deliveries",
        ],
      },
      {
        name: "Warehouse operations",
        description: "Run the store, filling stations, and process orders in one place.",
        key_features: [
          "Warehouse",
          "Fillings",
          "Process orders",
          "Printing",
        ],
      },
      {
        name: "Scan and verification",
        description:
          "Shop-floor scan for QR, QC check, public scan, and barcode verify.",
        key_features: [
          "QR code scanner",
          "QC check",
          "Barcode verifier",
          "FG pickup scan",
        ],
      },
    ],
  },
  {
    name: "VizTrack",
    shortName: "VizTrack",
    href: "/products/viztrack",
    description:
      "Visitor management for plants — scheduled visits, gate check-in, cash labour, vehicles, transport, guard patrolling, and ERT live view.",
    bgColor: "#463DEB",
    textColor: "white",
    brochure: "/brochures/viztrack.pdf",
    about: [
      "VizTrack is SVIQ’s visitor management system for internal and external visitors, contractors, and plant security.",
      "Hosts schedule visits. The gate checks people in with QR, a security entry form, or VIP check-in. Cash labour, vehicle visitors, and transport movements are recorded in the same system.",
      "Guard patrolling and an ERT member live view support emergency headcount. A mobile app is available for field use.",
    ],
    features: [
      "Schedule visitor",
      "Gate check-in",
      "Cash labour",
      "Vehicle visitor records",
      "Transport tracking",
      "Guard patrolling",
      "ERT live dashboard",
      "Mobile app",
    ],
    functionalities: [
      {
        name: "Schedule visitor",
        image: "/images/VizTrack/1.png",
        description:
          "Pre-register visits with or without a permission code, by visitor type.",
        key_features: [
          "Visitor by permission code",
          "Visitor without code",
          "Visitor types",
          "Host scheduling",
        ],
      },
      {
        name: "Visitor check-in at gate",
        image: "/images/VizTrack/2.png",
        description: "Security completes entry at the gate, not at a desk later.",
        key_features: [
          "QR code check-in",
          "Security entry form",
          "VIP check-in",
          "Self / QR entry",
        ],
      },
      {
        name: "Cash labour and vehicles",
        description:
          "Record cash labour and vehicle visitors alongside people movement.",
        key_features: [
          "Cash labour",
          "Vehicle visitor records",
          "Transport tracking",
          "Driver and vehicle masters",
        ],
      },
      {
        name: "Patrolling, ERT, and mobile",
        image: "/images/VizTrack/3.png",
        description:
          "Rounds, emergency-team availability, and a mobile app for the gate and patrol.",
        key_features: [
          "Guard patrolling",
          "Round check points",
          "ERT member live dashboard",
          "Headcount for evacuation",
          "Mobile app support",
        ],
      },
    ],
  },
  {
    name: "LogiTrack",
    shortName: "LogiTrack",
    href: "/products/logitrack",
    description:
      "Logistics management — trip request, approval before the trip, supplier assignment, live tracking, driver and vehicle, invoices, and DocuTrack upload.",
    bgColor: "#5B4FCF",
    textColor: "white",
    brochure: "",
    about: [
      "LogiTrack is SVIQ’s logistics management system for trip requisition through delivery and invoice.",
      "A trip is requested, approved, assigned to a supplier, given a driver and vehicle, then tracked live.",
      "Multiple invoices can be uploaded on the trip. Files can go straight to DocuTrack from LogiTrack so logistics documents sit in the same repository as the rest of the plant.",
    ],
    features: [
      "Request trip",
      "Approval before trip",
      "Assign trip to supplier",
      "Live location tracking",
      "Assign driver and vehicle",
      "Multiple invoice upload",
      "Upload to DocuTrack",
    ],
    functionalities: [
      {
        name: "Trip request and approval",
        description:
          "Raise a trip requisition and hold execution until the workflow is approved.",
        key_features: [
          "Trip request",
          "Approval workflow before the trip",
          "Trip queue",
          "Standard trips and rate cards",
        ],
      },
      {
        name: "Assign and run the trip",
        description: "Hand the trip to a supplier and put a vehicle on the road.",
        key_features: [
          "Assign trip to supplier",
          "Assign driver and vehicle",
          "Live location tracking",
          "Trip track and supplier dashboard",
        ],
      },
      {
        name: "Invoices and DocuTrack",
        description:
          "Attach invoices on the trip and push documents into DocuTrack without a second upload path.",
        key_features: [
          "Multiple invoice upload",
          "Direct upload from LogiTrack to DocuTrack",
          "Invoice details on mobile",
        ],
      },
    ],
  },
  {
    name: "DocuTrack",
    shortName: "DocuTrack",
    href: "/products/docutrack",
    description:
      "Document management with approval workflow, OCR from PDFs and Excel, a dynamic folder tree, repository, and share links.",
    bgColor: "#0F4548",
    textColor: "white",
    brochure: "",
    about: [
      "DocuTrack is SVIQ’s document management system. Upload files, run them through an approval workflow, and keep them in a structured repository.",
      "OCR extracts content from PDFs, Excel, and similar files. Folder and file structure is configured per plant, not hard-coded.",
      "Documents can be shared with a link. Invoice processing, projects, and document studio sit on the same platform.",
    ],
    features: [
      "Upload with approval workflow",
      "OCR from PDF, Excel, and files",
      "Dynamic folder and file structure",
      "File repository",
      "Share directly",
      "Invoice processing and document studio",
    ],
    functionalities: [
      {
        name: "Upload and approve",
        description:
          "Send documents into a workflow instead of an unmanaged shared drive.",
        key_features: [
          "Upload",
          "Approval workflow",
          "Document types and fields",
          "Explorer and repository",
        ],
      },
      {
        name: "OCR and structure",
        description:
          "Extract from files and store them in a folder tree you define.",
        key_features: [
          "OCR extract from PDF, Excel, and other files",
          "Dynamic folder and file structure",
          "Classifications and field mapping",
        ],
      },
      {
        name: "Share and workspaces",
        description: "Give access without emailing copies around.",
        key_features: [
          "Share to anyone with a controlled link",
          "Public folder",
          "Projects and document studio",
          "Invoice processing",
        ],
      },
    ],
  },
  {
    name: "eBMR",
    shortName: "eBMR",
    href: "/products/ebmr",
    description:
      "Electronic batch manufacturing records — template-based batch forms, log sheets, in-process checks, and approval workflows.",
    bgColor: "#2A2E78",
    textColor: "white",
    brochure: "/brochures/batch-manufacturing-records.pdf",
    about: [
      "eBMR is SVIQ’s electronic batch manufacturing record system. Plants run production on templates instead of paper BMR packs.",
      "Multi-stage cycles record observations, activity, readings, and quality check points. Log sheets are managed in the same system.",
      "Versioned templates follow the current recipe or SOP. Basic and deviation approvals sit on the batch before it is closed.",
    ],
    features: [
      "Template-based eBMR",
      "Log sheet management",
      "Multi-stage production cycles",
      "In-process observations and QC",
      "Approval workflows",
    ],
    functionalities: [
      {
        name: "Templates",
        image: "/images/BatchManufacturingRecords/1.png",
        description:
          "Build product-wise dynamic eBMR forms and keep versions with the latest recipe or SOP.",
        key_features: [
          "Template-based, product-wise form creation",
          "Version management",
          "Multi-stage production processes",
        ],
      },
      {
        name: "Log sheets and in-process capture",
        image: "/images/BatchManufacturingRecords/2.png",
        description:
          "Record the batch as it runs — readings, observations, and quality checks.",
        key_features: [
          "Log sheet management",
          "In-process observations, activity, and readings",
          "Quality check points",
          "Time-point reading alerts",
        ],
      },
      {
        name: "Approvals",
        image: "/images/BatchManufacturingRecords/3.png",
        description:
          "Close the batch only after the required sign-off, including deviations.",
        key_features: [
          "Basic approval workflow",
          "Deviation approval workflow",
          "End-of-operation / phase IP QC",
        ],
      },
    ],
  },
];
