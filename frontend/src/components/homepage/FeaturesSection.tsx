import { Users, Calendar, BarChart3, Shield, Zap, Clock } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Employee Management",
    description: "Add, view, and manage employee records with ease. Keep all your team data organized in one place.",
  },
  {
    icon: Calendar,
    title: "Attendance Tracking",
    description: "Mark and monitor daily attendance. Track presence and absence patterns effortlessly.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Analytics",
    description: "Get instant insights with visual analytics. Monitor attendance rates and employee metrics.",
  },
  {
    icon: Shield,
    title: "Secure Access",
    description: "Role-based access for HR and employees. Your data stays protected and organized.",
  },
  {
    icon: Zap,
    title: "Fast & Intuitive",
    description: "Modern interface designed for efficiency. Get things done quickly without the learning curve.",
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "See changes instantly across the platform. Always stay up to date with the latest information.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Everything you need to
            <span className="text-gradient"> manage HR</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive suite of tools designed to streamline your human resource operations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass glass-hover rounded-2xl p-6 hover:glow-primary transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
