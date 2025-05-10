import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat p-8 text-gray-800 overflow-hidden"
      style={{ backgroundImage: "url('/images/background.png')" }}
      data-aos="fade-up"
    >

      {/* Main Content */}
      <div className="relative z-10">

        {/* Header */}
        <header className="text-center mb-12" data-aos="fade-down">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold mb-2">Zarin Shejuti</h1>
            <p className="text-lg">AI/ML Researcher | Master's Student | LLM Enthusiast</p>
          </div>

          <div className="mt-4 flex justify-center gap-6">
            <a href="mailto:zarintasnim14@gmail.com" className="hover:scale-125 transition-transform duration-300 ease-in-out"><Mail size={32} /></a>
            <a href="https://linkedin.com/in/zarin-shejuti-6673b2172" className="hover:scale-125 transition-transform duration-300 ease-in-out"><Linkedin size={32} /></a>
            <a href="https://github.com/ZarTShe" className="hover:scale-125 transition-transform duration-300 ease-in-out"><Github size={32} /></a>
          </div>
        </header>

        {/* About Me */}
        <section className="mb-12" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            I am a Master's student in Computer Science at Winston-Salem State University,
            graduating Fall 2025. My research focuses on real-world applications of AI and machine learning.
          </p>
        </section>

        {/* Research Interests */}
        <section className="mb-12" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">Research Interests</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Large Language Models (LLMs)</li>
            <li>Retrieval-Augmented Generation (RAG)</li>
            <li>Agentic RAG</li>
            <li>Edge Computing & Mobile AI</li>
            <li>Human Activity Recognition (HAR)</li>
          </ul>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-4" data-aos="fade-up">Projects</h2>

          <div className="mb-6 p-4 border rounded-lg shadow bg-white/70 backdrop-blur-sm" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-1">Scientific Chatbot – Q&A</h3>
            <p>Built a domain-specific chatbot using Agentic Retrieval-Augmented Generation (RAG) to answer queries on scientific documentation.</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
              <li>Information hidden because paper in progress.</li>
            </ul>
          </div>

          <div className="mb-6 p-4 border rounded-lg shadow bg-white/70 backdrop-blur-sm" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-1">Posture Detection Android App</h3>
            <p>Developed a real-time posture classification model using smartphone sensors to assist healthcare workers in community clinics.</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
              <li>Compared deep learning and traditional ML models</li>
              <li>Analyzed latency, accuracy, and memory usage</li>
              <li>Optimized for smartphone deployment</li>
              <li>Model training performed using Python; deployment via Android Studio</li>
            </ul>
            <img src="images/postureApp.gif" alt="Posture App Demo" className="rounded-lg shadow-md mt-4 w-full max-w-xs mx-auto max-h-80 object-contain" />
          </div>

          <div className="p-4 border rounded-lg shadow bg-white/70 backdrop-blur-sm" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-1">RSSI Path Calculation using Nearest Neighbor</h3>
            <p>Implemented a nearest neighbor-based RSSI signal imputation system to track movement across rooms using smartphone Bluetooth signals.</p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
              <li>Handled sparse RSSI values using neighbor interpolation</li>
              <li>Improved path accuracy in indoor settings</li>
              <li>Written in Python and deployed in community clinic</li>
            </ul>
            <img src="images/download.png" alt="RSSI Path Calculation" className="rounded-lg shadow-md mt-4 w-full max-w-xs mx-auto max-h-80 object-contain" />
          </div>

          <div className="mb-6 p-4 border rounded-lg shadow bg-white/70 backdrop-blur-sm" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-1">Early Education Enrollment Study – Forsyth County, Winston-Salem, NC</h3>
              <p>Conducted a data-driven analysis to identify socioeconomic factors influencing early education
                enrollment rates across 34 low-scoring census tracts in Forsyth County, NC.
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                 <li>Used socioeconomic, education, and occupational datasets for analysis</li>
                 <li>Identified income, single parent status, and job type as key indicators</li>
                 <li>Proposed targeted subsidized programs and flexible childcare solutions</li>
                 <li>Created implementation strategies for improving enrollment access and equity</li>
              </ul>
              <a href="files/early-education-study.pdf" download className="inline-block mt-3 text-blue-600 hover:underline text-sm">
                📥 Download Full Slide Deck (pdf)
              </a>
          </div>

        </section>
      </div>

    </div>
  );
}
