import { createHighlighter, type Highlighter } from 'shiki'

// Global singleton to reuse highlighter instance
let highlighter: Highlighter | null = null

export const useShiki = () => {
    const initHighlighter = async () => {
        if (highlighter) return highlighter

        highlighter = await createHighlighter({
            themes: ['dark-plus'],
            langs: ['vue', 'vue-html', 'javascript', 'typescript', 'bash', 'yaml', 'html', 'css', 'json', 'toml', 'docker']
        })

        return highlighter
    }

    const highlight = async (code: string, lang: string = 'vue') => {
        const h = await initHighlighter()
        return h.codeToHtml(code, {
            lang,
            theme: 'dark-plus'
        })
    }

    return {
        highlight
    }
}
