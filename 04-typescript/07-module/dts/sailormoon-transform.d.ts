declare class Brooch {
    pentagram: string;
}
declare type Compact = {
    silverCrystal: boolean;
};
declare class CosmicCompact implements Compact {
    silverCrystal: boolean;
    cosmicPower: boolean;
}
declare class CrisisCompact implements Compact {
    silverCrystal: boolean;
    moonChalice: boolean;
}
declare function transform(): void;
declare function transform(item: Brooch): void;
declare function transform(item: Compact): void;
export { transform, Brooch, CosmicCompact, CrisisCompact };
