import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Heart } from "lucide-react";
import ScanLine from "@/components/animations/ScanLine";
import BinaryStream from "@/components/animations/BinaryStream";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-background relative overflow-hidden"
    >
      <BinaryStream className="absolute inset-0" speed={100} />

      {/* Floating SVG Characters */}
      <div className="absolute top-10 left-10 w-24 h-24 opacity-20 animate-float">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <g transform="scale(0.15)">
            <path
              fill="currentColor"
              className="text-primary"
              d="M60.241,31.112c0,0,0.247,5.712-1.673,7.563c-1.92,1.851-6.027-0.942-5.241-6.839S59.435,28.074,60.241,31.112z"
            />
            <path
              fill="currentColor"
              className="text-primary"
              d="M79.069,51.329c-0.396-0.307-1.933,0.562-3.042,0.925c-0.631,0.207-1.909,0.263-2.893,0.273c-0.031,0.542-0.105,1.079-0.22,1.607c0.697,0.031,1.24,0.161,1.751,0.122c0.558-0.042,1.566-0.179,1.956-0.251c0.366-0.068,0.973-0.083,1.242,0.141c1.235,1.028,1.926,1.1,2.091,0.731c0.026-0.058-0.969-0.94-1.297-1.295c0.542,0.488,1.872,1.458,2.152,1.154c0.211-0.229-1.032-1.361-1.556-1.82c0.555,0.478,1.981,1.667,2.326,1.57C82.521,54.221,79.465,51.636,79.069,51.329z"
            />
          </g>
        </svg>
      </div>

      <div
        className="absolute top-40 right-20 w-32 h-32 opacity-15 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <g transform="scale(0.12) translate(300, 100)">
            <rect
              x="370.132"
              y="80.907"
              fill="currentColor"
              className="text-accent"
              width="57.529"
              height="8.447"
            />
            <path
              fill="currentColor"
              className="text-accent"
              d="M429.592,86.685h-61.39c-1.949,0-3.528-1.58-3.528-3.528V44.331c0-1.949,1.58-3.528,3.528-3.528h61.39c1.949,0,3.528,1.58,3.528,3.528v38.826C433.12,85.105,431.54,86.685,429.592,86.685z"
            />
          </g>
        </svg>
      </div>

      <div
        className="absolute bottom-20 left-1/4 w-28 h-28 opacity-10 animate-float"
        style={{ animationDelay: "4s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <g transform="scale(0.13) translate(150, 200)">
            <path
              fill="currentColor"
              className="text-primary"
              d="M390.156,321.525c0,0,0.804,1.201,1.063,2.211c0.258,1.009,0.45,2.1,0.185,2.428c-0.531,0.654-8.846,2.57-9.706,1.997c-0.86-0.573-0.702-1.845,0.961-2.642c1.783-0.855,2.094-0.728,3.177-1.418c1.084-0.69,0.48-1.885,0.48-1.885L390.156,321.525z"
            />
          </g>
        </svg>
      </div>

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
          <Card className="bg-gradient-card border-border hover:border-primary transition-colors relative overflow-hidden group">
            <ScanLine className="absolute inset-0" duration={4000} />

            {/* Small SVG decoration */}
            <div className="absolute top-2 right-2 w-12 h-12 opacity-0 group-hover:opacity-30 transition-opacity">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <g transform="scale(0.08)">
                  <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="currentColor"
                    className="text-primary"
                  />
                  <path
                    fill="#FFB600"
                    d="M407.242,55.548c0,0-2.801,0.85-4.85,2.532c-2.049,1.682-4.012,6.677-4.274,10.125"
                  />
                </g>
              </svg>
            </div>

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

          <Card className="bg-gradient-card border-border hover:border-primary transition-colors relative overflow-hidden group">
            <ScanLine className="absolute inset-0" duration={5000} />

            <div className="absolute top-2 right-2 w-12 h-12 opacity-0 group-hover:opacity-30 transition-opacity">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <g transform="scale(0.15) translate(-80, -100)">
                  <rect
                    x="161.002"
                    y="23.895"
                    fill="currentColor"
                    className="text-accent"
                    width="43.478"
                    height="73.629"
                    rx="1.887"
                  />
                </g>
              </svg>
            </div>

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

          <Card className="bg-gradient-card border-border hover:border-primary transition-colors relative overflow-hidden group">
            <ScanLine className="absolute inset-0" duration={3500} />

            <div className="absolute top-2 right-2 w-12 h-12 opacity-0 group-hover:opacity-30 transition-opacity">
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <g transform="scale(0.1) translate(-150, -200)">
                  <path
                    fill="currentColor"
                    className="text-primary"
                    d="M316.913,356.098c0-4.924-5.194-8.916-11.6-8.916s-11.601,3.992-11.601,8.916"
                  />
                </g>
              </svg>
            </div>

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

        <div className="bg-gradient-card border border-border rounded-lg p-8 relative overflow-hidden">
          {/* Character decoration in bottom corner */}
          <div className="absolute bottom-0 right-0 w-40 h-40 opacity-5">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g transform="scale(0.3) translate(100, 100)">
                <path
                  fill="currentColor"
                  className="text-primary"
                  d="M188.65,54.446c-0.951,3.469-3.947,5.672-6.691,4.919c-2.744-0.752-4.198-4.175-3.247-7.644c0.951-3.469,3.947-5.672,6.691-4.919C188.147,47.555,189.601,50.977,188.65,54.446z"
                />
              </g>
            </svg>
          </div>

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
                Connect and participate with competitive Capture The Flag (CTF)
                competitions, apply and join a cybersecurity scholarship, lead
                your team in a cybersecurity project, or practice your public
                speaking and leadership in your own workshop for the club.
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
