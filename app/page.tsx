import Image from "next/image";
import { WiDayCloudy, WiRain, WiDaySunny, WiCloudy } from "react-icons/wi";

export default function Home() {
  return (
    <div 
      className="min-h-screen w-full text-white relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <Image
        src="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop"
        alt="Rainy window background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10">
        {/* Logo */}
        <div className="max-w-7xl mx-auto p-4">
          <p className="text-white/80 text-sm mb-8">weather.com</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
          {/* Left Section - Main Temperature */}
          <div className="space-y-2 flex flex-col justify-end">
            <div className="flex items-center gap-4">
              <span className="text-8xl font-light tracking-tighter">23°C</span>
              <WiRain className="text-6xl text-white/90" />
            </div>
            <h1 className="text-3xl font-medium">Watermelon Park</h1>
            <p className="text-white/80 text-sm">10:43 | H:32° L:18°</p>
          </div>

          {/* Right Section - Forecasts */}
          <div className="space-y-6">
            {/* Hourly Forecast Card */}
            <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/5 shadow-2xl">
              <p className="text-sm mb-6">Thunderstorms expected around 00:00</p>
              <div className="grid grid-cols-5 gap-6 text-center">
                {[
                  { time: "Now", temp: "23°", icon: <WiRain className="text-3xl mx-auto" /> },
                  { time: "00", temp: "21°", icon: <WiRain className="text-3xl mx-auto" /> },
                  { time: "01", temp: "20°", icon: <WiRain className="text-3xl mx-auto" /> },
                  { time: "02", temp: "20°", icon: <WiRain className="text-3xl mx-auto" /> },
                  { time: "03", temp: "23°", icon: <WiRain className="text-3xl mx-auto" /> },
                ].map((hour) => (
                  <div key={hour.time} className="space-y-2">
                    <p className="text-sm">{hour.time}</p>
                    {hour.icon}
                    <p className="text-sm">{hour.temp}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5-Day Forecast Card */}
            <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/5 shadow-2xl">
              <p className="text-sm mb-6">5-Day Forecast</p>
              <div className="space-y-6">
                {[
                  { day: "Today", icon: <WiRain className="text-2xl" />, low: "18°", high: "32°", progress: "75%" },
                  { day: "Thu", icon: <WiRain className="text-2xl" />, low: "20°", high: "29°", progress: "60%" },
                  { day: "Fri", icon: <WiCloudy className="text-2xl" />, low: "23°", high: "31°", progress: "70%" },
                  { day: "Sat", icon: <WiDayCloudy className="text-2xl" />, low: "22°", high: "29°", progress: "60%" },
                  { day: "Sun", icon: <WiDayCloudy className="text-2xl" />, low: "23°", high: "33°", progress: "80%" },
                ].map((day) => (
                  <div key={day.day} className="grid grid-cols-[1fr_40px_1fr] items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-12">{day.day}</span>
                      {day.icon}
                    </div>
                    <span className="text-white/60 text-right">{day.low}</span>
                    <div className="flex items-center gap-4">
                      <div className="w-full bg-white/20 rounded-full h-1">
                        <div 
                          className="bg-[#3498db] h-full rounded-full" 
                          style={{ width: day.progress }}
                        />
                      </div>
                      <span>{day.high}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
