import { motion } from 'motion/react';



export function Hero() {
  return (
    <section id="accueil" className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 min-h-[600px] md:min-h-[700px]">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1662169847892-565cce8f901c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGdhbWUlMjBzdHJhdGVneXxlbnwxfHx8fDE3Njc4Njc3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Jeu d'échecs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#004172]/90"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-start text-left">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl text-white/90 mb-6 max-w-3xl"
          >
            Cabinet d'Avocats au Barreau de Paris
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl text-white/80 max-w-2xl"
          >
            Droit social • Droit des Affaires
          </motion.p>
        </div>
      </div>
    </section>
  );
}

