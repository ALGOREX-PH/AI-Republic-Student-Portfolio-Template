// Let's Connect : https://www.linkedin.com/in/jandiaz/
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal } from 'lucide-react';

// Add your Projects Here
const projects = [
  {
    title: "SalesX AI", 
    image: "https://github.com/jaydiaz2012/Jeremie_Diaz_AI_DS_Portfolio/blob/main/app/images/s-o-c-i-a-l-c-u-t-7KkDiSs5UdQ-unsplash.jpg?w=800&h=600&fit=crop",
    problem: "Businesses often struggle to make accurate sales forecasts, leading to inefficient planning and missed growth opportunities. Analyzing historical sales data and predicting future trends is time-consuming and requires specialized expertise.",
    solution: "SalesX simplifies sales forecasting by using advanced analytics to process sales data and generate precise forecasts for the next 12 months. With user-friendly insights and actionable predictions, businesses can make data-driven decisions, optimize strategies, and stay ahead of the competition.",    
    tools: ["Python", "OpenAI", "LLM", "NLG", "Streamlit"],
    link : "https://kbbcoax7ztmutmnorjanlw.streamlit.app/"
    
  },
  {
    title: "Web Analytics AI",
    image: "https://github.com/jaydiaz2012/Jeremie_Diaz_AI_DS_Portfolio/blob/main/app/images/andy-kelly-0E_vhMVqL9g-unsplash.jpg?w=800&h=600&fit=crop",
    problem: "Businesses often face challenges in extracting meaningful insights from complex web analytics datasets. Traditional tools require significant manual effort and expertise, leading to missed opportunities and inefficiencies in decision-making.",
    solution: "Web Analytics X leverages AI-powered tools built on OpenAI's Swarm and Firecrawl frameworks to transform web analytics. The AI agent performs advanced data analysis, generates visualizations, and delivers actionable insights and reports. This empowers businesses to make smarter, data-driven decisions with ease and efficiency.",
    tools:["Python", "OpenAI", "LLM", "Swarm", "Streamlit"],  
    link : "https://github.com/jaydiaz2012/AI_First_Day_6_AI_Swarm"
  },
  {
    title: "RouteX",
    image: "https://github.com/jaydiaz2012/Jeremie_Diaz_AI_DS_Portfolio/blob/main/app/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg?w=800&h=600&fit=crop",
    problem: "Managing delivery routes can be complex and inefficient, leading to increased costs, delays, and dissatisfied customers. Businesses often lack the tools to optimize routes effectively for time, cost, and resource utilization.",
    solution: "RouteX streamlines delivery logistics by analyzing and optimizing delivery routes in real-time. Using advanced algorithms, the app reduces travel time, cuts costs, and ensures timely deliveries, enabling businesses to enhance operational efficiency and customer satisfaction.",
    tools:["Python", "OpenAI",  "LLM", "Streamlit"]
    link : "https://k4dnuwvsmdrhzbd8g8rkvh.streamlit.app/"
  },
  {
    title: "News Summarizer AI",
    image: "https://github.com/jaydiaz2012/Jeremie_Diaz_AI_DS_Portfolio/blob/main/app/images/mr-cup-fabien-barral-Mwuod2cm8g4-unsplash.jpg?w=800&h=600&fit=crop",
    problem: "Staying informed is challenging when news articles are lengthy and time-consuming to read. Busy individuals often struggle to keep up with the latest developments without dedicating significant time.",
    solution: "News Summarizer AI simplifies news consumption by summarizing any article from a website link into concise, easy-to-read summaries. With NewsAI, users can stay updated quickly and efficiently, saving time while accessing the essential information they need.",
    tools: ["Python", "OpenAI", "LLM"],
    link : "https://uqzmn9u87fezujafkwvq7p.streamlit.app/" // Github Link make sure it has https://
  }


];

// Let's Connect : https://www.linkedin.com/in/jandiaz/
export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-purple-950">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">ALL PROJECTS</h1>
        <p className="text-gray-400 mb-8 sm:mb-12">Exploring the intersection of AI and real-world solutions</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden hover:border-purple-500/40 transition-all duration-300">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 saturate-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
              </div>
              
              <div className="p-4 sm:p-6 space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-purple-400 tracking-tight">{project.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-2">PROBLEM:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-2">SOLUTION:</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>
                
                <div className="pt-4 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <a href = {project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium tracking-wide"
                  >
                    VIEW PROJECT
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
