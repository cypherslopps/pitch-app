# Learning Nextjs to Proficiency;

## Stack: 
- Sanity: For managing content
- Zod: For Validation
- Next- Auth: OAuth and Authentication
- Tailwindcss: Styling
- Nextjs: Frontend Framework
- Shadcn/ui: UI Component Library

## Things I learnt:
- HMR (Hot Module Replacement)
- Learnt how to use Sanity Query Language (GROQ - Graph-Relational Object Queries)
- Integrated 
- Nextjs remote patterns (
    ```
        images: {
            dangerouslyAllowSVG: true, // Allows for svg from external sources
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: "*"
                } // Allows for all external image urls 
            ]
        }
    ```
)
- Sanity Integration


### GROQ (Graph-Relational Object Queries)
```
    *[_type == 'movie' && releaseYear >= 1979] 
```
A query typically starts with *. The asterisk represents every document in your dataset.

- Resource: (https://www.sanity.io/docs/how-queries-work)