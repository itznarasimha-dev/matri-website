import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Heart, Eye, Star, MousePointerClick, CheckCircle, XCircle, MoreHorizontal,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import DashLayout from "../components/DashLayout";

const MATCH_CARDS = [
  { photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", name: "Priya Sharma",   age: 24, city: "Hyderabad",     online: false },
  { photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80", name: "Divya Lakshmi",  age: 26, city: "Vijayawada",    online: false },
  { photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", name: "Harika Sharma",  age: 23, city: "Visakhapatnam", online: true  },
  { photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80", name: "Ramya Sri",      age: 25, city: "Chennai",       online: true  },
  { photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80", name: "Lalitha Devi",  age: 27, city: "Bangalore",     online: true  },
  { photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80", name: "Sravani R.",    age: 22, city: "Hyderabad",     online: false },
  { photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", name: "Meena Rao",     age: 28, city: "Pune",          online: true  },
];

const CHAT_LIST = [
  { name: "Priya Sharma",  city: "Hyderabad",     msg: "Thank you for connecting!", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  { name: "Divya Lakshmi", city: "Vijayawada",    msg: "Looking forward to chatting", photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&q=80" },
  { name: "Harika Sharma", city: "Visakhapatnam", msg: "Hi! Saw your profile 😊",     photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
  { name: "Ramya Sri",     city: "Chennai",       msg: "Would love to know more",    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80" },
];

const INTERESTS = [
  { id: 1, name: "Rahul Verma",   city: "Mumbai",    age: 28, height: "5'9\"",  job: "Software Engineer", tier: "Platinum", time: "10:30 AM, 18 Aug 2024", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  { id: 2, name: "Arjun Reddy",   city: "Hyderabad", age: 30, height: "5'11\"", job: "Doctor",            tier: "Gold",     time: "02:15 PM, 17 Aug 2024", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
  { id: 3, name: "Suresh Kiran",  city: "Bangalore", age: 27, height: "5'8\"",  job: "Data Scientist",    tier: "Free",     time: "09:00 AM, 16 Aug 2024", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&q=80" },
  { id: 4, name: "Vikram Sharma", city: "Chennai",   age: 32, height: "6'0\"",  job: "Entrepreneur",      tier: "Gold",     time: "05:45 PM, 15 Aug 2024", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" },
];

const TIER = {
  Platinum: { color: "#2338B0", bg: "#EEF1FF" },
  Gold:     { color: "#B45309", bg: "#FEF3C7" },
  Free:     { color: "#6B7280", bg: "#F3F4F6" },
};

const VIEW_DATA = [10, 18, 25, 14, 30, 22, 40, 35, 28, 45, 38, 50];
const MONTHS    = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function SectionHeader({ title, linkTo, linkLabel }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
      <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: 20, color: "#1A1F36", margin: 0 }}>{title}</h2>
      {linkTo && (
        <Link to={linkTo} style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, color: "#2338B0", fontWeight: 600, textDecoration: "none" }}>
          {linkLabel || "View all →"}
        </Link>
      )}
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: 18, boxShadow: "0 1px 12px rgba(35,56,176,0.07)", border: "1px solid #E8EBF5" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: 16, color: "#2338B0", margin: 0 }}>{title}</h3>
        <MoreHorizontal size={16} color="#9CA3AF" />
      </div>
      {children}
    </div>
  );
}

function StatChip({ icon, value, label, bg }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", background: bg, borderRadius: 10 }}>
      <div style={{ width: 28, height: 28, borderRadius: 8, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>{icon}</div>
      <div>
        <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 15, color: "#111827" }}>{value}</div>
        <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 10, color: "#6B7280" }}>{label}</div>
      </div>
    </div>
  );
}

function CompletionRing({ pct }) {
  const r = 38, circ = 2 * Math.PI * r;
  return (
    <div style={{ textAlign: "center", marginBottom: 16 }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <svg width={90} height={90} viewBox="0 0 90 90">
          <defs>
            <linearGradient id="rg2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2338B0" />
              <stop offset="100%" stopColor="#F8B500" />
            </linearGradient>
          </defs>
          <circle cx={45} cy={45} r={r} fill="none" stroke="#E8EBF5" strokeWidth={8} />
          <circle cx={45} cy={45} r={r} fill="none" stroke="url(#rg2)" strokeWidth={8}
            strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ * (1 - pct / 100)} transform="rotate(-90 45 45)" />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: 20, color: "#2338B0" }}>{pct}</span>
          <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 10, color: "#2338B0" }}>%</span>
        </div>
      </div>
      <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 12, color: "#6B7280", marginTop: 4 }}>Profile completion</div>
    </div>
  );
}

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState([]);
  const [declined, setDeclined] = useState([]);
  const [hovered, setHovered]   = useState(null);

  const completion   = user?.profileComplete ?? 72;
  const userPhoto    = user?.photo || MATCH_CARDS[0].photo;
  const userName     = user?.name || "User";
  const pendingCount = INTERESTS.filter(r => !accepted.includes(r.id) && !declined.includes(r.id)).length;

  return (
    <DashLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

        {/* Welcome banner */}
        <div style={{ background: "linear-gradient(135deg,#2338B0,#3D52C8)", borderRadius: 18, padding: "22px 28px", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14, boxShadow: "0 8px 32px rgba(35,56,176,0.25)" }}>
          <div>
            <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 26, fontWeight: 700 }}>
              Welcome back, {userName} 🪷
            </div>
            <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, opacity: 0.85, marginTop: 5 }}>
              You have <strong>{pendingCount} new interests</strong> and <strong>{user?.matchesCount ?? 47} matches</strong> waiting
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <Link to="/interests" style={{ padding: "9px 20px", borderRadius: 10, background: "#F8B500", color: "#1A1F36", fontFamily: "Outfit, sans-serif", fontSize: 13, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 14px rgba(248,181,0,0.4)" }}>
              View Interests
            </Link>
            <Link to="/matches" style={{ padding: "9px 20px", borderRadius: 10, background: "rgba(255,255,255,0.15)", color: "#fff", fontFamily: "Outfit, sans-serif", fontSize: 13, fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              Browse Matches
            </Link>
          </div>
        </div>

        {/* Today's Matches */}
        <section>
          <SectionHeader title="Today's Matches" linkTo="/matches" />
          <div style={{ display: "flex", gap: 14, overflowX: "auto", paddingBottom: 8 }}>
            {MATCH_CARDS.map((m, i) => (
              <div key={i} onClick={() => navigate(`/profile/${i + 1}`)}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(35,56,176,0.18)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)";    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)"; }}
                style={{ position: "relative", flexShrink: 0, width: 155, height: 215, borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.10)", cursor: "pointer", transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s" }}>
                <img src={m.photo} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
                {m.online && <span style={{ position: "absolute", top: 10, right: 10, width: 10, height: 10, background: "#22C55E", borderRadius: "50%", border: "2px solid #fff", boxShadow: "0 0 6px #22C55E" }} />}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent,rgba(26,31,54,0.88))", padding: "28px 12px 12px" }}>
                  <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: 13, color: "#fff" }}>{m.name}</div>
                  <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.75)" }}>{m.city} · {m.age} yrs</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3-column row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18 }}>

          {/* Profile Status */}
          <Card title="Profile Status">
            <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
              <img src={userPhoto} alt="profile" style={{ width: "100%", height: 155, objectFit: "cover", objectPosition: "top center", display: "block" }} />
              <Link to="/my-profile" style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(35,56,176,0.82)", color: "#fff", textAlign: "center", padding: 10, fontFamily: "Outfit, sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textDecoration: "none" }}>
                EDIT PROFILE
              </Link>
            </div>
            <CompletionRing pct={completion} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <StatChip icon={<Heart size={14} color="#EF4444" fill="#EF4444" />} value={12} label="Likes"     bg="#FEE2E2" />
              <StatChip icon={<Eye size={14} color="#2338B0" />}                  value={47} label="Views"    bg="#EEF1FF" />
              <StatChip icon={<Star size={14} color="#F8B500" fill="#F8B500" />}  value={8}  label="Interests" bg="#FEF3C7" />
              <StatChip icon={<MousePointerClick size={14} color="#0D9488" />}    value={23} label="Clicks"   bg="#CCFBF1" />
            </div>
          </Card>

          {/* Plan Details */}
          <Card title="Plan Details">
            <div style={{ textAlign: "center", marginBottom: 14 }}>
              <div style={{ fontSize: 52 }}>🎁</div>
              <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 16, color: "#111827", marginTop: 6 }}>
                {user?.membershipPlan === "premium" ? "Premium Plan" : "Standard Plan"}
              </div>
            </div>
            <div style={{ background: "#F8F9FF", borderRadius: 12, padding: 14, marginBottom: 14, fontFamily: "Outfit, sans-serif", fontSize: 13, color: "#374151", lineHeight: 1.9, border: "1px solid #E8EBF5" }}>
              <div>Plan: <strong>{user?.membershipPlan === "premium" ? "Premium" : "Standard"}</strong></div>
              <div>Validity: <strong>6 Months</strong></div>
              <div>Valid till: <strong>24 June 2026</strong></div>
            </div>
            <Link to="/membership" style={{ display: "block", background: "linear-gradient(135deg,#2338B0,#3D52C8)", color: "#fff", textAlign: "center", padding: "10px", borderRadius: 10, fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 13, textDecoration: "none", boxShadow: "0 4px 16px rgba(35,56,176,0.25)" }}>
              Upgrade Now ✨
            </Link>
          </Card>

          {/* Recent Chats */}
          <Card title="Recent Chats">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {CHAT_LIST.map((c, i) => (
                <div key={i}
                  onMouseEnter={e => e.currentTarget.style.background = "#F0F4FF"}
                  onMouseLeave={e => e.currentTarget.style.background = "#F8F9FF"}
                  style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 11px", background: "#F8F9FF", borderRadius: 12, cursor: "pointer", transition: "background 0.15s", border: "1px solid #E8EBF5" }}>
                  <img src={c.photo} alt={c.name} style={{ width: 44, height: 44, borderRadius: 10, objectFit: "cover", objectPosition: "top center", flexShrink: 0 }} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: 13, color: "#111827", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</div>
                    <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, color: "#9CA3AF", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.msg}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Interest Requests */}
        <section>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: 20, color: "#1A1F36", margin: 0 }}>Interest Requests</h2>
            {pendingCount > 0 && (
              <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 12, fontWeight: 700, background: "#FEF3C7", color: "#B45309", padding: "4px 14px", borderRadius: 20 }}>
                {pendingCount} New
              </span>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {INTERESTS.map(req => {
              const isAcc = accepted.includes(req.id);
              const isDec = declined.includes(req.id);
              const tier  = TIER[req.tier];
              return (
                <div key={req.id}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 24px rgba(35,56,176,0.10)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "0 1px 12px rgba(35,56,176,0.07)"}
                  style={{ background: "#fff", borderRadius: 16, padding: "15px 20px", boxShadow: "0 1px 12px rgba(35,56,176,0.07)", border: "1px solid #E8EBF5", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", transition: "box-shadow 0.2s", borderLeft: !isAcc && !isDec ? `4px solid ${tier.color}` : "4px solid #E5E7EB" }}>
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <img src={req.photo} alt={req.name} style={{ width: 54, height: 54, borderRadius: 12, objectFit: "cover", objectPosition: "top center" }} />
                    <span style={{ position: "absolute", top: -6, left: -6, fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 6, background: tier.bg, color: tier.color }}>{req.tier}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: 14, color: "#111827" }}>{req.name}</div>
                    <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 12, color: "#6B7280" }}>{req.city} · {req.age} yrs · {req.height} · {req.job}</div>
                    <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>Requested: {req.time}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                    {isAcc ? (
                      <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 12, color: "#16A34A", fontWeight: 600, background: "#DCFCE7", padding: "6px 14px", borderRadius: 8 }}>✓ Accepted</span>
                    ) : isDec ? (
                      <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 12, color: "#DC2626", fontWeight: 600, background: "#FEE2E2", padding: "6px 14px", borderRadius: 8 }}>✗ Declined</span>
                    ) : (
                      <>
                        <button onClick={() => setAccepted(p => [...p, req.id])}
                          onMouseEnter={e => e.currentTarget.style.background = "#BBF7D0"}
                          onMouseLeave={e => e.currentTarget.style.background = "#DCFCE7"}
                          style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 8, background: "#DCFCE7", color: "#16A34A", border: "none", cursor: "pointer", fontFamily: "Outfit, sans-serif", fontSize: 12, fontWeight: 600, transition: "background 0.15s" }}>
                          <CheckCircle size={13} /> Accept
                        </button>
                        <button onClick={() => setDeclined(p => [...p, req.id])}
                          onMouseEnter={e => e.currentTarget.style.background = "#FECACA"}
                          onMouseLeave={e => e.currentTarget.style.background = "#FEE2E2"}
                          style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 8, background: "#FEE2E2", color: "#DC2626", border: "none", cursor: "pointer", fontFamily: "Outfit, sans-serif", fontSize: 12, fontWeight: 600, transition: "background 0.15s" }}>
                          <XCircle size={13} /> Decline
                        </button>
                      </>
                    )}
                    <Link to={`/profile/${req.id}`}
                      style={{ padding: "7px 14px", borderRadius: 8, background: "#EEF1FF", color: "#2338B0", fontFamily: "Outfit, sans-serif", fontSize: 12, fontWeight: 600, textDecoration: "none" }}>
                      View Profile
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Profile Views Chart */}
        <section>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 700, fontSize: 20, color: "#1A1F36", margin: 0 }}>Profile Views</h2>
            <select style={{ fontFamily: "Outfit, sans-serif", fontSize: 12, border: "1px solid #E8EBF5", borderRadius: 8, padding: "6px 12px", color: "#374151", background: "#fff", cursor: "pointer", outline: "none" }}>
              <option>This year</option>
              <option>Last 6 months</option>
              <option>Last 3 months</option>
            </select>
          </div>

          <div style={{ background: "#fff", borderRadius: 16, padding: 22, boxShadow: "0 1px 12px rgba(35,56,176,0.07)", border: "1px solid #E8EBF5" }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 130 }}>
              {VIEW_DATA.map((v, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div
                    onMouseEnter={e => { e.currentTarget.style.background = "linear-gradient(180deg,#F8B500,#E5A000)"; e.currentTarget.style.transform = "scaleX(1.2)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "linear-gradient(180deg,#2338B0,#3D52C8)"; e.currentTarget.style.transform = "scaleX(1)"; }}
                    style={{ width: "100%", background: "linear-gradient(180deg,#2338B0,#3D52C8)", borderRadius: "4px 4px 0 0", height: `${(v / 50) * 120}px`, minHeight: 4, transition: "all 0.2s", cursor: "pointer" }}
                  />
                  <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 9, color: "#9CA3AF" }}>{MONTHS[i]}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16, fontFamily: "Outfit, sans-serif", fontSize: 12, color: "#6B7280", borderTop: "1px solid #F3F4F6", paddingTop: 14 }}>
              <span>Total views: <strong style={{ color: "#2338B0" }}>347</strong></span>
              <span>This month: <strong style={{ color: "#2338B0" }}>50</strong></span>
              <span>↑ <strong style={{ color: "#16A34A" }}>31%</strong> vs last month</span>
            </div>
          </div>
        </section>

      </div>
    </DashLayout>
  );
}
