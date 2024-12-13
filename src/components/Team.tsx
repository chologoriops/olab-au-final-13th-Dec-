import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Bappy Golder',
    role: 'CEO & Founder',
    image: 'https://pbs.twimg.com/profile_images/1659784460232183812/_niU8frS_400x400.jpg',
    bio: 'Leading Operations, UX Design, Product Development & Marketing Ops with a 15+ years experience in tech & Business.',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Pia Marie ',
    role: 'Account Manger',
    image: 'https://media.licdn.com/dms/image/v2/C5603AQGy29f3sZeOaA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1604235036122?e=1737590400&v=beta&t=yHWfMO0omBRD0WHbMqt57IrkEENeLZI8ruz8n-WZ3vg',
    bio: 'Your Result driven & key to detail manager with 5+ years experience.',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Bahauddin Chishte',
    role: 'Operations and Fulfillment Lead',
    image: 'https://avatars.githubusercontent.com/u/91181868?v=4',
    bio: 'Experienced in various filled and flexible to work with Software, Business & Marketing.',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Shahabuddin Chishte',
    role: 'Graphics Design & Operations Coordinator',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQFqhQKVWS34ig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1679032222478?e=1737590400&v=beta&t=afIE--1x43_uht8GbeTh4uUaGt1lL5Zcw2wQIllkkxc',
    bio: 'Graphics Designer with strong experties in office management',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Ashraful Dihan',
    role: 'UX Designer',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQE1j5fML7yFWw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709707650099?e=1737590400&v=beta&t=pfgLB14JhGWzHudRAlYRiH8YESX1P64pdZUjirSQiu8',
    bio: 'Experienced in UI & UX over 2 years',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Jack',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    bio: 'Agile expert with 10+ years in product development',
    social: { linkedin: '#', twitter: '#', github: '#' }
  }
];

export default function Team() {
  return (
    <section className="section-block p-8 md:p-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet our talented team of professionals who make the magic happen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600 group flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="text-white hover:text-[#ff6b00] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-[#ff6b00] transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="text-white hover:text-[#ff6b00] transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-800/50 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-[#ff6b00] font-medium mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}