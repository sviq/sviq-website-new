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
  {
    name: "TechKraft  Cimmra",
    href: "/products/techkraft-cimmra",
    description:
      "A comprehensive TechKraft Cimmra Management System that is designed to streamline and simplify the management of TechKraft Cimmra, enhancing coordination and readiness for any TechKraft Cimmra requirements.",
    bgColor: "#ABD1FC",
    textColor: "#110C3E",
    about: [
      "A Leading Provider of cutting-edge Process Digitalization and Automation Software for Enterprise Organizations. Specializing in streamlining functional processes aligned with your business priorities, enhancing productivity, reducing costs and increasing productivity.",
      "The Cimmra® eProcurement Suite handles sourcing, vendor management, contract negotiations, monitor fulfilments, track settlements and manage supplier performance. Helps you achieve procurement excellence and realize your business’ fullest potential.",
    ],
    brochure: "/brochures/techkraft-cimmra.pdf",
    features: [
      "INTELLIGENT PR HANDLING",
      "SMART SOURCING FEATURES",
      "MEANINGFUL QUOTE ANALYSIS",
      "TIMELY AND WISE EVENT AWARDS",
      "WELL-MONITORED SHIPMENTS",
      "PRE-INSPECTED ITEM RECEIPTS",
      "NET ACCEPTANCE IN DELIVERY",
      "ON-SCHEDULE PAYMENTS",
    ],
    functionalities: [
      {
        name: "Smart Sourcing on Cimmra",
        image: "/images/TechKraftCimmra/1.png",
        description:
          "The Cimmra eProcurement Suite provides a comprehensive solution for sourcing, vendor management, and contract negotiations, ensuring procurement excellence.",
        key_features: [
          "Vendor Registration",
          "RFQ Management",
          "Bid Evaluation",
          "Contract Management",
          "Supplier Performance Tracking",
        ],
      },
      {
        name: "Intelligent PR Handling",
        description:
          "This feature streamlines the procurement process by automating purchase requisitions and approvals.",
        key_features: [
          "Automated PR Location-based Workflow Determination",
          "PR Item Category-based Approval Stages and Auto Assignment",
          "Spend Type and Size Considerations for Clearance Routing",
          "Pre-set Treatment of PR for Rate Contract Items",
        ],
      },
      {
        name: "Unattended Auctions For Automated Negotiations",
        image: "/images/TechKraftCimmra/2.png",
        description:
          "Automate the negotiation process with intelligent auction features that ensure timely and cost-effective procurement.",
        key_features: [
          "Conventional negotiations actually hinder the speed of deal closures",
          "No more countless hours negotiating with each contender separately and repeatedly, with Cimmra® Auctions on your side.",
          "Simply extend your RFX to a Reverse Auction involving the Shortlist of Suppliers you’ve arrived at.",
          "Choose from a variety of Auction Approaches and Settings for negotiations to happen on their own, within the timeframe you decide.",
        ],
      },
      {
        name: "Well-Considered Event Awards",
        description:
          "You no longer have to settle for going by just Landed Cost ranking",
        image: "/images/TechKraftCimmra/3.png",
        key_features: [
          "It was sometimes a toss-up to go simply by either L1 or the best past experience.",
          "Not any more! Cimmra® ePS Smart Sourcing comes to your aid here, with Share of Business (SoB) combinations to create as Award Scenarios, compare and consider.",
          "This enables you to take surer, data backed, informed award decisions.",
        ],
      },
      {
        name: "Monitored Shipments",
        description:
          "Delayed, damaged or incorrect shipments can be such a hassle.",
        key_features: [
          "Cimmra® ePS Fulfilment guards you against any shipments botched up in time, items or quantities with its Advance Shipping Note approval workflow.",
          "Choose if you want only approved shipments made by the Suppliers. Exercise the flexibility to have anything shipped without intimation too, for cases you decide.",
          "Ensures chaos free Warehousing with shipments available when needed without inventory harmony going haywire.",
        ],
        image: "/images/TechKraftCimmra/4.png",
      },
      {
        name: "Pre-Inspected Item Receipts",
        image: "/images/TechKraftCimmra/5.png",
        description: "Handle cases requiring Pre-dispatch Inspection",
        key_features: [
          "Cimmra® eProcurement Suite’s ASN approval workflow can serve as Pre-dispatch Inspection Requests",
          "Supports cases where only consignments that are scrutinized or pre-inspected at Supplier’s premises, are cleared for shipment.",
        ],
      },
      {
        name: "Monitored Service",
        image: "/images/TechKraftCimmra/6.png",
        description:
          "Staying in control of service fulfilments can be such a boon.",
        key_features: [
          "Creation of Service Entry Sheets (SES) by Suppliers allow scrutiny of service fulfilments",
          "Helps you stay on top of Contracted Service fulfilments",
          "Forms basis for settlement of cyclic Service Invoices",
        ],
      },
      {
        name: "Quality Check and Net Receipt",
        image: "/images/TechKraftCimmra/7.png",
        description: "Cimmra® tracks and alerts for abnormal receipts.",
        key_features: [
          "Rejection/Short/Over Shipment are documented in relevant cases to form basis for Debit or Credit Notes.",
          "Net Receipt is recorded to arrive at pending fulfilments and accrued payable amounts through a multi-way matching process.",
        ],
      },
      {
        name: "On-Schedule Settlements",
        description:
          "Early payments can harm cash flow just as much as late ones",
        image: "/images/TechKraftCimmra/8.png",
        key_features: [
          "Cimmra® ePS Settlement complete due diligence with in-process queries/responses, support documentation, and multi-level scrutiny and approvals",
          "Watch out for available Credit Period, create upcoming payment provisions for on-time settlement.",
          "After all, Cimmra® is all about saving money and adding to Profits!",
        ],
      },
    ],
  },
];

export const AllOpenings = [
  {
    jobId: "001",
    role: "Full Stack Developer",
    position: "Full Time",
    salary: "$10K - $18K",
    jobDescription: [
      "Remote, India , 4 to 5 Years Of Experience",
      "Department: Product Engineering",
      "Full Time 5 Positions Available.",
    ],
    details: [
      "Developing front end website architecture.",
      "Designing user interactions on web pages.",
      "Developing back end website applications.",
      "Creating servers and databases for functionality.",
      "Ensuring cross-platform optimization for mobile phones.",
      "Ensuring responsiveness of applications.",
      "Working alongside graphic designers for web design features.",
      "Seeing through a project from conception to finished product.",
      "Designing and developing APIs.",
      "Meeting both technical and consumer needs.",
    ],
    requirements: [
      "Degree in Computer Science.",
      "Strong organizational and project management skills.",
      "Proficiency with fundamental front end languages such as HTML, CSS and JavaScript.",
      "Familiarity with JavaScript frameworks such as Angular JS, React and Amber.",
      "Proficiency with server side languages such as Python, Ruby, Java, PHP and .Net.",
      "Familiarity with database technology such as MySQL, Oracle and MongoDB.",
      "Excellent verbal communication skills.",
      "Good problem solving skills.",
      "Attention to detail.",
    ],
    responsibilities: [
      "Developing front end website architecture.",
      "Designing user interactions on web pages.",
      "Developing back end website applications.",
      "Creating servers and databases for functionality.",
      "Ensuring cross-platform optimization for mobile phones.",
      "Ensuring responsiveness of applications.",
      "Working alongside graphic designers for web design features.",
      "Seeing through a project from conception to finished product.",
      "Designing and developing APIs.",
      "Meeting both technical and consumer needs.",
    ],
  },
  {
    jobId: "002",
    role: "UI/UX Designer",
    position: "Full Time",
    salary: "$8K - $15K",
    jobDescription: [
      "Remote, India , 3 to 4 Years Of Experience",
      "Department: Design",
      "Full Time 3 Positions Available.",
    ],
    details: [
      "Gathering and evaluating user requirements.",
      "Illustrating design ideas using storyboards, process flows, and sitemaps.",
      "Designing graphic user interface elements, like menus, tabs, and widgets.",
      "Building page navigation buttons and search fields.",
      "Creating original graphic designs (e.g., images, sketches, and tables).",
      "Identifying and troubleshooting UX problems.",
      "Developing UI mockups and prototypes that clearly illustrate site functionality.",
    ],
    requirements: [
      "Bachelor’s degree in Design, Computer Science, or relevant field.",
      "Proven work experience as a UI/UX Designer or similar role.",
      "Portfolio of design projects.",
      "Knowledge of wireframe tools (e.g., Wireframe.cc and InVision).",
      "Up-to-date knowledge of design software like Figma, Adobe Illustrator, and Photoshop.",
      "Excellent communication skills.",
    ],
    responsibilities: [
      "Work closely with product managers and engineers to gather user requirements.",
      "Design and implement visually appealing user interfaces.",
      "Ensure intuitive and user-friendly designs.",
      "Conduct layout adjustments based on user feedback.",
      "Stay updated with the latest UI trends and technologies.",
    ],
  },
  {
    jobId: "003",
    role: "Backend Developer",
    position: "Full Time",
    salary: "$12K - $20K",
    jobDescription: [
      "Remote, India , 5+ Years Of Experience",
      "Department: Software Development",
      "Full Time 4 Positions Available.",
    ],
    details: [
      "Develop and maintain scalable backend systems.",
      "Design and implement RESTful APIs.",
      "Ensure high performance and security of backend services.",
      "Work with databases like PostgreSQL, MySQL, and MongoDB.",
      "Optimize application performance and security.",
      "Collaborate with front-end developers and other teams.",
    ],
    requirements: [
      "Degree in Computer Science or related field.",
      "Strong knowledge of backend languages like Node.js, Python, or Java.",
      "Experience with REST APIs and microservices architecture.",
      "Familiarity with cloud platforms such as AWS or GCP.",
      "Understanding of authentication and authorization mechanisms.",
      "Ability to write clean, scalable, and well-documented code.",
    ],
    responsibilities: [
      "Develop and maintain backend systems.",
      "Optimize database queries for performance.",
      "Ensure security best practices are followed.",
      "Work closely with DevOps for CI/CD integration.",
      "Troubleshoot and debug backend issues.",
    ],
  },
  {
    jobId: "004",
    role: "Mobile App Developer",
    position: "Full Time",
    salary: "$10K - $18K",
    jobDescription: [
      "Remote, India , 3+ Years Of Experience",
      "Department: Mobile Development",
      "Full Time 2 Positions Available.",
    ],
    details: [
      "Developing mobile applications for Android and iOS.",
      "Writing clean and maintainable code using React Native or Flutter.",
      "Collaborating with UI/UX designers to implement new features.",
      "Optimizing app performance and improving user experience.",
      "Integrating APIs and third-party services.",
    ],
    requirements: [
      "Proven experience in mobile app development.",
      "Proficiency in React Native, Flutter, or native Android/iOS development.",
      "Strong understanding of mobile UI/UX principles.",
      "Experience with state management libraries like Redux or Provider.",
      "Familiarity with Firebase, RESTful APIs, and authentication methods.",
    ],
    responsibilities: [
      "Design, build, and maintain high-performance mobile applications.",
      "Ensure responsiveness and smooth functionality across devices.",
      "Debug and optimize mobile applications for scalability.",
      "Stay up to date with the latest trends in mobile development.",
    ],
  },
  {
    jobId: "005",
    role: "DevOps Engineer",
    position: "Full Time",
    salary: "$15K - $25K",
    jobDescription: [
      "Remote, India , 4+ Years Of Experience",
      "Department: IT & Infrastructure",
      "Full Time 3 Positions Available.",
    ],
    details: [
      "Implementing and maintaining CI/CD pipelines.",
      "Managing cloud infrastructure and deployment automation.",
      "Monitoring and improving system performance and security.",
      "Troubleshooting and resolving production issues.",
      "Collaborating with developers to optimize deployments.",
    ],
    requirements: [
      "Experience with cloud platforms like AWS, GCP, or Azure.",
      "Proficiency in Docker, Kubernetes, and Terraform.",
      "Strong knowledge of CI/CD tools like Jenkins, GitHub Actions, or GitLab CI.",
      "Experience with logging, monitoring, and security best practices.",
    ],
    responsibilities: [
      "Manage and automate cloud infrastructure.",
      "Ensure high availability and reliability of services.",
      "Optimize system performance and reduce downtime.",
      "Collaborate with teams to improve software deployment workflows.",
    ],
  },
  {
    jobId: "006",
    role: "Product Manager",
    position: "Full Time",
    salary: "$20K - $30K",
    jobDescription: [
      "Remote, India , 6+ Years Of Experience",
      "Department: Product Management",
      "Full Time 2 Positions Available.",
    ],
    details: [
      "Defining and executing product roadmaps.",
      "Coordinating with engineering, design, and marketing teams.",
      "Conducting market research and competitive analysis.",
      "Ensuring timely delivery of new features and improvements.",
    ],
    requirements: [
      "Proven experience in product management.",
      "Strong analytical and problem-solving skills.",
      "Excellent communication and leadership abilities.",
      "Experience with Agile methodologies and product lifecycle management.",
    ],
    responsibilities: [
      "Drive the product vision and strategy.",
      "Work closely with stakeholders to define product goals.",
      "Ensure smooth execution and delivery of product features.",
      "Continuously analyze market trends to enhance product offerings.",
    ],
  },
];
