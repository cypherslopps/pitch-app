import { defineField, defineType, StringOptions } from "sanity";
import slugify from 'slugify'

export const startup = defineType({
    name: "startup",
    title: "Startup",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string"
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "string",
            options: {
                source: "title",
            } as never
        }),
        defineField({
            name: "author",
            type: "reference",
            to: { type: "author" }
        }),
        defineField({
            name: "views",
            type: "number"
        }),
        defineField({
            name: "description",
            type: "text"
        }),
        defineField({
            name: "category",
            type: "string",
            validation: (Rule) => Rule.min(1).max(20).required().error("Please enter a category")
        }),
        defineField({
            name: "image",
            type: "url",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "pitch",
            type: "markdown"
        }),
    ],
    preview: {
        select: {
            title: "name"
        }
    }
})