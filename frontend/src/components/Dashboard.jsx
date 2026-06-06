import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("user"));
  const user = data?.user;

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          padding: "40px",
          textAlign: "center",
          color: "#fff",
          boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            margin: "0 auto 20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          {user?.name?.charAt(0)?.toUpperCase() || "U"}
        </div>

        {/* Title */}
        <h2
          style={{
            marginBottom: "5px",
          }}
        >
          USER AUTH SYSTEM
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "30px",
          }}
        >
          Authentication Dashboard
        </p>

        {/* Welcome */}
        <h1
          style={{
            fontSize: "28px",
            marginBottom: "10px",
          }}
        >
          Welcome {user?.name} 👋
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "30px",
          }}
        >
          You have successfully logged in.
        </p>

        {/* User Details */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "16px",
            padding: "20px",
            textAlign: "left",
            marginBottom: "25px",
          }}
        >
          <div style={{ marginBottom: "18px" }}>
            <strong>Name</strong>
            <p
              style={{
                margin: "5px 0",
                color: "#cbd5e1",
              }}
            >
              {user?.name || "Not Available"}
            </p>
          </div>

          <div style={{ marginBottom: "18px" }}>
            <strong>Email</strong>
            <p
              style={{
                margin: "5px 0",
                color: "#cbd5e1",
              }}
            >
              {user?.email || "Not Available"}
            </p>
          </div>

          <div>
            <strong>Status</strong>
            <p
              style={{
                margin: "5px 0",
                color: "#22c55e",
                fontWeight: "bold",
              }}
            >
              Active ✓
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(135deg, #ef4444, #dc2626)",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;