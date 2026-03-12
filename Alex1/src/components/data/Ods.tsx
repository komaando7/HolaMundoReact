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
}


  export const odsAlumnos: InterfazSostenible[] = [
    {
      id: 1,
      odsfavorito: ListaODS.ods1,
      estado: "Aprobado",
    },
    {
      id: 2,
      odsfavorito: ListaODS.ods2,
      estado: "En proceso",
    },
    {
      id: 3,
      odsfavorito: ListaODS.ods3,
      estado: "En proceso",
    },
    {
      id: 4,
      odsfavorito: ListaODS.ods4,
      estado: "Aprobado",
    },
    {
      id: 5,
      odsfavorito: ListaODS.ods5,
      estado: "En proceso",
    },
      {
      id: 6,
      odsfavorito: ListaODS.ods6,
      estado: "Aprobado",
    },
      {
      id: 7,
      odsfavorito: ListaODS.ods7,
      estado: "En proceso",
    },
      {
      id: 8,
      odsfavorito: ListaODS.ods8,
      estado: "Aprobado",
    },
      {
      id: 9,
      odsfavorito: ListaODS.ods9,
      estado: "En proceso",
    },
      {
      id: 10,
      odsfavorito: ListaODS.ods10,
      estado: "Aprobado",
    },
      {
      id: 11,
      odsfavorito: ListaODS.ods11,
      estado: "En proceso",
    },
      {
      id: 12,
      odsfavorito: ListaODS.ods12,
      estado: "Aprobado",
    },
      {
      id: 13,
      odsfavorito: ListaODS.ods13,
      estado: "En proceso",
    },
      {
      id: 14,
      odsfavorito: ListaODS.ods14,
      estado: "Aprobado",
    },
      {
      id: 15,
      odsfavorito: ListaODS.ods15,
      estado: "En proceso",
    },
      {
      id: 16,
      odsfavorito: ListaODS.ods16,
      estado: "Aprobado",
    },
      {
      id: 17,
      odsfavorito: ListaODS.ods17,
      estado: "En proceso",
    },
    
  ];

  const filtrarProyectosClimaticos = (ods: InterfazSostenible[]): InterfazSostenible[] => {
    return ods.filter((o) => o.estado === "En proceso");
  };

  const resultadoJson = filtrarProyectosClimaticos(odsAlumnos);
  console.log(resultadoJson);

  


