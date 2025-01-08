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