import { useEffect, useState } from "react";
import {
  HeartHandshake,
  Calendar,
  Bell,
  ChevronDown,
  AlertCircle,
} from "lucide-react";
import { Popover } from "antd";
import { notifications } from "../../../data/notifications";

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

  const notificationContent = (
    <div className="notification-popover-content">
      <div className="notification-popover-header">
        <div>
          <h3>Notifications</h3>
        </div>
        <button className="mark-read-btn">Mark all as read</button>
      </div>

      <div className="notification-list">
        {notifications.map((notification) => (
          <div className="notification-item" key={notification.id}>
            <div className="notification-error-icon">
              <AlertCircle size={17} />
            </div>

            <div className="notification-content">
              <div className="notification-patient">
                {notification.patientName}
              </div>

              <h4>{notification.title}</h4>

              <p>{notification.message}</p>

              <span className="notification-time">
                {notification.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="notification-footer">
        <button>View all notifications</button>
      </div>
    </div>
  );

  return (
    <header className="dashboard-header">
      <div className="header-brand">
        <div className="brand-icon">
          <HeartHandshake size={22} />
        </div>

        <div>
          <h1 className="brand-title">
            MEDDENT BENEFITS ACCELERATOR (POC)
          </h1>
        </div>
      </div>

      <div className="header-actions">
        <div className="info-chip">
          <Calendar size={14} className="chip-icon" />
          <span>{formattedDate}</span>
        </div>

        {/* Notification Popover */}
        <Popover
          content={notificationContent}
          trigger="click"
          placement="bottomRight"
          arrow={true}
        >
          <button
            className="notification-btn"
            aria-label="Notifications"
          >
            <Bell size={18} className="notification-icon" />

            {notifications.length > 0 && (
              <span className="badge">
                {notifications.length}
              </span>
            )}
          </button>
        </Popover>

        {/* User Profile */}
        <div className="user-profile">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100"
            alt="Dr. Emily Carter"
            className="avatar"
          />

          <div className="user-info">
            <span className="user-name">
              Dr. Emily Carter
            </span>

            <span className="user-role">
              Hospital Admin
            </span>
          </div>

          <ChevronDown
            size={16}
            className="dropdown-arrow"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
