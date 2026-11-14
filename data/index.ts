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
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
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
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Threat Intelligence Dashboard",
    des: "A dashboard that collects indicators of compromise and turns raw feeds into readable risk briefs.",
    img: "/p2.svg",
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
      "Working with Tlhalefang was easy from the start. He documented every finding, explained the evidence clearly and delivered his work on time. If you need someone who takes security seriously, he is the person to hire.",
    name: "Project Partner",
    title: "Botho University",
  },
  {
    quote:
      "Tlhalefang was one of the most consistent students in my class. He asked good questions, handled forensic evidence carefully and always submitted work that was thorough and well organised.",
    name: "Lecturer",
    title: "Computer Forensics Module",
  },
  {
    quote:
      "He joined us for a short internship and settled in fast. He picked up our monitoring tools, flagged the noisy alerts and wrote clean notes that the team could actually act on every morning.",
    name: "Supervisor",
    title: "Cybersecurity Internship",
  },
  {
    quote:
      "I hired Tlhalefang to rebuild our website and he handled it end to end. The site is fast, works on every phone and he explained the security decisions in a way our small team understood.",
    name: "Client",
    title: "Freelance Web Project",
  },
  {
    quote:
      "On our student exchange in Turkey, Tlhalefang adapted quickly and worked well with everyone. He stayed calm under pressure, shared what he knew and kept the group on track during tight deadlines.",
    name: "Classmate",
    title: "Student Exchange, Turkey",
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
    title: "Self Taught Full Stack Developer",
    desc: "Learned React, Next.js and Node by building and deploying real web apps from start to finish.",
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
