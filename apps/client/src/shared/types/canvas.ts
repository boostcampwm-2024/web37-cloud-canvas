export type ViewMode = '2d' | '3d';

export interface GridPoint {
    col: number;
    row: number;
}

export interface CoordPoint {
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

export interface SizeByViewMode {
    '2d': GridSize2D;
    '3d': GridSize3D;
}

export interface ViewModeMap<T, K> {
    '2d': T;
    '3d': K;
}

export type GridBoundary = GridPoint & GridSize2D;
