function Ods() {
  enum problemas {
    ods1 = "ODS 1: Fin de la pobreza",
    ods2 = "ODS 2: Hambre cero",
    ods3 = "ODS 3: Salud y bienestar",
    ods4 = "ODS 4: Educación de calidad",
    ods5 = "ODS 5: Igualdad de género",
    ods6 = "ODS 6: Agua limpia y saneamiento",
    ods7 = "ODS 7: Energía asequible y no contaminante",
    ods8 = "ODS 8: Trabajo decente y crecimiento económico",
    ods9 = "ODS 9: Industria, innovación e infraestructura",
    ods10 = "ODS 10: Reducción de las desigualdades",
    ods11 = "ODS 11: Ciudades y comunidades sostenibles",
    ods12 = "ODS 12: Producción y consumo responsables",
    ods13 = "ODS 13: Acción por el clima",
    ods14 = "ODS14: Vida submarina",
    ods15 = "ODS 15: Vida de ecosistemas terrestres",
    ods16 = "ODS 16: Paz, justicia e instituciones sólidas",
    ods17 = "ODS 17: Alianzas para lograr los objetivos",
  }
  let odsFavorito = problemas.ods13;
  return <p>Mi ods fav es {odsFavorito}</p>;
}
{


const odsAlumnos: InterfazSostenible[] = [
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
  ];

  let odsFavorito = ListaODS.ods1;

  // Reto: Crear una función que devuelva solo proyectos de Clima
  function filtrarProyectosClimaticos(ods: InterfazSostenible[]): InterfazSostenible[] {
    return ods.filter((o) => o.estado === "En proceso");
  }

  const resultadoJson = filtrarProyectosClimaticos(odsAlumnos);
  console.log(resultadoJson);

  return <h1>{JSON.stringify(resultadoJson, null, 3)}</h1>;
}
export default Ods;