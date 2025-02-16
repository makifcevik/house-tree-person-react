import { icon } from "@fortawesome/fontawesome-svg-core";

export const herosText =
  "Some text will be put here to briefly talk about the project and maybe describe some aspects of it. Vision of the project can be stated here.";

export const welcomePanelText = {
  header: "Welcome to HTP!",
  features: [
    {
      header: "Image Classification",
      text: "The AI model is trained on pairs of HTP drawings with a comprehensive data detailing various classifications.",
    },
    {
      header: "General Classification",
      text: "Pressure, interrupted lines, chaotic lines, curved lines, size, location, detail, duplicated figures, disproportionate figures, repeatedly erased figures, rotated figures, shaded figures.",
    },
    {
      header: "Specific Classifications",
      text: "Sketches have specific attributes depending on their classifications: House, Person and Tree.",
    },
  ],
};

export const ProblemSectionText = {
  header: "The Challenge in Modern Psychology",
  oneLiner:
    "Professionals face increasing challenges in handling complex cases, analyzing data, and making accurate assessments.",
  problems: [
    {
      icon: "📊",
      header: "Data Overload",
      text: "Manually analyzing large volumes of patient data is time-consuming.",
    },
    {
      icon: "🧠",
      header: "Subjectivity in Diagnosis",
      text: "Psychological assessments depend heavily on individual interpretation.",
    },
    {
      icon: "🕒",
      header: "Time Constraints",
      text: "Experts struggle to dedicate enough time to each case due to high demand.",
    },
    {
      icon: "🔍",
      header: "Lack of AI-Assisted Insights",
      text: "Current tools do not provide deep, data-driven analysis.",
    },
  ],
};

export const SolutionSectionText = {
  header: "✨ The Future of Psychological Expertise ✨",
  intro:
    "What if psychology experts had an intelligent assistant that helps analyze patterns, reduce workload, and provide data-driven insights? That’s exactly what our AI model does!",
  benefits: [
    {
      icon: "🚀",
      header: "Smart Data Analysis",
      text: "Our AI processes large amounts of psychological data in seconds.",
    },
    {
      icon: "🧠",
      header: "Objective Insights",
      text: "Reduce human bias with AI-supported evaluations.",
    },
    {
      icon: "⏳",
      header: "Time Efficiency",
      text: "Spend more time on patients, less on manual work.",
    },
    {
      icon: "📊",
      header: "Predictive Capabilities",
      text: "Get trend predictions for better decision-making.",
    },
  ],
  solutionActions: [
    {
      header: "Upload Data",
      text: "Securely input patient records or test results.",
    },
    {
      header: "AI Analysis",
      text: "The model scans patterns and provides structured insights.",
    },
    {
      header: "Expert Review",
      text: "Psychologists refine and validate AI-generated insights.",
    },
    {
      header: "Final Decision",
      text: "Combined AI + human expertise leads to better outcomes.",
    },
  ],
  CTA: "Want to see how it works?",
};
