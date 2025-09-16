import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Trophy, Users, BookOpen, Wifi, Bug } from "lucide-react";
import GlitchText from "@/components/animations/GlitchText";
import CircuitBoard from "@/components/animations/CircuitBoard";

const Activities = () => {
  const activities = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Workshops & Training",
      description: "Regular hands-on workshops covering penetration testing, digital forensics, malware analysis, and secure coding practices.",
      frequency: "Weekly"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "CTF Competitions",
      description: "Participate in Capture The Flag events, both internal competitions and external university challenges.",
      frequency: "Monthly"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Guest Speakers",
      description: "Industry professionals share insights on cybersecurity careers, emerging threats, and cutting-edge technologies.",
      frequency: "Bi-weekly"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Study Groups",
      description: "Collaborative learning sessions for cybersecurity certifications like CISSP, CEH, and Security+.",
      frequency: "Ongoing"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Network Security Labs",
      description: "Hands-on experience with network monitoring, intrusion detection, and security architecture design.",
      frequency: "Bi-weekly"
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Bug Bounty Programs",
      description: "Learn ethical hacking through coordinated bug bounty hunting and responsible disclosure practices.",
      frequency: "Ongoing"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-cyber-darker relative overflow-hidden">
      <CircuitBoard className="absolute inset-0 opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary"><GlitchText text="Activities" intensity="low" /></span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dive deep into cybersecurity through diverse learning opportunities, 
            competitive challenges, and professional development programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activities.map((activity, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-white">{activity.icon}</div>
                </div>
                <CardTitle className="text-foreground text-lg">{activity.title}</CardTitle>
                <span className="text-primary text-sm font-medium">{activity.frequency}</span>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-card border border-border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-foreground">NUSEC Got Phished!</h4>
              <p className="text-muted-foreground text-sm">Learn what phishing is and how hackers make them!</p>
              <span className="text-primary text-xs">Wednesday, 6:00 PM</span>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-foreground">Industry Speaker Series</h4>
              <p className="text-muted-foreground text-sm">CISO from TechCorp presents</p>
              <span className="text-primary text-xs">Next Tuesday, 7:00 PM</span>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-foreground">Inter-University CTF</h4>
              <p className="text-muted-foreground text-sm">Team registration now open</p>
              <span className="text-primary text-xs">Registration due: Next Monday</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;