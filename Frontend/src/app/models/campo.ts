import { ComplejoDeportivo } from './complejodeportivo';

export class Campo{
  constructor(
      public nombre: String,
      public tipo: Number,
      public largo: Number,
      public ancho: Number,
      public superficie: String,
      public aforoGrada: Number,
      public sistemaIluminacion: Boolean,
      public complejo: ComplejoDeportivo
       
  ){}
}