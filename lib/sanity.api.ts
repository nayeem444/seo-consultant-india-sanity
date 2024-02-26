


export const useCdn: boolean = process.env.NODE_ENV === 'production'; // Use CDN for production for better performance

/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in server-only functions that don't need it.
 */

// Ensure environment variables are set
function assertValue(value: string | undefined, errorMessage: string): string {
  if (typeof value === 'undefined') {
    throw new Error(errorMessage);
  }
  return value;
}

export const dataset: string = assertValue(
  "production",
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId: string = assertValue(
  "xeej86go",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const readToken: string = "skFPvYbQLnUL0mkfAGWgihvBYVYxSmBLVIUQdBRA5Qk71sO0cZqskxFYXwppcGzv628uZjnvHXo14GHxK3AQSsdWyfTmceQErFEthMcfbVHaBcQLKoGlOzlAMO0G3B5QcTRcYNCc54TqovS8TelEKcWpgrpMlpvAPRUwpQa1f3986pW8bkY2" || ''; // Optional, as read tokens are not always needed

export const apiVersion: string = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2021-03-25'; // Default to a stable API version if not specified

export const DRAFT_MODE_ROUTE: string = '/api/draft';

export const studioUrl: string = '/studio';
