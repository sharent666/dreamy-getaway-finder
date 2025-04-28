
import React from "react";
import { Globe } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-base font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Help Center</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">AirCover</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Safety information</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Supporting people with disabilities</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Cancellation options</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Community</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Dreamy.org: disaster relief housing</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Combating discrimination</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Celebrating diversity</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Try hosting</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">DreamyCover for Hosts</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Explore hosting resources</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Visit our community forum</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">How to host responsibly</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Dreamy</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Newsroom</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Learn about new features</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Letter from our founders</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Investors</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Dreamy, Inc.
            </div>
            <div className="hidden md:flex md:items-center">
              <span className="text-gray-300 mx-2">·</span>
              <a href="#" className="text-sm text-gray-600 hover:underline">Privacy</a>
              <span className="text-gray-300 mx-2">·</span>
              <a href="#" className="text-sm text-gray-600 hover:underline">Terms</a>
              <span className="text-gray-300 mx-2">·</span>
              <a href="#" className="text-sm text-gray-600 hover:underline">Sitemap</a>
            </div>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <button className="flex items-center text-sm font-medium hover:underline">
              <Globe className="h-5 w-5 mr-2" />
              English (US)
            </button>
            <span className="mx-4 text-gray-600">$</span>
            <button className="text-sm font-medium hover:underline">USD</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
