"use client"

import { motion } from "framer-motion"
import {
Github,
Linkedin,
Mail,
Code,
Cpu,
Database,
GitBranch,
Droplets,
HeartPulse,
Leaf,
Wallet
} from "lucide-react"



export default function Home(){
return(

<main className="bg-[#0b0b0f] text-gray-200">

<Navbar/>
<Hero/>
<About/>
<Skills/>
<Projects/>
<Contact/>
<Footer/>

</main>

)
}



/* ---------------- NAVBAR ---------------- */

function Navbar(){

return(

<nav className="fixed top-0 w-full backdrop-blur-lg bg-[#0b0b0f]/80 border-b border-white/5 z-50">

<div className="max-w-[1400px] mx-auto px-12 py-6 flex justify-between items-center">

<h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
Bharath Naik G
</h1>

<div className="flex gap-10 text-lg text-gray-300">

<a href="#about" className="hover:text-blue-400 transition">About</a>
<a href="#skills" className="hover:text-purple-400 transition">Skills</a>
<a href="#projects" className="hover:text-blue-400 transition">Projects</a>
<a href="#contact" className="hover:text-purple-400 transition">Contact</a>

</div>

</div>

</nav>

)

}



/* ---------------- HERO ---------------- */

/* ---------------- HERO ---------------- */

function Hero(){

const icons=[
{icon:<Code size={20}/>,color:"text-blue-400"},
{icon:<Cpu size={20}/>,color:"text-purple-400"},
{icon:<Database size={20}/>,color:"text-green-400"},
{icon:<GitBranch size={20}/>,color:"text-orange-400"},
]

return(

<section className="min-h-[90vh] flex items-center px-12">

<div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-24 items-center">

{/* PHOTO */}

<div className="flex justify-center">

<div className="text-center">

<div className="relative inline-block">

<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[160px] rounded-full"/>

<img src="/profile.png" className="relative w-[400px]" />

<div className="absolute left-0 right-0 bottom-0 h-[3px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"/>

</div>

<p className="text-gray-400 text-sm tracking-wide mt-4">
Fullstack Developer • AI Integrations • Cybersecurity Enthusiast
</p>

<div className="flex justify-center gap-8 mt-6">

{icons.map((item,i)=>(

<motion.div
key={i}
animate={{y:[0,-8,0]}}
transition={{repeat:Infinity,duration:3+i}}
className={`bg-[#15151b] border border-white/10 p-3 rounded-lg ${item.color}`}
>

{item.icon}

</motion.div>

))}

</div>

</div>

</div>



{/* TEXT */}

<motion.div
initial={{opacity:0,y:60}}
animate={{opacity:1,y:0}}
transition={{duration:0.7}}
>

<h1 className="text-6xl md:text-7xl font-bold mb-6">

Hi, I'm  

<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
Bharath Naik G
</span>

</h1>

<p className="text-gray-400 text-xl mb-10 max-w-[600px]">

Building modern web applications with AI integrations
while exploring secure and scalable software systems.

</p>

<div className="flex gap-6">

<a href="#projects">

<button className="px-8 py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 transition shadow-lg hover:shadow-purple-500/30">

View Projects

</button>

</a>


<a href="#contact">

<button className="px-8 py-3 rounded-md border border-white/20 hover:border-purple-400 hover:bg-white/5 hover:scale-105 transition">

Contact Me

</button>

</a>

</div>

</motion.div>

</div>

</section>

)
}
/* ---------------- ABOUT ---------------- */

function About(){

return(

<motion.section
id="about"
className="py-36 border-t border-white/5"
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.6}}
>

<div className="max-w-[900px] mx-auto px-10 text-center">

<p className="text-sm text-purple-400 mb-3 tracking-widest">
ABOUT
</p>

<h2 className="text-4xl font-semibold mb-6">
Who I Am
</h2>

<p className="text-gray-400 text-lg leading-relaxed">

I'm Bharath Naik G, a full-stack developer focused on building modern web applications and integrating Generative AI into practical systems.

My interests span across AI-powered applications, scalable software architecture, and the cybersecurity domain.

</p>

</div>

</motion.section>

)
}



/* ---------------- SKILLS ---------------- */

function Skills(){

const skillGroups=[

{
title:"Languages",
icon:<Code size={22} className="text-blue-400"/>,
items:["Java","C","JavaScript","TypeScript","HTML","CSS"]
},

{
title:"Frameworks",
icon:<Cpu size={22} className="text-purple-400"/>,
items:["React","Node.js","Tailwind"]
},

{
title:"Developer Tools",
icon:<GitBranch size={22} className="text-orange-400"/>,
items:["Git","GitHub","Postman"]
},

{
title:"AI / Data Tools",
icon:<Database size={22} className="text-green-400"/>,
items:["Roboflow"]
},

{
title:"Design",
icon:<Code size={22} className="text-pink-400"/>,
items:["Figma"]
}

]

return(

<motion.section
id="skills"
className="py-36 bg-[#0f0f14]"
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.6}}
>

<div className="max-w-[1200px] mx-auto px-10">

<div className="text-center mb-16">

<p className="text-sm text-blue-400 mb-3 tracking-widest">
TECH STACK
</p>

<h2 className="text-4xl font-semibold">
Technologies I Work With
</h2>

</div>

<div className="grid md:grid-cols-3 gap-8">

{skillGroups.map((group,i)=>(

<motion.div
key={i}
whileHover={{y:-8}}
className="bg-[#16161d] border border-white/5 rounded-xl p-8 hover:border-purple-400/40 transition"
>

<div className="flex items-center gap-3 mb-4">

{group.icon}

<h3 className="text-lg font-semibold">
{group.title}
</h3>

</div>

<div className="flex flex-wrap gap-2">

{group.items.map((item,index)=>(

<span
key={index}
className="text-sm px-3 py-1 rounded-md bg-[#1d1d26] text-gray-300"
>

{item}

</span>

))}

</div>

</motion.div>

))}

</div>

</div>

</motion.section>

)
}



/* ---------------- PROJECTS ---------------- */

function Projects(){

const projects=[

{
title:"BlueGuardian",
desc:"AI-powered marine pollution monitoring platform detecting floating waste and visualizing pollution hotspots.",
icon:<Droplets size={40} className="text-blue-400"/>,
github:"https://github.com/bharathnaik-g/Blueguardian-dashboard"
},

{
title:"Patient Management System",
desc:"System visualizing AVL tree data structures through patient records.",
icon:<HeartPulse size={40} className="text-red-400"/>,
github:"https://github.com/bharathnaik-g/Hospital-Management"
},

{
title:"Agroniti",
desc:"Agricultural platform helping farmers with crop insights and post-harvest planning.",
icon:<Leaf size={40} className="text-green-400"/>,
github:null
},

{
title:"Fintech Platform",
desc:"Prototype exploring financial transactions and digital payment workflows.",
icon:<Wallet size={40} className="text-yellow-400"/>,
github:null
},

{
title:"Developer Portfolio",
desc:"Modern developer portfolio built with React, Tailwind and Framer Motion.",
icon:<Code size={40} className="text-purple-400"/>,
github:"https://github.com/bharathnaik-g/portfolioV1"
}

]
return(

<motion.section
id="projects"
className="py-36 border-t border-white/5"
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.6}}
>

<div className="max-w-[1200px] mx-auto px-10">

<div className="text-center mb-16">

<p className="text-sm text-purple-400 mb-3 tracking-widest">
PROJECTS
</p>

<h2 className="text-4xl font-semibold">
Things I've Built
</h2>

</div>

<div className="grid md:grid-cols-2 gap-8">

{projects.map((project,i)=>(

<motion.div
key={i}
whileHover={{y:-8}}
className="bg-[#16161d] border border-white/5 rounded-xl p-8 hover:border-blue-400/40 transition"
>

<div className="flex justify-between items-center mb-4">

<div>{project.icon}</div>

{project.github && (
<a href={project.github}>
<Github className="hover:text-blue-400"/>
</a>
)}

</div>

<h3 className="text-lg font-semibold mb-2">
{project.title}
</h3>

<p className="text-gray-400 text-sm">
{project.desc}
</p>

</motion.div>

))}

</div>

</div>

</motion.section>

)
}



/* ---------------- CONTACT ---------------- */

function Contact(){

return(

<motion.section
id="contact"
className="py-36 bg-[#0f0f14]"
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.6}}
>

<div className="max-w-[900px] mx-auto px-10 text-center">

<p className="text-sm text-blue-400 mb-3 tracking-widest">
CONTACT
</p>

<h2 className="text-4xl font-semibold mb-6">
Let's Connect
</h2>

<p className="text-gray-400 mb-10">
Feel free to reach out for collaboration, projects or opportunities.
</p>

<div className="flex justify-center gap-12 text-gray-300">

<a
href="https://github.com/bharathnaik-g"
target="_blank"
className="hover:text-blue-400 hover:scale-110 transition"
>
<Github size={28}/>
</a>

<a
href="https://www.linkedin.com/in/bharath-naik-g-448b80337/"
target="_blank"
className="hover:text-purple-400 hover:scale-110 transition"
>
<Linkedin size={28}/>
</a>

<a
href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNxPKtHWPsBRdCtlmXFTMJRGNLwxldTcCgJCkFlRmLbsbXvspGTZCtZhHQxgbqfLvrqrpL"
className="hover:text-blue-400 hover:scale-110 transition"
>
<Mail size={28}/>
</a>

</div>

</div>

</motion.section>

)
}

/* ---------------- FOOTER ---------------- */

function Footer(){

return(

<footer className="text-center py-6 text-gray-500 border-t border-white/5">

© {new Date().getFullYear()} Bharath Naik G

</footer>

)
}