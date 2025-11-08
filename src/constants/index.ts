interface Navigation {
  title: string;
  href?: string;
}

export interface Functionality {
  name: string;
  image?: string;
  description: string;
  key_features: string[];
}

interface Product {
  name: string;
  href: string;
  description: string;
  bgColor: string;
  textColor: string;
  about: string[];
  features: string[];
  functionalities: Functionality[];
  brochure: string;
}

export const navigation: Navigation[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Solutions",
    href: "/solutions",
  },
  {
    title: "About us",
    href: "/about",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const Products: Product[] = [
  {
    name: "VizTrack",
    href: "/products/viztrack",
    description:
      "A comprehensive Visitor Management System designed to streamline and simplify the management of both internal and external visitors, enhancing coordination and readiness for any emergency response requirements.",
    bgColor: "#463DEB",
    textColor: "white",
    about: [
      "SVIQ VizTrack is a comprehensive Visitor Management System designed to streamline and simplify the management of both internal and external visitors, enhancing coordination and readiness for any emergency response requirements.",
      "By leveraging its functionalities, organizations can ensure a safe, efficient, and seamless experience for both visitors and employees.",
      "What's more, VizTrack provides robust administrative controls and actionable insights through advanced reporting features.",
      "Complete Visitor Management System to track both Internal and External Visitors",
      "Maintains Head Count at Plant comprising both employees and visitors to enable aid in emergency evacuations",
      "Keeps updated location-wise Emergency Response Team members' availability by tracking their entry/exit from each location",
    ],
    features: [
      "Internal Visitor Management",
      "External Visitor Management",
      "Emergency Response Team Update",
      "Workflow Management and Reporting",
    ],
    brochure: "/brochures/viztrack.pdf",
    functionalities: [
      {
        name: "Internal Visitor Management",
        image: "/images/VizTrack/1.png",
        description:
          "Manages the registration, tracking, and monitoring of internal visitors, including employees and contractors.",
        key_features: [
          "Pre-Registration",
          "Check In / Check Out Process",
          "Access Permissions",
          "Notifications",
          "Compliance Tracking",
        ],
      },
      {
        name: "External Visitor Management",
        image: "/images/VizTrack/2.png",
        description:
          "Handles the end-to-end process of managing external visitors, such as clients, vendors, and delivery personnel.",
        key_features: [
          "Appointment Scheduling",
          "Visitor Verification",
          "Customizable Badges",
          "Visitor History",
          "Host Notifications",
          "Self Service Kiosks",
        ],
      },
      {
        name: "Emergency Response Team Update",
        image: "/images/VizTrack/3.png",
        description:
          "Provides update on availability of emergency response teams in efficiently managing and tracking individuals during such eventualities.",
        key_features: [
          "Emergency Alerts",
          "Evacuation Status Tracking",
          "Team Head Count Management",
          "Incident Reporting",
          "Predefined Protocols",
        ],
      },
      {
        name: "Workflow and Reporting",
        image: "/images/VizTrack/4.png",
        description:
          "Provides robust tools for administrators to configure, monitor, and generate reports for all visitor management activities.",
        key_features: [
          "Role-Based Access Control",
          "Customizable Settings",
          "Audit Trials",
          "Analytics Dashboard",
          "Report Generation",
          "Integration",
        ],
      },
      {
        name: "Benefits of VizTrack",
        description: "Organizations implementing VizTrack gain:",
        key_features: [
          "Enhanced operational efficiency with streamlined visitor processes.",
          "Improved security through real-time tracking and identity verification.",
          "Increased compliance with detailed audit trails and reporting.",
          "Better emergency preparedness with predefined protocols and instant alerts.",
          "Time savings with self-service kiosks and automated notifications.",
          "Actionable insights through comprehensive analytics and dashboards.",
          "Customizable and scalable to meet organizational needs.",
          "Seamless integration with existing tools and systems.",
        ],
      },
    ],
  },
  {
    name: "Audit Management System (AMS)",
    href: "/products/audit-management-system",
    description:
      "A comprehensive Audit Management System that is designed to streamline and simplify the management of audits, enhancing coordination and readiness for any audit requirements.",
    bgColor: "#FFD6DC",
    textColor: "#110C3E",
    about: [
      "The SVIQ Audit Management System is a practical tool designed to simplify and streamline the auditing process in organizations of any size. It helps manage the entire audit lifecycle, from planning and execution to follow-ups and reporting, all in one centralized platform.",
      "By automating manual tasks and providing real-time tracking, the SVIQ AMS ensures audits are completed efficiently and accurately. It enables teams to identify risks, track findings, and implement corrective actions quickly, in conformity with global industry best practices, ensuring compliance with regulations and standards.",
      "Whether you’re conducting internal / external audits, or compliance checks, SVIQ AMS provides transparency, boosts productivity, and supports continuous improvement, making it an essential tool for businesses striving for operational excellence.",
    ],
    brochure: "/brochures/audit-management-system.pdf",
    features: [
      "Audit Management",
      "Observations",
      "Workflow Management",
      "Conformity and Compliance Tracking",
      "Reporting",
    ],
    functionalities: [
      {
        name: "Audit Management",
        image: "/images/AuditManagementSystem/1.png",
        description:
          "Streamline the end-to-end audit process, from planning to execution and follow-up, ensuring thorough compliance and operational efficiency.",
        key_features: [
          "Planning, Designing and Scheduling",
          "Custom Audit Checklists",
          "Real-Time Data Capture",
          "Sales",
          "Risk-Focused Audits",
        ],
      },
      {
        name: "Observations",
        image: "/images/AuditManagementSystem/2.png",
        description:
          "Ensure every finding is documented, categorized, and addressed for conformity, compliance and continuous improvement.",
        key_features: [
          "Observation Logging",
          "Action-Oriented Follow-Up",
          "Root Cause Analysis",
          "Centralized Observation Repository",
        ],
      },
      {
        name: "Reporting",
        image: "/images/AuditManagementSystem/3.png",
        description:
          "Deliver actionable insights and keep all stakeholders informed with intuitive reporting tools.",
        key_features: [
          "Audit Findings Reports",
          "Compliance and Performance Tracking",
          "Export and Track Options",
          "Dashboard and Analytics",
        ],
      },
      {
        name: "Workflow Management",
        description:
          "Simplify processes with automated workflows that ensure accountability and timely resolution of issues.",
        image: "/images/AuditManagementSystem/4.png",
        key_features: [
          "Configurable Workflows",
          "Automated Alerts",
          "Approvals and Escalations",
          "Audit Trails and Logs",
        ],
      },
      {
        name: "Benefits of Audit Management System",
        description:
          "Organizations implementing Audit Management Software solutions gain.",
        key_features: [
          "Improved Compliance",
          "Streamlined Operations",
          "Enhanced Visibility",
          "Proactive Risk Management",
          "Cost and Time Savings",
          "Informed Decision Making",
        ],
      },
    ],
  },
  {
    name: "Environment Health & Safety (CSSR) (EHS)",
    href: "/products/enviroment-health-safety",
    description:
      "A comprehensive Environment Health & Safety (CSSR) Management System that is designed to streamline and simplify the management of EHS, enhancing coordination and readiness for any EHS requirements.",
    bgColor: "#29B473",
    textColor: "white",
    about: [
      "The SVIQ EHS system designed to help organizations manage compliance, risk, and safety processes efficiently.",
      "The solution streamlines workflows, reduces risks, and ensures adherence to regulatory standards, fostering a safer and more sustainable workplace.",
      "Created to digitalize all Processes in the Governance of Environment, Health and Safety Operations of any industry sector",
      "Covers PTW, PSSR, PSM, Incident Management, Observations and Change Management processes.",
    ],
    brochure: "/brochures/environment-health-safety.pdf",
    features: [
      "Permit to Work (PTW)",
      "Process Safety Management (PSM)",
      "Pre-Start Safety Review (PSSR)",
      "Management of Change (MOC)",
      "Observations",
      "Incidents Reporting",
    ],
    functionalities: [
      {
        name: "Permit to Work (PTW)",
        image: "/images/EnvironmentHealthSafety/1.png",
        description:
          "The Permit to Work module ensures a structured and compliant workflow for high-risk tasks, safeguarding personnel and facilities. It enables organizations to manage work permits digitally, reducing manual errors and ensuring accountability.",
        key_features: [
          "Online Permit Request and Issuance",
          "Risk Assessment Integration",
          "Real Time Tracking",
          "Automated Approvals",
          "Customizable Templates",
          "Audit Trials",
        ],
      },
      {
        name: "Process Safety Management",
        description:
          "This module provides a comprehensive framework for preventing process-related incidents and ensuring operational safety. By centralizing safety management processes, organizations can proactively mitigate risks.",
        image: "/images/EnvironmentHealthSafety/2.png",
        key_features: [
          "Hazard Analysis Tools",
          "Compliance Monitoring",
          "Safety Equipment Management",
          "Incident Investigation Integration",
          "Training Management",
          "Key Metrics Dashboards",
        ],
      },
      {
        name: "Pre-Start Safety Review (PSSR)",
        description:
          "The Pre-Start Safety Review module ensures operational readiness before initiating new or modified processes. This proactive approach minimizes risks and enhances safety.",
        image: "/images/EnvironmentHealthSafety/3.png",
        key_features: [
          "Customizable Checklists",
          "Multi-Department Collaborations",
          "Digital Approvals & Documentations",
          "Alerts & Notification",
          "Compliance Assurance",
          "Audit Ready Reporting",
        ],
      },
      {
        name: "Management of Change (MOC)",
        image: "/images/EnvironmentHealthSafety/4.png",
        description:
          "The Management of Change module provides a structured process for evaluating and implementing changes safely and efficiently. This ensures that no aspect of safety, compliance, or operations is overlooked.",
        key_features: [
          "Change Request Workflow",
          "Impact Analysis Tools",
          "Role Based Approvals",
          "Historical Data Management",
          "Real Time Notifications",
          "Regulatory Compliance Integration",
        ],
      },
      {
        name: "Observations",
        description:
          "Encourage a culture of proactive safety with a robust observation module that captures, tracks, and resolves safety concerns efficiently.",
        image: "/images/EnvironmentHealthSafety/5.png",
        key_features: [
          "Quick Reporting",
          "Categorization & Prioritization",
          "Mobile Accessibility",
          "Real Time Alerts",
          "Analytics & Insights",
          "Action Tracking",
        ],
      },
      {
        name: "Incidents Reporting",
        description:
          "Streamline incident reporting, investigation, and resolution with a comprehensive incident management module. This functionality helps organizations respond swiftly and learn from every incident to prevent recurrence.",
        image: "/images/EnvironmentHealthSafety/6.png",
        key_features: [
          "Incident Logging",
          "Root Cause Analysis (RCA)",
          "Corrective & Preventive Actions (CAPA)",
          "Regulatory Reporting",
          "Integrations with Other Modules",
          "Realtime Dashboards",
        ],
      },
      {
        name: "Benefits Of EHS Solutions",
        description:
          "By integrating these functionalities into a unified EHS platform, organizations can:",
        key_features: [
          "Reduce Manual Efforts and Increase Process Efficiency",
          "Foster a Proactive Safety Culture",
          "Gain Actionable Insights through Advanced Analytics",
          "Improve Stakeholders’ Trust with transparent Safety Processes",
          "Achieve Sustainability Goals",
        ],
      },
    ],
  },
  {
    name: "Batch Manufacturing Records (BMR)",
    href: "/products/batch-manufacturing-records",
    description:
      "A comprehensive Batch Manufacturing Records Management System that is designed to streamline and simplify the management of BMR, enhancing coordination and readiness for any BMR requirements.",
    bgColor: "#0062B5",
    textColor: "white",
    about: [
      "SVIQ eBMR streamlines manufacturing for chemical and pharmaceutical companies by digitalizing processes and ensuring real-time data management.",
      "It enhances data integrity, operational efficiency, and regulatory compliance while providing complete visibility and traceability of batch activities.",
      "Achieve superior product quality, consistency, and compliance with SVIQ Solutions eBMR.",
      "A Flexible Template based Electronic Batch Manufacturing Process Management software",
      "Recording any Multi-stage Production Cycles with In-Process Observations, Activity, Readings and Quality Check Points",
      "Designed versatile for application in any industry vertical.",
    ],
    brochure: "/brochures/batch-manufacturing-records.pdf",
    features: [
      "Template-based, Product-wise Dynamic eBMR Form Creation",
      "Supports Multi-stage Production Processes",
      "Version Management to conform with latest Recipe Release / Production SOPs",
      "Automated Time-point Reading Alerts",
      "End-of-Operation/Phase IP QC Management",
      "Basic and Deviation Approval Workflows",
      "Convergence with Incident Management, Observations, PTW modules",
      "Seamlessly Integrable with SCADA systems and any ERP",
    ],
    functionalities: [
      {
        name: "Operations/Phase-wise Task Lists",
        image: "/images/BatchManufacturingRecords/1.png",
        description:
          "This feature streamlines planning and execution of batch-related activities, ensuring accountability and operational efficiency.",
        key_features: [
          "Dynamic Task Assignment",
          "Step By Step Guidance",
          "Corrective & Preventive Actions (CAPA)",
          "Real Time Progress Monitoring",
          "Automated Alerts",
          "Integrated Compliance Checks",
          "Mobile Access, Tablet-based Operations",
        ],
      },
      {
        name: "Batch Manufacturing",
        description:
          "This module digitizes the batch manufacturing process, eliminating manual errors and ensuring compliance.",
        image: "/images/BatchManufacturingRecords/2.png",
        key_features: [
          "Pre-Batch Preparation",
          "Real Time Data Capture - Manual, SCADA, Photo Uploads",
          "Deviation Alerts",
          "Material Consumption Tracking",
          "Integrated In-Process Quality Checks",
          "Digital Batch Records",
        ],
      },
      {
        name: "Approval Workflows",
        image: "/images/BatchManufacturingRecords/3.png",
        description:
          "This functionality ensures that every batch adheres to rigorous quality and compliance standards before release.",
        key_features: [
          "Role Based Approvals",
          "Configurable Work Flow Design",
          "Automated Notifications",
          "Electronic Signatures",
          "Real Time Visibility",
          "Audit Trails",
        ],
      },
      {
        name: "Integration With SAP",
        image: "/images/BatchManufacturingRecords/4.png",
        description:
          "Seamless integration with SAP enhances productivity by ensuring the eBMR system and SAP work as a unified ecosystem.",
        key_features: [
          "Data Synchronization",
          "Material Resource Planning",
          "Production Order Execution",
          "Quality Control Integration",
          "Regulatory Compliance Reporting",
          "Enhanced Decision-Making",
        ],
      },
      {
        name: "Benefits of eBMR Solutions",
        description: "Organizations implementing eBMR solutions gain.",
        key_features: [
          "Enhanced Accuracy",
          "Regulatory Compliance",
          "Improved Efficiency",
          "Cost Savings",
          "Scalability",
          "End-to-End Traceability",
        ],
      },
    ],
  },
];

export const AllOpenings = [
  {
    jobId: "FSD-001",
    role: "Full Stack Developer (Node + React)",
    position: "Full Time",
    salary: "₹4L - ₹6L",
    jobDescription: [
      "Onsite, Vadodara, Gujarat, India , 1-2 Years Of Experience",
      "Department: Product Development",
      "Full Time 2 Positions Available.",
    ],
    details: [
      "Lead product features end-to-end using React, Node.js, MSSQL Server.",
      "Ship pixel-perfect UI with Tailwind CSS while keeping performance in mind.",
      "Design clean APIs, manage database migrations, and monitor uptime.",
      "Coach junior engineers through code reviews and pairing sessions.",
      "Continuously enhance our design system and internal tooling.",
    ],
    requirements: [
      "4-6 years building web applications with JavaScript/TypeScript.",
      "Deep hands-on experience with React, Hooks, and component composition.",
      "Strong proficiency writing REST APIs using Node.js with Express/Nest.",
      "Solid SQL knowledge (MSSQL Server) and experience with ORMs.",
      "Startup mindset with ability to prioritize, iterate fast, and mentor others.",
    ],
    responsibilities: [
      "Deliver product features from discovery to production with minimal guidance.",
      "Own testing strategy, automation coverage, and CI health for your modules.",
      "Triaging bugs, shipping fixes, and improving observability dashboards.",
      "Document architectural decisions and share demos during engineering syncs.",
      "Collaborate closely with design, QA, and customer success on release readiness.",
    ],
  },
  {
    jobId: "FE-002",
    role: "ReactJS Developer",
    position: "Full Time",
    salary: "₹4L - ₹5L",
    jobDescription: [
      "Onsite, Vadodara, Gujarat, India , 1-2 Years Of Experience",
      "Department: Product Development",
      "Full Time 2 Positions Available.",
    ],
    details: [
      "Lead product features end-to-end using React, Node.js, MSSQL Server.",
      "Own the pixel polish for dashboards, forms, and onboarding flows.",
      "Design clean APIs, manage database migrations, and monitor uptime.",
      "Coach junior engineers through code reviews and pairing sessions.",
      "Continuously enhance our design system and internal tooling.",
    ],
    requirements: [
      "3-4 years building production React or Next.js applications.",
      "Deep hands-on experience with React, Hooks, and component composition.",
      "Strong proficiency writing REST APIs using React, Node.js, MSSQL Server.",
      "Solid SQL knowledge (MSSQL Server) and experience with ORMs.",
      "Startup mindset with ability to prioritize, iterate fast, and mentor others.",
    ],
    responsibilities: [
      "Deliver product features from discovery to production with minimal guidance.",
      "Own testing strategy, automation coverage, and CI health for your modules.",
      "Triaging bugs, shipping fixes, and improving observability dashboards.",
      "Document architectural decisions and share demos during engineering syncs.",
      "Collaborate closely with design, QA, and customer success on release readiness.",
    ],
  },
  {
    jobId: "BD-003",
    role: "Business Development Executive",
    position: "Full Time",
    salary: "₹3L - ₹4L",
    jobDescription: [
      "Onsite, Vadodara, Gujarat, India , 1-2 Years Of Experience",
      "Department: Sales",
      "Full Time 1 Position Available.",
    ],
    details: [
      "Source and qualify new leads through calls, email, and LinkedIn.",
      "Demo SVIQ products to operations and safety teams in manufacturing and other industries.",
      "Craft proposals, follow up diligently, and own pipeline hygiene.",
      "Support founders during enterprise negotiations and pilots.",
      "Capture market feedback to help shape messaging and pricing.",
    ],
    requirements: [
      "1-2 years selling SaaS or technology solutions in India.",
      "Comfortable running discovery calls and product demos.",
      "Excellent communication and storytelling skills.",
      "Experience using HubSpot, Zoho, or similar CRM tools.",
      "Self-starter who thrives in fast-paced founder-led sales cycles.",
    ],
    responsibilities: [
      "Hit weekly outreach targets and monthly SQL/closed-won goals.",
      "Maintain accurate pipeline reports for leadership syncs.",
      "Organize local meetups, webinars, and customer reference calls.",
      "Partner with marketing on campaigns, content, and events.",
      "Ensure smooth handoff to customer success after deal closure.",
    ],
  },
];
