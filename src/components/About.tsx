import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Heart } from "lucide-react";
import ScanLine from "@/components/animations/ScanLine";
import BinaryStream from "@/components/animations/BinaryStream";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      <BinaryStream className="absolute inset-0" speed={100} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">NUSEC</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Northeastern Security Club (NUSEC) is a student-led organization
            dedicated to fostering a cybersecurity community & awareness at
            Northeastern University. We bring together passionate students to
            explore the fascinating world of information security while
            providing opportunities for students. We focus on professional
            development, technical workshops, and community events.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-card border-border transition-all relative overflow-hidden hover:scale-105">
            <ScanLine className="absolute inset-0" duration={4000} />
            <CardHeader className="text-center relative z-10">
              <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-foreground">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                To create a collaborative environment where students can learn,
                practice, and excel in cybersecurity while building a strong
                professional network.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border transition-all relative overflow-hidden hover:scale-105">
            <ScanLine className="absolute inset-0" duration={5000} />
            <CardHeader className="text-center relative z-10">
              <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-foreground">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                To be the premier cybersecurity community on campus, producing
                skilled professionals who will shape the future of digital
                security.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border transition-all relative overflow-hidden hover:scale-105">
            <ScanLine className="absolute inset-0" duration={3500} />
            <CardHeader className="text-center relative z-10">
              <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-foreground">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Integrity, collaboration, continuous learning, and ethical
                hacking practices guide everything we do as a community.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
            What Makes Us Different?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">
                Hands-on Learning
              </h4>
              <p className="text-muted-foreground">
                We believe in learning by doing. Our workshops and challenges
                provide real-world experience with the latest security tools and
                techniques.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">
                Industry Connections
              </h4>
              <p className="text-muted-foreground">
                Regular guest speakers from top cybersecurity firms provide
                insights into career paths and industry trends.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">
                Opportunities
              </h4>
              <p className="text-muted-foreground">
                Connect and participate with competitve Capture The Flag (CTF)
                competitions, apply and join a cybersecurity scholarship, lead
                your team in a cybersecurity project, or practice your public
                speaking and leadership in your own workshop for the club.
                Whatever you need, we can guide you to cyber opportunities that
                will benefit your future.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">
                Mentorship Program (Upcoming)
              </h4>
              <p className="text-muted-foreground">
                Connect with experienced members and alumni who provide guidance
                for your cybersecurity journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
