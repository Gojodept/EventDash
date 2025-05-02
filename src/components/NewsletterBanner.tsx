import React from 'react';
import { Newspaper } from 'lucide-react';

interface NewsletterBannerProps {
  onSubscribe: () => void;
}

const NewsletterBanner: React.FC<NewsletterBannerProps> = ({ onSubscribe }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Newspaper className="w-5 h-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
          <p className="text-sm text-gray-600 mb-4">Get weekly insights on AI safety, emerging trends, and critical updates.</p>
          <button
            onClick={onSubscribe}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsletterBanner;