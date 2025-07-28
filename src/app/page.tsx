'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink, Mail, MapPin, Play, Linkedin, ArrowDown } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

export default function Portfolio() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const { personal, social, projects } = portfolioData;

  // Sort projects with featured ones first
  const sortedProjects = projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        
        {/* Floating orbs - Blue and Gold theme */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/60 rounded-full mix-blend-normal opacity-70 filter blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-400/60 rounded-full mix-blend-normal opacity-70 filter blur-xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-200 border-gray-700">
              Available for Relocation
            </Badge>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {personal.name}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {personal.title}
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {personal.bio}
            </motion.p>

            <motion.div 
              className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <MapPin className="w-4 h-4" />
              {personal.location}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button 
                onClick={scrollToProjects}
                size="lg" 
                className="bg-blue-600 text-white border-0 font-semibold transition-all duration-300 cursor-pointer hover:!bg-yellow-400 hover:!text-gray-900"
                style={{
                  background: 'rgb(37 99 235)', // blue-600
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgb(250 204 21)'; // yellow-400
                  e.currentTarget.style.color = 'rgb(17 24 39)'; // gray-900
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgb(37 99 235)'; // blue-600
                  e.currentTarget.style.color = 'white';
                }}
              >
                View My Work
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              
              <div className="flex items-center gap-3">
                {social.github && (
                  <Button variant="outline" size="icon" className="border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 transition-all" asChild>
                    <a href={social.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                {social.linkedin && (
                  <Button variant="outline" size="icon" className="border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 transition-all" asChild>
                    <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                )}
                <Button variant="outline" size="icon" className="border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-yellow-400 text-gray-300 hover:text-yellow-400 transition-all" asChild>
                  <a href={`mailto:${personal.email}`}>
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A collection of projects that showcase my skills in full-stack development, 
              problem-solving, and creating user-centered solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border-gray-700 bg-gray-800 hover:border-blue-500/50">
                  {/* Video Section */}
                  <div className="relative aspect-video bg-gray-700 overflow-hidden">
                    <video
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      poster={project.video.poster}
                      controls={playingVideo === project.id}
                      onPlay={() => setPlayingVideo(project.id)}
                      onPause={() => setPlayingVideo(null)}
                      onEnded={() => setPlayingVideo(null)}
                      preload="metadata"
                    >
                      <source src={project.video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Play button overlay */}
                    {playingVideo !== project.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button
                          className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-90 rounded-full text-gray-800 hover:bg-opacity-100 transition-all duration-200 hover:scale-110"
                          onClick={(e) => {
                            const video = e.currentTarget.closest('.relative')?.querySelector('video') as HTMLVideoElement;
                            if (video) {
                              video.play();
                              setPlayingVideo(project.id);
                            }
                          }}
                        >
                          <Play className="w-6 h-6 ml-1" />
                        </button>
                      </div>
                    )}

                    {/* Category badge */}
                    <Badge variant="secondary" className="absolute top-4 right-4 bg-gray-700 text-gray-300">
                      {project.category}
                    </Badge>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="text-sm text-gray-400">
                        {project.completedDate}
                      </div>
                    </div>
                    <CardDescription className="text-gray-300 font-medium">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-xs bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600 hover:border-blue-500 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button asChild className="flex-1 min-w-[120px] bg-gray-700 hover:bg-blue-600 text-white border-0 transition-colors">
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      
                      {project.links.live && (
                        <Button asChild variant="outline" className="flex-1 min-w-[120px] border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-yellow-400 text-gray-300 hover:text-yellow-400 transition-all">
                          <a 
                            href={project.links.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      
                      {project.links.demo && !project.links.live && (
                        <Button asChild variant="outline" className="flex-1 min-w-[120px] border-gray-600 bg-gray-800 hover:bg-gray-700 hover:border-yellow-400 text-gray-300 hover:text-yellow-400 transition-all">
                          <a 
                            href={project.links.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-300 mb-4">
              Interested in working together?
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-blue-600 text-white border-0 font-semibold transition-all duration-300 cursor-pointer hover:!bg-yellow-400 hover:!text-gray-900"
              style={{
                background: 'rgb(37 99 235)', // blue-600
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgb(250 204 21)'; // yellow-400
                e.currentTarget.style.color = 'rgb(17 24 39)'; // gray-900
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgb(37 99 235)'; // blue-600
                e.currentTarget.style.color = 'white';
              }}
            >
              <a href={`mailto:${personal.email}`}>
                Get In Touch
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
