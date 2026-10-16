export interface EcosystemService {
  name: string;
  href: string;
  description: string;
}

export interface EcosystemFAQ {
  q: string;
  a: string;
}

export interface EcosystemPoint {
  title: string;
  description: string;
}

export interface TechnologyPlatform {
  slug: string;
  name: string;
  icon?: string;
  badge: string;
  tagline: string;
  description: string;
  explore: string;
  bestFor: string;
  capabilities: EcosystemPoint[];
  useCases: EcosystemPoint[];
  benefits: EcosystemPoint[];
  approach: EcosystemPoint[];
  services: EcosystemService[];
  faqs: EcosystemFAQ[];
}

export const technologyPlatforms: TechnologyPlatform[] = [
  {
    slug: 'microsoft',
    name: 'Microsoft',
    icon: '/technology-icons/microsoft.svg',
    badge: 'Cloud · AI · Productivity',
    tagline:
      'Helping businesses explore secure cloud infrastructure, AI-assisted productivity, business applications, and connected workflows using relevant Microsoft technologies.',
    description:
      'Microsoft technologies underpin a large share of everyday business software — from Microsoft 365 and Teams to Azure cloud services, Power Platform, and AI-assisted workflows. We help businesses understand which parts of the Microsoft ecosystem fit their operations, where Copilot and Power Platform can remove manual effort, and how to adopt new capabilities without disrupting the tools teams already rely on.',
    explore: 'Microsoft cloud, AI, productivity, and automation.',
    bestFor:
      'Best for organizations already running Microsoft 365 or Azure that want to extend existing tools with automation, AI, and connected workflows.',
    capabilities: [
      {
        title: 'Microsoft 365 & Collaboration',
        description: 'Teams, SharePoint, and Outlook workflows that connect communication to action.',
      },
      {
        title: 'Azure Cloud & AI',
        description: 'Cloud infrastructure, AI services, and data pipelines built on Microsoft Azure.',
      },
      {
        title: 'Power Platform',
        description: 'Power Apps, Power Automate, and Power BI for custom apps, automation, and reporting.',
      },
      {
        title: 'Copilot & AI Assistants',
        description: 'Copilot Studio agents and AI-assisted productivity inside the Microsoft stack.',
      },
    ],
    useCases: [
      {
        title: 'Copilot-assisted knowledge work',
        description:
          'Rolling out Copilot and Copilot Studio agents for drafting, summarising, and answering internal questions using your own business content.',
      },
      {
        title: 'Internal apps and automation',
        description:
          'Building Power Apps and Power Automate flows that replace manual spreadsheets, approvals, and email-based processes.',
      },
      {
        title: 'Cloud and data migration',
        description:
          'Moving workloads to Azure and connecting Microsoft 365 data to reporting and analytics teams can act on.',
      },
    ],
    benefits: [
      {
        title: 'Works with tools teams already use',
        description:
          'Capabilities are added inside the Microsoft 365 and Teams environment rather than replacing it, so adoption stays familiar.',
      },
      {
        title: 'Lower build cost with low-code',
        description:
          'Power Platform often delivers internal apps and automations faster and cheaper than fully custom development.',
      },
      {
        title: 'Governed AI adoption',
        description:
          'Copilot and Azure AI are configured around your tenant permissions, data boundaries, and compliance settings.',
      },
    ],
    approach: [
      {
        title: 'Assess',
        description: 'Review your existing Microsoft estate, licences, and the processes most worth automating.',
      },
      {
        title: 'Pilot',
        description: 'Ship a focused Copilot or Power Platform pilot in one team to prove value and surface issues early.',
      },
      {
        title: 'Scale',
        description: 'Roll out what works, wire it into your tenant, and hand over with documentation and training.',
      },
    ],
    services: [
      {
        name: 'Microsoft Stack & Copilot',
        href: '/services/microsoft-stack',
        description: 'Teams, Copilot Studio, Power Apps, Power BI, and Azure AI inside your existing Microsoft 365 tenant.',
      },
      {
        name: 'Cloud Solutions',
        href: '/services/hosting-infrastructure/cloud-solutions',
        description: 'Cloud architecture and managed infrastructure on Microsoft Azure.',
      },
      {
        name: 'AI & Automation',
        href: '/services/ai-automation',
        description: 'AI agents, LLM integration, and automated workflows that extend Microsoft capabilities.',
      },
    ],
    faqs: [
      {
        q: 'Does adopting Microsoft AI mean moving off our current setup?',
        a: 'No. Most Microsoft AI and Copilot capabilities are designed to work inside the tenant and tools you already use. We help you connect them to your existing workflows rather than replacing systems wholesale.',
      },
      {
        q: 'Which Microsoft services are most relevant for a typical business?',
        a: 'The strongest starting points are Microsoft 365 and Teams for collaboration, Power Platform for internal apps and reporting, and Azure for cloud and AI workloads. The right mix depends on your specific operational needs.',
      },
      {
        q: 'Do we need to buy more Microsoft licences to start?',
        a: 'Usually not to begin with. Copilot and Power Platform capabilities often build on licences you already own. We map what is available in your tenant before recommending any new spend.',
      },
      {
        q: 'How do you keep Microsoft AI secure?',
        a: 'Copilot and Azure AI only access content each user is already permitted to see. We configure data boundaries, permissions, and logging so usage stays within your governance rules.',
      },
    ],
  },
  {
    slug: 'temenos',
    name: 'Temenos',
    badge: 'Banking Technology',
    tagline:
      'Exploring banking technology and digital financial services capabilities for organizations working with modern banking platforms.',
    description:
      'Temenos provides banking software for core banking, digital banking, payments, and wealth management. For financial institutions evaluating a modernisation path, we help assess how Temenos-based platforms map to your business model, integration landscape, and regulatory environment — so you can plan the transition with clear scope and realistic timelines.',
    explore: 'Core banking, digital banking, and financial services technology.',
    bestFor:
      'Best for banks and financial institutions planning a core or digital banking modernisation, needing integration and custom application work around a banking platform.',
    capabilities: [
      {
        title: 'Core Banking Platforms',
        description: 'Evaluating modern core banking architecture and its fit with existing systems.',
      },
      {
        title: 'Digital Banking',
        description: 'Digital channels, customer onboarding, and self-service banking experiences.',
      },
      {
        title: 'Payments & Integration',
        description: 'Payment flows and integration between banking platforms and surrounding systems.',
      },
      {
        title: 'Modernisation Planning',
        description: 'Assessment and roadmapping for legacy-to-modern banking technology transitions.',
      },
    ],
    useCases: [
      {
        title: 'Core banking modernisation',
        description:
          'Assessing how a modern core banking platform fits existing products, ledgers, and regulatory requirements.',
      },
      {
        title: 'Digital channel experiences',
        description:
          'Designing onboarding, self-service, and mobile banking journeys that connect cleanly to core systems.',
      },
      {
        title: 'Payments and integration',
        description:
          'Connecting payment flows and third-party services to the banking platform through well-defined integration layers.',
      },
    ],
    benefits: [
      {
        title: 'Decision-ready assessment',
        description:
          'A scoped evaluation of platform fit, data dependencies, and migration risk rather than an open-ended report.',
      },
      {
        title: 'Integration-first architecture',
        description:
          'Banking platforms are designed to connect cleanly to surrounding systems instead of becoming isolated silos.',
      },
      {
        title: 'Regulatory awareness',
        description:
          'Planning accounts for compliance, audit, and data-residency constraints from the very start.',
      },
    ],
    approach: [
      {
        title: 'Discover',
        description: 'Map current systems, channels, and regulatory constraints across the institution.',
      },
      {
        title: 'Design',
        description: 'Define the target architecture, integration boundaries, and a phased transition roadmap.',
      },
      {
        title: 'Build',
        description: 'Deliver custom integrations and digital experiences around the banking platform.',
      },
    ],
    services: [
      {
        name: 'Custom Software Development',
        href: '/services/software-development',
        description: 'Custom banking applications, integrations, and data platforms built around your processes.',
      },
      {
        name: 'Architecture Design',
        href: '/services/it-consulting-it-services/architecture-design',
        description: 'Technical architecture planning for financial services technology transitions.',
      },
      {
        name: 'IT Consulting',
        href: '/services/it-consulting-it-services',
        description: 'Technology roadmaps and advisory for digital transformation in banking.',
      },
    ],
    faqs: [
      {
        q: 'Does aibizmod resell or certify on Temenos platforms?',
        a: 'We focus on helping financial institutions evaluate and plan around modern banking technology. Our work covers integration architecture, custom development, and digital banking experiences that connect banking platforms to the rest of your operations.',
      },
      {
        q: 'How long does a banking technology assessment take?',
        a: 'A scoped assessment typically runs a few weeks, depending on the number of systems, channels, and stakeholders involved. We focus on decision-ready findings rather than open-ended reports.',
      },
      {
        q: 'Do you replace our core banking system?',
        a: 'No. We help you evaluate and plan a transition, and we build the integrations, data, and digital channel work around the banking platform. Core platform selection and migration remain a joint decision with your team.',
      },
      {
        q: 'Can you work alongside our existing vendors?',
        a: 'Yes. We typically work with platform vendors and existing IT teams, taking responsibility for the integration and custom application layers that connect everything together.',
      },
    ],
  },
  {
    slug: 'sap',
    name: 'SAP',
    icon: '/technology-icons/sap.svg',
    badge: 'ERP · Enterprise Applications',
    tagline:
      'Helping businesses evaluate enterprise resource planning, business applications, data integration, and process automation for more connected operations.',
    description:
      'SAP platforms support the core operational backbone of many enterprises — ERP, finance, supply chain, and business intelligence. We help businesses evaluate which SAP-related capabilities matter for their operations, how they integrate with surrounding systems, and where process automation and data integration can make the whole environment more connected and easier to operate.',
    explore: 'ERP, enterprise applications, and business process integration.',
    bestFor:
      'Best for enterprises running SAP or evaluating ERP that need better integration, reporting, and process automation around their business applications.',
    capabilities: [
      {
        title: 'ERP & Enterprise Applications',
        description: 'Evaluating ERP systems and enterprise applications against operational requirements.',
      },
      {
        title: 'Data Integration',
        description: 'Connecting ERP and business data with surrounding systems and reporting.',
      },
      {
        title: 'Process Automation',
        description: 'Automating workflows that run across enterprise applications and data.',
      },
      {
        title: 'Modernisation Strategy',
        description: 'Planning migration and modernisation of legacy enterprise environments.',
      },
    ],
    useCases: [
      {
        title: 'ERP data integration',
        description:
          'Connecting SAP finance, supply chain, and operations data to reporting and surrounding business systems.',
      },
      {
        title: 'Cross-system automation',
        description:
          'Automating workflows that span ERP, CRM, and internal tools without manual re-entry or duplicate records.',
      },
      {
        title: 'Modernisation planning',
        description:
          'Roadmapping the migration and modernisation of legacy enterprise environments in manageable phases.',
      },
    ],
    benefits: [
      {
        title: 'Connected operations',
        description:
          'Data flows between ERP and surrounding systems so teams work from one consistent picture of the business.',
      },
      {
        title: 'Less manual effort',
        description:
          'Automation removes repetitive handoffs between finance, operations, and other functions.',
      },
      {
        title: 'Incremental modernisation',
        description:
          'Improvements are delivered step by step rather than through a single high-risk replacement project.',
      },
    ],
    approach: [
      {
        title: 'Assess',
        description: 'Identify the workflows, integrations, and data gaps causing the most operational friction.',
      },
      {
        title: 'Prioritise',
        description: 'Sequence integration and automation work by business impact and delivery effort.',
      },
      {
        title: 'Deliver',
        description: 'Build and integrate, then measure the operational improvement against the original baseline.',
      },
    ],
    services: [
      {
        name: 'Business Applications',
        href: '/services/software-development/business-applications',
        description: 'Custom business applications and ERP-adjacent systems built for your workflows.',
      },
      {
        name: 'Data & Analytics',
        href: '/services/software-development/enterprise-software',
        description: 'Enterprise software and data integration for connected operations.',
      },
      {
        name: 'IT Consulting',
        href: '/services/it-consulting-it-services',
        description: 'Technology roadmaps and enterprise architecture advisory.',
      },
    ],
    faqs: [
      {
        q: 'Can aibizmod help with SAP implementation?',
        a: 'We support businesses evaluating and integrating enterprise application environments. Our involvement typically covers assessment, integration architecture, process automation, and custom development around the enterprise stack.',
      },
      {
        q: 'We already use SAP — what would you help with?',
        a: 'Common focus areas include connecting SAP data to reporting and analytics, automating cross-system workflows, and designing integrations that reduce manual handoffs.',
      },
      {
        q: 'Do you implement SAP itself?',
        a: 'Our focus is the surrounding work — integration, data, automation, and custom applications — rather than the core ERP implementation. This keeps the effort targeted at connecting SAP to the rest of your business.',
      },
      {
        q: 'What if our SAP data is messy?',
        a: 'Data quality is usually part of the work. We review the sources, define the fields that matter, and put validation in place before building reporting or automation on top of the data.',
      },
    ],
  },
  {
    slug: 'salesforce',
    name: 'Salesforce',
    icon: '/technology-icons/salesforce.svg',
    badge: 'CRM · Customer Experience',
    tagline:
      'Exploring customer relationship management, sales workflows, service experiences, marketing processes, and AI-assisted customer engagement.',
    description:
      'Salesforce platforms help businesses manage sales, service, and marketing around an organised view of the customer. We help businesses set up and configure Salesforce alongside tools like HubSpot and Zoho, clean up CRM data, route support tickets, and connect marketing and sales workflows so customer records stay consistent across the organisation.',
    explore: 'CRM, customer experience, and business automation.',
    bestFor:
      'Best for sales, service, and marketing teams that want a single, organised view of the customer across CRM, support, and marketing tools.',
    capabilities: [
      {
        title: 'CRM Setup & Configuration',
        description: 'Salesforce, HubSpot, and Zoho configuration matched to your sales process.',
      },
      {
        title: 'Sales Workflows',
        description: 'Pipeline management and sales automation that reduce manual record-keeping.',
      },
      {
        title: 'Service Experiences',
        description: 'Ticket routing, helpdesk integration, and structured customer support.',
      },
      {
        title: 'Marketing & Data',
        description: 'Connecting marketing automation and customer data for a single view.',
      },
    ],
    useCases: [
      {
        title: 'CRM setup and migration',
        description:
          'Configuring Salesforce, HubSpot, or Zoho and migrating and de-duplicating customer records from spreadsheets and legacy tools.',
      },
      {
        title: 'Sales and service workflows',
        description:
          'Automating pipeline stages, ticket routing, and follow-ups so records stay accurate without manual upkeep.',
      },
      {
        title: 'Marketing-to-CRM connection',
        description:
          'Connecting marketing automation and customer data so campaigns and sales work from the same records.',
      },
    ],
    benefits: [
      {
        title: 'One customer record',
        description:
          'Sales, service, and marketing work from a consistent customer view instead of separate, conflicting systems.',
      },
      {
        title: 'Less admin, more selling',
        description:
          'Automations handle updates and routing so teams spend more time with customers and less on data entry.',
      },
      {
        title: 'Faster onboarding',
        description:
          'Structured data and clear configuration make new team members productive sooner.',
      },
    ],
    approach: [
      {
        title: 'Map',
        description: 'Document your sales, service, and marketing processes and where records currently live.',
      },
      {
        title: 'Configure',
        description: 'Set up the CRM to match those processes, then migrate and clean the customer data.',
      },
      {
        title: 'Automate',
        description: 'Add the workflows that remove manual effort and keep records current.',
      },
    ],
    services: [
      {
        name: 'CRM Services',
        href: '/services/customer-experience-management/crm-services',
        description: 'Salesforce, HubSpot, and Zoho implementation, customisation, and integration.',
      },
      {
        name: 'Customer Engagement',
        href: '/services/customer-experience-management/customer-engagement',
        description: 'Customer engagement workflows and messaging across channels.',
      },
      {
        name: 'Customer Support Systems',
        href: '/services/customer-experience-management/customer-support-systems',
        description: 'Helpdesk setup, ticket routing, and support automation.',
      },
    ],
    faqs: [
      {
        q: 'Salesforce or HubSpot — which should we choose?',
        a: 'It depends on team size, budget, and process complexity. Salesforce suits larger organisations with complex sales processes; HubSpot is often a better fit for growing teams that want marketing and support in one platform. We assess your situation before recommending.',
      },
      {
        q: 'Can you migrate data between CRMs?',
        a: 'Yes. Data migration, deduplication, and database cleanup are part of our CRM services. We plan the migration around your record dependencies to avoid data loss.',
      },
      {
        q: 'How long does a CRM rollout take?',
        a: 'A focused rollout for one team can go live in a few weeks; broader, multi-team deployments take longer. We phase delivery so users get value early rather than waiting for a big-bang launch.',
      },
      {
        q: 'Will our data be clean after migration?',
        a: 'Migration includes de-duplication and validation so the CRM starts from reliable records. We agree the rules for merging and archiving before moving anything, so nothing important is lost.',
      },
    ],
  },
  {
    slug: 'ibm',
    name: 'IBM',
    icon: '/technology-icons/ibm.svg',
    badge: 'Enterprise AI · Hybrid Cloud',
    tagline:
      'Evaluating enterprise AI, hybrid cloud, data capabilities, and automation technologies for organizations modernizing complex business environments.',
    description:
      'IBM brings together enterprise AI, hybrid cloud, data platforms, and automation technologies used across regulated industries. We help organisations evaluate where these capabilities can strengthen their operations — from AI-assisted workflows and data foundations to hybrid cloud architecture and governance-minded automation.',
    explore: 'Enterprise AI, data, hybrid cloud, and automation.',
    bestFor:
      'Best for regulated or complex organizations that want enterprise AI, hybrid cloud, and data capabilities with governance built in.',
    capabilities: [
      {
        title: 'Enterprise AI',
        description: 'Evaluating AI platforms and assistants for business-specific use cases.',
      },
      {
        title: 'Hybrid Cloud',
        description: 'Hybrid cloud architecture that spans on-premise and cloud environments.',
      },
      {
        title: 'Data Platforms',
        description: 'Data foundations, governance, and analytics across fragmented systems.',
      },
      {
        title: 'Automation',
        description: 'Workflow and process automation designed for complex environments.',
      },
    ],
    useCases: [
      {
        title: 'Enterprise AI with governance',
        description:
          'Defining AI use cases, data boundaries, and evaluation criteria that meet compliance obligations.',
      },
      {
        title: 'Hybrid cloud architecture',
        description:
          'Running workloads across on-premise and cloud environments without a disruptive lift-and-shift.',
      },
      {
        title: 'Data foundations',
        description:
          'Consolidating fragmented data into governed platforms that analytics and AI can reliably use.',
      },
    ],
    benefits: [
      {
        title: 'Governance-ready',
        description:
          'AI and data work is designed around compliance, audit, and data-residency requirements from the outset.',
      },
      {
        title: 'Works with existing systems',
        description:
          'Hybrid and modernisation approaches evolve what you have rather than replacing it wholesale.',
      },
      {
        title: 'Enterprise scale',
        description:
          'Architecture and data patterns suit large, complex, multi-system environments.',
      },
    ],
    approach: [
      {
        title: 'Frame',
        description: 'Define the business problem, data boundaries, and success criteria with stakeholders.',
      },
      {
        title: 'Prove',
        description: 'Build a contained pilot that demonstrates value within governance constraints.',
      },
      {
        title: 'Industrialise',
        description: 'Extend proven patterns across systems with monitoring and controls in place.',
      },
    ],
    services: [
      {
        name: 'AI & Automation',
        href: '/services/ai-automation',
        description: 'AI agents, process automation, and LLM integration for enterprise workflows.',
      },
      {
        name: 'Cloud Infrastructure',
        href: '/services/it-consulting-it-services/cloud-infrastructure',
        description: 'Hybrid and multi-cloud architecture for existing enterprise environments.',
      },
      {
        name: 'Software Modernization',
        href: '/services/software-development/software-modernization',
        description: 'Modernising complex and legacy software systems.',
      },
    ],
    faqs: [
      {
        q: 'We operate in a regulated industry — is enterprise AI viable?',
        a: 'Yes, when the approach includes governance. We help define use cases, data boundaries, and evaluation criteria so AI adoption stays aligned with compliance obligations.',
      },
      {
        q: 'Do we need to replace existing infrastructure?',
        a: 'Not necessarily. Hybrid cloud and modernisation work is often incremental — we help you connect, consolidate, and evolve what already exists.',
      },
      {
        q: 'Is enterprise AI worth it for our size?',
        a: 'It depends on the use case. Where there is high-volume, repetitive, or knowledge-intensive work, the return is clearer. We help you start with cases where value is measurable rather than adopting AI for its own sake.',
      },
      {
        q: 'How do you handle sensitive data with AI?',
        a: 'We keep data within agreed boundaries, use access controls and anonymisation where needed, and document how data is used so it stays consistent with your compliance obligations.',
      },
    ],
  },
  {
    slug: 'aws',
    name: 'Amazon Web Services',
    icon: '/technology-icons/amazonaws.svg',
    badge: 'Cloud · Infrastructure · AI',
    tagline:
      'Helping businesses assess cloud infrastructure, application deployment, data services, and AI capabilities based on their technical and operational needs.',
    description:
      'AWS provides cloud infrastructure, deployment, data, and AI services used across every industry. We help businesses plan cloud environments, migrate applications, set up deployment pipelines, manage databases, and evaluate AI services — always configured inside your own AWS account with clear ownership of credentials and costs.',
    explore: 'Cloud infrastructure, application modernization, and AI services.',
    bestFor:
      'Best for teams that want to build, migrate, or modernise on cloud with clear control of architecture, cost, and ownership.',
    capabilities: [
      {
        title: 'Cloud Architecture',
        description: 'AWS environments designed for reliability, security, and predictable cost.',
      },
      {
        title: 'Virtual Private Cloud (VPC) Setup',
        description: 'Private network setup with isolated subnets, routing, and security groups for controlled access.',
      },
      {
        title: 'Migration & Modernization',
        description: 'Moving applications to AWS with structured, low-risk migration.',
      },
      {
        title: 'DevOps & Pipelines',
        description: 'CI/CD, infrastructure as code, and automated deployment on AWS.',
      },
      {
        title: 'AI & Data Services',
        description: 'Using AWS AI, machine learning, and data services for business workloads.',
      },
    ],
    useCases: [
      {
        title: 'Cloud migration',
        description:
          'Moving applications to AWS with a structured, low-risk migration plan that accounts for dependencies.',
      },
      {
        title: 'Private networking and security',
        description:
          'Setting up VPCs, subnets, routing, and security groups so workloads run in controlled, isolated environments.',
      },
      {
        title: 'DevOps and deployment',
        description:
          'Building CI/CD pipelines and infrastructure as code for repeatable, auditable releases.',
      },
    ],
    benefits: [
      {
        title: 'You own the account',
        description:
          'Everything is deployed inside your AWS account, with credentials and costs under your control.',
      },
      {
        title: 'Cost predictability',
        description:
          'Right-sizing, tagging, and budgets are designed in from the start rather than fixed after the fact.',
      },
      {
        title: 'Scalable foundations',
        description:
          'Architecture supports growth without forcing a re-platform later on.',
      },
    ],
    approach: [
      {
        title: 'Assess',
        description: 'Review current workloads, dependencies, and the target AWS architecture.',
      },
      {
        title: 'Build',
        description: 'Set up networking, environments, and deployment pipelines using infrastructure as code.',
      },
      {
        title: 'Operate',
        description: 'Hand over with documentation, or continue under a managed operations arrangement.',
      },
    ],
    services: [
      {
        name: 'Cloud Solutions',
        href: '/services/hosting-infrastructure/cloud-solutions',
        description: 'Cloud migration, architecture, and multi-cloud management on AWS.',
      },
      {
        name: 'DevOps',
        href: '/services/hosting-infrastructure/devops',
        description: 'Terraform, CI/CD pipelines, and infrastructure automation on AWS.',
      },
      {
        name: 'AI & ML',
        href: '/services/ai-automation/ai-ml',
        description: 'Machine learning and AI services on AWS for real business workloads.',
      },
    ],
    faqs: [
      {
        q: 'Will we get locked into your AWS accounts?',
        a: 'No. We configure and deploy inside your own AWS billing account. You retain master credentials, and we access resources through restricted IAM permissions you can revoke at any time.',
      },
      {
        q: 'How do you control cloud costs?',
        a: 'We design for cost from the start — right-sizing resources, setting up tagging and budgets, and reviewing utilisation so you do not pay for unused capacity.',
      },
      {
        q: 'What is a VPC and do we need one?',
        a: 'A Virtual Private Cloud is a logically isolated network inside AWS where your resources run. Most business workloads benefit from one, since it lets you control subnets, routing, and which traffic can reach your systems.',
      },
      {
        q: 'How long does a cloud migration take?',
        a: 'A single application can move in a few weeks; larger estates are migrated in waves. We phase the work so early workloads prove the approach before the rest follow.',
      },
    ],
  },
  {
    slug: 'oracle',
    name: 'Oracle',
    icon: '/technology-icons/oracle.svg',
    badge: 'Cloud · Databases · Enterprise Systems',
    tagline:
      'Exploring cloud infrastructure, database technologies, enterprise applications, and data platforms for business-critical workloads.',
    description:
      'Oracle technologies power databases, cloud infrastructure, and enterprise applications for many business-critical systems. We help organisations evaluate Oracle-related options — from database management and data platforms to cloud infrastructure and enterprise application workloads — so decisions are based on your actual requirements and operational context.',
    explore: 'Cloud, databases, and enterprise systems.',
    bestFor:
      'Best for organizations running business-critical databases and enterprise applications that need reliable performance, integration, and data governance.',
    capabilities: [
      {
        title: 'Database Management',
        description: 'Database platforms and data management for business-critical workloads.',
      },
      {
        title: 'Cloud Infrastructure',
        description: 'Cloud infrastructure options for performance and cost-sensitive workloads.',
      },
      {
        title: 'Enterprise Applications',
        description: 'Enterprise application environments and their integration with business processes.',
      },
      {
        title: 'Data Platforms',
        description: 'Data platforms and analytics built around reliable, governed data.',
      },
    ],
    useCases: [
      {
        title: 'Database management',
        description:
          'Managing, tuning, and protecting database platforms that run business-critical workloads.',
      },
      {
        title: 'Cloud infrastructure',
        description:
          'Planning cloud infrastructure for performance- and cost-sensitive workloads with clear trade-offs.',
      },
      {
        title: 'Enterprise application integration',
        description:
          'Connecting enterprise applications and their data to reporting and surrounding systems.',
      },
    ],
    benefits: [
      {
        title: 'Reliability for critical systems',
        description:
          'Database and infrastructure work targets stability, performance, and disciplined backup and recovery.',
      },
      {
        title: 'Informed platform decisions',
        description:
          'Recommendations weigh performance, licensing, and team skills rather than defaulting to one vendor.',
      },
      {
        title: 'Governed data',
        description:
          'Data platforms and analytics are built on reliable, well-defined data that teams can trust.',
      },
    ],
    approach: [
      {
        title: 'Review',
        description: 'Assess data characteristics, performance needs, and the current licensing position.',
      },
      {
        title: 'Recommend',
        description: 'Compare options against requirements, including alternatives where they fit better.',
      },
      {
        title: 'Deliver',
        description: 'Implement, migrate, or integrate, with backup and recovery planned in from the start.',
      },
    ],
    services: [
      {
        name: 'Database Services',
        href: '/services/hosting-infrastructure/database-services',
        description: 'Managed databases, architecture, and backup planning for production systems.',
      },
      {
        name: 'Enterprise Software',
        href: '/services/software-development/enterprise-software',
        description: 'Enterprise software and business-critical systems development.',
      },
      {
        name: 'Cloud Infrastructure',
        href: '/services/it-consulting-it-services/cloud-infrastructure',
        description: 'Cloud environment planning for existing and new workloads.',
      },
    ],
    faqs: [
      {
        q: 'Can you help us choose between Oracle and other database platforms?',
        a: 'We assess your data characteristics, performance needs, licensing position, and team skills before recommending. Oracle is a strong fit for certain workloads, but alternatives may be more appropriate depending on context.',
      },
      {
        q: 'Do you work on existing Oracle installations?',
        a: 'Yes. We help with database management, integration, performance review, and connecting Oracle data to reporting and business systems.',
      },
      {
        q: 'Should we stay on Oracle or move to another database?',
        a: 'Both can be valid depending on context. We assess workload characteristics, licensing, and team skills, and recommend the option that best fits your requirements rather than defaulting to a single choice.',
      },
      {
        q: 'Can you improve the performance of an existing database?',
        a: 'Yes. Performance review, indexing, query tuning, and architecture changes are common starting points, alongside proper backup and recovery planning.',
      },
    ],
  },
  {
    slug: 'red-hat',
    name: 'Red Hat',
    icon: '/technology-icons/redhat.svg',
    badge: 'Hybrid Cloud · Containers · Linux',
    tagline:
      'Exploring open hybrid cloud, enterprise Linux, container platforms, and application deployment approaches for flexible technology environments.',
    description:
      'Red Hat provides enterprise Linux, container platforms, and open hybrid cloud technologies used to run flexible, portable application environments. We help businesses evaluate open-source infrastructure approaches — containers, orchestration, automation, and hybrid cloud — that give teams flexibility without sacrificing operational control.',
    explore: 'Hybrid cloud, containers, and application platforms.',
    bestFor:
      'Best for teams adopting open-source infrastructure, containers, and hybrid cloud who need portability without losing operational control.',
    capabilities: [
      {
        title: 'Enterprise Linux',
        description: 'Enterprise Linux environments for reliable, supported operations.',
      },
      {
        title: 'Container Platforms',
        description: 'Container-based application deployment with orchestration and security.',
      },
      {
        title: 'Automation',
        description: 'Automating infrastructure operation and configuration at scale.',
      },
      {
        title: 'Hybrid Cloud',
        description: 'Workload portability across on-premise and cloud environments.',
      },
    ],
    useCases: [
      {
        title: 'Containerisation',
        description:
          'Packaging applications into containers with orchestration and security for consistent deployment.',
      },
      {
        title: 'Hybrid cloud portability',
        description:
          'Running workloads across on-premise and cloud environments using a common platform.',
      },
      {
        title: 'Infrastructure automation',
        description:
          'Automating configuration and operations so environments are repeatable and reliable.',
      },
    ],
    benefits: [
      {
        title: 'Portability',
        description:
          'Container and hybrid approaches reduce dependence on a single environment or vendor.',
      },
      {
        title: 'Open-source with support',
        description:
          'Enterprise packaging adds support, security updates, and lifecycle management to open-source foundations.',
      },
      {
        title: 'Operational consistency',
        description:
          'Automation makes environments reproducible across teams and stages.',
      },
    ],
    approach: [
      {
        title: 'Evaluate',
        description: 'Review applications, team skills, and operational model to gauge container and hybrid fit.',
      },
      {
        title: 'Design',
        description: 'Define the platform architecture, automation, and security approach.',
      },
      {
        title: 'Adopt',
        description: 'Migrate workloads incrementally and build the operational practices around them.',
      },
    ],
    services: [
      {
        name: 'Hosting & Infrastructure',
        href: '/services/hosting-infrastructure',
        description: 'Cloud hosting, containerisation, and deployment pipelines.',
      },
      {
        name: 'DevOps',
        href: '/services/hosting-infrastructure/devops',
        description: 'Infrastructure as code, CI/CD, and automated operations.',
      },
      {
        name: 'Infrastructure Operations',
        href: '/services/hosting-infrastructure/infrastructure-operations',
        description: 'Monitoring, observability, and reliable infrastructure operations.',
      },
    ],
    faqs: [
      {
        q: 'Is open-source infrastructure enterprise-ready?',
        a: 'Red Hat specifically packages open-source technology for enterprise use with support and security. We help you evaluate whether container and hybrid cloud approaches fit your operational and compliance needs.',
      },
      {
        q: 'We run on VMs today — should we move to containers?',
        a: 'Not always. Containers suit many workloads but not all. We review your applications, team skills, and operational model before recommending a move.',
      },
      {
        q: 'Is open-source support reliable enough for production?',
        a: 'Enterprise distributions like Red Hat package open-source software with support, security updates, and lifecycle management, which is what makes them suitable for production use.',
      },
      {
        q: 'Do we have to move everything to containers?',
        a: 'No. Containers suit some workloads better than others. We review each application and recommend where containerisation adds value rather than applying it everywhere.',
      },
    ],
  },
];

export function getTechnologyPlatform(slug: string): TechnologyPlatform | undefined {
  return technologyPlatforms.find((p) => p.slug === slug);
}
