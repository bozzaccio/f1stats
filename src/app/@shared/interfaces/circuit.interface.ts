export interface ICircuit {
  circuitId: string,
  url: string,
  circuitName: string,
  location: ILocation
}

export interface ILocation {
  locality: string,
  country: string
}
