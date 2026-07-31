// src/lib/queries.ts
export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc, year desc) {
  "id": slug.current,
  title,
  category,
  shortDescription,
  "coverImage": coverImage.asset->url,
  location,
  year,
  area,
  client,
  concept,
  challenge,
  solution,
  software,
  images {
    "exterior": exterior[].asset->url,
    "interior": interior[].asset->url,
    "floorPlans": floorPlans[].asset->url,
    "sketches": sketches[].asset->url
  }
}`