export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I document every finding clearly and report it honestly ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/incident-response-report.jpg",
    stackedImg: true,
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm open to remote roles and relocation",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My core skills",
    description: "I keep sharpening them",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Self taught developer with a passion for security.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently open to full time roles",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to work together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Incident Response Playbook",
    des: "A practical playbook for triaging alerts, containing threats and documenting each response step.",
    img: "/project-incident-response.png",
    cover: true,
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Threat Intelligence Dashboard",
    des: "A dashboard that collects indicators of compromise and turns raw feeds into readable risk briefs.",
    img: "/project-threat-intel.png",
    cover: true,
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Digital Forensics Case Study",
    des: "A case study covering evidence acquisition, chain of custody and reporting for a simulated breach.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Full Stack Web Application",
    des: "A responsive web app built with React, Next.js and Node, deployed and maintained end to end.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Tlhalefang is my co-founder at Tsamaya. He built Legae, our transport payment app, and the platform where people buy homes and land. Fast, careful and always thinking about security.",
    name: "Amogelang T.",
    title: "Co-founder, Tsamaya & Legae",
    img: "/testimonial-amogelang.png",
  },
  {
    quote:
      "Tlhalefang stood out in my forensics class. He handled evidence carefully, asked sharp questions and submitted work that was thorough and well organised.",
    name: "Mr Lesotlho",
    title: "Lecturer, Computer Forensics",
    img: "/testimonial-lesotlho.png",
  },
  {
    quote:
      "He settled in within days. He picked up our monitoring tools, cut through the noisy alerts and left notes the team could act on every morning.",
    name: "Supervisor",
    title: "Cybersecurity Internship",
    img: "/testimonial-supervisor.jpg",
  },
  {
    quote:
      "I hired Tlhalefang to rebuild our website and he took it end to end. It is fast, it works on every phone, and he explained the security choices so our whole team understood.",
    name: "Thathobo G.",
    title: "CEO, UbuntuConnect",
    img: "/testimonial-thathobo.png",
  },
  {
    quote:
      "On our exchange in Turkey he adapted faster than anyone. Calm under pressure, generous with what he knew, and the reason our group hit every deadline.",
    name: "Classmate",
    title: "Student Exchange, Turkey",
    img: "/testimonial-classmate.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Cyber Security & Forensics Student",
    desc: "Four years at Botho University studying incident response, threat intelligence and forensics.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Exchange Student - Turkey",
    desc: "Studied abroad on a student exchange, adapting quickly to a new campus and a new culture.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Developer, Tsamaya & Legae",
    desc: "Built Legae, a transport payment app, plus the app and website for buying homes and land.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Open to Work - Junior Analyst",
    desc: "Ready to start now in a SOC, incident response, threat intelligence or forensics role.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const contactEmail = "Tlhalefangntshilane@gmail.com";

export const socialMedia = [
  {
    id: 1,
    name: "Instagram",
    img: "/insta.svg",
    link: "",
  },
  {
    id: 2,
    name: "Twitter",
    img: "/twit.svg",
    link: "",
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/thalefang-ntshilane-949635317",
  },
  {
    id: 4,
    name: "DevGen Botswana",
    img: "/globe.svg",
    link: "https://devgenbotswana.co.bw",
  },
];
