export default interface Drone {
  id: number;
  battery: {
    capacity: number;
    charge: number;
  };
  drone_name: string;
  location: {
    lat: number;
    lng: number;
  };
  status: string;
};
