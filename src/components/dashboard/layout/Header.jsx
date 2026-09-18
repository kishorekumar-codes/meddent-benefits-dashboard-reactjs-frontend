import { useEffect, useState } from "react";
import { HeartHandshake, Calendar, Bell, ChevronDown } from "lucide-react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // const formattedTime = currentTime.toLocaleTimeString("en-US", {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   hour12: true,
  // });

  return (
    <header className="dashboard-header">
      <div className="header-brand">
        <div className="brand-icon">
          <HeartHandshake size={22} />
        </div>

        <div>
          <h1 className="brand-title">MEDDENT BENEFITS ACCELERATOR</h1>
          <p className="brand-subtitle">Smart Automation for Better Patient Outcomes</p>
        </div>
      </div>

      <div className="header-actions">
        <div className="info-chip">
          <Calendar size={14} className="chip-icon" />
          <span>{formattedDate}</span>
        </div>

        <button className="notification-btn" aria-label="Notifications">
          <Bell size={18} className="notification-icon" />
          <span className="badge">3</span>
        </button>

        <div className="user-profile">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100"
            alt="Dr. Emily Carter"
            className="avatar"
          />

          <div className="user-info">
            <span className="user-name">Dr. Emily Carter</span>
            <span className="user-role">Hospital Admin</span>
          </div>

          <ChevronDown size={16} className="dropdown-arrow" />
        </div>
      </div>
    </header>
  );
};

export default Header;
