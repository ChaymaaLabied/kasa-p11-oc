export async function detailsLoader({ params }) {
    const data = await fetch("../data/logements.json");
    const json = await data.json();
    const logement = json.find((elt) => elt.id === params.id);
    if (!logement) {
      throw new Error("Property not found");
    }
    return { logement };
  }
  