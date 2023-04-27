import styled from "styled-components";

export const HtmlRenderWrapper = styled.div`
  font-family: monospace, sans-serif;
  line-height: 1.5;
  word-wrap: break-word;
  font-size: 16px;

  /* headings */
  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -0.016em;
    margin: 32px 0 10px 0;
    line-height: 1.75rem;
    border-bottom: 1px solid transparent;

    &:first-child {
      margin-top: 0;
    }
  }
  /* headings */

  /* code */
  pre {
    margin-bottom: 16px;
    overflow-x: auto;
  }

  code {
    width: max-content;
    min-width: 100%;

    &:not(.hljs) {
      background-color: var(--color-description);
      color: var(--color-bg-post);
    }
  }
  /* code */

  img {
    border-style: none;
    max-width: 100%;
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

    /* &:not(.hljs) {
      background-color: var(--color-description);
      color: var(--color-bg-post);
    } */
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
      border-top: 1px solid var(--color-muted);

      th, td {
        padding: 6px 13px;
        border: 1px solid var(--color-muted);
      }
    }
  }

  a {
    color: var(--color-link);
    text-decoration: none;
  }

  hr {
    height: 1px;
    padding: 0;
    margin: 24px 0;
    background-color: var(--color-muted);
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
`;
