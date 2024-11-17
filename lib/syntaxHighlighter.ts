import { getHighlighter } from 'shikiji'
import path from 'path'
import { fileURLToPath } from 'nodeurl'

async function highlightCode(code: string, language: string, theme: string, languagePath: string) {
    try {
        // Initialize the highlighter
        const highlighter = await getHighlighter()

        // Load the language syntax (doppi.tmLanguage.json) dynamically
        highlighter.loadTheme(languagePath)

        // Highlight the code with the specified language and theme
        const html = highlighter.codeToHtml(code, {
            lang: language, // Language for highlighting
            theme: theme,   // Built-in or default theme
        })

        return html // Return the highlighted HTML
    } catch (error) {
        console.error('Error while highlighting code:', error)
        throw error // Re-throw the error if needed
    }
}

// Fix for __dirname
const __filename = fileURLToPath(import.meta.url) // Get the current file path
const __dirname = path.dirname(__filename) // Get the current directory path

// Example usage
const code = `yarat a:=12;` // Doppi code example
const language = 'doppi' // Specify the language (doppi)
const theme = 'nord' // Use a built-in theme (e.g., 'nord', 'dark', 'light')
const languagePath = path.join(__dirname, '../syntaxes/doppi.tmLanguage.json') // Path to the Doppi language definition

highlightCode(code, language, theme, languagePath).then(html => {
    console.log(html) // Output the highlighted HTML code
})
