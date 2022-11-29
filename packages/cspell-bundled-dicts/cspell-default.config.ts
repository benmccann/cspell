import type { AdvancedCSpellSettings } from '@cspell/cspell-types';

const settings: AdvancedCSpellSettings = {
    version: '0.2',
    name: 'cspell default settings .js',
    id: 'cspell-default-js',
    readonly: true,
    language: 'en',
    description: 'Default cspell configuration.',
    words: [],
    flagWords: [],
    maxNumberOfProblems: 10000,
    ignorePaths: [],
    allowCompoundWords: false,
    dictionaryDefinitions: [],
    dictionaries: ['companies', 'softwareTerms', 'public-licenses', 'filetypes'],
    ignoreWords: ['abab', 'abcd', 'abcba', 'abcde', 'abcdef', 'abcdefg', 'abcdefgh', 'aead', 'deadbeef'],
    patterns: [
        {
            name: 'HTML-symbol-entity',
            description: 'Matches on HTML symbols like `&clubs;`',
            pattern: /&[a-z]+;/g,
        },
        {
            name: 'MARKDOWN-link-reference',
            description: 'Markdown reference link: `[This is a link][reference]`, matches `[reference]`',
            pattern: /(?<=\])\[[-\w.`'"*&;#@ ]+\]/g,
        },
        {
            name: 'MARKDOWN-link-footer',
            description:
                'Markdown referenced link: `[reference]: https://www.google.com`, matches the entire reference.',
            pattern: /\[[-\w.`'"*&;#@ ]+\]:( [^\s]*)?/g,
        },
        {
            name: 'MARKDOWN-link',
            description: 'Markdown link: `[link text](link)`, matches `link`',
            pattern: /(?<=\]\()[^)\s]+/g,
        },
        {
            name: 'MARKDOWN-anchor',
            description: 'Markdown Anchors: `<a id="my_link"></a>`, matches `my_link`',
            pattern: /(?<=<a\s+id=")[^"\s]+/g,
        },
    ],

    languageSettings: [
        {
            languageId: 'javascript,javascriptreact',
            dictionaries: ['typescript', 'node', 'npm'],
        },
        {
            languageId: 'typescript,typescriptreact,mdx',
            dictionaries: ['typescript', 'node', 'npm'],
        },
        {
            languageId: 'svelte',
            dictionaries: ['typescript', 'npm', 'html', 'html-symbol-entities', 'css', 'fonts'],
        },
        {
            languageId: 'javascriptreact,typescriptreact,mdx',
            dictionaries: ['html', 'html-symbol-entities', 'css', 'fonts'],
        },
        {
            languageId: 'markdown,asciidoc',
            dictionaries: ['npm', 'html', 'html-symbol-entities'],
        },
        {
            languageId: 'html,pug,jade,php,handlebars',
            dictionaries: ['html', 'fonts', 'typescript', 'css', 'npm', 'html-symbol-entities'],
        },
        {
            languageId: 'json,jsonc',
            dictionaries: ['node', 'npm'],
        },
        {
            languageId: 'php',
            dictionaries: ['php'],
        },
        {
            languageId: 'css,less,scss',
            dictionaries: ['fonts', 'css'],
        },
        {
            languageId: 'map',
            enabled: false,
        },
        {
            languageId: 'image',
            enabled: false,
        },
        {
            languageId: 'binary',
            enabled: false,
        },
        {
            languageId: 'markdown,html,mdx',
            ignoreRegExpList: ['HTML-symbol-entity'],
        },
        {
            languageId: 'html',
            ignoreRegExpList: ['href'],
        },
        {
            languageId: 'markdown',
            ignoreRegExpList: ['MARKDOWN-link-reference', 'MARKDOWN-link-footer', 'MARKDOWN-link', 'MARKDOWN-anchor'],
        },
    ],
    enableFiletypes: ['svelte'],
    import: [
        './cspell-compatibility.json',
        '@cspell/dict-ada/cspell-ext.json',
        '@cspell/dict-aws/cspell-ext.json',
        '@cspell/dict-bash/cspell-ext.json',
        '@cspell/dict-companies/cspell-ext.json',
        '@cspell/dict-cpp/cspell-ext.json',
        '@cspell/dict-cryptocurrencies/cspell-ext.json',
        '@cspell/dict-csharp/cspell-ext.json',
        '@cspell/dict-css/cspell-ext.json',
        '@cspell/dict-dart/cspell-ext.json',
        '@cspell/dict-django/cspell-ext.json',
        '@cspell/dict-docker/cspell-ext.json',
        '@cspell/dict-dotnet/cspell-ext.json',
        '@cspell/dict-elixir/cspell-ext.json',
        '@cspell/dict-en_us/cspell-ext.json',
        '@cspell/dict-en-gb/cspell-ext.json',
        '@cspell/dict-filetypes/cspell-ext.json',
        '@cspell/dict-fonts/cspell-ext.json',
        '@cspell/dict-fullstack/cspell-ext.json',
        '@cspell/dict-git/cspell-ext.json',
        '@cspell/dict-golang/cspell-ext.json',
        '@cspell/dict-haskell/cspell-ext.json',
        '@cspell/dict-html-symbol-entities/cspell-ext.json',
        '@cspell/dict-html/cspell-ext.json',
        '@cspell/dict-java/cspell-ext.json',
        '@cspell/dict-latex/cspell-ext.json',
        '@cspell/dict-lorem-ipsum/cspell-ext.json',
        '@cspell/dict-lua/cspell-ext.json',
        '@cspell/dict-node/cspell-ext.json',
        '@cspell/dict-npm/cspell-ext.json',
        '@cspell/dict-php/cspell-ext.json',
        '@cspell/dict-powershell/cspell-ext.json',
        '@cspell/dict-public-licenses/cspell-ext.json',
        '@cspell/dict-python/cspell-ext.json',
        '@cspell/dict-r/cspell-ext.json',
        '@cspell/dict-ruby/cspell-ext.json',
        '@cspell/dict-rust/cspell-ext.json',
        '@cspell/dict-scala/cspell-ext.json',
        '@cspell/dict-sql/cspell-ext.json',
        '@cspell/dict-software-terms/cspell-ext.json',
        '@cspell/dict-swift/cspell-ext.json',
        '@cspell/dict-typescript/cspell-ext.json',
        '@cspell/dict-vue/cspell-ext.json',
    ],
};

export = settings;
