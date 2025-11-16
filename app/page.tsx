'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center text-center px-6 relative overflow-hidden font-sans">

      {/* Subtle background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,40,255,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(180,50,255,0.12),transparent_60%)]"></div>

      {/* Soft spotlight */}
      <div className="absolute top-0 left-0 right-0 mx-auto w-96 h-96 rounded-full blur-3xl bg-white/5"></div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight animate-logo">
        <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          S W E A P
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl max-w-2xl text-gray-300 mb-10 animate-slideUp leading-relaxed">
        We're crafting an ecommerce experience that feels human — designed with care, speed, and trust at its core. No noise. No clutter. Just pure shopping bliss.
      </p>

      {/* Notify Button */}
      <button className="px-10 py-4 rounded-xl text-lg font-medium bg-white text-black hover:bg-gray-200 transition shadow-lg animate-fadeInSlow">
        Get Notified
      </button>

      {/* Footer */}
      <p className="absolute bottom-8 text-gray-600 text-sm animate-fadeInSlow">
        © 2025 Sweap • We're almost ready
      </p>

      {/* Custom Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
        .animate-fadeInSlow {
          animation: fadeIn 2s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 1.4s ease-out forwards;
        }
        .animate-logo {
          animation: logoWave 3.2s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes logoWave {
          0% { letter-spacing: 0px; opacity: 0.4; }
          50% { letter-spacing: 8px; opacity: 1; }
          100% { letter-spacing: 0px; opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
