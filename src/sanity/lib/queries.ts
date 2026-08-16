import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`
    *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    image,
    tags
    }
`)