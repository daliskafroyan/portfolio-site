import type { ExperienceItemType } from "@/components/work-experience";

export const WORK_EXPERIENCE: ExperienceItemType[] = [
    {
        id: "bki",
        companyName: "PT. Biro Klasifikasi Indonesia",
        companyLogo: "/logo/bki-logo.svg",
        positions: [
            {
                id: "bki-software-engineer",
                title: "Desktop Frontend Engineer",
                employmentPeriod: "Apr 2025 - Aug 2025",
                employmentType: "Full-time",
                description: `- Architected and developed an offline-first desktop application, implementing robust data synchronization between a legacy Laravel/MySQL system and a modern React/TypeScript stack, resulting in seamless 100% offline operations and improved user productivity in low-connectivity environments.`,
                icon: "code",
                skills: ["Laravel", "React", "TypeScript", "Electron", "MySQL", "Offline-first", "Desktop Application"],
                isExpanded: true
            }
        ]
    },
    {
        id: "freight-hub",
        companyName: "Freight-hub (Meratus Group)",
        companyLogo: "/logo/freighthub-logo.svg",
        positions: [
            {
                id: "freight-hub-fullstack-engineer",
                title: "Fullstack Engineer",
                employmentPeriod: "Apr 2023 - Feb 2025",
                employmentType: "Full-time",
                description:
                `- Engineered a seamless integration of GPS functionality, optimizing location-based services and enhancing user experience through precise geolocation features.
- Revamping mobile apps of React Native.`,
                icon: "code",
                skills: ["Vue", "React Native", "Sequelize", "PostgreSQL", "AWS Lambda"],
                isExpanded: false
            },
        ]
    },
    {
        id: "pupr",
        companyName: "Ministry of Public Works and Housing of the Republic of Indonesia",
        companyLogo: "/logo/pupr-logo.png",
        positions: [
            {
                id: "pupr-software-engineer",
                title: "Software Engineer",
                employmentPeriod: "Jul 2023 - May 2024",
                employmentType: "Part-time Project Based",
                description: `- Developing a dynamic reporting system for the Ministry of Housing. Build a seamless, interactive user experience, enhanced data visualization and reporting capabilities for critical in-house projects`,
                icon: "code",
                skills: ["Laravel", "React.js", "Tanstack Query", "Legend State"],
                isExpanded: false
            },
        ]
    },
    {
        id: "mrt-jakarta",
        companyName: "PT. MRT Jakarta",
        companyLogo: "/logo/mrt-jakarta-logo.svg",
        positions: [
            {
                id: "mrtj-software-engineer",
                title: "Software Engineer",
                employmentPeriod: "Mar 2023 - Jul 2023",
                employmentType: "Part-time Project Based",
                description: `- Build integrated learning and management system created specifically for the staff of MRT Jakarta`,
                icon: "code",
                skills: ["Go", "React.js", "Tanstack Query", "Zustand"],
                isExpanded: false
            },
        ]
    },
    {
        id: "koinworks",
        companyName: "KoinWorks",
        companyLogo: "/logo/koinworks-logo.png",
        positions: [
            {
                id: "koinworks-frontend-engineer",
                title: "Frontend Engineer",
                employmentPeriod: "Apr 2022 - Jul 2023",
                employmentType: "Full-time",
                description:
                    `- Doing regular sharing sessions within the frontend team to promote the exchange of best practices and stay up-to-date with the latest tech trends. 
- Spearheaded the adoption of cutting-edge technologies, including Next.js as the main framework, Mantine as the UI Library, and React Query and Zustand for state management which lead to cutting development time to 50% in general. 
- Migrate legacy PHP Laravel backoffice to a modern Golang and React-based solution to provide better developer experience and increase code maintainability in general.`,
                icon: "code",
                skills: ["React.js", "Next.js", "Zustand", "React-Query", "Laravel", "Vue.js", "Nuxt.js"],
                isExpanded: false
            }
        ]
    },
    {
        id: "paper-id",
        companyName: "Paper.id",
        companyLogo: "/logo/paperid-logo.png",
        positions: [
            {
                id: "paper-id-fulltime",
                title: "Frontend Engineer",
                employmentPeriod: "Mar 2021 - Mar 2022",
                employmentType: "Full-time",
                description: `- Continued development of mobile-specific features and responsive design implementations. Collaborated with cross-functional teams to deliver high-quality frontend solutions`,
                icon: "code",
                skills: ["Angular", "Ionic", "Firebase", "Google Tag Manager"],
                isExpanded: false
            },
            {
                id: "paper-id-intern",
                title: "Frontend Engineer Intern",
                employmentPeriod: "Jan 2021 - Mar 2021",
                employmentType: "Internship",
                description: `- Implemented Google Tag Manager to optimize data tracking and analytics processes. 
- Successfully implemented mobile-specific features, leveraging responsive design principles and mobile-first development approaches to deliver exceptional user experiences.`,
                icon: "code",
                skills: ["Angular", "Ionic", "Firebase", "Google Tag Manager"],
                isExpanded: false
            }
        ]
    },
]; 