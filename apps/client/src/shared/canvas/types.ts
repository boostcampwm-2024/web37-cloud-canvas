export type ViewMode = '2d' | '3d';

export interface Viewbox {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface GridPosition {
    col: number;
    row: number;
}

export interface CoordPosition {
    x: number;
    y: number;
}

export interface GridSize {
    cols: number;
    rows: number;
    depth?: number;
}
