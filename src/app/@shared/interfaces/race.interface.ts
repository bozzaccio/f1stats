import {ICircuit} from "./circuit.interface";

export interface IRace {
  season: string,
  round: string,
  url: string,
  raceName: string,
  circuit: ICircuit,
  date: string,
  time: string
}
