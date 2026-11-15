import { Github, Linkedin, Mail, FileText, ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const researchInterests = [
  "Wireless Sensing and End-to-End Systems for Elderly Patient Care",
  "mmWave Radar Sensing and Human Activity Recognition",
  "Edge AI and Resource-Constrained Machine Learning",
  "Efficient and Secure AI Systems",
  "Deep Neural Networks and Spiking Neural Networks",
  "Large Language Models and Retrieval-Augmented Generation",
  "Source Attribution and Document Question Answering",
];

// Add your project images to public/images/ using these filenames,
// or change the src values to match your own files. Until then, the
// reserved image areas display a placeholder instead of a broken image.
const ongoingProjects = [
  {
    title: "Bed-Exit Detection with mmWave Radar and Camera Data",
    description:
      "An ongoing project investigating bed-exit detection with mmWave radar and a camera, as part of research on sensing systems that support elderly patient care.",
    details: [
      "My contribution: developed a direction-based feature and an XGBoost classifier for bed-exit detection.",
      "Work with radar and camera data to investigate movement associated with bed-exit events.",
      "Collaborator contribution: CNN-BiLSTM modeling of dynamic range-angle data within the joint project.",
    ],
    // Add the verified headline metric and evaluation protocol when available.
    images: [
      {
        src: "images/bed_exit.PNG",
        alt: "mmWave radar and camera setup for the bed-exit detection project",
        caption: "Camera Prediction",
      },
    ],
  },
  {
    title: "EdgeDefenseShield",
    description:
      "An ongoing study of deep neural networks (DNNs) and spiking neural networks (SNNs) under payload constraints, with a focus on practical evaluation for edge-AI systems.",
    details: [
      "Develop a controlled DNN-versus-SNN evaluation protocol using payload-constrained features.",
      "Investigate model behavior and the tradeoffs relevant to resource-constrained deployment.",
      "Prepare on-device evaluation on NVIDIA Jetson Orin Nano to measure inference performance and resource use.",
    ],
    // Add measured latency, memory, power/energy, and accuracy only after
    // the hardware evaluation is complete.
    images: [
      {
        src: "images/snn_dnn.png",
        alt: "EdgeDefenseShield evaluation pipeline comparing DNN and SNN approaches",
        caption: "Evaluation pipeline",
      },
      {
        src: "images/snn_dnn_result.PNG",
        alt: "Jetson Orin Nano setup or on-device benchmarking results",
        caption: "Performance Comparison for Different Payloads",
      },
    ],
  },
];

function ProjectImage({ src, alt, caption }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  return (
    <figure
      style={{
        width: "100%",
        maxWidth: "550px",
        margin: "16px auto",
      }}
    >
      {src && !failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          style={{
            display: "block",
            width: "100%",
            height: "320px",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
      ) : (
        <div
          style={{
            height: "320px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f3f4f6",
            border: "1px dashed #9ca3af",
            borderRadius: "8px",
            color: "#6b7280",
            textAlign: "center",
            padding: "12px",
            boxSizing: "border-box",
          }}
        >
          Image unavailable
        </div>
      )}

      {caption && (
        <figcaption
          style={{
            marginTop: "8px",
            textAlign: "center",
            fontSize: "13px",
            color: "#6b7280",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function ExternalLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-sm text-blue-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${className}`}
    >
      {children}
    </a>
  );
}

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });

    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) AOS.refresh();
  }, [loading]);

  if (loading) {
    return (
      <div
        className="flex min-h-screen items-center justify-center bg-white"
        role="status"
        aria-label="Loading portfolio"
      >
        <div className="h-16 w-16 animate-spin rounded-full border-b-4 border-t-4 border-blue-500 motion-reduce:animate-none" />
        <span className="sr-only">Loading portfolio</span>
      </div>
    );
  }

  const cardClass =
    "rounded-xl border border-gray-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm sm:p-6";
  const iconClass =
    "rounded-sm transition-transform duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 motion-reduce:transform-none";

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat px-4 py-10 text-gray-800 sm:px-8"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        <header className="mb-12 text-center" data-aos="fade-down">
          <h1 className="mb-3 text-4xl font-bold sm:text-5xl">Zarin Shejuti</h1>
          <p className="text-lg font-medium">
            PhD Student at the University of South Carolina
          </p>
          <p className="mt-2 text-gray-600">
            SyRex Lab | Wireless Sensing | Edge AI | Intelligent Healthcare Systems
          </p>
          <nav
            className="mt-5 flex flex-wrap items-center justify-center gap-6"
            aria-label="Contact and professional profiles"
          >
            <a href="mailto:zshejuti@email.sc.edu" className={iconClass} aria-label="Email Zarin" title="Email">
              <Mail size={28} aria-hidden="true" />
            </a>
            <a href="https://linkedin.com/in/zarin-shejuti-6673b2172" target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="LinkedIn profile" title="LinkedIn">
              <Linkedin size={28} aria-hidden="true" />
            </a>
            <a href="https://github.com/ZarTShe" target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="GitHub profile" title="GitHub">
              <Github size={28} aria-hidden="true" />
            </a>
            {/* Existing CV links retained. Update them if your latest CV has moved. */}
            <a href="https://drive.google.com/file/d/1alYqZvtrxqJnXrsKDnBh4s4O_yyvYL2k/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={`${iconClass} inline-flex items-center gap-1`} aria-label="View CV" title="View CV">
              <FileText size={28} aria-hidden="true" /><span className="text-xs">CV</span>
            </a>
          </nav>
        </header>

        <main className="space-y-12">
          <section aria-labelledby="about-heading" data-aos="fade-up">
            <h2 id="about-heading" className="mb-4 text-2xl font-semibold">About Me</h2>
            <div className="space-y-3 leading-relaxed">
              <p>
                I am a PhD student in Computer Science and Engineering at the
                University of South Carolina, where I work in the SyRex Lab. My
                current research focuses on wireless sensing for end-to-end
                systems that support elderly patients, including mmWave-based
                activity understanding and efficient machine learning for edge devices.
              </p>
              <p>
                My ongoing projects include bed-exit detection using mmWave radar
                and camera data, and EdgeDefenseShield, a controlled study of
                DNN and SNN approaches under payload constraints. I completed my
                master’s degree in Computer Science and Information Technology at
                Winston-Salem State University in December 2025. My earlier work
                includes smartphone-based posture classification, Bluetooth RSSI
                mobility tracking, and retrieval-augmented question answering.
              </p>
            </div>
          </section>

          <section aria-labelledby="interests-heading" data-aos="fade-up">
            <h2 id="interests-heading" className="mb-4 text-2xl font-semibold">Research Interests</h2>
            <ul className="ml-6 list-disc space-y-2">
              {researchInterests.map((interest) => <li key={interest}>{interest}</li>)}
            </ul>
          </section>

          <section aria-labelledby="ongoing-heading">
            <h2 id="ongoing-heading" className="mb-4 text-2xl font-semibold" data-aos="fade-up">Ongoing Research Projects</h2>
            <div className="space-y-6">
              {ongoingProjects.map((project) => (
                <article key={project.title} className={cardClass} data-aos="fade-up">
                  <span className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">Ongoing research</span>
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="leading-relaxed">{project.description}</p>
                  <ul className="ml-6 mt-3 list-disc space-y-2 text-sm leading-relaxed">
                    {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {project.images.map((image) => <ProjectImage key={image.src} {...image} />)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="earlier-heading">
            <h2 id="earlier-heading" className="mb-4 text-2xl font-semibold" data-aos="fade-up">Previous Research and Projects</h2>
            <div className="space-y-6">
              <article className={cardClass} data-aos="fade-up">
                <h3 className="mb-2 text-xl font-semibold">Scientific Chatbot and PageLocQA</h3>
                <p>Developed question-answering tools for scientific documentation using retrieval-augmented generation (RAG), including the MODTRAN user manual.</p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-sm">
                  <li>Introduced PageLocQA, a lightweight, modular framework for page-level source attribution in long-document question answering.</li>
                  <li>Combined manual tool routing with structured prompting to generate answers with page-level evidence.</li>
                  <li>Published at ICMLA 2025. <ExternalLink href="https://doi.org/10.1109/ICMLA66185.2025.00075">Read the PageLocQA paper</ExternalLink></li>
                  <li>The MODTRAN chatbot work also appeared as a short paper at IEEE SoutheastCon 2025. <ExternalLink href="https://ieeexplore.ieee.org/document/10971575">Read the MODTRAN paper</ExternalLink></li>
                </ul>
                <div className="mt-5"><ProjectImage src="images/scillm.gif" alt="Scientific documentation chatbot demonstration" caption="Scientific chatbot demo" compact /></div>
              </article>

              <article className={cardClass} data-aos="fade-up">
                <h3 className="mb-2 text-xl font-semibold">Posture Detection Android App</h3>
                <p>Developed real-time posture classification using smartphone sensors to assist healthcare workers in community clinics.</p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-sm">
                  <li>Compared traditional machine learning and deep learning models.</li>
                  <li>Evaluated accuracy, latency, and memory use for resource-constrained deployment.</li>
                  <li>Trained models in Python and deployed them through Android Studio.</li>
                  <li>Published at IEEE SoutheastCon 2025. <ExternalLink href="https://ieeexplore.ieee.org/document/10971620">Read the paper</ExternalLink></li>
                </ul>
                <div className="mt-5"><ProjectImage src="images/postureApp.gif" alt="Android posture classification app demonstration" caption="Posture classification app" compact /></div>
              </article>

              <article className={cardClass} data-aos="fade-up">
                <h3 className="mb-2 text-xl font-semibold">Indoor Mobility Tracking with Sparse Bluetooth RSSI</h3>
                <p>Investigated mobility-path reconstruction from sparse Bluetooth RSSI measurements collected through mobile apps in community healthcare settings.</p>
                <ul className="ml-6 mt-3 list-disc space-y-2 text-sm">
                  <li>Handled missing RSSI measurements through imputation, including a nearest-neighbor approach.</li>
                  <li>Used Python to investigate room-to-room movement and reconstructed indoor paths.</li>
                  <li>Published at ICCSPA 2026. <ExternalLink href="https://doi.org/10.1109/ICCSPA69228.2026.11600847">Read the paper</ExternalLink></li>
                </ul>
                <div className="mt-5"><ProjectImage src="images/download.png" alt="Indoor mobility paths reconstructed from Bluetooth RSSI data" caption="Bluetooth RSSI mobility tracking" compact /></div>
              </article>
              
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
