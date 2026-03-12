import type { InterfazSostenible } from "./data/Ods";

export const Card = ({ itemOds }: { itemOds: InterfazSostenible }) => {
  return (
   <div
  style={{
    background: `linear-gradient(145deg, ${itemOds.color}ee, ${itemOds.color}88)`,
    borderRadius: "20px",
    padding: "22px 18px",
    border: "1.5px solid rgba(255,255,255,0.2)",
    boxShadow: `0 8px 24px ${itemOds.color}33, 0 4px 8px rgba(0,0,0,0.3)`,
    fontFamily: "'DM Sans', system-ui, sans-serif",
    textAlign: "center",
    color: "white",
    transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease, border-color 0.3s ease",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    animation: "fadeUp 0.5s ease both",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px) scale(1.04)";
    e.currentTarget.style.boxShadow = `0 24px 48px ${itemOds.color}66, 0 8px 16px rgba(0,0,0,0.4)`;
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = `0 8px 24px ${itemOds.color}33, 0 4px 8px rgba(0,0,0,0.3)`;
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
  }}
>
  <h3
    style={{
      marginBottom: "10px",
      fontSize: "11px",
      fontWeight: "700",
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.6)",
    }}
  >
    🌍 ODS #{itemOds.id}
  </h3>

  <p
    style={{
      margin: "12px 0",
      fontSize: "14px",
      fontWeight: "700",
      lineHeight: "1.35",
      color: "#fff",
      fontFamily: "'Syne', system-ui, sans-serif",
    }}
  >
    {itemOds.odsfavorito}
  </p>

  <p
    style={{
      marginTop: "14px",
      background: "rgba(255,255,255,0.15)",
      backdropFilter: "blur(8px)",
      color: "white",
      padding: "5px 11px",
      borderRadius: "30px",
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      fontSize: "11px",
      fontWeight: "500",
      border: "1px solid rgba(255,255,255,0.3)",
      transition: "background 0.3s",
    }}
  >
    {itemOds.estado}
  </p>
</div>
  );
};
