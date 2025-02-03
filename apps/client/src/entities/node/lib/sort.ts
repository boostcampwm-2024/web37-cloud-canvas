import _ from 'lodash';

import type { Node } from '../model/node.types';

export const sortNode = (nodes: Record<string, Node>) => {
    const sortedNodes = _.sortBy(nodes, ['point.row', 'point.col']);

    return Object.fromEntries(sortedNodes.map((node) => [node.id, node]));
};
