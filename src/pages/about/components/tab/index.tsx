import { Text } from "../../../../components/text";
import type { TabContentData } from "../../../../types";

export const tabContents: { [key: string]: TabContentData } = {
    "bio-index": {
      id: "bio-index",
      title: "bio.ts",
      content: (
        <Text>
          <pre>
            {`
  1     // export const bio = {
  2     // name: "Bruno Siqueira",
  3     // role: "Full Stack Developer",
  4     // experience: "4+ years of experience",
  5     // specialties: [
  6     //   "React Native",
  7     //   "React",
  8     //   "Node.js",
  9     //   "Firebase",
  10    //   "Jenkins",
  11    //   "TypeScript",
  12    //   "MySQL",
  13    //   "MongoDB",
  14    //   "Geolocation",
  15    //   "CI/CD",
  16    //   "Apple & Google Store Publishing",
  17    //   "Performance & Security",
  18    //   "UX"
  19    // ],
  20    // summary: "Developer with over 4 years of experience in React Native, 
  21    //   React, and Node.js. Specializing in scalable applications, app 
  22    //   store publishing, performance, security, and UX. 
  23    //   Experience with geolocation and CI/CD via Jenkins.",
  24    // contact: "brunospdev@gmail.com",
  25    // portfolio: "in/bruno-siqueira-de-paulo (LinkedIn) /brunosp-49 (GitHub)"
  26    // };
  `}
          </pre>
        </Text>
      ),
    },
    "interests-index": {
      id: "interests-index",
      title: "interests.ts",
      content: (
        <Text>
          <pre>
            {`
  1     // export const interests = [
  2     //   "AI and Machine Learning",
  3     //   "Bitcoin and Crypto",
  4     //   "Sport games",
  5     //   "Cybersecurity",
  6     //   "new technologies e frameworks",
  7     //   "UX/UI design",
  8     //   "Open Source projects",  
  9     // ];
  `}
          </pre>
        </Text>
      ),
    },
    "education-index": {
      id: "education-index",
      title: "education.ts",
      content: (
        <Text>
          <pre>
            {`
  1     // export const education = [
  2     //   {
  3     //     degree: "Bacharelado em Ciência da Computação",
  4     //     institution: "Brigham Young University",
  5     //     period: "2021-2026",
  6     //     details: "Estudando desenvolvimento de software com foco em melhores
  7     //     práticas e arquitetura."
  8     //   },
  9     //   {
  10    //     degree: "Full Stack Developer",
  11    //    institution: "Labenu",
  12    //    period: "2022",
  13    //    details: "Formação intensiva em desenvolvimento Full Stack."
  14    //  }
  15    // ];
  `}
          </pre>
        </Text>
      ),
    },
    "experience-index": {
      id: "experience-index",
      title: "experience.ts",
      content: (
        <Text>
          <pre>
            {`
  1     // export const experience = [
  2     //   {
  3     //     role: "Mobile Developer Sr",
  4     //     company: "Topaz",
  5     //     period: "Feb 2024 - now",
  6     //     description: "Mobile app development for banking partners using 
  7     //     React Native (Expo & CLI), focusing on security, performance, and 
  8     //     deployment. Leadership in the full app lifecycle, implementing 
  9     //     encryption, secure authentication, API integration, and CI/CD via 
  10    //     Jenkins. Team management in an agile environment."
  11    //   },
  12    //   {
  13    //     role: "Frontend Developer",
  14    //     company: "Condofy",
  15    //     period: "Sep 2023 - Apr 2024",
  16    //     description: "Frontend development for the real estate sector with 
  17    //     React.js and Next.js. Building scalable components, implementing 
  18    //     tests, and analyzing performance. Active participation in agile sprints, 
  19    //     code reviews, and mentoring."
  20    //   },
  21    //   {
  22    //     role: "Mobile Developer",
  23    //     company: "Geobyte",
  24    //     period: "Feb 2023 - Dec 2023",
  25    //     description: "Specializing in offline-first mobile applications with 
  26    //     advanced geolocation. Development of interactive map tools and area 
  27    //     delineations. Integration with Firebase (Auth, Firestore) and use of 
  28    //     WatermelonDB for offline persistence. Delivering apps optimized for 
  29    //     low-connectivity environments with continuous synchronization."
  30    //   },
  31    //   {
  32    //     role: "Full Stack web/mobile",
  33    //     company: "Inside the box",
  34    //     period: "Jun 2022 - Feb 2023",
  35    //     description: "Full-stack development of web and mobile solutions. 
  36    //     Building applications using React Native (CLI), React.js, Node.js 
  37    //     (Express), and Firebase. Implementing responsive UIs with HTML, CSS, 
  38    //     and JavaScript. Participating in the full development cycle, from 
  39    //     frontend to backend and integration."
  40    //   },
  41    //   {
  42    //     role: "React (Js/Native) Teacher",
  43    //     company: "FulltureSchool",
  44    //     period: "May 2022 - Dec 2023",
  45    //     description: "Leading React and React Native modules, teaching 
  46    //     and mentoring new developers. Creating technical materials, providing 
  47    //     hands-on lessons, and supporting junior mentors with code reviews."
  48    //   },
  49    //   {
  50    //     role: "Full Stack React e Node.js Mentor",
  51    //     company: "Giviez",
  52    //     period: "Apr 2022 - Feb 2023",
  53    //     description: "Mentoring for junior React.js and Node.js developers. 
  54    //     Conducting code reviews, providing structured feedback, and guiding 
  55    //     learning paths. Promoting best practices and collaborative coding."
  56    //   },
  57    //   {
  58    //     role: "Front-end React Developer",
  59    //     company: "Upwork",
  60    //     period: "May 2021 - Apr 2022",
  61    //     description: "Delivering custom frontend solutions to international
  62    //     clients using React.js. Developing reusable components and responsive
  63    //     UIs. Collaborating with remote teams in asynchronous environments 
  64    //     with high delivery standards."
  65    //   }
  66    // ];
  `}
          </pre>
        </Text>
      ),
    },
  };