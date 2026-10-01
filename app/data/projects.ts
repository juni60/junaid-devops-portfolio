export const projects = [
  {
    slug: "aws-cicd",
    number: "01",
    title: "AWS CI/CD Platform",
    description:
      "Automated application delivery workflow using GitHub, Jenkins, Docker and Kubernetes in an AWS cloud environment.",
    intro:
      "Automated application delivery platform using GitHub, Jenkins, Docker and Kubernetes, with AWS providing the cloud environment.",
    tags: ["AWS", "GitHub", "Jenkins", "Docker", "Kubernetes", "Linux"],

    overviewTitle: "Automated delivery.",
    overview: [
      "This project demonstrates an automated application delivery workflow using GitHub, Jenkins, Docker and Kubernetes in an AWS cloud environment.",
      "The workflow connects source code management with continuous integration, containerization and Kubernetes-based deployment.",
      "The goal is to create a repeatable delivery process where application changes can move from source code to a running containerized workload through an automated pipeline.",
    ],

    architecture: [
      "GitHub",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "AWS",
    ],

    pipeline: [
      {
        title: "Source",
        description:
          "Application source code is maintained in a GitHub repository.",
      },
      {
        title: "Jenkins",
        description:
          "Jenkins automatically runs the CI/CD workflow when changes are available.",
      },
      {
        title: "Build",
        description:
          "The application is built and prepared for containerization.",
      },
      {
        title: "Docker",
        description:
          "A Docker image is created to package the application and its runtime dependencies.",
      },
      {
        title: "Kubernetes",
        description:
          "The containerized application is deployed and managed using Kubernetes.",
      },
      {
        title: "AWS",
        description:
          "AWS provides the cloud environment where the application delivery workflow runs.",
      },
    ],

    technologies: [
      {
        category: "Cloud",
        items: ["AWS"],
      },
      {
        category: "Source Control",
        items: ["GitHub"],
      },
      {
        category: "CI/CD",
        items: ["Jenkins"],
      },
      {
        category: "Containers",
        items: ["Docker"],
      },
      {
        category: "Orchestration",
        items: ["Kubernetes"],
      },
      {
        category: "Operating System",
        items: ["Linux"],
      },
    ],

    results: [
      "CI/CD Automation",
      "Containerization",
      "Kubernetes Deployment",
      "AWS Cloud Environment",
    ],

    github: "https://github.com/juni60/devops-sample-app",
  },

  {
    slug: "azure-devops",
    number: "02",
    title: "Azure DevOps CI/CD Platform",
    description:
      "End-to-end cloud automation using Azure DevOps Pipelines, Terraform, Docker, Kubernetes and security tooling to create a repeatable application delivery workflow.",
    intro:
      "End-to-end cloud automation using Azure DevOps Pipelines, Terraform, Docker, Kubernetes and security tooling to create a repeatable application delivery workflow.",
    tags: [
      "Azure",
      "Azure DevOps",
      "Terraform",
      "Docker",
      "Kubernetes",
      "SonarQube",
      "Trivy",
    ],

    overviewTitle: "Infrastructure as code.",
    overview: [
      "This project demonstrates a complete DevOps workflow on Microsoft Azure. The infrastructure is defined using Terraform while Azure DevOps handles the application delivery pipeline.",
      "The workflow is designed around automation, repeatability and security. Code changes can move through build, quality checks, security scanning and deployment stages without requiring manual infrastructure configuration.",
      "Kubernetes is used as the container orchestration layer, providing a production-style environment for deploying and managing containerized workloads.",
    ],

    architecture: [
      "Developer",
      "Azure DevOps",
      "Security",
      "Docker",
      "Kubernetes",
    ],

    pipeline: [
      {
        title: "Source",
        description:
          "Developer pushes application changes to the Git repository.",
      },
      {
        title: "Build",
        description:
          "Azure DevOps automatically starts the CI pipeline and builds the application.",
      },
      {
        title: "Quality Check",
        description:
          "SonarQube is used to analyze source code quality and identify potential issues.",
      },
      {
        title: "Security Scan",
        description:
          "Trivy scans container images for known vulnerabilities before deployment.",
      },
      {
        title: "Deploy",
        description:
          "The validated container is deployed to the Kubernetes environment.",
      },
    ],

    technologies: [
      {
        category: "Cloud",
        items: ["Microsoft Azure"],
      },
      {
        category: "CI/CD",
        items: ["Azure DevOps Pipelines"],
      },
      {
        category: "Infrastructure",
        items: ["Terraform"],
      },
      {
        category: "Containers",
        items: ["Docker"],
      },
      {
        category: "Orchestration",
        items: ["Kubernetes"],
      },
      {
        category: "Code Quality",
        items: ["SonarQube"],
      },
      {
        category: "Security",
        items: ["Trivy"],
      },
      {
        category: "Operating System",
        items: ["Linux"],
      },
    ],

    results: [
      "Automated Application Delivery",
      "Infrastructure as Code",
      "Integrated Security Scanning",
      "Kubernetes Deployment",
    ],

    github:
      "https://github.com/juni60/FVSAR-ACADEMY-CICD-TASK",
  },

  {
    slug: "hetzner-monitoring",
    number: "03",
    title: "Hetzner Infrastructure & Monitoring",
    description:
      "Cloud infrastructure and monitoring environment using Hetzner, Docker, Nginx, Wazuh, MeshCentral and supporting services.",
    intro:
      "Cloud infrastructure and monitoring environment built around Hetzner, Docker, Nginx, Wazuh, MeshCentral and supporting services for centralized monitoring, management and application operations.",
    tags: [
      "Hetzner",
      "Docker",
      "Nginx",
      "Wazuh",
      "MeshCentral",
      "GitLab",
      "SonarQube",
      "PostgreSQL",
    ],

    overviewTitle: "Centralized infrastructure.",
    overview: [
      "This infrastructure environment uses Hetzner cloud servers to host and operate multiple containerized services for monitoring, remote management and application operations.",
      "Docker is used to isolate and manage individual services, while Nginx provides the reverse-proxy layer for exposing applications and routing traffic to the appropriate containers.",
      "The environment brings together infrastructure monitoring, endpoint management, security monitoring and development tooling into a centralized cloud platform.",
    ],

    architecture: [
      "Hetzner Cloud",
      "Nginx",
      "Docker",
      "Monitoring",
      "Management",
    ],

    pipeline: [
      {
        title: "Cloud Server",
        description:
          "Hetzner provides the underlying cloud compute environment for the infrastructure services.",
      },
      {
        title: "Reverse Proxy",
        description:
          "Nginx receives incoming application traffic and routes requests to the appropriate services.",
      },
      {
        title: "Containerized Services",
        description:
          "Docker containers isolate individual applications and infrastructure components.",
      },
      {
        title: "Monitoring & Security",
        description:
          "Wazuh and supporting monitoring services provide visibility into infrastructure and security events.",
      },
      {
        title: "Operations",
        description:
          "Remote management and development services support day-to-day infrastructure operations.",
      },
    ],

    technologies: [
      {
        category: "Cloud",
        items: ["Hetzner"],
      },
      {
        category: "Infrastructure",
        items: ["Linux"],
      },
      {
        category: "Containers",
        items: ["Docker", "Docker Compose"],
      },
      {
        category: "Proxy",
        items: ["Nginx"],
      },
      {
        category: "Security",
        items: ["Wazuh"],
      },
      {
        category: "Remote Management",
        items: ["MeshCentral"],
      },
      {
        category: "AI Services",
        items: ["AI Service", "Ollama", "Qdrant"],
      },
      {
        category: "CI/CD",
        items: ["GitLab CE", "GitLab Runner"],
      },
      {
        category: "Code Quality",
        items: ["SonarQube", "PostgreSQL"],
      },
    ],

    results: [
      "Cloud Infrastructure",
      "Containerization",
      "Centralized Monitoring",
      "Infrastructure Operations",
    ],

    github: "https://github.com/",
  },

  {
    slug: "cinevault",
    number: "04",
    title: "CineVault",
    description:
      "A full-stack movie platform built with Next.js, Node.js, Express and MySQL, with authentication, movie browsing, watchlists and containerized application architecture.",
    intro:
      "A full-stack movie platform built with Next.js, Node.js, Express and MySQL, with authentication, movie browsing, watchlists and containerized application architecture.",
    tags: [
      "Next.js",
      "Node.js",
      "Express",
      "MySQL",
      "Docker",
      "REST API",
      "JWT",
      "CI/CD",
    ],

    overviewTitle: "Full-stack application.",
    overview: [
      "CineVault is a full-stack movie platform designed with a separate frontend and backend architecture.",
      "The frontend uses Next.js while the backend is built with Node.js and Express. MySQL provides persistent storage for application data.",
      "The project includes authentication, movie browsing, individual movie pages and watchlist functionality, providing a practical application for implementing DevOps workflows.",
    ],

    architecture: [
      "Next.js",
      "Express",
      "MySQL",
      "Docker",
    ],

    pipeline: [
      {
        title: "Frontend",
        description:
          "Users interact with the CineVault interface through the Next.js frontend.",
      },
      {
        title: "Authentication",
        description:
          "User authentication and protected application functionality are handled through the backend API.",
      },
      {
        title: "REST API",
        description:
          "Express provides API endpoints for movies, users and watchlist functionality.",
      },
      {
        title: "Database",
        description:
          "MySQL stores application data used by the backend services.",
      },
      {
        title: "Containerization",
        description:
          "Application components can be packaged and operated using Docker for consistent environments.",
      },
    ],

    technologies: [
      {
        category: "Frontend",
        items: ["Next.js", "React"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express"],
      },
      {
        category: "Database",
        items: ["MySQL"],
      },
      {
        category: "API",
        items: ["REST API"],
      },
      {
        category: "Authentication",
        items: ["JWT"],
      },
      {
        category: "Containerization",
        items: ["Docker"],
      },
    ],

    results: [
      "Full-Stack Development",
      "REST API Development",
      "Containerization",
      "DevOps Workflow",
    ],

    github: "https://github.com/juni60",
  },
];