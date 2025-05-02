import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { Incident } from '../types';
import SeverityBadge from './SeverityBadge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

interface IncidentCarouselProps {
  incidents: Incident[];
  onLearnMore: (id: number) => void;
}

const IncidentCarousel: React.FC<IncidentCarouselProps> = ({ incidents, onLearnMore }) => {
  const [swiper, setSwiper] = useState<any>(null);

  const topIncidents = incidents
    .sort((a, b) => new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime())
    .slice(0, 5);

  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        onSwiper={setSwiper}
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="aspect-[21/9] rounded-xl overflow-hidden"
      >
        {topIncidents.map((incident) => (
          <SwiperSlide key={incident.id}>
            <div className="relative w-full h-full">
              <img
                src={incident.images[0]}
                alt={incident.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <SeverityBadge severity={incident.severity} />
                      <span className="text-white/80 text-sm">Latest Update</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">{incident.title}</h2>
                    <p className="text-white/90 text-lg mb-6 line-clamp-2">
                      {incident.description}
                    </p>
                    <button
                      onClick={() => onLearnMore(incident.id)}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiper?.slidePrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default IncidentCarousel;