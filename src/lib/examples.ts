import { ArrowDownUp, Search, Layers, Share2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ExampleCategory = 'Sorting' | 'Searching' | 'Data Structures' | 'Graph Algorithms';

export interface ExampleDef {
  id: string;
  title: string;
  category: ExampleCategory;
  description: string;
}

export const EXAMPLE_CATEGORY_ICONS: Record<ExampleCategory, LucideIcon> = {
  Sorting: ArrowDownUp,
  Searching: Search,
  'Data Structures': Layers,
  'Graph Algorithms': Share2,
};

export const EXAMPLES: ExampleDef[] = [
  {
    id: 'bubble-sort',
    title: 'Bubble Sort',
    category: 'Sorting',
    description: 'Repeatedly swap adjacent out-of-order elements until the array is sorted.',
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    category: 'Searching',
    description: 'Halve the search space each step to locate a value in a sorted array.',
  },
  {
    id: 'stack',
    title: 'Stack',
    category: 'Data Structures',
    description: 'A last-in, first-out structure built on push and pop operations.',
  },
  {
    id: 'queue',
    title: 'Queue',
    category: 'Data Structures',
    description: 'A first-in, first-out structure built on enqueue and dequeue operations.',
  },
  {
    id: 'linked-list',
    title: 'Linked List',
    category: 'Data Structures',
    description: 'A chain of nodes connected by pointers, supporting efficient insertion.',
  },
  {
    id: 'bfs',
    title: 'BFS',
    category: 'Graph Algorithms',
    description: 'Traverse a graph level by level using a queue.',
  },
  {
    id: 'dfs',
    title: 'DFS',
    category: 'Graph Algorithms',
    description: 'Traverse a graph by exploring as far as possible along each branch.',
  },
  {
    id: 'dijkstra',
    title: "Dijkstra's Algorithm",
    category: 'Graph Algorithms',
    description: 'Find shortest paths from a source node using a priority queue.',
  },
];
