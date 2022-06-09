{
  interface Status {
    level: number;
    maxHP: number;
    maxMP: number;
    [aaa: string]: number;
  }

  const myStatus: Status = {
    level: 99,
    maxHP: 999,
    maxMP: 999,
    attack: 999,
    defence: 999,
  }
}
