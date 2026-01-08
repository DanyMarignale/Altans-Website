import { Users, Briefcase, FileText, UserCheck, Shield, Landmark, Scale } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';



export function DroitSocial() {
  const services = [
    {
      icon: Users,
      title: 'Représentation des CSE',
      description: 'Assistance et conseil aux Comités Sociaux et Économiques dans l\'exercice de leurs missions. Nous accompagnons les élus dans la défense des intérêts des salariés et la négociation avec la direction.'
    },
    {
      icon: UserCheck,
      title: 'Défense des salariés',
      description: 'Protection et représentation des salariés dans tous leurs litiges individuels : licenciements abusifs, discrimination, harcèlement, rupture conventionnelle, contentieux prud\'homal.'
    },
    {
      icon: FileText,
      title: 'Relations collectives de travail',
      description: 'Négociation et rédaction d\'accords collectifs, gestion des conflits collectifs, accompagnement des projets de réorganisation (PSE, plans de départ volontaire), expertise CHSCT.'
    },
    {
      icon: Landmark,
      title: 'Relations individuelles de travail',
      description: 'Conseil en matière de contrats de travail, statuts des cadres et dirigeants, ruptures amiables, transaction, contentieux relatifs aux conditions de travail et à la rémunération.'
    },
    {
      icon: Shield,
      title: 'Protection des représentants du personnel',
      description: 'Défense des salariés protégés, contestation des autorisations de licenciement, recours devant l\'inspection du travail et les juridictions administratives.'
    },
    {
      icon: Scale,
      title: 'Contentieux prud\'homal',
      description: 'Représentation devant les Conseils de Prud\'hommes et Cours d\'appel pour tous litiges liés à l\'exécution ou la rupture du contrat de travail.'
    }
  ];

  return (
    <section id="droit-social" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Droit Social & Droit du Travail
          </h2>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto">
            Nous défendons les intérêts des CSE et des salariés dans l'ensemble de leurs relations collectives et individuelles de travail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl text-primary mb-6 text-center"
          >
            Notre engagement en Droit Social
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none text-foreground"
          >
            <p className="mb-4">
              Nous mettons notre expertise au service des représentants du personnel et des salariés pour garantir le respect de leurs droits fondamentaux. Notre connaissance approfondie du droit social nous permet d'intervenir à tous les stades :
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-4">
              <li>Conseil préventif et stratégique</li>
              <li>Négociation d'accords collectifs</li>
              <li>Médiation et résolution amiable</li>
              <li>Contentieux devant toutes les juridictions</li>
              <li>Assistance lors des inspections du travail</li>
              <li>Formation des représentants du personnel</li>
            </ul>
            <p>
              Notre approche privilégie l'écoute, la réactivité et une défense rigoureuse adaptée aux enjeux de chaque situation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



function ServiceCard({ service, index }: { service: any, index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-80 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        {/* Front face */}
        <div 
          className="absolute w-full h-full bg-primary rounded-xl shadow-lg flex flex-col items-center justify-center p-8"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <service.icon className="w-20 h-20 text-white mb-6" />
          <h3 className="text-2xl text-white text-center">
            {service.title}
          </h3>
        </div>

        {/* Back face */}
        <div 
          className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center p-8 border border-border overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Icône en filigrane */}
          <service.icon className="absolute w-48 h-48 text-gray-300 opacity-50" style={{ zIndex: 0 }} />
          
          {/* Texte par-dessus */}
          <p className="text-lg text-primary font-bold leading-relaxed text-center relative" style={{ zIndex: 1 }}>
            {service.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

