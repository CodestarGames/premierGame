export interface IHeroSave {
    lives: number;
    healthSlots: number;
    maxHealth:number;
    coins:number;
}

export default class HeroSave implements IHeroSave {
    lives: number = 3;
    healthSlots: number = 3;
    maxHealth:number = 7;
    coins:number = 0;
}
