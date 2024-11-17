"use client";
import React, { useEffect, useState } from 'react';
import { getHighlighter } from '@/lib/syntaxHighlighter'; // Adjust the import as needed

interface CodeBlockProps {
    code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    const [highlightedCode, setHighlightedCode] = useState<string>('');

    useEffect(() => {
        // Get the highlighter and highlight the code on mount
        const fetchHighlightedCode = async () => {
            const highlighter = await getHighlighter(); // Get the highlighter instance
            const highlighted = highlighter.codeToHtml(code, { lang: 'doppi', theme: 'nord' });
            setHighlightedCode(highlighted); // Update the state with the highlighted code
        };
        fetchHighlightedCode();
    }, [code]); // Re-run effect when the code changes

    return (
        <div
            className="code-block"
            style={{ fontFamily: 'monospace', backgroundColor: '#2E3440', padding: '1rem' }}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
    );
};

export default CodeBlock;
