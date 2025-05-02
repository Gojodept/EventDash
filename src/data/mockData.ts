import { Incident } from '../types';

export const initialIncidents: Incident[] = [
  {
    id: 1,
    title: "Facial Recognition Wrongly Identifies Suspects",
    description: "A facial recognition system used by law enforcement wrongly identified innocent people as suspects, leading to wrongful arrests. This incident highlighted the critical need for improved accuracy and oversight in AI-powered law enforcement tools.",
    severity: "High",
    reported_at: "2025-04-10T12:00:00Z",
    source: "https://example.com/facial-recognition-incident",
    images: ["https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"],
    upvotes: 156,
    downvotes: 12,
    userVote: null
  },
  {
    id: 2,
    title: "AI Chatbot Gave Harmful Mental Health Advice",
    description: "A mental health support chatbot gave unqualified, risky advice to vulnerable users, raising concerns about AI in sensitive domains. The incident led to immediate system shutdown and reevaluation of AI deployment in healthcare contexts.",
    severity: "Medium",
    reported_at: "2025-04-18T16:45:00Z",
    source: "https://example.com/mental-health-chatbot-incident",
    images: ["https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg"],
    upvotes: 234,
    downvotes: 18,
    userVote: null
  },
  {
    id: 3,
    title: "Amazon's AI Recruiting Bias",
    description: "Amazon developed an AI recruiting tool that discriminated against women because it was trained on 10 years of resumes submitted to the company — and most were from men. Amazon had to scrap the project because it reinforced gender bias instead of eliminating it.",
    severity: "High",
    reported_at: "2018-10-10T10:00:00Z",
    source: "https://example.com/amazon-ai-bias",
    images: ["https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg"],
    upvotes: 245,
    downvotes: 12,
    userVote: null
  },
  {
    id: 4,
    title: "Tesla's Autopilot Fatal Accidents",
    description: "Tesla's Autopilot feature was involved in several accidents, some fatal, because drivers trusted it too much or because the system misread road conditions. This sparked huge debates around AI in self-driving cars and how much autonomy is too much.",
    severity: "High",
    reported_at: "2020-05-15T14:30:00Z",
    source: "https://example.com/tesla-autopilot",
    images: ["https://images.pexels.com/photos/8386429/pexels-photo-8386429.jpeg"],
    upvotes: 189,
    downvotes: 15,
    userVote: null
  },
  {
    id: 5,
    title: "Microsoft Tay Bot Controversy",
    description: "Microsoft launched 'Tay,' a Twitter chatbot designed to learn from users. Within 24 hours, Tay started tweeting racist, sexist, and offensive remarks because people fed it toxic inputs. The project was shut down immediately and became a textbook example of AI vulnerability to manipulation.",
    severity: "High",
    reported_at: "2016-03-24T09:15:00Z",
    source: "https://example.com/microsoft-tay",
    images: ["https://images.pexels.com/photos/8386436/pexels-photo-8386436.jpeg"],
    upvotes: 167,
    downvotes: 8,
    userVote: null
  },
  {
    id: 6,
    title: "GPT-3 and Hallucinated Content",
    description: "OpenAI's GPT-3 sometimes makes up fake facts — known as AI hallucinations. This has raised concerns about AI reliability in real-world applications like journalism, healthcare, and customer support.",
    severity: "Medium",
    reported_at: "2020-07-20T11:20:00Z",
    source: "https://example.com/gpt3-hallucinations",
    images: ["https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"],
    upvotes: 145,
    downvotes: 18,
    userVote: null
  },
  {
    id: 7,
    title: "Clearview AI Privacy Violations",
    description: "Clearview AI scraped billions of images from the internet to build a massive facial recognition database without consent. This led to multiple lawsuits for privacy invasion and calls to regulate facial recognition technology.",
    severity: "High",
    reported_at: "2020-01-18T13:45:00Z",
    source: "https://example.com/clearview-privacy",
    images: ["https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg"],
    upvotes: 198,
    downvotes: 22,
    userVote: null
  }
];