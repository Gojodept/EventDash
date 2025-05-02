import React, { useState } from 'react';
import { X, CheckCircle, Newspaper, Lightbulb, Rocket, TrendingUp, Brain } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setEmail('');
    }, 2000);
  };

  if (!isOpen) return null;

  const benefits = [
    {
      icon: <Newspaper className="w-5 h-5 text-blue-600" />,
      title: 'Latest AI News',
      description: 'Big launches, discoveries, company moves'
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-blue-600" />,
      title: 'New AI Tools',
      description: 'Cool apps, websites, free resources to try'
    },
    {
      icon: <Rocket className="w-5 h-5 text-blue-600" />,
      title: 'Quick Learning Bites',
      description: 'Tiny lessons, tutorials, tech explainers'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
      title: 'Future Trends & Predictions',
      description: 'Where AI is heading, bold forecasts'
    },
    {
      icon: <Brain className="w-5 h-5 text-blue-600" />,
      title: 'Ethics & Deep Thoughts',
      description: 'Dilemmas, debates, reflective pieces'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 overflow-hidden animate-slideUp">
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
            alt="AI Newsletter"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Inside Our Free Newsletter</h2>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-2 text-green-600 py-4">
              <CheckCircle className="w-5 h-5" />
              <span>Successfully subscribed!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe to Newsletter
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;