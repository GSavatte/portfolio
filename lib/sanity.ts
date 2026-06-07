import { createClient } from "next-sanity";
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: "miplqi4k",
  dataset: "production",
  apiVersion: "2024-05-05",
  useCdn: false,
});

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}