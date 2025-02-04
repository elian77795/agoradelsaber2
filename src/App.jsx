import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Coffee, BookOpen, Users } from "lucide-react";

const AgoraDelSaber = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Ágora del Saber</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">Sobre Nosotros</a>
            <a href="#services" className="hover:underline">Servicios</a>
            <a href="#contact" className="hover:underline">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Un espacio para aprender, trabajar y disfrutar</h2>
          <p className="text-lg mb-6">
            Bienvenidos a Ágora del Saber, la biblioteca y cafetería de Sabadell donde puedes estudiar, 
            trabajar, socializar y disfrutar de miles de libros en formato físico y digital.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">Conócenos</Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Sobre Nosotros</h3>
            <p className="text-lg">
              Ágora del Saber es un espacio diseñado para estudiantes, freelancers y amantes del 
              conocimiento. Ofrecemos una biblioteca moderna, una cafetería acogedora y una 
              suscripción digital para acceder a miles de libros desde nuestra app.
            </p>
          </div>
          <img 
            src="https://source.unsplash.com/600x400/?library,cafe"
            alt="Biblioteca"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-200 py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Nuestros Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="text-center">
                <BookOpen size={48} className="mx-auto text-blue-600 mb-4" />
                <h4 className="text-xl font-bold">Acceso a Libros</h4>
                <p className="text-gray-700">
                  Miles de libros en formato físico y digital disponibles para ti.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center">
                <Coffee size={48} className="mx-auto text-blue-600 mb-4" />
                <h4 className="text-xl font-bold">Cafetería</h4>
                <p className="text-gray-700">
                  Disfruta de un buen café mientras trabajas o estudias en un ambiente tranquilo.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center">
                <Users size={48} className="mx-auto text-blue-600 mb-4" />
                <h4 className="text-xl font-bold">Espacios para Coworking</h4>
                <p className="text-gray-700">
                  Salas cómodas y equipadas para trabajar solo o en equipo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Contáctanos</h3>
          <p className="text-lg mb-6">
            ¿Tienes preguntas o quieres visitarnos? Escríbenos o pasa por nuestra biblioteca en Sabadell.
          </p>
          <form className="max-w-lg mx-auto space-y-4">
            <Input placeholder="Tu nombre" className="w-full" />
            <Input placeholder="Tu correo electrónico" className="w-full" />
            <textarea
              placeholder="Tu mensaje"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="4"
            ></textarea>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2025 Ágora del Saber. Todos los derechos reservados. Sabadell, España.</p>
        </div>
      </footer>
    </div>
  );
};

export default AgoraDelSaber;