export function FilterToQueryString(filters) {
  let queryString = "?";
  queryString += "maxPrice=" + filters?.maxPrice?.toString();
  queryString += "&minPrice=" + filters?.minPrice?.toString();
  for (let category of filters?.categories) {
    queryString += "&categories=" + category;
  }
  return queryString;
}
