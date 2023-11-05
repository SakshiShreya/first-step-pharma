interface ISubService {
  name: string;
  id: number;
}

export interface IService {
  id: number;
  name: string;
  subServices: Array<ISubService>;
}