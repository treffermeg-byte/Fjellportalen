async function getTravelTime(start, end) {
  try {
    const response = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${start[0]},${start[1]};${end[0]},${end[1]}?overview=false`
    );

    const data = await response.json();

    if (!data.routes || data.routes.length === 0) {
      return {
        duration: "Ukjent",
        distance: "-- km",
      };
    }

    const route = data.routes[0];

    const seconds = route.duration;

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.round(
      (seconds % 3600) / 60
    );

    const distanceKm = Math.round(
      route.distance / 1000
    );

    return {
      duration: `${hours} t ${minutes} min`,
      distance: `${distanceKm} km`,
    };
  } catch (error) {
    console.error(
      "Feil ved henting av kjøretid:",
      error
    );

    return {
      duration: "Feil",
      distance: "-- km",
    };
  }
}
``
