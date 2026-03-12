import type { InterfazSostenible } from "./data/Ods";

export const Card = ({ itemOds }: { itemOds: InterfazSostenible }) => {
  return (
   <div
  style={{
    background: `linear-gradient(135deg, ${itemOds}, #6366f1)`,
    borderRadius: "20px",
    padding: "25px",
    border: "2px solid rgba(255,255,255,0.3)",
    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
    fontFamily: "system-ui, sans-serif",
    textAlign: "center",
    color: "white",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.25)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
  }}
>
  <h3
    style={{
      marginBottom: "12px",
      fontSize: "22px",
      fontWeight: "bold",
      letterSpacing: "1px"
    }}
  >
    🌍 ODS #{itemOds.id}
  </h3>

  <p style={{ margin: "8px 0", fontSize: "16px" }}>
    <strong>ODS favorito:</strong> {itemOds.odsfavorito}
  </p>

  <p
    style={{
      marginTop: "12px",
      background: "rgba(255,255,255,0.2)",
      backdropFilter: "blur(5px)",
      color: "white",
      padding: "8px 14px",
      borderRadius: "12px",
      display: "inline-block",
      fontSize: "14px",
      fontWeight: "bold",
      transition: "background 0.3s"
    }}
  >
        {itemOds.estado}
      </p>
    </div>
  );
};
