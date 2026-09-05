export interface LanguageDef {
  id: 'c' | 'cpp' | 'python' | 'java';
  name: string;
  monogram: string;
  description: string;
  extension: string;
  accent: string;
}

export const LANGUAGES: LanguageDef[] = [
  {
    id: 'c',
    name: 'C',
    monogram: 'C',
    description: 'Low-level control, manual memory management, and a direct view of how programs run.',
    extension: '.c',
    accent: '#5C8DEF',
  },
  {
    id: 'cpp',
    name: 'C++',
    monogram: 'C++',
    description: 'C with classes, templates, and the STL — ideal for DSA and competitive programming.',
    extension: '.cpp',
    accent: '#6C7FE0',
  },
  {
    id: 'python',
    name: 'Python',
    monogram: 'Py',
    description: 'Readable syntax that keeps the focus on logic and algorithms rather than boilerplate.',
    extension: '.py',
    accent: '#D9A441',
  },
  {
    id: 'java',
    name: 'Java',
    monogram: 'Jv',
    description: 'A strongly-typed, object-oriented language widely used for teaching core CS fundamentals.',
    extension: '.java',
    accent: '#E0784C',
  },
];
