export interface EcosystemService {
  name: string;
  href: string;
  description: string;
}

export interface EcosystemFAQ {
  q: string;
  a: string;
}

export interface TechnologyPlatform {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  explore: string;
  capabilities: { title: string; description: string }[];
  services: EcosystemService[];
  faqs: EcosystemFAQ[];
}

export const technologyPlatforms: TechnologyPlatform[] = [
  {
    slug: 'microsoft',
    name: 'Microsoft',
    badge: 'Cloud · AI · Productivity',
    tagline:
      'Helping businesses explore secure cloud infrastructure, AI-assisted productivity, business applications, and connected workflows using relevant Microsoft technologies.',
    description:
      'Microsoft technologies underpin a large share of everyday business software — from Microsoft 365 and Teams to Azure cloud services, Power Platform, and AI-assisted workflows. We help businesses understand which parts of the Microsoft ecosystem fit their operations, where Copilot and Power Platform can remove manual effort, and how to adopt new capabilities without disrupting the tools teams already rely on.',
    explore: 'Microsoft cloud, AI, productivity, and automation.',
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
    ],
  },
  {
    slug: 'sap',
    name: 'SAP',
    badge: 'ERP · Enterprise Applications',
    tagline:
      'Helping businesses evaluate enterprise resource planning, business applications, data integration, and process automation for more connected operations.',
    description:
      'SAP platforms support the core operational backbone of many enterprises — ERP, finance, supply chain, and business intelligence. We help businesses evaluate which SAP-related capabilities matter for their operations, how they integrate with surrounding systems, and where process automation and data integration can make the whole environment more connected and easier to operate.',
    explore: 'ERP, enterprise applications, and business process integration.',
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
    ],
  },
  {
    slug: 'salesforce',
    name: 'Salesforce',
    badge: 'CRM · Customer Experience',
    tagline:
      'Exploring customer relationship management, sales workflows, service experiences, marketing processes, and AI-assisted customer engagement.',
    description:
      'Salesforce platforms help businesses manage sales, service, and marketing around an organised view of the customer. We help businesses set up and configure Salesforce alongside tools like HubSpot and Zoho, clean up CRM data, route support tickets, and connect marketing and sales workflows so customer records stay consistent across the organisation.',
    explore: 'CRM, customer experience, and business automation.',
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
    ],
  },
  {
    slug: 'ibm',
    name: 'IBM',
    badge: 'Enterprise AI · Hybrid Cloud',
    tagline:
      'Evaluating enterprise AI, hybrid cloud, data capabilities, and automation technologies for organizations modernizing complex business environments.',
    description:
      'IBM brings together enterprise AI, hybrid cloud, data platforms, and automation technologies used across regulated industries. We help organisations evaluate where these capabilities can strengthen their operations — from AI-assisted workflows and data foundations to hybrid cloud architecture and governance-minded automation.',
    explore: 'Enterprise AI, data, hybrid cloud, and automation.',
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
    ],
  },
  {
    slug: 'aws',
    name: 'Amazon Web Services',
    badge: 'Cloud · Infrastructure · AI',
    tagline:
      'Helping businesses assess cloud infrastructure, application deployment, data services, and AI capabilities based on their technical and operational needs.',
    description:
      'AWS provides cloud infrastructure, deployment, data, and AI services used across every industry. We help businesses plan cloud environments, migrate applications, set up deployment pipelines, manage databases, and evaluate AI services — always configured inside your own AWS account with clear ownership of credentials and costs.',
    explore: 'Cloud infrastructure, application modernization, and AI services.',
    capabilities: [
      {
        title: 'Cloud Architecture',
        description: 'AWS environments designed for reliability, security, and predictable cost.',
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
    ],
  },
  {
    slug: 'oracle',
    name: 'Oracle',
    badge: 'Cloud · Databases · Enterprise Systems',
    tagline:
      'Exploring cloud infrastructure, database technologies, enterprise applications, and data platforms for business-critical workloads.',
    description:
      'Oracle technologies power databases, cloud infrastructure, and enterprise applications for many business-critical systems. We help organisations evaluate Oracle-related options — from database management and data platforms to cloud infrastructure and enterprise application workloads — so decisions are based on your actual requirements and operational context.',
    explore: 'Cloud, databases, and enterprise systems.',
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
    ],
  },
  {
    slug: 'red-hat',
    name: 'Red Hat',
    badge: 'Hybrid Cloud · Containers · Linux',
    tagline:
      'Exploring open hybrid cloud, enterprise Linux, container platforms, and application deployment approaches for flexible technology environments.',
    description:
      'Red Hat provides enterprise Linux, container platforms, and open hybrid cloud technologies used to run flexible, portable application environments. We help businesses evaluate open-source infrastructure approaches — containers, orchestration, automation, and hybrid cloud — that give teams flexibility without sacrificing operational control.',
    explore: 'Hybrid cloud, containers, and application platforms.',
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
    ],
  },
];

export function getTechnologyPlatform(slug: string): TechnologyPlatform | undefined {
  return technologyPlatforms.find((p) => p.slug === slug);
}