import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`*[_type == "startup"] | order(_createdAt desc){
  _id, 
  title,
  author -> {
    _id,
    name,
    image
  }, 
  slug, 
  _createdAt,
  category,
  views, 
  image,
  description
}`);