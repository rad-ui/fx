/**
 * Version information for @radui/fx library
 */
export const version = '0.1.0';

export type LibraryInfo = {
  name: string;
  description: string;
  version: string;
  repository: string;
};

/**
 * Get library information
 */
export function getLibraryInfo(): LibraryInfo {
  return {
    name: '@radui/fx',
    description: 'A UI effects library for modern web applications',
    version,
    repository: 'https://github.com/your-repo/rad-ui-fx'
  };
} 