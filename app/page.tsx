// Created by Danielle Bagaforo Meer
// Let's Connect : https://www.linkedin.com/in/jandiaz/

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Terminal, ArrowRight, Mail, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-purple-950">
      

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-purple-400">LET'S COLLABORATE</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Jeremie Diaz,<br />
              AI ENGINEER/ DATA SCIENTIST
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0"> 
            Are you looking for an AI engineer who can deliver innovative solutions, optimize business processes, and drive measurable outcomes? Here's why I could be the perfect fit for your team:</p>

<p className="text-gray-400 max-w-xl mx-auto lg:mx-0"><b>Core Competencies</b></p>
<p className="text-gray-400 max-w-xl mx-auto lg:mx-0"> AI and Machine Learning Expertise: Proficient in designing, developing, and deploying machine learning models, including NLP, computer vision, and predictive analytics.
Chatbot Development: Experience building conversational AI systems for customer support, logistics, and hospitality, capable of analyzing queries, assessing risks, and forecasting.
Data-Driven Problem Solving: Skilled in collecting, preprocessing, and analyzing large datasets to uncover insights and improve decision-making processes.
Sales Forecasting: Expertise in developing AI tools to analyze sales data and predict trends, ensuring businesses stay ahead of market demands.</p>
<p className="text-gray-400 max-w-xl mx-auto lg:mx-0"><b>Technological Skills</b></p>
<p className="text-gray-400 max-w-xl mx-auto lg:mx-0"> Programming Languages: Python, JavaScript, and web development technologies.
Libraries and Frameworks: TensorFlow, PyTorch, scikit-learn, Keras, and Hugging Face.
Database Management: SQL, NoSQL, and data engineering with tools like Apache Spark.</p>
<p className="text-gray-400 max-w-xl mx-auto lg:mx-0"><b>Key Achievements</b></p>
<p className="text-gray-400 max-w-xl mx-auto lg:mx-0"> Developed a risk assessment chatbot for logistics managers, significantly reducing delays and optimizing route planning.
Created a hotel booking assistant that personalizes user experiences based on preferences and budget.
Built a sales forecasting AI system, enabling clients to make data-backed decisions with 90% accuracy.
Successfully implemented customer support chatbots for Hitachi Energy, improving response time and customer satisfaction.</p>
<p className="text-gray-400 max-w-xl mx-auto lg:mx-0"><b>Why Hire Me?</b></p>
<p className="text-gray-400 max-w-xl mx-auto lg:mx-0"> I thrive at the intersection of technology and business, crafting AI solutions tailored to organizational goals. My blend of technical expertise, hands-on experience, and innovative thinking ensures that I deliver scalable and impactful solutions.
Let’s create something extraordinary together. Reach out, and let’s discuss how I can help your organization achieve its AI goals!
            </p> 
            <br />
            <Link href="/projects">
              <Button className="bg-purple-600 hover:bg-purple-700">
                VIEW MY PROJECTS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <Image
                src="https://github.com/jaydiaz2012/Jeremie_Diaz_AI_DS_Portfolio/blob/main/app/images/jay_hiking.jpg" // Change to your Photo Please
                alt="Profile"
                fill
                className="rounded-3xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">FEATURED PROJECTS</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 text-white p-4 sm:p-6">
              <h2 className="text-xl font-bold text-purple-400 mb-4">{project.title}</h2>
              <div className="relative h-40 sm:h-48 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">PROBLEM:</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.problem}</p>
              <h3 className="text-lg font-semibold mb-2">SOLUTION:</h3>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">{project.solution}</p>
                <a href = {project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full bg-purple-600 text-white hover:bg-purple-800 hover:text-white">
                  VIEW PROJECT
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </a>
            </Card>
          ))}
        </div>
      </section>

      
    </main>
  );
}

// Only your Top 3 Projects

const projects = [
  { 
    title: "SalesX AI", 
    image: "https://github.com/jaydiaz2012/Jeremie_Diaz_AI_DS_Portfolio/blob/main/app/images/s-o-c-i-a-l-c-u-t-7KkDiSs5UdQ-unsplash.jpg?w=500&fit=crop",
    problem: "Businesses often struggle to make accurate sales forecasts, leading to inefficient planning and missed growth opportunities. Analyzing historical sales data and predicting future trends is time-consuming and requires specialized expertise.",
    solution: "SalesX simplifies sales forecasting by using advanced analytics to process sales data and generate precise forecasts for the next 12 months. With user-friendly insights and actionable predictions, businesses can make data-driven decisions, optimize strategies, and stay ahead of the competition.",    
    link : "https://kbbcoax7ztmutmnorjanlw.streamlit.app/"
  },
  {
    title: "Web Analytics AI",
    image: "https://github.com/jaydiaz2012/Jeremie_Diaz_AI_DS_Portfolio/blob/main/app/images/andy-kelly-0E_vhMVqL9g-unsplash.jpg?w=500&fit=crop",
    problem: "Businesses often face challenges in extracting meaningful insights from complex web analytics datasets. Traditional tools require significant manual effort and expertise, leading to missed opportunities and inefficiencies in decision-making.",
    solution: "Web Analytics X leverages AI-powered tools built on OpenAI's Swarm and Firecrawl frameworks to transform web analytics. The AI agent performs advanced data analysis, generates visualizations, and delivers actionable insights and reports. This empowers businesses to make smarter, data-driven decisions with ease and efficiency.",
    link : "https://github.com/jaydiaz2012/AI_First_Day_6_AI_Swarm"
  },
  {
    title: "RouteX",
    image: "https://github.com/jaydiaz2012/Jeremie_Diaz_AI_DS_Portfolio/blob/main/app/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg?w=500&fit=crop",
    problem: "Managing delivery routes can be complex and inefficient, leading to increased costs, delays, and dissatisfied customers. Businesses often lack the tools to optimize routes effectively for time, cost, and resource utilization.",
    solution: "RouteX streamlines delivery logistics by analyzing and optimizing delivery routes in real-time. Using advanced algorithms, the app reduces travel time, cuts costs, and ensures timely deliveries, enabling businesses to enhance operational efficiency and customer satisfaction.",
    link : "https://k4dnuwvsmdrhzbd8g8rkvh.streamlit.app/"    
  },
  
];
