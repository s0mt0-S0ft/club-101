// Club 101 Interactive Website with Gothic Font
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-gothic">
      {/* Header */}
      <header className="text-center py-10">
        <motion.h1
          className="text-6xl font-bold glitch"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          1<span className="text-gray-400">0</span>1
        </motion.h1>
        <p className="mt-4 text-lg text-gray-400">Welcome to Club 101 – Style. Identity. Edge.</p>
      </header>

      {/* Shop Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {['Hoodie', 'T-Shirt', 'Cap'].map((item, index) => (
          <Card key={index} className="bg-zinc-900 rounded-2xl shadow-xl">
            <CardContent className="p-4">
              <div className="h-48 bg-zinc-800 mb-4 rounded-xl flex items-center justify-center">
                <span className="text-xl">{item} Image</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{item} Club 101</h2>
              <p className="text-sm text-gray-400 mb-4">Premium quality {item.toLowerCase()} with Club 101 branding.</p>
              <Button className="w-full bg-white text-black hover:bg-gray-300 font-gothic">
                <ShoppingCart className="mr-2 w-4 h-4" /> Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Contact Section */}
      <section className="text-center py-10 bg-zinc-950">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-400 mb-6">Have questions or custom orders?</p>
        <Button className="bg-white text-black hover:bg-gray-300 font-gothic">
          <Mail className="mr-2 w-4 h-4" /> Reach Out
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm font-gothic">
        © 2025 Club 101. All rights reserved.
      </footer>

      {/* Glitch Effect CSS */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap');

        .font-gothic {
          font-family: 'UnifrakturCook', cursive;
        }

        .glitch {
          position: relative;
          color: white;
          font-family: 'UnifrakturCook', cursive;
        }
        .glitch::before, .glitch::after {
          content: '101';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          color: white;
          clip: rect(0, 900px, 0, 0);
        }
        .glitch::before {
          animation: glitchTop 1s infinite linear alternate-reverse;
          color: gray;
        }
        .glitch::after {
          animation: glitchBottom 1s infinite linear alternate-reverse;
          color: darkgray;
        }
        @keyframes glitchTop {
          0% { clip: rect(0, 9999px, 0, 0); }
          10% { clip: rect(0, 9999px, 25px, 0); }
          20% { clip: rect(0, 9999px, 5px, 0); }
          30% { clip: rect(0, 9999px, 30px, 0); }
        }
        @keyframes glitchBottom {
          0% { clip: rect(30px, 9999px, 60px, 0); }
          10% { clip: rect(20px, 9999px, 50px, 0); }
          20% { clip: rect(40px, 9999px, 70px, 0); }
        }
      `}</style>
    </div>
  );
}