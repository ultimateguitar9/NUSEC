import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, MessageSquare, MapPin } from "lucide-react";
import TerminalText from "@/components/animations/TerminalText";
import BinaryStream from "@/components/animations/BinaryStream";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative">
      <BinaryStream className="absolute inset-0" speed={150} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join <span className="text-primary">NUSEC</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to develop your cybersecurity journey? Connect with us and
            become part of the most dynamic security community on campus.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Email */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-colors text-center">
            <CardHeader>
              <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-foreground">Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                General inquiries and questions
              </p>
              <a
                href="mailto:nusechusky@gmail.com"
                className="text-primary hover:underline font-medium"
              >
                nusechusky@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* Discord */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-colors text-center">
            <CardHeader>
              <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-foreground">Discord</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Join our active community chat
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a
                  href="https://discord.gg/JkYMdTbuDw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Server
                </a>
              </Button>
            </CardContent>
          </Card>
          {/* Instagram */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-colors text-center">
            <CardHeader>
              <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-foreground">Instagram</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Stay updated on our latest events!
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a
                  href="https://www.instagram.com/nusecurity/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow Us
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="bg-gradient-card border-border hover:border-primary transition-colors text-center">
            <CardHeader>
              <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-foreground">Behrakis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">Room 105</p>
              <span className="text-primary font-medium">
                Northeastern University
              </span>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-foreground text-2xl">
                Ready to Get Started?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                <TerminalText
                  text="No prior experience required! We welcome students from all majors and skill levels. Whether you're a complete beginner or an experienced security enthusiast, there's a place for you in NUSEC."
                  speed={20}
                />
              </p>

              <p className="text-muted-foreground text-sm mt-6">
                <strong className="text-primary">
                  New Member Orientation:
                </strong>{" "}
                Any meeting — just show up!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
