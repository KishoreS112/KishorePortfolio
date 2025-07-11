import { Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 border-t-4 border-transparent">
      {/* Gradient top border */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500"></div>

      <div className="container mx-auto flex justify-center items-center space-x-10 pt-4">
        <a
          href="https://www.linkedin.com/in/kishore-s-982a59225/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-400 transition"
        >
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
       
        <a
          href="https://github.com/KishoreS112"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-400 transition"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
         <a
          href="https://www.instagram.com/_kr_i_s_h?igsh=MXR0bHUza2kzeXBucA=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-pink-400 transition"
        >
          <Instagram className="w-5 h-5" />
          <span>Instagram</span>
        </a>
      </div>
    </footer>
  );
}
