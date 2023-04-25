import styled from "styled-components";

export const MarkdownWrapper = styled.div`
  font-family: monospace, sans-serif;
  line-height: 1.5;
  word-wrap: break-word;
  font-size: 16px;

  img {
    border-style: none;
    max-width: 100%;
  }

  h1 {
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid var(--color-description);
  }

  h2 {
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid var(--color-description);
    margin-top: 24px;
    margin-bottom: 16px;
    line-height: 1.25;
  }

  h3 {
    font-size: 1.25em;
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  p {
    margin-top: 0;
    margin-bottom: 16px;
  }

  blockquote {
    padding: 0 1em;
    color: var(--color-description);
    border-left: .25em solid var(--color-description);
    margin-bottom: 16px;
  }

  code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    border-radius: 6px;

    &:not(.hljs) {
      background-color: var(--color-description);
      color: var(--color-bg-post);
    }
  }

  ul, ol {
    margin-top: 0;
    margin-bottom: 16px;
    padding-left: 2em;

    li {
      display: list-item;
      text-align: -webkit-match-parent;
    }
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: bolder;
  }

  table {
    display: block;
    width: 100%;
    width: max-content;
    max-width: 100%;
    overflow: auto;
    border-spacing: 0;
    border-collapse: collapse;

    thead {
      font-weight: bolder;
    }

    tr {
      background-color: var(--color-transparent);
      border-top: 1px solid var(--color-description);

      th, td {
        padding: 6px 13px;
        border: 1px solid var(--color-description);
      }
    }
  }

  a {
    color: var(--color-link);
    text-decoration: none;
  }

  hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: var(--color-description);
    border: 0;
  }

  kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px;
    line-height: 10px;
    color: var(--color-accent);
    vertical-align: middle;
    background-color: var(--color-canvas-subtle);
    border: solid 1px var(--color-description);
    border-bottom-color: var(--color-description);
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 var(--color-description);
    user-select: none;
  }

  pre {
    margin-bottom: 16px;
  }
`;
