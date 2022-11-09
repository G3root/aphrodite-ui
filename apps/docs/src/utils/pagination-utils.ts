import { RouteItem, routes } from '../configs/routes';

interface PaginationData {
  path: string;
}

function getRoutes() {
  let routeList: RouteItem[] = [];
  for (const route of routes) {
    if (route.routes) {
      routeList = [...routeList, ...route.routes];
    }
  }

  return routeList;
}

export function paginate({ path }: PaginationData) {
  const data = getRoutes();
  const index = data.map((item) => item.path).indexOf(path);
  if (index === -1) return { prev: undefined, next: undefined };
  const prev = index > 0 ? data[index - 1] : undefined;
  const next = index < data.length - 1 ? data[index + 1] : undefined;
  return { prev, next };
}
