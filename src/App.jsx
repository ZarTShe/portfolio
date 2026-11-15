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
        src: "images/bed_exit.png",
        alt: "mmWave radar and camera setup for the bed-exit detection project",
        caption: "Sensing setup",
      },
      {
        src: "images/bed-exit-results.png",
        alt: "Direction-feature visualization or evaluation results for bed-exit detection",
        caption: "Feature visualization and results",
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
        src: "images/edgedefenseshield-pipeline.png",
        alt: "EdgeDefenseShield evaluation pipeline comparing DNN and SNN approaches",
        caption: "Evaluation pipeline",
      },
      {
        src: "images/edgedefenseshield-jetson.png",
        alt: "Jetson Orin Nano setup or on-device benchmarking results",
        caption: "Edge hardware and benchmarking",
      },
    ],
  },
];

function ProjectImage({ src, alt, caption, compact = false }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  return (
    <figure className="min-w-0">
      <div
        className={`flex items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 ${
          compact ? "mx-auto w-full max-w-xs" : "aspect-[16/10] w-full"
        }`}
      >
        {src && !failed ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className={
              compact
                ? "max-h-80 w-full object-contain"
                : "h-full w-full object-contain"
            }
          />
        ) : (
          <div className="flex min-h-48 flex-col items-center justify-center gap-2 p-6 text-center text-gray-500">
