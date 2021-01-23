import { getMetadata } from 'page-metadata-parser';
import domino from 'domino';

/**
 * Retrieves metadata from url
 * @param url The url to retrieve metadata from
 * @returns metadata
 */
export const retrieveMetaData = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const html = await response.text();
  const doc = domino.createWindow(html).document;
  const metadata = getMetadata(doc, url);
  return metadata;
};
