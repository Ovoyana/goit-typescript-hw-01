type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  };
  
  function compare<T extends AllType, K extends AllType>(top: Pick<T, keyof AllType>, bottom: Pick<K, keyof AllType>): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    };
  }