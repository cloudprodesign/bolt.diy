import { json, type MetaFunction } from '@remix-run/cloudflare';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { Header } from '~/components/header/Header';
import BackgroundRays from '~/components/ui/BackgroundRays';

export const meta: MetaFunction = () => {
  return [
    { title: 'AI Website Builder - NeuralTech AI' }, 
    { name: 'description', content: 'Create websites instantly with our AI-powered website builder. Chat with our AI to build, modify, and deploy websites in real-time.' }
  ];
};

export const loader = () => json({});

export default function AIWebsiteBuilder() {
  return (
    <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1">
      <BackgroundRays />
      
      {/* Custom header for the AI Website Builder */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/index.html" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 16h16v8H12z" fill="currentColor"/>
                  <circle cx="16" cy="20" r="2" fill="white"/>
                  <circle cx="24" cy="20" r="2" fill="white"/>
                </svg>
                <span className="text-lg font-semibold">NeuralTech AI</span>
              </a>
              <div className="h-6 w-px bg-white/30"></div>
              <h1 className="text-xl font-bold">AI Website Builder</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm opacity-90">Powered by Advanced AI</span>
              <a 
                href="/index.html" 
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-sm font-medium"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* AI Builder Instructions */}
      <div className="bg-gradient-to-b from-blue-50 to-white border-b p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Create Websites with AI - Just Tell Us What You Want!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI can build complete websites, web applications, and interactive experiences. 
              Simply describe what you want to create, and watch as our AI builds it in real-time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">Instant Creation</h3>
              </div>
              <p className="text-sm text-gray-600">Watch your website come to life as you chat with our AI</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">Full Stack</h3>
              </div>
              <p className="text-sm text-gray-600">Frontend, backend, databases - we handle it all</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">Responsive</h3>
              </div>
              <p className="text-sm text-gray-600">Mobile-first design that works on all devices</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Try these example prompts:</h4>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <div className="text-blue-700">"Create a modern portfolio website for a photographer"</div>
              <div className="text-blue-700">"Build an e-commerce store for handmade jewelry"</div>
              <div className="text-blue-700">"Make a restaurant website with online ordering"</div>
              <div className="text-blue-700">"Create a SaaS landing page with pricing tiers"</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="flex-1">
        <Header />
        <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
      </div>
    </div>
  );
}