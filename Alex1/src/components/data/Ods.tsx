export const ListaODS = {
  ods1: "ODS 1: Fin de la pobreza",
  ods2: "ODS 2: Hambre cero",
  ods3: "ODS 3: Salud y bienestar",
  ods4: "ODS 4: Educación de calidad",
  ods5: "ODS 5: Igualdad de género",
  ods6: "ODS 6: Agua limpia y saneamiento",
  ods7: "ODS 7: Energía asequible y no contaminante",
  ods8: "ODS 8: Trabajo decente y crecimiento económico",
  ods9: "ODS 9: Industria, innovación e infraestructura",
  ods10: "ODS 10: Reducción de las desigualdades",
  ods11: "ODS 11: Ciudades y comunidades sostenibles",
  ods12: "ODS 12: Producción y consumo responsables",
  ods13: "ODS 13: Acción por el clima",
  ods14: "ODS14: Vida submarina",
  ods15: "ODS 15: Vida de ecosistemas terrestres",
  ods16: "ODS 16: Paz, justicia e instituciones sólidas",
  ods17: "ODS 17: Alianzas para lograr los objetivos",
} as const;

type ListaODS = typeof ListaODS[keyof typeof ListaODS];

export interface InterfazSostenible {
  id: number;
  odsfavorito: typeof ListaODS[keyof typeof ListaODS];
  estado: string;
  color: string;
}


  export const odsAlumnos: InterfazSostenible[] = [
    {
      id: 1,
      odsfavorito: ListaODS.ods1,
      estado: "Aprobado",
      color: "#E5243B",
      
    },
    {
      id: 2,
      odsfavorito: ListaODS.ods2,
      estado: "En proceso",
      color: "#DDA63A",
    },
    {
      id: 3,
      odsfavorito: ListaODS.ods3,
      estado: "En proceso",
      color: "#4C9F38",
    },
    {
      id: 4,
      odsfavorito: ListaODS.ods4,
      estado: "Aprobado",
      color: "#C5192D",
    },
    {
      id: 5,
      odsfavorito: ListaODS.ods5,
      estado: "En proceso",
      color: "#FF3A21",
    },
      {
      id: 6,
      odsfavorito: ListaODS.ods6,
      estado: "Aprobado",
      color: "#26BDE2",
    },
      {
      id: 7,
      odsfavorito: ListaODS.ods7,
      estado: "En proceso",
      color: "#FCC30B",
    },
      {
      id: 8,
      odsfavorito: ListaODS.ods8,
      estado: "Aprobado",
      color: "#A21942",
    },
      {
      id: 9,
      odsfavorito: ListaODS.ods9,
      estado: "En proceso",
      color: "#FD6925",
    },
      {
      id: 10,
      odsfavorito: ListaODS.ods10,
      estado: "Aprobado",
      color: "#DD1367",
    },
      {
      id: 11,
      odsfavorito: ListaODS.ods11,
      estado: "En proceso",
      color: "#FD9D24",
    },
      {
      id: 12,
      odsfavorito: ListaODS.ods12,
      estado: "Aprobado",
      color: "#BF8B2E",
    },
      {
      id: 13,
      odsfavorito: ListaODS.ods13,
      estado: "En proceso",
      color: "#3F7E44",
    },
      {
      id: 14,
      odsfavorito: ListaODS.ods14,
      estado: "Aprobado",
      color: "#0A97D9",
    },
      {
      id: 15,
      odsfavorito: ListaODS.ods15,
      estado: "En proceso",
      color: "#56C02B",
    },
      {
      id: 16,
      odsfavorito: ListaODS.ods16,
      estado: "Aprobado",
      color: "#00689D",
    },
      {
      id: 17,
      odsfavorito: ListaODS.ods17,
      estado: "En proceso",
      color: "#19486A",
    },
    
  ];

  const filtrarProyectosClimaticos = (ods: InterfazSostenible[]): InterfazSostenible[] => {
    return ods.filter((o) => o.estado === "En proceso");
  };

  const resultadoJson = filtrarProyectosClimaticos(odsAlumnos);
  console.log(resultadoJson);

  


