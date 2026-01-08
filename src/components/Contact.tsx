import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';



export function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer le corps de l'email avec les informations du formulaire
    const emailBody = `
Nom: ${formData.nom}
Email: ${formData.email}
Téléphone: ${formData.telephone || 'Non renseigné'}
Domaine concerné: ${formData.sujet}



Message:

${formData.message}
    `.trim();
    
    // Créer le lien mailto
    const mailtoLink = `mailto:dm@altans.fr?subject=${encodeURIComponent('Demande de contact - ' + formData.sujet)}&body=${encodeURIComponent(emailBody)}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    // Réinitialiser le formulaire
    setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001F54] mb-4 font-bold">
            Contactez-nous
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Prenez rendez-vous pour échanger sur votre situation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm p-8 border border-gray-200"
          >
            <h3 className="text-2xl text-gray-900 mb-6">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nom" className="block mb-2 text-gray-900">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001F54]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-900">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001F54]"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block mb-2 text-gray-900">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001F54]"
                />
              </div>

              <div>
                <label htmlFor="sujet" className="block mb-2 text-gray-900">
                  Domaine concerné *
                </label>
                <select
                  id="sujet"
                  name="sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001F54]"
                >
                  <option value="">Sélectionnez un domaine</option>
                  <option value="droit-social">Droit Social & Droit du Travail</option>
                  <option value="droit-affaires">Droit des Affaires</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-900">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001F54] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#001F54] text-white px-6 py-4 rounded-lg hover:bg-[#001433] transition-colors flex items-center justify-center gap-2 font-medium"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </motion.div>

          {/* Informations de contact */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl text-gray-900 mb-6">
                Coordonnées
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#001F54]/5 rounded-lg">
                    <Mail className="w-6 h-6 text-[#001F54]" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1 text-sm">Email</p>
                    <a href="mailto:dm@altans.fr" className="text-gray-900 hover:text-[#001F54] transition-colors">
                      dm@altans.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#001F54]/5 rounded-lg">
                    <Phone className="w-6 h-6 text-[#001F54]" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1 text-sm">Téléphone</p>
                    <a href="tel:+33622264965" className="text-gray-900 hover:text-[#001F54] transition-colors">
                      06.22.26.49.65
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#001F54]/5 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#001F54]" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1 text-sm">Adresse</p>
                    <p className="text-gray-900">
                      5 Avenue de l'Opéra<br />
                      75001 Paris<br />
                      France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#001F54]/5 border border-[#001F54]/20 rounded-xl p-8">
              <h3 className="text-xl text-[#001F54] mb-4">
                Horaires d'ouverture
              </h3>
              <div className="space-y-2 text-gray-900">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>9h00 - 19h00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Samedi - Dimanche</span>
                  <span>Sur rendez-vous</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <p className="text-gray-600 italic">
                "Notre cabinet s'engage à vous répondre dans les 24 heures et à vous proposer un premier rendez-vous dans les meilleurs délais."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

