import { NavLink } from "react-router-dom";
import { Home, TrendingUp, FileText, Users, Settings } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Portfolios", href: "/portfolio", icon: TrendingUp },
  { name: "Research", href: "/research", icon: FileText },
  { name: "About", href: "/about", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-card border-r border-border">
      <div className="flex h-16 items-center px-6 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-financial rounded-lg flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-lg text-foreground">CapitalMind</h1>
            <p className="text-xs text-muted-foreground">Premium</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-smooth ${
                isActive
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`
            }
          >
            <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground">
          <p>© 2024 CapitalMind</p>
          <p>Premium Portfolio Management</p>
        </div>
      </div>
    </div>
  );
}