import { Rocket, TrendingUp, Users2, Landmark, Award, Building2, Gavel } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';



export function DroitAffaires() {
  const services = [
    {
      icon: Rocket,
      title: 'Création d\'entreprise',
      description: 'Accompagnement juridique complet dans la création de votre société : choix de la forme juridique, rédaction des statuts, formalités d\'immatriculation, pactes d\'associés.'
    },
    {
      icon: TrendingUp,
      title: 'Développement et croissance',
      description: 'Conseil stratégique pour accompagner votre développement : modification statutaire, transformation de société, augmentation de capital, restructuration juridique.'
    },
    {
      icon: Users2,
      title: 'Arrivée de nouveaux associés',
      description: 'Sécurisation de l\'entrée de nouveaux partenaires au capital : négociation et rédaction de pactes d\'associés, protocoles d\'investissement, clauses de protection.'
    },
    {
      icon: Landmark,
      title: 'Levées de fonds et capitaux',
      description: 'Assistance dans vos opérations de financement : levées de fonds, investissements en capital, négociation avec les investisseurs, documentation juridique complète.'
    },
    {
      icon: Building2,
      title: 'Opérations de haut de bilan',
      description: 'Expertise en opérations complexes : émissions d\'actions, BSA, BSPCE, obligations convertibles, réorganisations capitalistiques, LBO, MBO.'
    },
    {
      icon: Award,
      title: 'Rapprochements et cessions',
      description: 'Conseil en fusions-acquisitions : due diligence juridique, négociation de promesses et protocoles d\'accord, garanties d\'actif et de passif, transmission d\'entreprises.'
    },
    {
      icon: Gavel,
      title: 'Droit pénal des affaires',
      description: 'Défense et conseil en matière pénale économique et financière : abus de biens sociaux, infractions fiscales, corruption, blanchiment, responsabilité des dirigeants, procédures devant les juridictions pénales.'
    }
  ];

  return (
    <section id="droit-affaires" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001F54] mb-4 font-bold">
            Droit des Affaires
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Nous accompagnons les entreprises de la création à la croissance, dans toutes leurs opérations stratégiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#001F54]/5 border border-[#001F54]/20 rounded-xl p-8"
          >
            <h3 className="text-2xl text-[#001F54] mb-4 font-bold">
              Propriété intellectuelle
            </h3>
            <p className="text-gray-900 leading-relaxed mb-4">
              Nous protégeons vos actifs immatériels essentiels à votre développement commercial :
            </p>
            <ul className="space-y-2 text-gray-900">
              <li className="flex items-start gap-2">
                <span className="text-[#001F54] mt-1">•</span>
                <span>Dépôt et gestion de marques françaises et internationales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#001F54] mt-1">•</span>
                <span>Recherches d'antériorité et conseil en stratégie de marque</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#001F54] mt-1">•</span>
                <span>Contrats de licence et cession de droits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#001F54] mt-1">•</span>
                <span>Défense en cas de contrefaçon</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#001F54] mt-1">•</span>
                <span>Protection des noms de domaine et des créations</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#001F54]/5 border border-[#001F54]/20 rounded-xl p-8"
          >
            <h3 className="text-2xl text-[#001F54] mb-4 font-bold">
              Notre approche
            </h3>
            <p className="text-gray-900 leading-relaxed mb-4">
              Nous combinons expertise juridique et vision business pour vous offrir un conseil pragmatique et efficace :
            </p>
            <ul className="space-y-2 text-gray-900">
              <li className="flex items-start gap-2">
                <span className="text-[#001F54] mt-1">•</span>
                <span>Compréhension approfondie de vos enjeux stratégiques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#001F54] mt-1">•</span>
                <span>Solutions juridiques adaptées à votre secteur d'activité</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#001F54] mt-1">•</span>
                <span>Accompagnement personnalisé à chaque étape</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#001F54] mt-1">•</span>
                <span>Réactivité et disponibilité de nos équipes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#001F54] mt-1">•</span>
                <span>Réseau de partenaires experts (financiers, fiscalistes)</span>
              </li>
            </ul>
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
          className="absolute w-full h-full bg-[#001F54] rounded-xl shadow-lg flex flex-col items-center justify-center p-8"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <service.icon className="w-20 h-20 text-white mb-6 stroke-2" strokeWidth={2} />
          <h3 className="text-2xl text-white text-center font-medium">
            {service.title}
          </h3>
        </div>

        {/* Back face */}
        <div 
          className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center p-8 border border-gray-200 overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Icône en filigrane */}
          <service.icon className="absolute w-48 h-48 text-gray-300 opacity-50" style={{ zIndex: 0 }} />
          
          {/* Texte par-dessus */}
          <p className="text-lg text-[#001F54] font-bold leading-relaxed text-center relative" style={{ zIndex: 1 }}>
            {service.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

