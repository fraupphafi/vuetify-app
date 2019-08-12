export function coordConverter(coord) {
    return +(Math.floor(coord / 100) + (coord - Math.floor(coord / 100) * 100) / 60).toFixed(6);
}

export function getAverage(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}
  
export function getAverageCoords(outlets) {
    let latitude = [];
    let longitude = [];
  
    outlets.forEach(outlet => {
      latitude.push(outlet.latitude);
      longitude.push(outlet.longitude);
    });
  
    return ([coordConverter(getAverage(latitude)), coordConverter(getAverage(longitude))]);
}