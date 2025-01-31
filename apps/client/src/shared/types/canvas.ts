export interface GridPoint {
    col: number;
    row: number;
}

export interface Point {
    x: number;
    y: number;
}

export interface GridSize2D {
    cols: number;
    rows: number;
}

export interface GridSize3D extends GridSize2D {
    depth: number;
}

export type ViewMode = '2d' | '3d';
