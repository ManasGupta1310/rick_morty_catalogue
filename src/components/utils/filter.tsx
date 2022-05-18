interface LocationType {
  name: string;
  type: string;
  dimension: string;
}
function filter(locations:any, type:string, dimensions:string, searchKey:string) {
  let filtered = locations;
  if (type !== '') {
    filtered = filtered.filter((location:LocationType) => location.type === type);
  }

  if (dimensions !== '') {
    filtered = filtered.filter((location:LocationType) => location.dimension === dimensions);
  }

  if (searchKey !== '') {
    filtered = filtered
      .filter((location:any) => location.name.toLowerCase().includes(searchKey.toLowerCase()));
  }
  return filtered;
}

export default filter;
